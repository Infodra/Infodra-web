import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Factory,
  CheckCircle2,
  Users,
  Wrench,
  Cog,
  Shield,
  TrendingUp,
  Layers,
  ArrowRight,
  Building2,
  Cpu,
  Handshake,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Manufacturing Technical Support | Infodra Technologies",
  description:
    "Deploy skilled technical professionals for manufacturing operations, quality inspection, production support, maintenance, and shop-floor activities. Infodra Technologies provides enterprise-grade workforce solutions for automotive, industrial, and manufacturing companies.",
  keywords: [
    "manufacturing technical resources",
    "quality inspection",
    "production support",
    "maintenance technicians",
    "shop floor support",
    "industrial workforce deployment",
    "Infodra Technologies",
  ],
  openGraph: {
    title: "Manufacturing Technical Support | Infodra Technologies",
    description:
      "Deploy skilled technical professionals for manufacturing operations, quality inspection, production support, maintenance, and shop-floor activities.",
    url: "https://infodra.com/manufacturing",
    type: "website",
  },
};

export default function ManufacturingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center bg-gradient-to-br from-amber-50/60 via-white to-yellow-50/40 text-gray-900 overflow-hidden">
        <div className="absolute top-32 right-32 w-80 h-80 bg-amber-200 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-pulse" />
        <div className="absolute bottom-0 left-20 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-pulse" />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-amber-100 rounded-full mix-blend-multiply filter blur-2xl opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight text-gray-900">
              Manufacturing Technical Support
            </h1>
            <p className="text-lg md:text-xl mb-10 text-gray-600 max-w-2xl leading-relaxed">
              Deploy skilled technical professionals for manufacturing operations, quality inspection, production support, maintenance, and shop-floor activities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#resources"
                className="bg-amber-500 text-white px-10 py-4 rounded-lg font-semibold text-xl tracking-wider hover:bg-amber-600 hover:shadow-2xl active:shadow-lg transition duration-200 shadow-lg"
              >
                Explore Resources
              </Link>
              <Link
                href="/contact"
                className="border-2 border-gray-900 text-gray-900 px-8 py-3.5 rounded-lg font-semibold text-lg tracking-wider hover:bg-gray-100 active:bg-gray-200 transition duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
          {/* Right — Visual */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/plant.png"
              alt="Modern manufacturing plant"
              width={700}
              height={570}
              className="rounded-2xl object-contain drop-shadow-xl w-full max-w-[700px]"
              priority
            />
          </div>
        </div>
      </section>

      {/* Resource Categories Section */}
      <section id="resources" className="py-20 md:py-28 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-amber-600 font-semibold tracking-wider uppercase text-sm mb-2">
              Resource Categories
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Specialized Manufacturing Resources
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Deploy pre-screened technical professionals for every stage of your manufacturing operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Quality Inspection Resources */}
            <div className="relative group p-8 rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-amber-50/40 to-white hover:border-amber-400 hover:shadow-xl transition-all flex flex-col">
              <Shield className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Inspection Resources</h3>
              <p className="text-gray-600 mb-4 text-sm">Ensure product quality and compliance at every stage of production.</p>
              <ul className="space-y-2 mb-6">
                {[
                  "Quality Inspectors",
                  "Incoming Inspection Support",
                  "Final Inspection Technicians",
                  "Production Quality Support",
                  "Dimensional Inspection Resources",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 text-white rounded-lg font-semibold hover:bg-amber-600 transition text-sm mt-auto">
                Request Quality Resources <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            {/* Production & Shop Floor Support */}
            <div className="relative group p-8 rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-yellow-50/40 to-white hover:border-yellow-400 hover:shadow-xl transition-all flex flex-col">
              <Wrench className="w-12 h-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Production & Shop Floor Support</h3>
              <p className="text-gray-600 mb-4 text-sm">Boost productivity and streamline shop floor operations with skilled support staff.</p>
              <ul className="space-y-2 mb-6">
                {[
                  "Production Support Technicians",
                  "Assembly Line Support",
                  "Shop Floor Coordinators",
                  "Machine Support Technicians",
                  "Manufacturing Operators",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition text-sm mt-auto">
                Request Production Support <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            {/* Manufacturing Technicians */}
            <div className="relative group p-8 rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-orange-50/40 to-white hover:border-orange-400 hover:shadow-xl transition-all flex flex-col">
              <Cog className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Manufacturing Technicians</h3>
              <p className="text-gray-600 mb-4 text-sm">Expertise in machining, setup, and process optimization for manufacturing excellence.</p>
              <ul className="space-y-2 mb-6">
                {[
                  "Machining Technicians",
                  "Machine Setup Support",
                  "Tool Room Support",
                  "Manufacturing Process Technicians",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition text-sm mt-auto">
                Request Technicians <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            {/* Maintenance & Technical Support */}
            <div className="relative group p-8 rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-lime-50/40 to-white hover:border-lime-400 hover:shadow-xl transition-all flex flex-col">
              <Cpu className="w-12 h-12 text-lime-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Maintenance & Technical Support</h3>
              <p className="text-gray-600 mb-4 text-sm">Keep your plant running smoothly with expert maintenance and technical support staff.</p>
              <ul className="space-y-2 mb-6">
                {[
                  "Mechanical Maintenance Technicians",
                  "Electrical Maintenance Support",
                  "Equipment Support Technicians",
                  "Plant Technical Assistants",
                  "Preventive Maintenance Support",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-lime-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 bg-lime-500 text-white rounded-lg font-semibold hover:bg-lime-600 transition text-sm mt-auto">
                Request Maintenance Support <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Supported Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-amber-600 font-semibold tracking-wider uppercase text-sm mb-2">
              Industries Supported
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Serving Key Manufacturing Sectors
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Infodra delivers technical workforce solutions for leading manufacturing and industrial organizations.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="flex flex-col items-center">
              <Building2 className="w-10 h-10 text-amber-500 mb-2" />
              <span className="font-semibold text-gray-800">Automotive</span>
            </div>
            <div className="flex flex-col items-center">
              <Factory className="w-10 h-10 text-yellow-500 mb-2" />
              <span className="font-semibold text-gray-800">Manufacturing</span>
            </div>
            <div className="flex flex-col items-center">
              <Cog className="w-10 h-10 text-orange-500 mb-2" />
              <span className="font-semibold text-gray-800">Industrial Equipment</span>
            </div>
            <div className="flex flex-col items-center">
              <Wrench className="w-10 h-10 text-lime-500 mb-2" />
              <span className="font-semibold text-gray-800">Precision Engineering</span>
            </div>
            <div className="flex flex-col items-center">
              <TrendingUp className="w-10 h-10 text-cyan-500 mb-2" />
              <span className="font-semibold text-gray-800">Heavy Engineering</span>
            </div>
            <div className="flex flex-col items-center">
              <Layers className="w-10 h-10 text-indigo-500 mb-2" />
              <span className="font-semibold text-gray-800">Industrial Automation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Models Section */}
      <section className="py-20 md:py-28 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-amber-600 font-semibold tracking-wider uppercase text-sm mb-2">
              Deployment Models
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Flexible Workforce Deployment Options
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the right engagement model for your operational needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-8 rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-amber-50/40 to-white hover:border-amber-400 hover:shadow-xl transition-all">
              <Users className="w-10 h-10 text-amber-600 mb-4" />
              <h3 className="font-bold text-lg mb-2">Onsite Deployment</h3>
              <p className="text-gray-600 text-sm mb-2 text-center">Deploy technical professionals directly at your plant or production site for hands-on support.</p>
            </div>
            <div className="flex flex-col items-center p-8 rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-yellow-50/40 to-white hover:border-yellow-400 hover:shadow-xl transition-all">
              <Handshake className="w-10 h-10 text-yellow-600 mb-4" />
              <h3 className="font-bold text-lg mb-2">Offshore Support</h3>
              <p className="text-gray-600 text-sm mb-2 text-center">Access remote technical support and process monitoring from our expert teams.</p>
            </div>
            <div className="flex flex-col items-center p-8 rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-orange-50/40 to-white hover:border-orange-400 hover:shadow-xl transition-all">
              <Shield className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="font-bold text-lg mb-2">Hybrid Resource Model</h3>
              <p className="text-gray-600 text-sm mb-2 text-center">Combine onsite and offshore resources for optimal flexibility and cost-effectiveness.</p>
            </div>
            <div className="flex flex-col items-center p-8 rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-lime-50/40 to-white hover:border-lime-400 hover:shadow-xl transition-all">
              <Clock className="w-10 h-10 text-lime-600 mb-4" />
              <h3 className="font-bold text-lg mb-2">Contract-Based Staffing</h3>
              <p className="text-gray-600 text-sm mb-2 text-center">Flexible contract terms for project-based or seasonal workforce requirements.</p>
            </div>
            <div className="flex flex-col items-center p-8 rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-cyan-50/40 to-white hover:border-cyan-400 hover:shadow-xl transition-all">
              <Layers className="w-10 h-10 text-cyan-600 mb-4" />
              <h3 className="font-bold text-lg mb-2">Dedicated Technical Teams</h3>
              <p className="text-gray-600 text-sm mb-2 text-center">Build a dedicated team of technical professionals aligned to your long-term operational goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Infodra Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-amber-600 font-semibold tracking-wider uppercase text-sm mb-2">
              Why Infodra
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Your Technical Workforce Partner
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Enterprise-grade solutions for manufacturing and industrial workforce deployment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <CheckCircle2 className="w-10 h-10 text-amber-600 mb-4" />, title: "Pre-screened Technical Professionals", desc: "All resources are thoroughly vetted for skills, experience, and industry fit." },
              { icon: <Clock className="w-10 h-10 text-yellow-600 mb-4" />, title: "Fast Deployment Support", desc: "Rapid resource mobilization to meet urgent operational needs." },
              { icon: <Users className="w-10 h-10 text-orange-600 mb-4" />, title: "Flexible Workforce Scaling", desc: "Scale your technical workforce up or down as your production demands change." },
              { icon: <Cog className="w-10 h-10 text-lime-600 mb-4" />, title: "Engineering & Manufacturing Expertise", desc: "Deep domain knowledge in manufacturing, engineering, and industrial operations." },
              { icon: <Handshake className="w-10 h-10 text-cyan-600 mb-4" />, title: "Dedicated Coordination Support", desc: "Single-point coordination for seamless deployment and ongoing support." },
              { icon: <Shield className="w-10 h-10 text-indigo-600 mb-4" />, title: "Industry-Aligned Resource Matching", desc: "Resources matched to your exact technical and operational requirements." },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center p-8 rounded-2xl border-2 border-gray-200 bg-white hover:border-amber-400 hover:shadow-xl transition-all">
                {item.icon}
                <h3 className="font-bold text-lg mb-2 text-center">{item.title}</h3>
                <p className="text-gray-600 text-sm text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-28 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-amber-600 font-semibold tracking-wider uppercase text-sm mb-2">
              Our Process
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Seamless Resource Deployment
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven 4-step process for reliable technical workforce delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Users className="w-10 h-10 text-amber-600 mb-4 mx-auto" />, title: "Requirement Understanding", desc: "We analyze your operational needs and define the technical resource profile." },
              { icon: <CheckCircle2 className="w-10 h-10 text-yellow-600 mb-4 mx-auto" />, title: "Talent Screening & Matching", desc: "Pre-screened professionals are matched to your requirements for best fit." },
              { icon: <Handshake className="w-10 h-10 text-orange-600 mb-4 mx-auto" />, title: "Deployment & Onboarding", desc: "Rapid deployment and seamless onboarding into your production environment." },
              { icon: <Shield className="w-10 h-10 text-lime-600 mb-4 mx-auto" />, title: "Ongoing Coordination & Support", desc: "Continuous support and coordination for optimal workforce performance." },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center p-8 rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-amber-50/40 to-white hover:border-amber-400 hover:shadow-xl transition-all">
                {step.icon}
                <h3 className="font-bold text-lg mb-2 text-center">{step.title}</h3>
                <p className="text-gray-600 text-sm text-center">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-amber-50/60 via-white to-yellow-50/40 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Looking for Manufacturing Technical Resources?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Connect with Infodra Technologies for reliable deployment of skilled technical professionals aligned to your production and operational needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-amber-500 text-white px-10 py-4 rounded-lg font-semibold text-xl tracking-wider hover:bg-amber-600 hover:shadow-2xl active:shadow-lg transition duration-200 shadow-lg"
            >
              Contact Us
            </Link>
            <Link
              href="/contact"
              className="border-2 border-gray-900 text-gray-900 px-8 py-3.5 rounded-lg font-semibold text-lg tracking-wider hover:bg-gray-100 active:bg-gray-200 transition duration-200"
            >
              Request Resources
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
