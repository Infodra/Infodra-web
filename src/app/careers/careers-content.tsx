"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  CheckCircle,
  AlertCircle,
  Upload,
  Brain,
  Code2,
  Cpu,
  Zap,
  TrendingUp,
  Briefcase,
  ArrowRight,
  Loader,
} from "lucide-react";

// Categorized roles for dropdown
const roleCategories = {
  "IT & Digital": [
    "Full Stack Developer",
    "Frontend Developer (React / Next.js)",
    "Backend Developer (Node.js / Python)",
    "DevOps Engineer",
    "Cloud Engineer (AWS / Azure / GCP)",
    "UI/UX Designer",
    "Mobile App Developer",
    "SEO Specialist",
    "QA Engineer",
    "Business Analyst",
  ],
  "AI & ML": [
    "AI / ML Engineer",
    "Data Scientist",
    "Data Analyst",
    "NLP Engineer",
    "Computer Vision Engineer",
    "Prompt Engineer",
  ],
  "Mechanical & Engineering": [
    "Design Engineer (CAD)",
    "CAE Analyst",
    "Automotive Engineer",
    "R&D Engineer",
    "Product Engineer",
  ],
  "Business & Operations": [
    "Business Development Executive",
    "Project Manager",
    "Technical Recruiter",
    "Operations Executive",
  ],
};

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  primaryDomain: string;
  role: string;
  experienceYears: string;
  location: string;
  skills: string;
  employmentStatus: string;
  preferredWorkType: string;
  noticePeriod: string;
  expectedSalary: string;
  linkedin: string;
  resume: File | null;
  consent: boolean;
}

interface FormErrors {
  [key: string]: string;
}

export default function CareersPageContent() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    primaryDomain: "",
    role: "",
    experienceYears: "",
    location: "",
    skills: "",
    employmentStatus: "",
    preferredWorkType: "",
    noticePeriod: "",
    expectedSalary: "",
    linkedin: "",
    resume: null,
    consent: false,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error" | "loading"
  >("idle");
  const [resumeFileName, setResumeFileName] = useState<string>("");

  // Form validation
  const validateForm = (): boolean => {
    const errors: FormErrors = {};

    // Full Name validation
    if (!formData.fullName.trim()) {
      errors.fullName = "Full name is required";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    // Phone validation
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^[\d+\-\s()]+$/.test(formData.phone) || formData.phone.length < 10) {
      errors.phone = "Please enter a valid phone number";
    }

    // Primary Domain validation
    if (!formData.primaryDomain) {
      errors.primaryDomain = "Please select a primary domain";
    }

    // Role validation
    if (!formData.role) {
      errors.role = "Please select a role";
    }

    // Experience validation
    if (!formData.experienceYears) {
      errors.experienceYears = "Years of experience is required";
    } else if (parseInt(formData.experienceYears) < 0) {
      errors.experienceYears = "Years of experience cannot be negative";
    }

    // Location validation
    if (!formData.location.trim()) {
      errors.location = "Current location is required";
    }

    // Skills validation
    if (!formData.skills.trim()) {
      errors.skills = "Please list your technical skills";
    }

    // Employment Status validation
    if (!formData.employmentStatus) {
      errors.employmentStatus = "Please select employment status";
    }

    // Preferred Work Type validation
    if (!formData.preferredWorkType) {
      errors.preferredWorkType = "Please select preferred work type";
    }

    // Notice Period validation
    if (!formData.noticePeriod) {
      errors.noticePeriod = "Please select notice period";
    }

    // Expected Salary validation (optional, but if provided, should be positive)
    if (formData.expectedSalary && parseInt(formData.expectedSalary) <= 0) {
      errors.expectedSalary = "Expected salary must be a positive number";
    }

    // Resume validation
    if (!formData.resume) {
      errors.resume = "Resume upload is required";
    } else {
      const fileSize = formData.resume.size / (1024 * 1024); // Convert to MB
      if (fileSize > 5) {
        errors.resume = "File size must be less than 5MB";
      }

      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowedTypes.includes(formData.resume.type)) {
        errors.resume = "Only PDF, DOC, and DOCX files are allowed";
      }
    }

    // Consent validation
    if (!formData.consent) {
      errors.consent = "You must agree to the data storage consent";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    // Clear error for this field on change
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Handle file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        resume: file,
      }));
      setResumeFileName(file.name);

      // Clear error for resume
      if (formErrors.resume) {
        setFormErrors((prev) => ({
          ...prev,
          resume: "",
        }));
      }
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (!formData.resume) {
      setFormErrors({ resume: "Resume file is required" });
      return;
    }

    // Set loading state
    setSubmitStatus("loading");

    try {
      // Create FormData object for multipart/form-data submission
      const submitFormData = new FormData();
      submitFormData.append("fullName", formData.fullName);
      submitFormData.append("email", formData.email);
      submitFormData.append("phone", formData.phone);
      submitFormData.append("skills", formData.skills);
      submitFormData.append("experienceYears", formData.experienceYears);
      submitFormData.append("resume", formData.resume);

      // Send to API endpoint
      const response = await fetch("/api/apply", {
        method: "POST",
        body: submitFormData,
      });

      const data = await response.json();

      if (response.ok) {
        // Show success message
        setSubmitStatus("success");

        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({
            fullName: "",
            email: "",
            phone: "",
            primaryDomain: "",
            role: "",
            experienceYears: "",
            location: "",
            skills: "",
            employmentStatus: "",
            preferredWorkType: "",
            noticePeriod: "",
            expectedSalary: "",
            linkedin: "",
            resume: null,
            consent: false,
          });
          setResumeFileName("");
          setSubmitStatus("idle");
        }, 3000);
      } else {
        setSubmitStatus("error");
        setFormErrors({ submit: data.error || "Failed to submit application" });
        setTimeout(() => {
          setSubmitStatus("idle");
        }, 3000);
      }
    } catch (error) {
      console.error("Application submission error:", error);
      setSubmitStatus("error");
      setFormErrors({ submit: "Failed to submit application. Please try again." });
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* 1️⃣ HERO SECTION */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-gray-50 pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden">
        {/* Decorative gradient elements with animations */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-slow-pulse" />
        <div className="absolute -bottom-20 right-20 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-slow-pulse" />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-10" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Build Your Career with an<br className="hidden sm:inline" /> <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">Engineering-Led AI</span> Company
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Join a team backed by enterprise engineering experience and<br className="hidden sm:inline" />
            AI-driven innovation across digital, mechanical, and technology domains.
          </p>
          <a
            href="#positions"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg tracking-widest hover:bg-blue-700 transition transform hover:scale-105"
          >
            Explore Opportunities
          </a>
        </div>
      </section>

      {/* 2️⃣ WHY JOIN US SECTION */}
      <section className="py-20 md:py-32 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Join Infodra?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We foster a performance-driven environment where engineering discipline, innovation, and continuous learning shape professional growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Work on AI-Powered Digital Projects",
                desc: "Contribute to enterprise-grade AI and digital transformation initiatives built on structured engineering standards.",
              },
              {
                title: "Opportunity to Grow with Emerging Technologies",
                desc: "Expand your expertise in AI, cloud, automation, and advanced engineering technologies within a dynamic innovation-driven environment.",
              },
              {
                title: "Collaborative and Innovation-Driven Environment",
                desc: "Work alongside multidisciplinary professionals solving real-world engineering and technology challenges.",
              },
              {
                title: "Exposure to Enterprise and Startup Clients",
                desc: "Engage with enterprise and high-growth organizations across multiple industries and technology ecosystems.",
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="flex gap-4 p-6 bg-gradient-to-br from-blue-50 to-gray-50 rounded-xl border border-blue-100 hover:shadow-lg transition"
              >
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3️⃣ OPEN ROLES SECTION */}
      <section id="positions" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Current Opportunities & Talent Network
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We regularly post active openings on our LinkedIn page. Explore current opportunities there or submit your profile below to join our structured talent network for future roles.
            </p>
          </div>

          {/* Domains Section */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <p className="text-base font-semibold text-gray-900 text-xl">
                We actively hire across domains such as:
              </p>
            </div>
            
            {/* Domain Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {/* AI & Machine Learning */}
              <div className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-400 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-600 transition-colors">
                    <Brain className="w-6 h-6 text-blue-600 group-hover:text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-lg">AI & Machine Learning</h3>
                    <p className="text-sm text-gray-600 mt-1">Building intelligent solutions</p>
                  </div>
                </div>
              </div>

              {/* Full Stack & Web Development */}
              <div className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-400 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-100 rounded-lg group-hover:bg-green-600 transition-colors">
                    <Code2 className="w-6 h-6 text-green-600 group-hover:text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-lg">Full Stack & Web Development</h3>
                    <p className="text-sm text-gray-600 mt-1">Modern web applications</p>
                  </div>
                </div>
              </div>

              {/* Mechanical CAD / CAE Engineering */}
              <div className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-400 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-100 rounded-lg group-hover:bg-purple-600 transition-colors">
                    <Cpu className="w-6 h-6 text-purple-600 group-hover:text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-lg">Mechanical CAD / CAE Engineering</h3>
                    <p className="text-sm text-gray-600 mt-1">Advanced design & analysis</p>
                  </div>
                </div>
              </div>

              {/* SEO & Digital Growth */}
              <div className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-400 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-100 rounded-lg group-hover:bg-orange-600 transition-colors">
                    <TrendingUp className="w-6 h-6 text-orange-600 group-hover:text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-lg">SEO & Digital Growth</h3>
                    <p className="text-sm text-gray-600 mt-1">Scaling digital presence</p>
                  </div>
                </div>
              </div>

              {/* Cloud & DevOps */}
              <div className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-400 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-100 rounded-lg group-hover:bg-cyan-600 transition-colors">
                    <Zap className="w-6 h-6 text-cyan-600 group-hover:text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-lg">Cloud & DevOps</h3>
                    <p className="text-sm text-gray-600 mt-1">Scalable infrastructure</p>
                  </div>
                </div>
              </div>

              {/* Business Development & Strategy */}
              <div className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-400 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-100 rounded-lg group-hover:bg-indigo-600 transition-colors">
                    <Briefcase className="w-6 h-6 text-indigo-600 group-hover:text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-lg">Business Development & Strategy</h3>
                    <p className="text-sm text-gray-600 mt-1">Growth & partnerships</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 border-t border-gray-200">
            <a
              href="https://www.linkedin.com/company/109277634/admin/dashboard/"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105 whitespace-nowrap shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              View Active Openings on LinkedIn
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#apply"
              className="group px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition whitespace-nowrap flex items-center gap-2"
            >
              Submit Your Profile
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* 4️⃣ APPLICATION FORM SECTION */}
      <section id="apply" className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm text-gray-500 px-4 py-3 bg-blue-50 rounded-lg border border-blue-100 inline-block max-w-2xl mb-8">
              Applications may be evaluated using structured and AI-assisted screening processes to ensure efficient, fair, and transparent talent matching.
            </p>
          </div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Submit Your Application
            </h2>
            <p className="text-lg text-gray-600">
              Tell us about yourself and why you'd be a great fit for Infodra.
            </p>
          </div>

          {submitStatus === "success" && (
            <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-xl flex gap-4">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-green-900 mb-2">
                  Application Submitted Successfully!
                </h3>
                <p className="text-green-700">
                  Thank you for applying. Our team will review your profile and
                  contact you if suitable opportunities arise.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* ꜛ SECTION 1: CONTACT INFORMATION */}
            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      formErrors.fullName
                        ? "border-red-500 bg-red-50"
                        : "border-gray-300 bg-white"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  {formErrors.fullName && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" /> {formErrors.fullName}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      formErrors.email
                        ? "border-red-500 bg-red-50"
                        : "border-gray-300 bg-white"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  {formErrors.email && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" /> {formErrors.email}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 XXXXXXXXXX"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      formErrors.phone
                        ? "border-red-500 bg-red-50"
                        : "border-gray-300 bg-white"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  {formErrors.phone && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" /> {formErrors.phone}
                    </p>
                  )}
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Current Location <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="City, Country"
                      className={`w-full pl-12 pr-4 py-3 rounded-lg border ${
                        formErrors.location
                          ? "border-red-500 bg-red-50"
                          : "border-gray-300 bg-white"
                      } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                  </div>
                  {formErrors.location && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" /> {formErrors.location}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* ꜛ SECTION 2: PROFESSIONAL INFORMATION */}
            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-6">
                Professional Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Primary Domain */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Primary Domain <span className="text-red-600">*</span>
                  </label>
                  <select
                    name="primaryDomain"
                    value={formData.primaryDomain}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      formErrors.primaryDomain
                        ? "border-red-500 bg-red-50"
                        : "border-gray-300 bg-white"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  >
                    <option value="">Select a domain</option>
                    <option value="AI / ML">AI / ML</option>
                    <option value="Full Stack Development">Full Stack Development</option>
                    <option value="Frontend Development">Frontend Development</option>
                    <option value="Backend Development">Backend Development</option>
                    <option value="DevOps / Cloud">DevOps / Cloud</option>
                    <option value="SEO / Digital Marketing">SEO / Digital Marketing</option>
                    <option value="Mechanical CAD">Mechanical CAD</option>
                    <option value="CAE / Analysis">CAE / Analysis</option>
                    <option value="Automotive Engineering">Automotive Engineering</option>
                    <option value="Business Development">Business Development</option>
                    <option value="Other">Other</option>
                  </select>
                  {formErrors.primaryDomain && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" /> {formErrors.primaryDomain}
                    </p>
                  )}
                </div>

                {/* Role Applying For */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Role Applying For <span className="text-red-600">*</span>
                  </label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      formErrors.role
                        ? "border-red-500 bg-red-50"
                        : "border-gray-300 bg-white"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  >
                    <option value="">Select a role</option>
                    {Object.entries(roleCategories).map(([category, roles]) => (
                      <optgroup key={category} label={category}>
                        {roles.map((role) => (
                          <option key={role} value={role}>
                            {role}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                  {formErrors.role && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" /> {formErrors.role}
                    </p>
                  )}
                </div>

                {/* Years of Experience */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Years of Experience <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="number"
                    name="experienceYears"
                    value={formData.experienceYears}
                    onChange={handleInputChange}
                    placeholder="0"
                    min="0"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      formErrors.experienceYears
                        ? "border-red-500 bg-red-50"
                        : "border-gray-300 bg-white"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  {formErrors.experienceYears && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" /> {formErrors.experienceYears}
                    </p>
                  )}
                </div>

                {/* Technical Skills */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Technical Skills <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="skills"
                    value={formData.skills}
                    onChange={handleInputChange}
                    placeholder="React, Node.js, Python, CATIA V5"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      formErrors.skills
                        ? "border-red-500 bg-red-50"
                        : "border-gray-300 bg-white"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Enter comma-separated skills (e.g., React, Python, CAD)
                  </p>
                  {formErrors.skills && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" /> {formErrors.skills}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* ꜛ SECTION 3: WORK PREFERENCES */}
            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-6">
                Work Preferences
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Current Employment Status */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Current Employment Status <span className="text-red-600">*</span>
                  </label>
                  <select
                    name="employmentStatus"
                    value={formData.employmentStatus}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      formErrors.employmentStatus
                        ? "border-red-500 bg-red-50"
                        : "border-gray-300 bg-white"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  >
                    <option value="">Select employment status</option>
                    <option value="Actively Looking">Actively Looking</option>
                    <option value="Open to Opportunities">Open to Opportunities</option>
                    <option value="Not Actively Looking">Not Actively Looking</option>
                    <option value="Freelancer / Contract">Freelancer / Contract</option>
                  </select>
                  {formErrors.employmentStatus && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" /> {formErrors.employmentStatus}
                    </p>
                  )}
                </div>

                {/* Preferred Work Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Preferred Work Type <span className="text-red-600">*</span>
                  </label>
                  <select
                    name="preferredWorkType"
                    value={formData.preferredWorkType}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      formErrors.preferredWorkType
                        ? "border-red-500 bg-red-50"
                        : "border-gray-300 bg-white"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  >
                    <option value="">Select work type</option>
                    <option value="Full-Time">Full-Time</option>
                    <option value="Contract">Contract</option>
                    <option value="Remote">Remote</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="On-Site">On-Site</option>
                  </select>
                  {formErrors.preferredWorkType && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" /> {formErrors.preferredWorkType}
                    </p>
                  )}
                </div>

                {/* Notice Period */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Notice Period <span className="text-red-600">*</span>
                  </label>
                  <select
                    name="noticePeriod"
                    value={formData.noticePeriod}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      formErrors.noticePeriod
                        ? "border-red-500 bg-red-50"
                        : "border-gray-300 bg-white"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  >
                    <option value="">Select notice period</option>
                    <option value="Immediate">Immediate</option>
                    <option value="15 Days">15 Days</option>
                    <option value="30 Days">30 Days</option>
                    <option value="60+ Days">60+ Days</option>
                  </select>
                  {formErrors.noticePeriod && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" /> {formErrors.noticePeriod}
                    </p>
                  )}
                </div>

                {/* Expected Annual Salary (Optional) */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Expected Annual Salary (CTC) <span className="text-gray-500">(Optional)</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-3.5 text-gray-500 font-semibold">₹</span>
                    <input
                      type="number"
                      name="expectedSalary"
                      value={formData.expectedSalary}
                      onChange={handleInputChange}
                      placeholder="In INR (e.g., 500000)"
                      min="0"
                      className={`w-full pl-8 pr-4 py-3 rounded-lg border ${
                        formErrors.expectedSalary
                          ? "border-red-500 bg-red-50"
                          : "border-gray-300 bg-white"
                      } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                  </div>
                  {formErrors.expectedSalary && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" /> {formErrors.expectedSalary}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* ꜛ SECTION 4: ADDITIONAL INFORMATION */}
            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-6">
                Additional Information
              </h3>

              {/* LinkedIn Profile */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  LinkedIn Profile <span className="text-gray-500">(Optional)</span>
                </label>
                <input
                  type="url"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleInputChange}
                  placeholder="https://linkedin.com/in/your-profile"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* ꜛ SECTION 5: RESUME & CONSENT */}
            <div className="pb-8">
              {/* Resume Upload */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Resume <span className="text-red-600">*</span>
                  <span className="text-gray-500 font-normal text-xs ml-2">
                    (PDF, DOC, DOCX - Max 5MB)
                  </span>
                </label>
                <div
                  className={`relative border-2 border-dashed rounded-lg p-8 text-center transition ${
                    formErrors.resume
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300 bg-gray-50 hover:border-blue-500"
                  }`}
                >
                  <Upload className="mx-auto w-8 h-8 text-gray-400 mb-2" />
                  <p className="text-sm font-semibold text-gray-900 mb-1">
                    Drop your resume here or click to browse
                  </p>
                  <p className="text-xs text-gray-600 mb-4">
                    Only PDF, DOC, and DOCX files up to 5MB
                  </p>
                  <input
                    type="file"
                    name="resume"
                    onChange={handleFileUpload}
                    accept=".pdf,.doc,.docx"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <button
                    type="button"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
                  >
                    Choose File
                  </button>
                  {resumeFileName && (
                    <p className="mt-3 text-sm text-green-600">
                      ✓ {resumeFileName}
                    </p>
                  )}
                </div>
                {formErrors.resume && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" /> {formErrors.resume}
                  </p>
                )}
              </div>

              {/* Consent Checkbox */}
              <div className="flex gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <input
                  type="checkbox"
                  name="consent"
                  id="consent"
                  checked={formData.consent}
                  onChange={handleInputChange}
                  className={`w-5 h-5 mt-0.5 cursor-pointer ${
                    formErrors.consent ? "accent-red-600" : "accent-blue-600"
                  }`}
                />
                <div className="flex-1">
                  <label htmlFor="consent" className="text-sm text-gray-900 cursor-pointer">
                    I agree to allow Infodra Technologies to store my data for
                    recruitment purposes. <span className="text-red-600">*</span>
                  </label>
                  {formErrors.consent && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" /> {formErrors.consent}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitStatus === "success"}
              className={`w-full py-4 rounded-lg font-semibold text-lg transition transform hover:scale-105 flex items-center justify-center gap-2 ${
                submitStatus === "success"
                  ? "bg-green-600 text-white hover:bg-green-600 hover:scale-100"
                  : submitStatus === "error"
                  ? "bg-red-600 text-white hover:bg-red-700"
                  : "bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              }`}
            >
              {submitStatus === "success" ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  <span>Successfully Submitted!</span>
                </>
              ) : submitStatus === "error" ? (
                <>
                  <AlertCircle className="w-5 h-5" />
                  <span>Submission Failed</span>
                </>
              ) : (
                <>
                  {submitStatus === "idle" ? "Submit Application" : "Submitting..."}
                  {submitStatus !== "idle" && <Loader className="w-5 h-5 animate-spin" />}
                </>
              )}
            </button>

            {/* Success Message */}
            {submitStatus === "success" && (
              <div className="mt-6 p-4 bg-green-50 border-2 border-green-500 rounded-lg flex gap-3 items-start">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-green-900">Application Submitted Successfully!</p>
                  <p className="text-sm text-green-700 mt-1">
                    Thank you for applying. We have received your application and will review it shortly. You will hear from us soon via email.
                  </p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === "error" && formErrors.submit && (
              <div className="mt-6 p-4 bg-red-50 border-2 border-red-500 rounded-lg flex gap-3 items-start">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-red-900">Submission Failed</p>
                  <p className="text-sm text-red-700 mt-1">{formErrors.submit}</p>
                </div>
              </div>
            )}
          </form>

          {/* Privacy Notice */}
          <p className="mt-8 text-center text-sm text-gray-500">
            We respect your privacy. Your information will only be used for
            recruitment purposes.
          </p>
          <p className="mt-6 text-center text-xs text-gray-400">
            Infodra Technologies is an equal opportunity organization committed to diversity, professional growth, and technical excellence.
          </p>
        </div>
      </section>
    </main>
  );
}
