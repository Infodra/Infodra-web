"use client";

import { useState, useRef } from "react";
import { Hero } from "@/components/Hero";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";

const products = [
  { value: "", label: "Select a product..." },
  { value: "ai-video-translator", label: "AI Video Translator" },
  { value: "ai-user-manual-generation", label: "AI User Manual Generation" },
  { value: "ai-document-translator", label: "AI Document Translator" },
  { value: "bizlead-database", label: "BiZlead Database" },
  { value: "all", label: "All Products / General Inquiry" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    product: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields");
      return;
    }

    setIsLoading(true);

    try {
      // Using Formspree endpoint - replace with your actual Formspree form ID
      // Get your form ID from https://formspree.io/
      const FORMSPREE_ID = "YOUR_FORMSPREE_ID"; // User will replace this

      const response = await fetch(
        `https://formspree.io/f/${FORMSPREE_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            company: formData.company,
            product: formData.product || "Not specified",
            message: formData.message,
          }),
        }
      );

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          product: "",
          message: "",
        });

        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        alert("Error sending message. Please try again.");
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
      <Hero
        title="Get In Touch"
        description="Have questions? Our team is ready to help you find the perfect AI solution for your business."
        primaryCTA={{ text: "Send Message", href: "#contact-form" }}
      />

      <section id="contact-form" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900">
                Contact Information
              </h2>
              <div className="space-y-8">
                {/* Company */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm uppercase tracking-wide text-blue-600">
                    Company
                  </h3>
                  <p className="text-gray-900 font-semibold">
                    INFODRA TECHNOLOGIES PVT LTD
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
                    href="tel:+919884053540"
                    className="text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    +91 98840 53540
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
                    <p className="font-medium mt-2 text-red-600">Sunday</p>
                    <p className="text-red-600">Closed</p>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="pt-6 border-t border-gray-200">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">50M+</div>
                      <p className="text-xs text-gray-600">Business Records</p>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">50+</div>
                      <p className="text-xs text-gray-600">Languages</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg border border-blue-200">
              <h2 className="text-2xl font-bold mb-2 text-gray-900">
                Send us a Message
              </h2>
              <p className="text-gray-600 mb-6">
                Fill out the form below and our team will get back to you within
                24 hours.
              </p>

              {submitted && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-start">
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
                    <h3 className="font-semibold">Message sent successfully!</h3>
                    <p className="text-sm">
                      Thank you for reaching out. We'll contact you soon.
                    </p>
                  </div>
                </div>
              )}

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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
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

                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>

                {/* Product Interested */}
                <div>
                  <label
                    htmlFor="product"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Product Interested
                  </label>
                  <select
                    id="product"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
                  >
                    {products.map((prod) => (
                      <option key={prod.value} value={prod.value}>
                        {prod.label}
                      </option>
                    ))}
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
                  disabled={isLoading}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
            </div>
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
