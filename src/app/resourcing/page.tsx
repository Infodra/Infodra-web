import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Users,
  Code2,
  Wrench,
  Building2,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Briefcase,
  Target,
  Clock,
  Shield,
  TrendingUp,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering & IT Resourcing Services | Infodra Technologies",
  description:
    "Infodra Technologies provides skilled engineering and IT professionals for project support, contract staffing, and technical resource deployment.",
  keywords: [
    "resourcing services",
    "IT staffing",
    "engineering professionals",
    "technical manpower",
    "contract staffing",
    "resource deployment",
    "IT recruitment",
    "engineering staff",
    "Infodra Technologies",
  ],
  openGraph: {
    title: "Engineering & IT Resourcing Services | Infodra Technologies",
    description:
      "Skilled engineering and IT professionals for your business needs. Reliable resource deployment and flexible staffing models.",
    url: "https://infodra.com/resourcing",
    type: "website",
  },
};

interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface BenefitCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: ServiceCard[] = [
  {
    icon: <Wrench className="w-12 h-12 text-blue-600" />,
    title: "Engineering Resource Deployment",
    description:
      "Provide mechanical, design, and technical engineers for project execution. Experienced professionals ready to support your engineering initiatives.",
  },
  {
    icon: <Code2 className="w-12 h-12 text-blue-600" />,
    title: "IT & Software Professionals",
    description:
      "Supply developers, analysts, and IT specialists for digital projects. Skilled talent in various technologies and programming languages.",
  },
  {
    icon: <Clock className="w-12 h-12 text-blue-600" />,
    title: "Contract & Temporary Staffing",
    description:
      "Flexible hiring models to meet short-term and long-term project demands. Scalable solutions for your varying business needs.",
  },
  {
    icon: <Building2 className="w-12 h-12 text-blue-600" />,
    title: "Dedicated Resource Teams",
    description:
      "Build complete technical teams tailored to your specific requirements. Full-service team support for complex projects.",
  },
];

const industriesSupported = [
  { icon: <TrendingUp className="w-6 h-6" />, name: "Automotive" },
  { icon: <Building2 className="w-6 h-6" />, name: "Manufacturing" },
  { icon: <Code2 className="w-6 h-6" />, name: "Information Technology" },
  { icon: <Wrench className="w-6 h-6" />, name: "Engineering Services" },
  { icon: <Briefcase className="w-6 h-6" />, name: "Industrial Projects" },
];

const benefits: BenefitCard[] = [
  {
    icon: <CheckCircle2 className="w-8 h-8 text-green-500" />,
    title: "Skilled & Pre-Screened Professionals",
    description:
      "All our resources undergo rigorous screening and skill verification",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-green-500" />,
    title: "Flexible Engagement Models",
    description:
      "Choose from full-time, contract, or project-based staffing options",
  },
  {
    icon: <Clock className="w-8 h-8 text-green-500" />,
    title: "Fast Resource Deployment",
    description: "Quick turnaround time to get the right professionals on board",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-green-500" />,
    title: "Industry-Ready Talent",
    description:
      "Experience across automotive, IT, manufacturing, and engineering sectors",
  },
  {
    icon: <Shield className="w-8 h-8 text-green-500" />,
    title: "Reliable Long-Term Support",
    description:
      "Dedicated account management and ongoing HR support throughout engagement",
  },
  {
    icon: <Target className="w-8 h-8 text-green-500" />,
    title: "Customized Solutions",
    description:
      "Tailored resourcing strategies to match your specific project requirements",
  },
];

export default function ResourcingServices() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1️⃣ HERO SECTION */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-gray-50 pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Skilled Professionals When You Need Them
              </h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Reliable engineering and IT manpower solutions for your business
                and project needs. Get access to pre-screened, industry-ready
                professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  Request Resources
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <a
                  href="https://wa.me/918148146785"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200"
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-96 md:h-full flex items-center justify-center">
              <div className="relative w-full h-96 bg-gradient-to-br from-blue-200 to-blue-100 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80"
                  alt="Engineering and IT Professionals - Skilled Technical Talent"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2️⃣ INTRO SECTION */}
      <section className="py-16 md:py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            Infodra Technologies specializes in providing qualified engineering
            and IT professionals to support your business projects and technical
            initiatives. Whether you need short-term contract staff, dedicated
            teams, or individual specialists, we have the expertise and resources
            to meet your requirements. Our professionals bring industry experience,
            technical skills, and a commitment to project success.
          </p>
        </div>
      </section>

      {/* 3️⃣ SERVICES SECTION */}
      <section
        id="services"
        className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white border-t border-gray-100"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Resourcing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive staffing solutions tailored to your project and
              business requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-400 transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                <div className="mb-4 p-4 w-fit bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4️⃣ INDUSTRIES WE SUPPORT */}
      <section className="py-20 md:py-32 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Support
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience across multiple sectors with industry-specific expertise
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {industriesSupported.map((industry, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-gray-50 p-8 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg text-center"
              >
                <div className="flex justify-center mb-4 text-blue-600">
                  {industry.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {industry.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5️⃣ WHY CHOOSE INFODRA */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Infodra for Resourcing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Partner with us for reliable, skilled, and committed technical
              professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="py-20 md:py-32 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Work
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A straightforward process to meet your staffing needs quickly and
              efficiently
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Understand Your Needs",
                description: "Discuss your project requirements and team composition",
              },
              {
                step: "02",
                title: "Find Matching Talent",
                description:
                  "We identify and screen candidates with the right skills",
              },
              {
                step: "03",
                title: "Quick Onboarding",
                description: "Fast deployment of professionals to your project",
              },
              {
                step: "04",
                title: "Ongoing Support",
                description:
                  "Continuous HR support and resource management throughout",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                  {process.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {process.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESOURCE TYPES SECTION */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Types of Resources We Provide
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
              <Wrench className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Engineering Professionals
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                  <span>Mechanical Engineers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                  <span>Design Engineers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                  <span>CAD Specialists</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                  <span>Technical Engineers</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
              <Code2 className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                IT Professionals
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                  <span>Software Developers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                  <span>Full Stack Developers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                  <span>QA Specialists</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                  <span>Data Analysts</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
              <Briefcase className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Specialized Support
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                  <span>Technical Support Staff</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                  <span>Business Analysts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                  <span>Project Coordinators</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                  <span>Dedicated Teams</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6️⃣ FINAL CTA SECTION */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-600 to-blue-700 text-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Looking for Skilled Technical Resources?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl mx-auto">
            Whether you need short-term contract staff, dedicated teams, or
            individual specialists, we have the talent and expertise to support
            your projects and business objectives.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://wa.me/918148146785"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 bg-white text-blue-600 font-bold text-lg rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg"
            >
              <MessageCircle className="mr-3 w-6 h-6" />
              Chat on WhatsApp: 81481 46785
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Send a Proposal Request
              <ArrowRight className="ml-3 w-6 h-6" />
            </Link>
          </div>

          <p className="text-blue-100 text-sm mt-8">
            Available Monday to Friday, 9 AM - 6 PM IST
          </p>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 md:py-32 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question:
                  "How quickly can you provide qualified professionals?",
                answer:
                  "We typically can match and deploy qualified professionals within 1-2 weeks, depending on the complexity of requirements and specific skill set needed.",
              },
              {
                question: "What engagement models do you offer?",
                answer:
                  "We offer flexible models including full-time permanent staff, contract-based professionals, dedicated teams, and project-based resources to suit your business needs.",
              },
              {
                question: "How do you ensure the quality of professionals?",
                answer:
                  "All our resources undergo rigorous screening, skill verification, background checks, and experience validation before being assigned to projects.",
              },
              {
                question: "Can you provide resources for long-term projects?",
                answer:
                  "Yes, we provide long-term dedicated support with ongoing HR management, performance monitoring, and team continuity throughout your project.",
              },
              {
                question: "What industries have you supported?",
                answer:
                  "We have extensive experience across automotive, manufacturing, IT, engineering services, and industrial sectors with industry-specific expertise.",
              },
              {
                question: "Do you provide any training or onboarding support?",
                answer:
                  "We ensure smooth onboarding and can coordinate training and project familiarization to help professionals become productive quickly.",
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="group bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors cursor-pointer"
              >
                <summary className="flex items-center justify-between font-semibold text-gray-900 text-lg">
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
