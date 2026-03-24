"use client";

import { useROICalculator } from "@/components/ROICalculatorWidget";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle2,
  ArrowRight,
  Headphones,
  Calculator,
  BrainCircuit,
  Cog,
  Users,
  Shield,
  TrendingUp,
  Handshake,
  Factory,
  Car,
  Building2,
  Ruler,
  PenTool,
  UserPlus,
  Layers,
  Wrench,
  ScanLine,
  Activity,
} from "lucide-react";

/* ───────────────────────── Data ───────────────────────── */

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  items: string[];
}

const engineeringServices: ServiceItem[] = [
  {
    icon: <Ruler className="w-10 h-10 text-blue-600" />,
    title: "CAD Design & Engineering",
    description:
      "Professional CAD design and engineering documentation services using industry-standard tools for precision manufacturing and product development.",
    items: [
      "CATIA V5/V6 Design & Surfacing",
      "SolidWorks 3D Modeling & Assembly",
      "Siemens NX (Unigraphics) Engineering",
      "PTC Creo / Pro-E Design Services",
    ],
  },
  {
    icon: <PenTool className="w-10 h-10 text-blue-600" />,
    title: "3D Modeling & Technical Drafting",
    description:
      "High-precision 3D models, technical drawings, and engineering documentation that meet global manufacturing standards and tolerances.",
    items: [
      "3D Solid & Surface Modeling",
      "2D Production Drawings (GD&T)",
      "Sheet Metal & Weldment Design",
      "BOM Generation & Documentation",
    ],
  },
  {
    icon: <Cog className="w-10 h-10 text-blue-600" />,
    title: "Product Design & Development Support",
    description:
      "End-to-end product design support from concept through production-ready engineering, aligned with OEM and Tier-1 supplier requirements.",
    items: [
      "Concept to Production Design",
      "Design Modifications & Optimization",
      "Value Engineering & Cost Reduction",
      "Design for Manufacturing (DFM/DFA)",
    ],
  },
  {
    icon: <Wrench className="w-10 h-10 text-blue-600" />,
    title: "Assembly Drawing for Aftersale Market",
    description:
      "Specialized assembly drawings and technical documentation for aftermarket parts, service kits, and replacement components — ensuring accurate fitment and serviceability.",
    items: [
      "Aftermarket Assembly & Exploded Views",
      "Service & Maintenance Illustrations",
      "Replacement Parts Catalogs & BOMs",
      "Fitment & Installation Drawings",
    ],
  },
  {
    icon: <Activity className="w-10 h-10 text-blue-600" />,
    title: "Prototyping & Additive Manufacturing Design",
    description:
      "Design for 3D printing and rapid prototyping support — enabling faster product iterations, functional testing, and production-ready additive manufacturing solutions.",
    items: [
      "Design for Additive Manufacturing (DfAM)",
      "Rapid Prototyping & Concept Models",
      "3D Print-Ready File Preparation",
      "Functional Prototype Validation",
    ],
  },
  {
    icon: <ScanLine className="w-10 h-10 text-blue-600" />,
    title: "Reverse Engineering",
    description:
      "3D scanning, point cloud processing, and legacy part digitization to recreate accurate CAD models from physical components or outdated drawings.",
    items: [
      "3D Scanning & Point Cloud to CAD",
      "Legacy Part Digitization",
      "As-Built Documentation",
      "Dimensional Inspection & Comparison",
    ],
  },
];

interface Industry {
  icon: React.ReactNode;
  name: string;
}

const industries: Industry[] = [
  { icon: <Factory className="w-8 h-8" />, name: "Manufacturing" },
  { icon: <Car className="w-8 h-8" />, name: "Automotive" },
  { icon: <Cog className="w-8 h-8" />, name: "Industrial Engineering" },
  { icon: <Building2 className="w-8 h-8" />, name: "Aerospace & Defense" },
  { icon: <TrendingUp className="w-8 h-8" />, name: "Energy & Power" },
  { icon: <Layers className="w-8 h-8" />, name: "Heavy Equipment" },
];

interface WhyChooseCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const whyChooseCards: WhyChooseCard[] = [
  {
    icon: <Cog className="w-8 h-8 text-blue-600" />,
    title: "Engineering DNA",
    description:
      "Founded on engineering expertise — our team understands manufacturing processes, tolerances, and industry standards from the ground up.",
  },
  {
    icon: <Shield className="w-8 h-8 text-blue-600" />,
    title: "OEM & Tier-1 Standards",
    description:
      "Deliverables aligned with OEM quality standards, GD&T specifications, and production-ready documentation requirements.",
  },
  {
    icon: <Ruler className="w-8 h-8 text-blue-600" />,
    title: "Multi-CAD Expertise",
    description:
      "Certified engineers in CATIA, SolidWorks, Siemens NX, and Creo — we adapt to your tool environment seamlessly.",
  },
  {
    icon: <Handshake className="w-8 h-8 text-blue-600" />,
    title: "Long-Term Partnership Model",
    description:
      "We operate as an extension of your engineering team — invested in outcomes, not just deliverables. Built for multi-year engagements.",
  },
  {
    icon: <Headphones className="w-8 h-8 text-blue-600" />,
    title: "Dedicated Support & SLAs",
    description:
      "SLA-backed support, design revision cycles, and proactive communication to keep your engineering projects on track.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
    title: "Scalable Engineering Capacity",
    description:
      "Rapidly scale your engineering team up or down based on project phases, product launches, or seasonal demand — without long hiring cycles.",
  },
];

/* ───────────────────────── Shared Card Renderer ───────────────────────── */

function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all group">
      <div className="mb-5 p-4 w-fit bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors">
        {service.icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
      <p className="text-gray-600 mb-5 leading-relaxed text-sm">
        {service.description}
      </p>
      <div className="space-y-2.5">
        {service.items.map((item, i) => (
          <div key={i} className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700 text-sm font-medium">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ───────────────────────── Component ───────────────────────── */

export function DigitalSolutionsContent() {
  const { openCalculator } = useROICalculator();

  const faqItems = [
    {
      question: "What CAD tools and engineering software do you support?",
      answer:
        "We have certified expertise in CATIA V5/V6, SolidWorks, Siemens NX (Unigraphics), and PTC Creo/Pro-E. Our engineers are experienced in surfacing, sheet metal, GD&T, BOM management, and production-ready drawing packages aligned with OEM standards.",
    },
    {
      question: "What types of engineering projects do you handle?",
      answer:
        "We handle a wide range — from concept-to-production CAD design, 3D modeling, and technical drafting to design optimization, value engineering, and DFM/DFA analysis. Our expertise spans automotive, aerospace, heavy equipment, and industrial manufacturing domains.",
    },
    {
      question: "How quickly can you deploy engineering resources?",
      answer:
        "For contract staffing, we can deploy pre-vetted CAD designers and mechanical engineers within 1–2 weeks. For dedicated project teams, onboarding and ramp-up typically takes 2–4 weeks depending on the skill mix and CAD tool requirements.",
    },
    {
      question: "Do you work with OEM and Tier-1 quality standards?",
      answer:
        "Yes. All engineering deliverables are aligned with OEM quality standards, GD&T specifications, and production-ready documentation requirements. We follow industry-standard drawing practices and tolerance specifications.",
    },
    {
      question: "What engagement models do you offer for engineering services?",
      answer:
        "We offer flexible models including dedicated engineering teams, contract staffing (time & material), and fixed-scope project delivery. For long-term engagements, we embed engineers within your workflows under your project management or ours.",
    },
    {
      question: "Do you provide ongoing support after project delivery?",
      answer:
        "Yes. We offer SLA-backed support packages including design revision cycles, engineering change order management, documentation updates, and continuous design optimization.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* ────────── Hero Section ────────── */}
      <section className="relative min-h-[600px] flex items-center bg-gradient-to-br from-sky-50/60 via-white to-slate-50/40 text-gray-900 overflow-hidden">
        {/* Decorative animated elements — soft sky-blue theme */}
        <div className="absolute top-40 right-32 w-80 h-80 bg-sky-300 rounded-full mix-blend-multiply filter blur-2xl opacity-15 animate-pulse" />
        <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-sky-400 rounded-full mix-blend-multiply filter blur-2xl opacity-15 animate-pulse" />
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-15 animate-pulse" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight text-gray-900">
              Engineering Services for{" "}
              <span className="bg-gradient-to-r from-sky-500 to-blue-400 bg-clip-text text-transparent">
                Enterprise
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-10 text-gray-600 max-w-2xl leading-relaxed">
              Professional CAD design, 3D modeling, and product development
              support using CATIA, SolidWorks, Siemens NX, and Creo — delivering
              precision engineering for manufacturing and automotive enterprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-sky-500 text-white px-8 py-3.5 rounded-lg font-semibold text-lg tracking-wider hover:bg-sky-600 hover:shadow-2xl active:shadow-lg transition duration-200 shadow-lg"
              >
                Request a Consultation
              </Link>
              <Link
                href="#engineering"
                className="border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-lg font-semibold text-base tracking-wider hover:bg-gray-100 hover:border-gray-900 active:bg-gray-200 transition duration-200"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
          {/* Right — Image */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/assembly.png"
              alt="Engineering Services"
              width={700}
              height={570}
              className="rounded-2xl object-cover drop-shadow-xl w-full max-w-[700px]"
              priority
            />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          Engineering Services
         ════════════════════════════════════════════════════════════ */}
      <section
        id="engineering"
        className="py-20 md:py-28 bg-white border-t border-gray-100"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-2">
              Core Expertise
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Engineering Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional CAD design, 3D modeling, and product development
              support using industry-standard tools — CATIA, SolidWorks,
              Siemens NX, and Creo — for global manufacturing and automotive
              enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {engineeringServices.map((s, i) => (
              <ServiceCard key={i} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          Engineering Resource Deployment & Staffing
         ════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-blue-400 font-semibold tracking-wider uppercase text-sm mb-2">
              Scale Your Engineering Team
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Engineering Resource Deployment
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Rapidly deploy skilled CAD designers and mechanical engineers to
              augment your in-house engineering teams — on contract, project, or
              retainer basis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl">
              <div className="mb-5 p-4 w-fit bg-white/10 rounded-xl">
                <UserPlus className="w-10 h-10 text-blue-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Skilled Engineer Deployment
              </h3>
              <p className="text-slate-300 mb-5 text-sm leading-relaxed">
                Access pre-vetted CAD designers, mechanical engineers, and
                product design specialists ready to integrate with your teams.
              </p>
              <ul className="space-y-2.5">
                {[
                  "CAD / Design Engineers (CATIA, NX, SW)",
                  "Mechanical & Product Engineers",
                  "Drafters & Documentation Specialists",
                  "DFM / Value Engineering Experts",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl">
              <div className="mb-5 p-4 w-fit bg-white/10 rounded-xl">
                <Handshake className="w-10 h-10 text-blue-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Contract & Project-Based Support
              </h3>
              <p className="text-slate-300 mb-5 text-sm leading-relaxed">
                Flexible engagement structures — time & material, fixed-price
                projects, or dedicated team models aligned with your procurement
                processes.
              </p>
              <ul className="space-y-2.5">
                {[
                  "Time & Material Contracts",
                  "Fixed-Scope Project Delivery",
                  "Dedicated Engineering Team Model",
                  "Vendor-Compliant Documentation",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl">
              <div className="mb-5 p-4 w-fit bg-white/10 rounded-xl">
                <Users className="w-10 h-10 text-blue-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Quick Onboarding & Scalable Teams
              </h3>
              <p className="text-slate-300 mb-5 text-sm leading-relaxed">
                Rapid ramp-up within 1–2 weeks with the flexibility to scale
                engineering teams up or down based on project phases and demand.
              </p>
              <ul className="space-y-2.5">
                {[
                  "1–2 week onboarding cycle",
                  "Flexible team scaling",
                  "Seamless integration with your workflows",
                  "Transparent reporting & timesheets",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ────────── Industries Served ────────── */}
      <section className="py-20 md:py-28 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-2">
              Domain Expertise
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Deep engineering expertise across complex, regulated, and
              high-stakes manufacturing industries worldwide.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((ind, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-2xl border border-gray-200 bg-white hover:shadow-lg hover:border-blue-200 transition-all"
              >
                <div className="mb-3 text-blue-600">{ind.icon}</div>
                <span className="text-gray-800 font-semibold text-sm">
                  {ind.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────── Why Choose Infodra ────────── */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-2">
              Our Differentiators
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Partner with Infodra
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A trusted engineering partner committed to quality, precision,
              and measurable outcomes for manufacturing enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseCards.map((card, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl border border-gray-200 bg-white hover:shadow-lg hover:border-blue-200 transition-all"
              >
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────── CTA Banner ────────── */}
      <section className="py-20 md:py-28 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-2xl p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Scale Your Engineering Capabilities?
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Whether you need CAD design support, a dedicated engineering team,
              or product development expertise — let&apos;s discuss how Infodra
              can support your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition gap-2"
              >
                Partner with Us <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://www.infodra.ai/products"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-slate-500 text-slate-200 rounded-lg font-semibold hover:border-white hover:text-white transition gap-2"
              >
                <BrainCircuit className="w-5 h-5" /> Explore our AI Products
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ────────── FAQ Section ────────── */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-2">
              Common Questions
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Key information for engineering decision-makers
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <details
                key={index}
                className="group border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer bg-white"
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
