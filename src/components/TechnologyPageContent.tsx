"use client";

import { useROICalculator } from "@/components/ROICalculatorWidget";
import Link from "next/link";
import Image from "next/image";
import {
  Code2,
  Zap,
  CheckCircle2,
  ArrowRight,
  Headphones,
  Calculator,
  Cpu,
  Layers,
  Building2,
  Factory,
  Cog,
  Users,
  Shield,
  TrendingUp,
  Handshake,
  Server,
  BrainCircuit,
  UserPlus,
  Workflow,
  BarChart3,
  Lock,
  Smartphone,
} from "lucide-react";

/* ───────────────────────── Data ───────────────────────── */

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  items: string[];
}

/* Technology Solutions */
const technologySolutions: ServiceItem[] = [
  {
    icon: <Code2 className="w-10 h-10 text-blue-600" />,
    title: "Custom Software Development",
    description:
      "Full-cycle software engineering for enterprise-grade systems, built with scalable architecture, robust security, and long-term maintainability.",
    items: [
      "Enterprise Web Applications",
      "Microservices & API Architecture",
      "Multi-Tenant SaaS Platforms",
      "Legacy System Modernization",
    ],
  },
  {
    icon: <Layers className="w-10 h-10 text-blue-600" />,
    title: "System Integration",
    description:
      "Seamlessly connect disparate enterprise systems, third-party platforms, and data sources to enable unified, efficient operations.",
    items: [
      "ERP / CRM / PLM Integration",
      "Third-Party API Integration",
      "Data Pipeline & ETL Solutions",
      "Real-Time Data Streaming",
    ],
  },
  {
    icon: <Cpu className="w-10 h-10 text-blue-600" />,
    title: "Scalable Digital Platforms",
    description:
      "Architect and deploy cloud-native platforms designed for high availability, horizontal scaling, and enterprise-grade performance.",
    items: [
      "Cloud-Native Architecture (AWS, GCP, Azure)",
      "Containerization & Kubernetes",
      "CI/CD Pipeline Engineering",
      "Infrastructure as Code",
    ],
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-blue-600" />,
    title: "Data Analytics & Business Intelligence",
    description:
      "Transform raw data into actionable insights with custom dashboards, data warehousing, and predictive analytics platforms for smarter decision-making.",
    items: [
      "Custom Dashboards & Reporting",
      "Data Warehousing & Modeling",
      "Predictive Analytics & Forecasting",
      "BI Platform Implementation",
    ],
  },
  {
    icon: <Lock className="w-10 h-10 text-blue-600" />,
    title: "Cybersecurity & Compliance",
    description:
      "Protect enterprise systems with security audits, compliance frameworks, and proactive threat management aligned with industry standards.",
    items: [
      "Security Audits & Penetration Testing",
      "SOC2 / ISO 27001 Compliance",
      "Identity & Access Management",
      "Vulnerability Assessment & Remediation",
    ],
  },
  {
    icon: <Smartphone className="w-10 h-10 text-blue-600" />,
    title: "Mobile & Cross-Platform Development",
    description:
      "Build native, hybrid, and progressive web applications that deliver seamless user experiences across all devices and platforms.",
    items: [
      "Native iOS & Android Development",
      "React Native & Flutter Apps",
      "Progressive Web Apps (PWA)",
      "Responsive Enterprise Portals",
    ],
  },
];

/* Digital Transformation & Automation */
const transformationServices: ServiceItem[] = [
  {
    icon: <Zap className="w-10 h-10 text-blue-600" />,
    title: "Business Process Automation",
    description:
      "Eliminate manual bottlenecks and improve operational efficiency with intelligent automation designed for enterprise-grade reliability.",
    items: [
      "Workflow Orchestration",
      "Robotic Process Automation (RPA)",
      "Document Digitization & OCR",
      "Data Pipeline Automation",
    ],
  },
  {
    icon: <Workflow className="w-10 h-10 text-blue-600" />,
    title: "Workflow Optimization",
    description:
      "Analyze, redesign, and digitize complex business workflows to reduce cycle times, eliminate redundancies, and improve throughput.",
    items: [
      "Process Mapping & Analysis",
      "ERP Workflow Optimization",
      "Approval & Routing Automation",
      "KPI Dashboards & Reporting",
    ],
  },
  {
    icon: <BrainCircuit className="w-10 h-10 text-blue-600" />,
    title: "AI-Enabled Solutions",
    description:
      "Leverage artificial intelligence and machine learning to extract actionable insights, automate decision-making, and build intelligent products.",
    items: [
      "Predictive Analytics & Forecasting",
      "Computer Vision & Quality Inspection",
      "Natural Language Processing",
      "Enterprise System Digitization",
    ],
  },
];

interface Industry {
  icon: React.ReactNode;
  name: string;
}

const industries: Industry[] = [
  { icon: <Factory className="w-8 h-8" />, name: "Manufacturing" },
  { icon: <Server className="w-8 h-8" />, name: "SaaS & Technology" },
  { icon: <Building2 className="w-8 h-8" />, name: "Enterprise & Corporate" },
  { icon: <Cog className="w-8 h-8" />, name: "Engineering" },
  { icon: <TrendingUp className="w-8 h-8" />, name: "Energy & Industrial" },
  { icon: <Shield className="w-8 h-8" />, name: "Healthcare & Finance" },
];

interface WhyChooseCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const whyChooseCards: WhyChooseCard[] = [
  {
    icon: <Code2 className="w-8 h-8 text-blue-600" />,
    title: "Full-Stack Engineering",
    description:
      "End-to-end software engineering capability — from architecture design and development to deployment, monitoring, and continuous optimization.",
  },
  {
    icon: <Shield className="w-8 h-8 text-blue-600" />,
    title: "Enterprise-Grade Quality",
    description:
      "Built with OWASP best practices, ISO-aligned processes, and compliance-ready frameworks. Quality is embedded, not bolted on.",
  },
  {
    icon: <Layers className="w-8 h-8 text-blue-600" />,
    title: "Scalable Architecture",
    description:
      "Systems designed to handle growing workloads, high concurrency, and complex integrations as your business scales globally.",
  },
  {
    icon: <Handshake className="w-8 h-8 text-blue-600" />,
    title: "Long-Term Partnership Model",
    description:
      "We operate as an extension of your technology team — invested in outcomes, not just deliverables. Built for multi-year engagements.",
  },
  {
    icon: <Headphones className="w-8 h-8 text-blue-600" />,
    title: "Dedicated Support & SLAs",
    description:
      "SLA-backed support, proactive monitoring, and incident response to ensure your systems remain performant and reliable.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
    title: "Measurable Business Impact",
    description:
      "Every engagement is aligned with clear KPIs. We focus on outcomes that directly support your operational and business objectives.",
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

export function TechnologyPageContent() {
  const { openCalculator } = useROICalculator();

  const faqItems = [
    {
      question: "What technologies and stacks do you specialize in?",
      answer:
        "Our software team specializes in React, Next.js, Node.js, Python, TypeScript, .NET, Java, AWS, GCP, Azure, Docker, Kubernetes, PostgreSQL, and MongoDB. We select the optimal stack based on your project requirements and existing infrastructure.",
    },
    {
      question: "What is your typical engagement model for technology projects?",
      answer:
        "We offer flexible engagement models including dedicated development teams, contract staffing (time & material), and fixed-scope delivery. For long-term engagements, we embed developers within your workflows under your project management or ours.",
    },
    {
      question: "Can you integrate with our existing enterprise systems (SAP, PLM, etc.)?",
      answer:
        "Yes. We have extensive experience integrating with ERPs (SAP, Oracle), PLM systems (Teamcenter, Windchill), CRMs, and proprietary internal systems via REST, GraphQL, SOAP, and event-driven architectures.",
    },
    {
      question: "How do you handle cloud infrastructure and DevOps?",
      answer:
        "We design and deploy cloud-native architectures on AWS, GCP, and Azure with containerization (Docker/Kubernetes), CI/CD pipelines, Infrastructure as Code (Terraform/Pulumi), and automated monitoring and scaling.",
    },
    {
      question: "How quickly can you deploy software development resources?",
      answer:
        "For contract staffing, we can deploy pre-vetted developers within 1–2 weeks. For dedicated project teams, onboarding and ramp-up typically takes 2–4 weeks depending on the skill mix and project complexity.",
    },
    {
      question: "Do you provide ongoing support after project delivery?",
      answer:
        "Yes. We offer SLA-backed maintenance and support packages including proactive monitoring, performance optimization, security patching, and continuous feature enhancements.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* ────────── Hero Section ────────── */}
      <section className="relative min-h-[600px] flex items-center bg-gradient-to-br from-indigo-50/60 via-white to-violet-50/40 text-gray-900 overflow-hidden">
        {/* Decorative animated elements — soft indigo / violet theme */}
        <div className="absolute top-40 right-32 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-pulse" />
        <div className="absolute bottom-0 left-20 w-96 h-96 bg-violet-300 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-pulse" />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-2xl opacity-10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight text-gray-900">
              Technology Solutions for{" "}
              <span className="bg-gradient-to-r from-indigo-500 to-violet-400 bg-clip-text text-transparent">
                Enterprise
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-10 text-gray-600 max-w-2xl leading-relaxed">
              Custom software development, system integration, scalable
              digital platforms, and AI-enabled automation — built for
              complex business environments and enterprise-grade performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-indigo-500 text-white px-8 py-3.5 rounded-lg font-semibold text-lg tracking-wider hover:bg-indigo-600 hover:shadow-2xl active:shadow-lg transition duration-200 shadow-lg"
              >
                Request a Consultation
              </Link>
              <Link
                href="#technology"
                className="border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-lg font-semibold text-base tracking-wider hover:bg-gray-100 hover:border-gray-900 active:bg-gray-200 transition duration-200"
              >
                Explore Our Capabilities
              </Link>
            </div>
          </div>
          {/* Right — Image */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/technology.png"
              alt="Technology Solutions"
              width={700}
              height={570}
              className="rounded-2xl object-contain drop-shadow-xl w-full max-w-[700px]"
              priority
            />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          Technology Solutions
         ════════════════════════════════════════════════════════════ */}
      <section
        id="technology"
        className="py-20 md:py-28 bg-white border-t border-gray-100"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-2">
              Software & Platforms
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Technology Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Enterprise software development, system integration, and scalable
              digital platforms built for complex business environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologySolutions.map((s, i) => (
              <ServiceCard key={i} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          Digital Transformation & Automation
         ════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-2">
              Modernize & Automate
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Digital Transformation & Automation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Eliminate manual processes, digitize enterprise operations, and
              unlock intelligence across your business with automation and
              AI-enabled solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {transformationServices.map((s, i) => (
              <ServiceCard key={i} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          Technology Resource Deployment & Staffing
         ════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-blue-400 font-semibold tracking-wider uppercase text-sm mb-2">
              Scale Your Technology Team
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Technology Resource Deployment
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Rapidly deploy skilled software developers, DevOps engineers, and
              data specialists to augment your in-house technology teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl">
              <div className="mb-5 p-4 w-fit bg-white/10 rounded-xl">
                <UserPlus className="w-10 h-10 text-blue-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Skilled Developer Deployment
              </h3>
              <p className="text-slate-300 mb-5 text-sm leading-relaxed">
                Access pre-vetted full-stack developers, backend engineers, and
                cloud specialists ready to integrate with your project teams.
              </p>
              <ul className="space-y-2.5">
                {[
                  "Full-Stack & Backend Developers",
                  "Cloud & DevOps Engineers",
                  "QA Engineers & Test Automation",
                  "AI / ML Engineers",
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
                  "Dedicated Development Team Model",
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
                development teams up or down based on project phases and demand.
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
              Deep technology expertise across complex, regulated, and
              high-stakes industries worldwide.
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
              A trusted technology partner committed to quality, operational
              reliability, and measurable business impact.
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
              Ready to Build Your Next Technology Platform?
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Whether you need a dedicated development team, enterprise system
              integration, or AI-powered automation — let&apos;s discuss how
              Infodra can accelerate your technology roadmap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition gap-2"
              >
                Partner with Us <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://www.infodra.ai/talent"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-slate-500 text-slate-200 rounded-lg font-semibold hover:border-white hover:text-white transition gap-2"
              >
                <BrainCircuit className="w-5 h-5" /> Explore our AI Talents
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
              Key information for technology decision-makers
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
