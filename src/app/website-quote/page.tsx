import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Website Development Pricing & Packages | Infodra Technologies",
  description:
    "Explore professional website development packages and pricing from Infodra Technologies. Get responsive, SEO-ready business websites tailored to your needs.",
  keywords: [
    "website development pricing",
    "website packages",
    "responsive website design",
    "SEO-ready websites",
    "business websites",
    "Infodra Technologies",
  ],
  openGraph: {
    title: "Website Development Pricing & Packages | Infodra Technologies",
    description:
      "Professional website development packages starting from ₹25,000. Mobile responsive, SEO-ready, and custom designs for your business.",
    url: "https://infodra.com/website-quote",
    type: "website",
  },
};

export default function WebsiteQuote() {
  const packages = [
    {
      name: "Starter Website",
      price: "₹25,000",
      features: ["5–7 pages", "Mobile responsive", "Basic SEO setup", "Contact form"],
      highlight: false,
    },
    {
      name: "Professional Website",
      price: "₹40,000",
      features: [
        "Custom UI/UX",
        "CMS integration",
        "SEO-ready structure",
        "Performance optimized",
      ],
      highlight: true,
    },
    {
      name: "Advanced / Custom Website",
      price: "₹90,000",
      features: [
        "Dynamic features",
        "Integrations",
        "E-commerce or portal systems",
        "Full customization",
      ],
      highlight: false,
    },
  ];

  const whyChoose = [
    "Business-focused design",
    "SEO-ready structure",
    "Fast loading performance",
    "Scalable development",
    "Post-launch support",
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-gray-50 pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Professional Website Packages for Every Business
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Scalable, modern, and SEO-ready websites designed to help your business grow online and convert visitors into customers.
            </p>
            <div className="flex justify-center">
              <a
                href="https://wa.me/918148146785?text=Hi%20Infodra%20Technologies%2C%20I%20need%20a%20website%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" /> Chat with us on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages Section */}
      <section className="py-20 md:py-32 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Website Development Pricing
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Starting From
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-2xl border p-8 transition-all ${
                  pkg.highlight
                    ? "bg-gradient-to-br from-blue-50 to-white border-blue-300 shadow-2xl scale-105"
                    : "bg-white border-gray-200 shadow-sm hover:shadow-lg"
                }`}
              >
                {pkg.highlight && (
                  <div className="mb-4 inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {pkg.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-blue-600">
                    {pkg.price}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/918148146785?text=Hi%20Infodra%20Technologies%2C%20I%20am%20interested%20in%20the%20website%20package."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2 ${
                    pkg.highlight
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  Get Quote <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 text-lg">
              Final pricing depends on scope and features.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Infodra Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Infodra?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver professional websites that drive business results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoose.map((reason, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all">
                <div className="mb-4 p-4 w-fit bg-blue-50 rounded-xl">
                  <CheckCircle2 className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {reason}
                </h3>
                <p className="text-gray-600">
                  {reason === "Business-focused design"
                    ? "Every website is designed to meet your business goals and drive conversions."
                    : reason === "SEO-ready structure"
                    ? "Built with SEO best practices to help you rank higher on Google search results."
                    : reason === "Fast loading performance"
                    ? "Optimized for speed and performance to ensure great user experience."
                    : reason === "Scalable development"
                    ? "Built to grow with your business as your needs evolve."
                    : "Continuous support and maintenance after your website goes live."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-emerald-600 to-cyan-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get Your Custom Website <br /> Quote Today
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Ready to launch your professional website? Chat with us on WhatsApp
          </p>
          <a
            href="https://wa.me/918148146785?text=Hi%20Infodra%20Technologies%2C%20I%20need%20a%20website%20quote%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-blue-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
          >
            <MessageCircle className="w-6 h-6" />
            WhatsApp: 81481 46785
          </a>
        </div>
      </section>

      {/* Navigation Link */}
      <section className="bg-white border-t border-gray-200 py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/digital-solutions"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
          >
            ← Back to Digital Solutions
          </Link>
        </div>
      </section>
    </main>
  );
}
