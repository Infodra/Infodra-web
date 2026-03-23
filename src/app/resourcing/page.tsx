import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Wrench,
  Code2,
  CheckCircle2,
  Users,
  Clock,
  Shield,
  Handshake,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Resource Solutions | Engineering & Technology Staffing | Infodra Technologies",
  description:
    "Deploy skilled engineering and technology professionals on demand. Choose your specialization — CAD engineers, software developers, DevOps, AI/ML — with flexible engagement models.",
  keywords: [
    "resourcing services",
    "engineering staffing",
    "technology staffing",
    "CAD engineers",
    "software developers",
    "contract staffing",
    "resource deployment",
    "Infodra Technologies",
  ],
  openGraph: {
    title: "Resource Solutions | Engineering & Technology Staffing | Infodra Technologies",
    description:
      "Deploy skilled engineering and technology professionals on demand with flexible engagement models.",
    url: "https://infodra.com/resourcing",
    type: "website",
  },
};

export default function ResourcingServices() {
  return (
    <main className="min-h-screen bg-white">
      {/* ────────── Hero Section ────────── */}
      <section className="relative min-h-[600px] flex items-center bg-gradient-to-br from-teal-50/60 via-white to-cyan-50/40 text-gray-900 overflow-hidden">
        <div className="absolute top-40 right-32 w-80 h-80 bg-teal-300 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-pulse" />
        <div className="absolute bottom-0 left-20 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-pulse" />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-2xl opacity-10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight text-gray-900">
              Resource Solutions by{" "}
              <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
                Infodra
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-10 text-gray-600 max-w-2xl leading-relaxed">
              Deploy skilled professionals on demand — choose your specialization
              below and explore our dedicated Engineering or Technology resource
              capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#choose"
                className="bg-teal-500 text-white px-10 py-4 rounded-lg font-semibold text-xl tracking-wider hover:bg-teal-600 hover:shadow-2xl active:shadow-lg transition duration-200 shadow-lg"
              >
                Find Your Resources
              </Link>
              <Link
                href="/contact"
                className="border-2 border-gray-900 text-gray-900 px-8 py-3.5 rounded-lg font-semibold text-lg tracking-wider hover:bg-gray-100 active:bg-gray-200 transition duration-200"
              >
                Get in Touch
              </Link>
            </div>
          </div>
          {/* Right — Image */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/resourcing.png"
              alt="Resource Solutions"
              width={700}
              height={570}
              className="rounded-2xl object-contain drop-shadow-xl w-full max-w-[700px]"
              priority
            />
          </div>
        </div>
      </section>

      {/* ────────── Choose Your Specialization ────────── */}
      <section id="choose" className="py-20 md:py-28 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-teal-600 font-semibold tracking-wider uppercase text-sm mb-2">
              Choose Your Specialization
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Resources Do You Need?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide specialized professionals across two core domains.
              Select the area that matches your project requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Engineering Card */}
            <div className="relative group p-10 rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-sky-50/40 to-white hover:border-sky-400 hover:shadow-xl transition-all">
              <div className="mb-6 p-4 w-fit bg-sky-100 rounded-xl">
                <Wrench className="w-12 h-12 text-sky-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Engineering Resources
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                CAD designers, mechanical engineers, product design specialists,
                and technical drafters with expertise in CATIA, SolidWorks,
                Siemens NX, and Creo.
              </p>
              <ul className="space-y-2.5 mb-8">
                {[
                  "CAD / Design Engineers (CATIA, NX, SW, Creo)",
                  "Mechanical & Product Engineers",
                  "Drafters & Documentation Specialists",
                  "DFM / Value Engineering Experts",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-sky-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/engineering"
                className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500 text-white rounded-lg font-semibold hover:bg-sky-600 transition"
              >
                Explore Engineering <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Technology Card */}
            <div className="relative group p-10 rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-indigo-50/40 to-white hover:border-indigo-400 hover:shadow-xl transition-all">
              <div className="mb-6 p-4 w-fit bg-indigo-100 rounded-xl">
                <Code2 className="w-12 h-12 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Technology Resources
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Full-stack developers, cloud engineers, DevOps specialists, QA
                automation engineers, and AI/ML professionals across modern tech
                stacks.
              </p>
              <ul className="space-y-2.5 mb-8">
                {[
                  "Full-Stack & Backend Developers",
                  "Cloud & DevOps Engineers",
                  "QA Engineers & Test Automation",
                  "AI / ML Engineers",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/technology"
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-500 text-white rounded-lg font-semibold hover:bg-indigo-600 transition"
              >
                Explore Technology <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ────────── How We Work ────────── */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-teal-600 font-semibold tracking-wider uppercase text-sm mb-2">
              Simple Process
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How We Work
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From requirement to deployment in as little as 1–2 weeks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Understand Your Needs",
                description:
                  "We discuss your project scope, skill requirements, timeline, and team composition.",
              },
              {
                step: "02",
                title: "Match & Screen Talent",
                description:
                  "Pre-vetted professionals are shortlisted based on skills, experience, and domain fit.",
              },
              {
                step: "03",
                title: "Quick Onboarding",
                description:
                  "Rapid deployment within 1–2 weeks with seamless integration into your workflows.",
              },
              {
                step: "04",
                title: "Ongoing Support",
                description:
                  "Dedicated account management, performance monitoring, and flexible team scaling.",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-teal-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
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

      {/* ────────── Why Infodra ────────── */}
      <section className="py-20 md:py-28 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-teal-600 font-semibold tracking-wider uppercase text-sm mb-2">
              Our Differentiators
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Infodra for Resourcing
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8 text-teal-600" />,
                title: "Pre-Vetted Professionals",
                description:
                  "Rigorous screening, skill verification, and domain-specific experience validation before assignment.",
              },
              {
                icon: <Clock className="w-8 h-8 text-teal-600" />,
                title: "1–2 Week Deployment",
                description:
                  "Rapid turnaround from requirement to on-project deployment — no lengthy hiring cycles.",
              },
              {
                icon: <Handshake className="w-8 h-8 text-teal-600" />,
                title: "Flexible Engagement Models",
                description:
                  "Time & material, fixed-scope, dedicated teams, or project-based — aligned to your procurement.",
              },
              {
                icon: <Users className="w-8 h-8 text-teal-600" />,
                title: "Scalable Teams",
                description:
                  "Scale up or down based on project phases, product launches, or seasonal demand without friction.",
              },
              {
                icon: <Wrench className="w-8 h-8 text-teal-600" />,
                title: "Engineering + Technology Expertise",
                description:
                  "Combined depth in CAD/manufacturing engineering and modern software stacks — one vendor for both.",
              },
              {
                icon: <CheckCircle2 className="w-8 h-8 text-teal-600" />,
                title: "Dedicated Account Management",
                description:
                  "Single point of contact with continuous HR support, performance monitoring, and team continuity.",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl border border-gray-200 bg-white hover:shadow-lg hover:border-teal-200 transition-all"
              >
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────── CTA Banner ────────── */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 rounded-2xl p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Not Sure Which Specialization You Need?
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Tell us about your project and we&apos;ll recommend the right mix
              of engineering and technology professionals to get you started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 transition gap-2"
              >
                Talk to Us <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/engineering"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-slate-500 text-slate-200 rounded-lg font-semibold hover:border-white hover:text-white transition gap-2"
              >
                Engineering Resources
              </Link>
              <Link
                href="/technology"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-slate-500 text-slate-200 rounded-lg font-semibold hover:border-white hover:text-white transition gap-2"
              >
                Technology Resources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
