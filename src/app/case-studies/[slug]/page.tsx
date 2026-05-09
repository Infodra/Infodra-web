import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { caseStudies, getCaseStudyBySlug } from "@/data/caseStudies";
import { CTASection } from "@/components/CTASection";
import {
  ArrowLeft,
  ArrowRight,
  Target,
  AlertTriangle,
  ClipboardList,
  Lightbulb,
  BarChart3,
  Activity,
  Award,
  Building2,
} from "lucide-react";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return { title: "Case Study Not Found" };

  return {
    title: `${study.title} | Case Studies | Infodra Technologies`,
    description: study.shortDescription,
    openGraph: {
      title: study.title,
      description: study.shortDescription,
      url: `https://infodratechnologies.com/case-studies/${study.slug}`,
      type: "article",
    },
  };
}

const statusColor: Record<string, string> = {
  "Under evaluation / Pilot phase":
    "bg-amber-100 text-amber-800 border-amber-300",
  "Prototype completed": "bg-blue-100 text-blue-800 border-blue-300",
  "Proposal submitted": "bg-slate-100 text-slate-700 border-slate-300",
  "Deployed and actively used by client":
    "bg-green-100 text-green-800 border-green-300",
  Completed: "bg-green-100 text-green-800 border-green-300",
  "Completed / Successfully deployed":
    "bg-green-100 text-green-800 border-green-300",
  Deployed: "bg-green-100 text-green-800 border-green-300",
};

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  const accentColor =
    study.category === "ai-technology" ? "teal" : study.category === "technology" ? "teal" : study.category === "resourcing" ? "teal" : "cyan";

  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-[400px] flex items-center bg-gradient-to-br from-teal-50/60 via-white to-cyan-50/40 text-gray-900 overflow-hidden">
        <div className="absolute top-40 right-32 w-80 h-80 bg-teal-300 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-pulse" />
        <div className="absolute bottom-0 left-20 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-pulse" />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-2xl opacity-10" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 mb-8 transition font-medium text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${
                study.category === "ai-technology"
                  ? "bg-teal-100 text-teal-700 border-teal-200"
                  : study.category === "technology"
                  ? "bg-teal-100 text-teal-700 border-teal-200"
                  : study.category === "resourcing"
                  ? "bg-teal-100 text-teal-700 border-teal-200"
                  : "bg-cyan-100 text-cyan-700 border-cyan-200"
              }`}
            >
              {study.category === "ai-technology"
                ? "AI & Technology"
                : study.category === "technology"
                ? "SaaS Platform / Web Application"
                : study.category === "resourcing"
                ? "Talent Deployment / Engineering Staffing"
                : "Engineering"}
            </span>
            <span
              className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${
                statusColor[study.status] ||
                "bg-gray-100 text-gray-600 border-gray-200"
              }`}
            >
              {study.status}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight tracking-tight">
            {study.title}
          </h1>

          <div className="flex items-center gap-2 text-gray-500">
            <Building2 className="w-5 h-5" />
            <span className="text-base font-medium">{study.client}</span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {/* OBJECTIVE */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`p-2 rounded-lg ${
                    accentColor === "teal"
                      ? "bg-teal-100"
                      : "bg-cyan-100"
                  }`}
                >
                  <Target
                    className={`w-5 h-5 ${
                      accentColor === "teal"
                        ? "text-teal-700"
                        : "text-cyan-700"
                    }`}
                  />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Objective</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                {study.objective}
              </p>
            </div>

            {/* PROBLEM / CHALLENGES */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-red-100">
                  <AlertTriangle className="w-5 h-5 text-red-700" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">
                  Problem / Challenges
                </h2>
              </div>
              <ul className="space-y-3">
                {study.problems.map((problem, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-red-400 flex-shrink-0" />
                    <span className="text-gray-700 leading-relaxed">
                      {problem}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* SCOPE OF WORK (if present) */}
            {study.scopeOfWork && (
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-indigo-100">
                    <ClipboardList className="w-5 h-5 text-indigo-700" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Scope of Work
                  </h2>
                </div>
                <ul className="space-y-3">
                  {study.scopeOfWork.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0" />
                      <span className="text-gray-700 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* SOLUTION DELIVERED */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`p-2 rounded-lg ${
                    accentColor === "teal"
                      ? "bg-teal-100"
                      : "bg-cyan-100"
                  }`}
                >
                  <Lightbulb
                    className={`w-5 h-5 ${
                      accentColor === "teal"
                        ? "text-teal-700"
                        : "text-cyan-700"
                    }`}
                  />
                </div>
                <h2 className="text-xl font-bold text-gray-900">
                  Solution Delivered
                </h2>
              </div>
              <ul className="space-y-3">
                {study.solution.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${
                        accentColor === "teal"
                          ? "bg-teal-400"
                          : "bg-cyan-400"
                      }`}
                    />
                    <span className="text-gray-700 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RESULTS */}
            <div
              className={`rounded-2xl border p-8 ${
                accentColor === "teal"
                  ? "bg-teal-50 border-teal-200"
                  : "bg-cyan-50 border-cyan-200"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`p-2 rounded-lg ${
                    accentColor === "teal"
                      ? "bg-teal-200"
                      : "bg-cyan-200"
                  }`}
                >
                  <BarChart3
                    className={`w-5 h-5 ${
                      accentColor === "teal"
                        ? "text-teal-800"
                        : "text-cyan-800"
                    }`}
                  />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Results</h2>
              </div>
              <ul className="space-y-3">
                {study.results.map((result, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 flex-shrink-0 text-lg ${
                        accentColor === "teal"
                          ? "text-teal-600"
                          : "text-cyan-600"
                      }`}
                    >
                      ✓
                    </span>
                    <span className="text-gray-800 font-medium leading-relaxed">
                      {result}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* STATUS & KEY VALUE */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gray-100">
                    <Activity className="w-5 h-5 text-gray-700" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Status</h2>
                </div>
                <span
                  className={`inline-block text-sm font-semibold px-4 py-2 rounded-full border ${
                    statusColor[study.status] ||
                    "bg-gray-100 text-gray-600 border-gray-200"
                  }`}
                >
                  {study.status}
                </span>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`p-2 rounded-lg ${
                      accentColor === "teal"
                        ? "bg-teal-100"
                        : "bg-cyan-100"
                    }`}
                  >
                    <Award
                      className={`w-5 h-5 ${
                        accentColor === "teal"
                          ? "text-teal-700"
                          : "text-cyan-700"
                      }`}
                    />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Key Value Delivered
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {study.keyValueDelivered}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED CASE STUDIES */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies
              .filter((cs) => cs.slug !== study.slug)
              .slice(0, 2)
              .map((related) => (
                <Link
                  key={related.slug}
                  href={`/case-studies/${related.slug}`}
                  className="group block"
                >
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-teal-200 transition-all duration-300 h-full flex flex-col">
                    <span className="text-xs font-semibold text-teal-600 uppercase tracking-wider mb-2">
                      {related.category === "ai-technology"
                        ? "AI & Technology"
                        : related.category === "technology"
                        ? "Technology"
                        : related.category === "resourcing"
                        ? "Resourcing"
                        : "Engineering"}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors leading-snug">
                      {related.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                      {related.shortDescription}
                    </p>
                    <div className="flex items-center gap-2 mt-4 text-teal-600 font-semibold text-sm group-hover:gap-3 transition-all">
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
