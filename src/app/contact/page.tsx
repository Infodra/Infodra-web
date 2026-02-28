"use client";

import { useState, useRef } from "react";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";

const productsAndSolutions = [
  { value: "", label: "Select a product or solution..." },
  { category: "Products", items: [
    { value: "ai-video-translator", label: "AI Video Translator" },
    { value: "ai-user-manual-generation", label: "AI User Manual Generation" },
    { value: "ai-document-translator", label: "AI Document Translator" },
    { value: "bizlead-database", label: "BiZlead Database" },
    { value: "all-products", label: "All Products / General Inquiry" },
  ]},
  { category: "Digital Solutions", items: [
    { value: "web-development", label: "Professional Website Development" },
    { value: "seo-services", label: "SEO & Google Ranking Services" },
    { value: "web-applications", label: "Custom Web Applications" },
    { value: "business-automation", label: "Business Process Automation" },
    { value: "cloud-migration", label: "Cloud Migration & Infrastructure Services" },
    { value: "support-maintenance", label: "Ongoing Support & Maintenance Services" },
    { value: "all-solutions", label: "All Digital Solutions / General Inquiry" },
  ]},
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    productOrSolution: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  // Email validation function
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Real-time email validation
    if (name === "email") {
      if (value && !validateEmail(value)) {
        setEmailError("Please enter a valid email address (e.g., user@example.com)");
      } else {
        setEmailError("");
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert("Please fill in all required fields");
      return;
    }

    // Validate email format
    if (!validateEmail(formData.email)) {
      setEmailError("Please enter a valid email address (e.g., user@example.com)");
      alert("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          productOrSolution: formData.productOrSolution,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          productOrSolution: "",
          message: "",
        });

        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        alert(data.error || "Error sending message. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert(
        "Error sending message. Please try again or contact us directly."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main>
      {/* Contact Page Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white overflow-hidden">
        {/* Decorative gradient elements */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-emerald-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse" />
        <div className="absolute -bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse" />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-emerald-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight text-white">
            Get In Touch
          </h1>
          <p className="text-lg md:text-xl mb-10 text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Have questions? Our team is ready to help you find the perfect AI solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact-form"
              className="bg-green-600 text-white px-8 py-3.5 rounded-lg font-semibold text-lg tracking-normal hover:bg-green-700 hover:shadow-2xl active:shadow-lg transition duration-200 shadow-lg"
            >
              Send Message
            </a>
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-bold mb-8 text-gray-900">
                Contact Information
              </h2>
              <div className="space-y-8">
                {/* Company Name */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm uppercase tracking-wide text-blue-600">
                    Company
                  </h3>
                  <p className="text-xl font-bold text-gray-900">
                    Infodra Technologies Private Limited
                  </p>
                </div>

                {/* Address */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm uppercase tracking-wide text-blue-600">
                    Address
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    INNOV8, 2ND FLOOR
                    <br />
                    RMZ MILLENIA BUSINESS PARK
                    <br />
                    CAMPUS 1A
                    <br />
                    NO.143, DR.M.G.R.ROAD
                    <br />
                    PERUNGUDI, CHENNAI-600096
                  </p>
                </div>

                {/* Phone */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm uppercase tracking-wide text-blue-600">
                    Phone
                  </h3>
                  <a
                    href="tel:+918148146785"
                    className="text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    +91 81481 46785
                  </a>
                </div>

                {/* Email */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm uppercase tracking-wide text-blue-600">
                    Email
                  </h3>
                  <a
                    href="mailto:business@infodratechnologies.com"
                    className="text-blue-600 hover:text-blue-700 break-all"
                  >
                    business@infodratechnologies.com
                  </a>
                </div>

                {/* WhatsApp CTA */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide text-blue-600">
                    Quick Contact
                  </h3>
                  <WhatsAppCTA
                    productName="Infodra AI Solutions"
                    variant="default"
                    size="md"
                    fullWidth
                  />
                </div>

                {/* Business Hours */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm uppercase tracking-wide text-blue-600">
                    Business Hours
                  </h3>
                  <div className="text-gray-600 space-y-1">
                    <p className="font-medium">Monday - Friday</p>
                    <p>9:00 AM - 6:00 PM IST</p>
                    <p className="font-medium mt-2">Saturday</p>
                    <p>10:00 AM - 4:00 PM IST</p>
                    <p className="font-medium mt-2"><span className="text-red-600">Sunday - </span><span className="text-red-600">Closed</span></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg border border-blue-200">
              <h2 className="text-2xl font-bold mb-2 text-gray-900">
                Send us a Message
              </h2>
              <p className="text-gray-600 mb-6">
                Fill out the form below and our team will get back to you within
                24 hours.
              </p>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@company.com"
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition ${
                      emailError
                        ? "border-red-500 focus:ring-red-500 bg-red-50"
                        : "border-gray-300 focus:ring-blue-500"
                    }`}
                  />
                  {emailError && (
                    <p className="text-red-600 text-sm mt-1 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18.101 12.93a1 1 0 00-1.414-1.414L10 15.586 7.707 13.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l8-8z" />
                      </svg>
                      {emailError}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>

                {/* Products / Digital Solutions */}
                <div>
                  <label
                    htmlFor="productOrSolution"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Products / Digital Solutions
                  </label>
                  <select
                    id="productOrSolution"
                    name="productOrSolution"
                    value={formData.productOrSolution}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
                  >
                    <option value="">Select a product or solution...</option>
                    <optgroup label="Products">
                      <option value="ai-video-translator">AI Video Translator</option>
                      <option value="ai-user-manual-generation">AI User Manual Generation</option>
                      <option value="ai-document-translator">AI Document Translator</option>
                      <option value="bizlead-database">BiZlead Database</option>
                      <option value="all-products">All Products / General Inquiry</option>
                    </optgroup>
                    <optgroup label="Digital Solutions">
                      <option value="web-development">Professional Website Development</option>
                      <option value="seo-services">SEO & Google Ranking Services</option>
                      <option value="web-applications">Custom Web Applications</option>
                      <option value="business-automation">Business Process Automation</option>
                      <option value="cloud-migration">Cloud Migration & Infrastructure Services</option>
                      <option value="support-maintenance">Ongoing Support & Maintenance Services</option>
                      <option value="all-solutions">All Digital Solutions / General Inquiry</option>
                    </optgroup>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your inquiry, requirements, or how we can help you..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading || !!emailError}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition font-semibold text-lg tracking-wider flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  <span className="text-red-500">*</span> Required fields
                </p>
              </form>

              {submitted && (
                <div className="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-start">
                  <svg
                    className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-lg">🎉 Message Received Successfully!</h3>
                    <p className="text-sm mt-1">
                      Thank you, <strong>{formData.name}</strong>! We've received your message and saved it to our system.
                    </p>
                    <p className="text-sm mt-2">
                      Our team will review your inquiry and get back to you at <strong>{formData.email}</strong> within <strong>24 hours</strong>.
                    </p>
                    <p className="text-sm mt-2 font-semibold text-green-800">
                      We appreciate your interest in working with us! 
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Find Us on the Map
          </h2>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.823456789!2d80.2444165!3d12.9710945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525db836ad22c5%3A0xa093bcdbfcbeb1c!2sInfodra%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Infodra Technologies Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "How long does it take to get a response?",
                a: "We aim to respond to all inquiries within 24 hours during business hours. For urgent matters, please call us directly.",
              },
              {
                q: "Which products are best for my business?",
                a: "Our team will analyze your specific needs and recommend the most suitable products. Contact us for a personalized consultation.",
              },
              {
                q: "Do you offer trial periods or demos?",
                a: "Yes! We offer free demos and trial periods for all our products. Contact us to schedule a demo tailored to your needs.",
              },
              {
                q: "What are your payment terms?",
                a: "We offer flexible pricing plans with monthly and annual billing options. Contact our sales team for detailed pricing information.",
              },
            ].map((item, index) => (
              <details
                key={index}
                className="group border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition bg-white"
              >
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-gray-900">
                  {item.q}
                  <span className="transition group-open:rotate-180">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
