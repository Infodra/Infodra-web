import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getCaseStudiesByCategory } from "@/data/caseStudies";
import { CTASection } from "@/components/CTASection";
import {
  Cpu,
  Cog,
  ArrowRight,
  BrainCircuit,
  FileText,
  Languages,
  PenTool,
  Monitor,
  MapPin,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Case Studies | Engineering, AI & Digital Solutions | Infodra Technologies",
  description:
    "Explore proven engineering, AI-driven, and digital solutions delivered to global clients across manufacturing and technology domains by Infodra Technologies.",
  keywords: [
    "case studies",
    "engineering case studies",
    "AI solutions",
    "manufacturing solutions",
    "SolidWorks design optimization",
    "multilingual video localization",
    "AI documentation",
    "Infodra Technologies",
  ],
  openGraph: {
    title: "Case Studies | Infodra Technologies",
    description:
      "Proven Engineering, AI, and Digital Solutions Delivered to Global Clients.",
    url: "https://infodratechnologies.com/case-studies",
    type: "website",
  },
};

const categoryIcons: Record<string, React.ReactNode> = {
  "ai-multilingual-video-localization": (
    <Languages className="w-6 h-6 text-teal-600" />
  ),
  "ai-user-manual-generation": (
    <FileText className="w-6 h-6 text-teal-600" />
  ),
  "mechanical-design-optimization-solidworks": (
    <PenTool className="w-6 h-6 text-teal-600" />
  ),
  "workforce-tracking-stafftrack": (
    <MapPin className="w-6 h-6 text-teal-600" />
  ),
  "rapid-cad-talent-deployment": (
    <Users className="w-6 h-6 text-teal-600" />
  ),
};

const statusColor: Record<string, string> = {
  "Under evaluation / Pilot phase":
    "bg-amber-100 text-amber-800 border-amber-200",
  "Prototype completed": "bg-blue-100 text-blue-800 border-blue-200",
  "Proposal submitted": "bg-slate-100 text-slate-700 border-slate-200",
  "Deployed and actively used by client":
    "bg-green-100 text-green-800 border-green-200",
  Completed: "bg-green-100 text-green-800 border-green-200",
  "Completed / Successfully deployed":
    "bg-green-100 text-green-800 border-green-200",
  Deployed: "bg-green-100 text-green-800 border-green-200",
};

export default function CaseStudiesPage() {
  const engineeringStudies = getCaseStudiesByCategory("engineering");
  const aiStudies = getCaseStudiesByCategory("ai-technology");
  const technologyStudies = getCaseStudiesByCategory("technology");
  const resourcingStudies = getCaseStudiesByCategory("resourcing");

  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative min-h-[500px] flex items-center bg-gradient-to-br from-teal-50/60 via-white to-cyan-50/40 text-gray-900 overflow-hidden">
        <div className="absolute top-40 right-32 w-80 h-80 bg-teal-300 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-pulse" />
        <div className="absolute bottom-0 left-20 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-pulse" />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-2xl opacity-10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <div>
            <p className="text-teal-600 font-semibold tracking-wider uppercase text-sm mb-4">
              Client Engagements &amp; Delivered Projects
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 leading-tight tracking-tight">
              Case{" "}
              <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
                Studies
              </span>
            </h1>
            <p className="text-lg md:text-xl text-teal-700 font-medium mb-4">
              Proven Engineering, AI, and Digital Solutions Delivered
              <br />
              to Global Clients
            </p>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl leading-relaxed">
              Showcase of our experience in delivering engineering, AI-driven, and
              digital solutions across manufacturing and technology domains.
            </p>
          </div>
          {/* Right — Image */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/casestudy.jpg"
              alt="Case Studies"
              width={700}
              height={570}
              className="rounded-2xl object-contain drop-shadow-xl w-full max-w-[700px]"
              priority
            />
          </div>
        </div>
      </section>

      {/* AI & TECHNOLOGY CASE STUDIES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-teal-100 rounded-lg">
              <BrainCircuit className="w-6 h-6 text-teal-700" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              AI &amp; Technology Case Studies
            </h2>
          </div>
          <p className="text-gray-600 mb-10 max-w-2xl text-lg">
            AI-powered solutions solving real-world manufacturing and enterprise
            challenges.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="group block"
              >
                <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-teal-200 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2.5 bg-teal-50 rounded-xl">
                      {categoryIcons[study.slug] || (
                        <Cpu className="w-6 h-6 text-teal-600" />
                      )}
                    </div>
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                        statusColor[study.status] ||
                        "bg-gray-100 text-gray-600 border-gray-200"
                      }`}
                    >
                      {study.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors leading-snug">
                    {study.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3 font-medium">
                    {study.client}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                    {study.shortDescription}
                  </p>

                  <div className="flex items-center gap-2 mt-6 text-teal-600 font-semibold text-sm group-hover:gap-3 transition-all">
                    View Case Study
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ENGINEERING CASE STUDIES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-teal-100 rounded-lg">
              <Cog className="w-6 h-6 text-teal-700" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Engineering Case Studies
            </h2>
          </div>
          <p className="text-gray-600 mb-10 max-w-2xl text-lg">
            Design optimization, CAD engineering, and manufacturing solutions
            for industrial clients.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {engineeringStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="group block"
              >
                <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-teal-200 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2.5 bg-teal-50 rounded-xl">
                      {categoryIcons[study.slug] || (
                        <Cog className="w-6 h-6 text-teal-600" />
                      )}
                    </div>
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                        statusColor[study.status] ||
                        "bg-gray-100 text-gray-600 border-gray-200"
                      }`}
                    >
                      {study.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors leading-snug">
                    {study.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3 font-medium">
                    {study.client}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                    {study.shortDescription}
                  </p>

                  <div className="flex items-center gap-2 mt-6 text-teal-600 font-semibold text-sm group-hover:gap-3 transition-all">
                    View Case Study
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY CASE STUDIES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-teal-100 rounded-lg">
              <Monitor className="w-6 h-6 text-teal-700" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Technology Case Studies
            </h2>
          </div>
          <p className="text-gray-600 mb-10 max-w-2xl text-lg">
            SaaS platforms, web applications, and digital tools built for
            operational efficiency.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologyStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="group block"
              >
                <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-teal-200 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2.5 bg-teal-50 rounded-xl">
                      {categoryIcons[study.slug] || (
                        <Monitor className="w-6 h-6 text-teal-600" />
                      )}
                    </div>
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                        statusColor[study.status] ||
                        "bg-gray-100 text-gray-600 border-gray-200"
                      }`}
                    >
                      {study.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors leading-snug">
                    {study.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3 font-medium">
                    {study.client}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                    {study.shortDescription}
                  </p>

                  <div className="flex items-center gap-2 mt-6 text-teal-600 font-semibold text-sm group-hover:gap-3 transition-all">
                    View Case Study
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* RESOURCING CASE STUDIES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-teal-100 rounded-lg">
              <Users className="w-6 h-6 text-teal-700" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Resourcing Case Studies
            </h2>
          </div>
          <p className="text-gray-600 mb-10 max-w-2xl text-lg">
            Talent deployment, engineering staffing, and rapid resourcing
            solutions for time-critical projects.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resourcingStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="group block"
              >
                <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-teal-200 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2.5 bg-teal-50 rounded-xl">
                      {categoryIcons[study.slug] || (
                        <Users className="w-6 h-6 text-teal-600" />
                      )}
                    </div>
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                        statusColor[study.status] ||
                        "bg-gray-100 text-gray-600 border-gray-200"
                      }`}
                    >
                      {study.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors leading-snug">
                    {study.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3 font-medium">
                    {study.client}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                    {study.shortDescription}
                  </p>

                  <div className="flex items-center gap-2 mt-6 text-teal-600 font-semibold text-sm group-hover:gap-3 transition-all">
                    View Case Study
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <CTASection
        title="Let's Work Together"
        description="Looking for engineering, AI, or digital solutions? Let's discuss your requirements."
        primaryCTA={{
          text: "Request Consultation",
          href: "/contact",
        }}
        secondaryCTA={{
          text: "Contact Us",
          href: "/contact",
        }}
      />
    </main>
  );
}
