import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, MessageCircle, TrendingUp } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SEO Services & Pricing Plans | Infodra Technologies",
  description:
    "Professional SEO services with transparent pricing. Improve Google rankings with Infodra Technologies' structured and ethical SEO approach.",
  keywords: [
    "SEO services",
    "SEO pricing",
    "Google ranking",
    "search engine optimization",
    "ethical SEO",
    "Infodra Technologies",
  ],
  openGraph: {
    title: "SEO Services & Pricing Plans | Infodra Technologies",
    description:
      "Structured SEO services that deliver sustainable growth. Monthly plans starting from ₹12,000 with transparent pricing and ethical practices.",
    url: "https://infodra.com/seo-proposal",
    type: "website",
  },
};

export default function SEOProposal() {
  const plans = [
    {
      name: "Basic SEO Plan",
      price: "₹12,000",
      period: "/month",
      features: [
        "On-page optimization",
        "Keyword research",
        "Local SEO setup",
      ],
      highlight: false,
    },
    {
      name: "Growth SEO Plan",
      price: "₹25,000",
      period: "/month",
      features: [
        "Content optimization",
        "Technical SEO",
        "Link building",
      ],
      highlight: true,
    },
    {
      name: "Premium SEO Plan",
      price: "₹45,000",
      period: "/month",
      features: [
        "Competitive keyword targeting",
        "Authority building",
        "Advanced reporting",
      ],
      highlight: false,
    },
  ];

  const timeline = [
    {
      phase: "0–1 Month",
      title: "Audit & Setup",
      description: "Comprehensive SEO audit and strategy foundation",
    },
    {
      phase: "2–3 Months",
      title: "Initial Ranking Improvements",
      description: "First visible improvements in search rankings",
    },
    {
      phase: "4–6 Months",
      title: "Measurable Growth Phase",
      description: "Significant traffic increases and keyword rankings",
    },
    {
      phase: "6–12 Months",
      title: "Authority & Strong ROI",
      description: "Sustained growth and established authority",
    },
  ];

  const whyChoose = [
    "Ethical SEO practices",
    "Data-driven strategy",
    "Transparent reporting",
    "No unrealistic ranking guarantees",
    "Sustainable growth approach",
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
              Structured SEO That Delivers Sustainable Growth
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Improve your Google rankings with our ethical SEO approach and data-driven strategies designed for long-term visibility and organic traffic growth.
            </p>
            <div className="flex justify-center">
              <a
                href="https://wa.me/918148146785?text=Hi%20Infodra%20Technologies%2C%20I%20need%20an%20SEO%20proposal%20for%20my%20website."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" /> Request SEO Proposal
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-20 md:py-32 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              SEO Pricing Plans (Monthly)
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Choose the plan that fits your business goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl border p-8 transition-all ${
                  plan.highlight
                    ? "bg-gradient-to-br from-blue-50 to-white border-blue-300 shadow-2xl scale-105"
                    : "bg-white border-gray-200 shadow-sm hover:shadow-lg"
                }`}
              >
                {plan.highlight && (
                  <div className="mb-4 inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-blue-600">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/918148146785?text=Hi%20Infodra%20Technologies%2C%20I%20am%20interested%20in%20the%20SEO%20plan."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2 ${
                    plan.highlight
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  Get Proposal <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
            <p className="text-gray-800 font-semibold mb-2">
              ⏱️ Minimum Recommended Duration: 6 Months
            </p>
            <p className="text-gray-700">
              SEO is a long-term investment. We recommend a minimum commitment of 6 months for measurable results and sustainable growth in your rankings.
            </p>
          </div>
        </div>
      </section>

      {/* SEO Timeline Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              SEO Timeline & Results
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What to expect at each phase of your SEO journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-xl flex-shrink-0">
                    <TrendingUp className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {item.phase}: {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-yellow-50 border border-yellow-200 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              ⚠️ Important Disclaimer
            </h3>
            <p className="text-gray-700">
              SEO is a long-term investment. We recommend a minimum commitment of 6 months for measurable results. Rankings depend on competition, your industry, and current market conditions. We never guarantee specific rankings, but we focus on sustainable growth and ethical SEO practices.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Infodra Section */}
      <section className="py-20 md:py-32 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Infodra for SEO?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Data-driven strategies with transparent results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoose.map((reason, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="mb-4 p-4 w-fit bg-blue-50 rounded-xl">
                  <CheckCircle2 className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {reason}
                </h3>
                <p className="text-gray-600">
                  {reason === "Ethical SEO practices"
                    ? "We follow Google guidelines and industry best practices to ensure sustainable growth."
                    : reason === "Data-driven strategy"
                    ? "Every decision is based on analytics, keyword research, and competitor analysis."
                    : reason === "Transparent reporting"
                    ? "Monthly reports showing your rankings, traffic, and progress metrics."
                    : reason === "No unrealistic ranking guarantees"
                    ? "We focus on measurable results and honest communication about SEO timelines."
                    : "Built for long-term success, not quick fixes."}
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
            Get Your Free SEO Consultation
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss your SEO goals and create a strategy that works for your business
          </p>
          <a
            href="https://wa.me/918148146785?text=Hi%20Infodra%20Technologies%2C%20I%20need%20a%20free%20SEO%20consultation%20for%20my%20website."
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
