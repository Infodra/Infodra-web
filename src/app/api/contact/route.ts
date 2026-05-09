import { NextRequest, NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";
import type { Collection } from "mongodb";

interface ContactMessage {
  name: string;
  email: string;
  phone: string;
  company?: string;
  productOrSolution?: string;
  message: string;
  createdAt: Date;
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePhone(phone: string): boolean {
  const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
  return phoneRegex.test(phone.replace(/\s/g, ""));
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, productOrSolution, message } = body;

    // Validate required fields
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { error: "Name is required and must be a non-empty string" },
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

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json(
        { error: "Message is required and must be a non-empty string" },
        { status: 400 }
      );
    }

    // Connect to database
    const db = await getDatabase();
    const contactCollection: Collection<ContactMessage> = db.collection(
      "message"
    );

    // Create message object
    const contactMessage: ContactMessage = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      ...(company && { company: company.trim() }),
      ...(productOrSolution && { productOrSolution: productOrSolution.trim() }),
      message: message.trim(),
      createdAt: new Date(),
    };

    // Insert into database
    const result = await contactCollection.insertOne(contactMessage);

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been received. We will contact you soon.",
        id: result.insertedId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process contact form. Please try again later." },
      { status: 500 }
    );
  }
}
