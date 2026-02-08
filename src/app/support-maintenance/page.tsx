import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, MessageCircle, Shield, Zap, Lock } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Website Support & Maintenance Services | Infodra Technologies",
  description:
    "Ongoing website support and maintenance plans to ensure performance, security, and updates for your digital systems.",
  keywords: [
    "website maintenance",
    "website support",
    "technical support",
    "website monitoring",
    "security updates",
    "Infodra Technologies",
  ],
  openGraph: {
    title: "Website Support & Maintenance Services | Infodra Technologies",
    description:
      "Professional website support and maintenance plans starting from ₹8,000/month. Ensure your website stays secure, fast, and up-to-date.",
    url: "https://infodra.com/support-maintenance",
    type: "website",
  },
};

export default function SupportMaintenance() {
  const plans = [
    {
      name: "Basic Support",
      price: "₹8,000",
      period: "/month",
      features: [
        "Monthly updates",
        "Minor fixes",
        "Security checks",
      ],
      highlight: false,
    },
    {
      name: "Standard Support",
      price: "₹15,000",
      period: "/month",
      features: [
        "Performance monitoring",
        "Backup management",
        "SEO monitoring",
        "Priority support",
      ],
      highlight: true,
    },
    {
      name: "Premium Support",
      price: "Custom",
      period: "pricing",
      features: [
        "Dedicated technical support",
        "Feature updates",
        "System optimization",
        "24/7 availability",
      ],
      highlight: false,
    },
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Faster Issue Resolution",
      description: "Quick response times to minimize downtime and maintain business continuity",
    },
    {
      icon: <Lock className="w-8 h-8 text-blue-600" />,
      title: "Improved Security",
      description: "Regular security patches and updates to protect your website and data",
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Continuous Optimization",
      description: "Performance improvements and optimization to ensure fast loading times",
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-blue-600" />,
      title: "Business Continuity",
      description: "Reliable support to keep your website running smoothly 24/7",
    },
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
              Reliable Website Support & Maintenance
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Keep your website secure, fast, and up-to-date with our comprehensive support and maintenance plans. Let our experts handle the technical details while you focus on growing your business.
            </p>
            <div className="flex justify-center">
              <a
                href="https://wa.me/918148146785?text=Hi%20Infodra%20Technologies%2C%20I%20need%20information%20about%20website%20support%20and%20maintenance."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" /> Talk to Expert
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Plans Section */}
      <section className="py-20 md:py-32 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Maintenance Plans
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Choose the support level that fits your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  href="https://wa.me/918148146785?text=Hi%20Infodra%20Technologies%2C%20I%20am%20interested%20in%20the%20support%20plan."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2 ${
                    plan.highlight
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Benefits of Website Maintenance
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Keep your website running at peak performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="mb-4 p-4 w-fit bg-blue-50 rounded-xl">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 md:py-32 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What's Included in Our Support
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Regular software and security updates",
              "Performance monitoring and optimization",
              "Daily/weekly backup management",
              "Uptime monitoring and alerting",
              "Bug fixes and issue resolution",
              "Feature requests and enhancements",
              "Database optimization",
              "SSL certificate management",
              "SEO maintenance and monitoring",
              "Load balancing and scalability",
              "Incident response and support",
              "Monthly performance reports",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-emerald-900 to-cyan-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Talk to Our Technical Expert
          </h2>
          <p className="text-xl mb-8 text-emerald-100">
            Get personalized support recommendations for your website
          </p>
          <a
            href="https://wa.me/918148146785?text=Hi%20Infodra%20Technologies%2C%20I%20want%20to%20talk%20to%20an%20expert%20about%20website%20support%20and%20maintenance%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-emerald-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
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
