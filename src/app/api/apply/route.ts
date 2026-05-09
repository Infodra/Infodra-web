import { NextRequest, NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";
import cloudinary from "@/lib/cloudinary";
import type { Collection } from "mongodb";

interface Candidate {
  fullName: string;
  email: string;
  phone: string;
  skills: string;
  experienceYears: number;
  resumeUrl: string;
  createdAt: Date;
}

const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB (matches form limit)
const ALLOWED_EXTENSIONS = ["pdf", "doc", "docx"];

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePhone(phone: string): boolean {
  const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
  return phoneRegex.test(phone.replace(/\s/g, ""));
}

function getFileExtension(filename: string): string {
  return filename.split(".").pop()?.toLowerCase() || "";
}

async function uploadResumeToCloudinary(
  file: Buffer,
  filename: string
): Promise<string> {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        resource_type: "raw",
        folder: "resumes",
        public_id: `${Date.now()}-${filename.replace(/\s+/g, "-")}`,
        overwrite: true,
      },
      (error, result) => {
        if (error) {
          reject(new Error(`Cloudinary upload failed: ${error.message}`));
        } else if (result?.secure_url) {
          resolve(result.secure_url);
        } else {
          reject(new Error("Cloudinary upload failed: No secure URL returned"));
        }
      }
    );

    stream.end(file);
  });
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    // Extract form fields
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const skills = formData.get("skills") as string;
    const experienceYearsStr = formData.get("experienceYears") as string;
    const resumeFile = formData.get("resume") as File | null;

    // Validate required fields
    if (!fullName || typeof fullName !== "string" || fullName.trim().length === 0) {
      return NextResponse.json(
        { error: "Full name is required" },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !validateEmail(email)) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== "string" || !validatePhone(phone)) {
      return NextResponse.json(
        { error: "Valid phone number is required" },
        { status: 400 }
      );
    }

    if (!skills || typeof skills !== "string" || skills.trim().length === 0) {
      return NextResponse.json(
        { error: "Skills are required" },
        { status: 400 }
      );
    }

    if (!experienceYearsStr || isNaN(Number(experienceYearsStr))) {
      return NextResponse.json(
        { error: "Valid experience years is required" },
        { status: 400 }
      );
    }

    const experienceYears = Number(experienceYearsStr);
    if (experienceYears < 0 || experienceYears > 70) {
      return NextResponse.json(
        { error: "Experience years must be between 0 and 70" },
        { status: 400 }
      );
    }

    // Validate resume file
    if (!resumeFile) {
      return NextResponse.json(
        { error: "Resume file is required" },
        { status: 400 }
      );
    }

    if (!ALLOWED_FILE_TYPES.includes(resumeFile.type)) {
      return NextResponse.json(
        { error: "Only PDF and DOC/DOCX files are allowed" },
        { status: 400 }
      );
    }

    const fileExtension = getFileExtension(resumeFile.name);
    if (!ALLOWED_EXTENSIONS.includes(fileExtension)) {
      return NextResponse.json(
        { error: "Invalid file extension. Only pdf, doc, docx are allowed" },
        { status: 400 }
      );
    }

    if (resumeFile.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        {
          error: `File size exceeds 2MB limit. Current size: ${(resumeFile.size / 1024 / 1024).toFixed(2)}MB`,
        },
        { status: 400 }
      );
    }

    // Convert file to buffer
    const fileBuffer = Buffer.from(await resumeFile.arrayBuffer());

    // Upload resume to Cloudinary
    let resumeUrl: string;
    try {
      resumeUrl = await uploadResumeToCloudinary(fileBuffer, resumeFile.name);
    } catch (error) {
      console.error("Resume upload error:", error);
      return NextResponse.json(
        { error: "Failed to upload resume. Please try again." },
        { status: 500 }
      );
    }

    // Connect to database
    let db;
    try {
      console.log("[Career API] Connecting to MongoDB...");
      db = await getDatabase();
      console.log("[Career API] MongoDB connected successfully");
    } catch (dbError) {
      console.error("[Career API] Database connection error:", dbError);
      const errorMsg = dbError instanceof Error ? dbError.message : String(dbError);
      
      // Log detailed connection error
      if (errorMsg.includes("ECONNREFUSED")) {
        console.error("[Career API] Connection refused - MongoDB server may be unreachable");
      } else if (errorMsg.includes("ENOTFOUND") || errorMsg.includes("querySrv")) {
        console.error("[Career API] DNS resolution failed - cannot reach MongoDB Atlas");
      } else if (errorMsg.includes("EHOSTUNREACH")) {
        console.error("[Career API] Host unreachable - check network/firewall");
      } else if (errorMsg.includes("authentication failed")) {
        console.error("[Career API] Authentication failed - check MongoDB credentials");
      }
      
      return NextResponse.json(
        { 
          error: "Database connection failed. Please ensure MongoDB Atlas cluster is accessible and credentials are correct.",
          details: process.env.NODE_ENV === "development" ? errorMsg : undefined,
        },
        { status: 503 }
      );
    }

    const candidatesCollection: Collection<Candidate> = db.collection(
      "candidates"
    );

    // Create candidate object
    const candidate: Candidate = {
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      skills: skills.trim(),
      experienceYears,
      resumeUrl,
      createdAt: new Date(),
    };

    // Insert into database
    let result;
    try {
      console.log("[Career API] Inserting candidate record...");
      result = await candidatesCollection.insertOne(candidate);
      console.log("[Career API] Candidate record inserted successfully");
    } catch (dbInsertError) {
      console.error("[Career API] Database insert error:", dbInsertError);
      return NextResponse.json(
        { error: "Failed to save application. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Your application has been received. We will review your resume and contact you soon.",
        id: result.insertedId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[Career API] Unexpected error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      {
        error: `Failed to process your application. ${errorMessage}`,
      },
      { status: 500 }
    );
  }
}
