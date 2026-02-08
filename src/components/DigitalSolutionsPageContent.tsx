"use client";

import { useROICalculator } from "@/components/ROICalculatorWidget";
import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  Search,
  Code2,
  Zap,
  CheckCircle2,
  MessageCircle,
  ArrowRight,
  Cloud,
  Headphones,
  Calculator,
} from "lucide-react";

interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  items: string[];
}

interface WhyChooseCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const serviceCards: ServiceCard[] = [
  {
    icon: <Globe className="w-12 h-12 text-blue-600" />,
    title: "Professional Website Development",
    description:
      "We create modern, responsive, and fast-loading business websites that convert visitors into customers.",
    items: [
      "Business Websites",
      "Corporate Sites",
      "Landing Pages",
      "E-commerce Websites",
    ],
  },
  {
    icon: <Search className="w-12 h-12 text-blue-600" />,
    title: "SEO & Google Ranking Services",
    description:
      "Get found online with our comprehensive SEO strategies designed to boost your visibility and drive organic traffic.",
    items: [
      "Keyword Optimization",
      "On-Page SEO",
      "Technical SEO",
      "Local SEO",
    ],
  },
  {
    icon: <Code2 className="w-12 h-12 text-blue-600" />,
    title: "Custom Web Applications",
    description:
      "Build scalable and secure business tools tailored to your unique needs. From dashboards to customer portals.",
    items: [
      "Business Dashboards",
      "Customer Portals",
      "Internal Systems",
      "SaaS Platforms",
    ],
  },
  {
    icon: <Zap className="w-12 h-12 text-blue-600" />,
    title: "Business Process Automation",
    description:
      "Reduce manual work, improve efficiency, and scale your operations with intelligent automation solutions.",
    items: [
      "Workflow Automation",
      "CRM Integrations",
      "Reporting Dashboards",
      "Process Optimization",
    ],
  },
];

const whyChooseCards: WhyChooseCard[] = [
  {
    icon: <CheckCircle2 className="w-8 h-8 text-blue-600" />,
    title: "Business-Focused Solutions",
    description:
      "Every project is tailored to your business goals and revenue growth.",
  },
  {
    icon: <CheckCircle2 className="w-8 h-8 text-blue-600" />,
    title: "Affordable Pricing for SMEs",
    description:
      "High-quality digital solutions that fit your budget and deliver ROI.",
  },
  {
    icon: <CheckCircle2 className="w-8 h-8 text-blue-600" />,
    title: "Fast Turnaround",
    description: "Quick project delivery without compromising on quality.",
  },
  {
    icon: <CheckCircle2 className="w-8 h-8 text-blue-600" />,
    title: "Ongoing Technical Support",
    description:
      "Continuous support and maintenance to keep your systems running smoothly.",
  },
  {
    icon: <CheckCircle2 className="w-8 h-8 text-blue-600" />,
    title: "Scalable & Secure Systems",
    description:
      "Built with industry best practices to grow with your business.",
  },
  {
    icon: <CheckCircle2 className="w-8 h-8 text-blue-600" />,
    title: "Proven Track Record",
    description: "Trusted by startups and established businesses across India.",
  },
];

export function DigitalSolutionsContent() {
  const { openCalculator } = useROICalculator();

  const faqItems = [
    {
      question: "What is your typical project timeline?",
      answer:
        "Project timelines vary based on scope and complexity. Typically, website projects take 4-8 weeks, web applications take 3-6 months, and SEO campaigns show results in 3-6 months.",
    },
    {
      question: "Do you provide post-launch support?",
      answer:
        "Yes, we offer comprehensive post-launch support including maintenance, bug fixes, and performance optimization. We provide SLA-based support packages tailored to your needs.",
    },
    {
      question: "How do you ensure website security?",
      answer:
        "We implement industry best practices including SSL encryption, regular security audits, secure coding standards, and compliance with GDPR, OWASP guidelines.",
    },
    {
      question: "Can you help migrate our existing system to the cloud?",
      answer:
        "Absolutely! Our cloud migration services include planning, execution, and optimization. We ensure zero downtime and data integrity throughout the process.",
    },
    {
      question: "What technologies do you work with?",
      answer:
        "We work with modern technologies including React, Next.js, Node.js, Python, AWS, Google Cloud, Docker, Kubernetes, and many others tailored to project requirements.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-gray-50 pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden">
        {/* Decorative gradient elements with animations */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-emerald-400 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-slow-pulse" />
        <div className="absolute -bottom-20 right-20 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-slow-pulse" />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-2xl opacity-10" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Transform Your Business with Digital Solutions
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                From website development to business automation, we provide comprehensive digital solutions to help your business grow and succeed online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#services"
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
                >
                  Explore Solutions <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="https://wa.me/918148146785"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 bg-green-600 text-white font-semibold text-base tracking-wider rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Chat
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80"
                  alt="Digital Solutions - Business Team"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 md:py-32 bg-white border-t border-gray-100"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Our Digital Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive services to transform your digital presence and drive
              business growth
            </p>
          </div>

          {/* Website Development Section */}
          <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="relative h-72 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80"
                  alt="Website Development - Modern Responsive Design"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all">
              <div className="mb-4 p-4 w-fit bg-blue-50 rounded-xl">
                <Globe className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Professional Website Development
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We create modern, responsive, and fast-loading business websites that convert visitors into customers.
              </p>
              <div className="space-y-3">
                {["Business Websites", "Corporate Sites", "Landing Pages", "E-commerce Websites"].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/website-quote"
                className="mt-6 w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition flex items-center justify-center gap-2 block"
              >
                Get Website Quote <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* SEO Services Section */}
          <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all">
              <div className="mb-4 p-4 w-fit bg-blue-50 rounded-xl">
                <Search className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                SEO & Google Ranking Services
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Get found online with our comprehensive SEO strategies designed to boost your visibility and drive organic traffic.
              </p>
              <div className="space-y-3">
                {["Keyword Optimization", "On-Page SEO", "Technical SEO", "Local SEO"].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/seo-proposal"
                className="mt-6 w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition flex items-center justify-center gap-2 block"
              >
                Request SEO Proposal <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative h-72 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop&q=80"
                alt="SEO Services - Search Engine Optimization"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Web Applications Section */}
          <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="relative h-72 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop&q=80"
                  alt="Web Applications - Custom Business Solutions"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all">
              <div className="mb-4 p-4 w-fit bg-blue-50 rounded-xl">
                <Code2 className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Custom Web Applications
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Build scalable and secure business tools tailored to your unique needs. From dashboards to customer portals.
              </p>
              <div className="space-y-3">
                {["Business Dashboards", "Customer Portals", "Internal Systems", "SaaS Platforms"].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => openCalculator("Custom Web Applications")}
                className="mt-6 w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition flex items-center justify-center gap-2"
              >
                <Calculator className="w-5 h-5" /> Calculate ROI
              </button>
            </div>
          </div>

          {/* Automation Section */}
          <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all">
              <div className="mb-4 p-4 w-fit bg-blue-50 rounded-xl">
                <Zap className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Business Process Automation
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Reduce manual work, improve efficiency, and scale your operations with intelligent automation solutions.
              </p>
              <div className="space-y-3">
                {["Workflow Automation", "CRM Integrations", "Reporting Dashboards", "Process Optimization"].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => openCalculator("Business Process Automation")}
                className="mt-6 w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition flex items-center justify-center gap-2"
              >
                <Calculator className="w-5 h-5" /> Calculate ROI
              </button>
            </div>
            <div className="relative h-72 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&q=80"
                alt="Automation - Workflow Process Optimization"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Cloud Migration & Infrastructure Services Section */}
          <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="relative h-72 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&q=80"
                  alt="Cloud Migration - Infrastructure Services"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all">
              <div className="mb-4 p-4 w-fit bg-blue-50 rounded-xl">
                <Cloud className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Cloud Migration & Infrastructure Services
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Migrate your business infrastructure to the cloud securely with AWS, Google Cloud Platform, Microsoft Azure, and implement cloud computing solutions including IaaS, PaaS, SaaS, containerization with Docker and Kubernetes, serverless architecture, and cloud security.
              </p>
              <div className="space-y-3">
                {["Cloud Platforms (AWS, GCP, Azure)", "Containerization & Kubernetes", "Serverless Architecture", "Infrastructure as Code (IaC)", "DevOps & CI/CD", "Disaster Recovery & High Availability"].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => openCalculator("Cloud Migration & Infrastructure Services")}
                className="mt-6 w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition flex items-center justify-center gap-2"
              >
                <Calculator className="w-5 h-5" /> Calculate ROI
              </button>
            </div>
          </div>

          {/* Ongoing Support & Maintenance Services Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all">
              <div className="mb-4 p-4 w-fit bg-blue-50 rounded-xl">
                <Headphones className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Ongoing Support & Maintenance Services
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Continuous software updates, security patches, bug fixes, feature enhancements, 24/7 uptime monitoring, system health checks, performance optimization, load balancing, and proactive maintenance to ensure your applications run at peak efficiency.
              </p>
              <div className="space-y-3">
                {["24/7 Monitoring & Support", "Security Patches & Updates", "Performance Optimization", "Bug Fixes & Enhancements", "Backup & Disaster Recovery", "SLA Management & Incident Response"].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/support-maintenance"
                className="mt-6 w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition flex items-center justify-center gap-2 block"
              >
                View Support Plans <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative h-72 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop&q=80"
                alt="Support & Maintenance - 24/7 Technical Support"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Infodra Technologies?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to delivering solutions that drive real business
              results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseCards.map((card, index) => (
              <div
                key={index}
                className="p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-br from-slate-900 via-emerald-900 to-cyan-900 rounded-2xl p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg mb-8 opacity-90">
              Let's discuss how our digital solutions can drive your business growth
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Start Your Project Today
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Have questions? We've got answers
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <details
                key={index}
                className="group border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
              >
                <summary className="flex items-center justify-between font-semibold text-gray-900 list-none">
                  {faq.question}
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
