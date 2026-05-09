import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Zap, FileText, LayoutGrid, Layers, Video, BookOpen, Languages, Mic, Settings, Database, BarChart3, BoltIcon, Server, Cloud, Plug, Brain, ShieldCheck, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Solutions for Engineering & Enterprises | Infodra Technologies",
  description:
    "Infodra designs and delivers AI-driven solutions that help organizations automate workflows, generate multilingual content, and accelerate engineering and business operations.",
  keywords: [
    "AI solutions",
    "AI for engineering",
    "AI for manufacturing",
    "enterprise AI",
    "multilingual AI",
    "AI automation",
    "AI content generation",
    "AI workflow optimization",
    "AI CAD integration",
    "Infodra AI",
  ],
  openGraph: {
    title: "AI Solutions for Engineering & Enterprises | Infodra Technologies",
    description:
      "We design and deliver AI-driven solutions that help organizations automate workflows, generate multilingual content, and accelerate engineering and business operations.",
    url: "https://infodra.com/products",
    type: "website",
  },
};

/* ─── Section data ─── */

const engineeringItems = [
  { Icon: Zap, title: "AI-Based Design Automation", desc: "Accelerate product design cycles with intelligent automation that reduces manual effort and improves accuracy." },
  { Icon: FileText, title: "Engineering Documentation Generation", desc: "Auto-generate structured technical documents, BOMs, and reports directly from engineering data and CAD inputs." },
  { Icon: LayoutGrid, title: "Workflow Optimization Using AI", desc: "Streamline engineering workflows with intelligent routing, task prioritization, and bottleneck identification." },
  { Icon: Layers, title: "CAD & Engineering Tool Integration", desc: "Seamlessly connect AI capabilities with CAD systems, PLM, and enterprise engineering tools." },
];

const multilingualItems = [
  { Icon: Video, title: "AI-Powered Video Translation", desc: "Translate training and operational videos into multiple languages with voice cloning and natural lip-sync." },
  { Icon: BookOpen, title: "Automated Manual Generation", desc: "Generate professional user and assembly manuals automatically from engineering specs and design data." },
  { Icon: Languages, title: "Document Translation Across Languages", desc: "Translate engineering and technical documents accurately across global languages while preserving formatting." },
  { Icon: Mic, title: "Voice & Content Generation", desc: "AI-powered voice synthesis for standardized training content, work instructions, and enterprise communications." },
];

const bpaItems = [
  { Icon: Settings, title: "AI-Driven Workflow Automation", desc: "Automate repetitive processes end-to-end, reducing human intervention and accelerating turnaround times." },
  { Icon: Database, title: "Data Extraction & Processing", desc: "Extract, structure, and process unstructured data from documents, images, and enterprise systems using AI." },
  { Icon: BarChart3, title: "Intelligent Reporting & Insights", desc: "Generate automated reports and real-time dashboards powered by AI for faster decision-making." },
  { Icon: BoltIcon, title: "Process Efficiency Improvements", desc: "Identify and eliminate inefficiencies across business processes with AI-driven analysis and recommendations." },
];

const platformCapabilities = [
  { Icon: Server, title: "Scalable AI Architecture", desc: "Built to handle enterprise-grade workloads with horizontal scaling and high availability." },
  { Icon: Cloud, title: "Cloud-Based Deployment", desc: "Deploy AI solutions on leading cloud platforms with flexible infrastructure options." },
  { Icon: Plug, title: "API Integrations", desc: "Connect with existing enterprise systems through robust and well-documented APIs." },
  { Icon: Brain, title: "Custom AI Model Development", desc: "Develop and fine-tune AI models tailored to your specific domain and business needs." },
  { Icon: ShieldCheck, title: "Enterprise Security & Compliance", desc: "Built with enterprise-grade security, data encryption, and regulatory compliance in mind." },
];

const industries = [
  { name: "Automotive", icon: "🚗", desc: "AI solutions for automotive design, manufacturing, and supply chain optimization." },
  { name: "Manufacturing", icon: "🏭", desc: "Intelligent automation for production, quality control, and process optimization." },
  { name: "Industrial Equipment", icon: "⚙️", desc: "Predictive maintenance, documentation, and workflow digitization for heavy equipment." },
  { name: "Engineering Services", icon: "📐", desc: "AI-augmented engineering for design, simulation, and technical documentation." },
];

const useCases = [
  { tag: "Multilingual Training Video Automation", desc: "AI-driven localization of training and operational videos into multiple languages for global workforce enablement." },
  { tag: "AI-Generated User / Assembly Manuals", desc: "Automated generation of structured user and assembly manuals from engineering inputs and design data." },
  { tag: "Document Language Translation Using AI", desc: "Intelligent translation of engineering and technical documents across multiple languages with high accuracy and consistency." },
  { tag: "AI Voice Generator for Training & Work Instructions", desc: "AI-powered voice synthesis for standardized training content and shop-floor work instructions." },
  { tag: "AI Prediction for Forecast", desc: "Predictive analytics for demand forecasting, operational planning, and decision support using AI models." },
];

const trustItems = [
  { title: "Engineering-First Approach", desc: "Deep engineering domain expertise ensures AI solutions solve real-world problems, not hypothetical ones." },
  { title: "Real-World Implementation", desc: "Proven track record of deploying AI solutions in production environments across industries." },
  { title: "AI + CAD + Enterprise Systems", desc: "Unique capability to bridge AI with design tools, PLM systems, and enterprise workflows." },
  { title: "Scalable & Customizable", desc: "Solutions designed to grow with your organization and adapt to evolving business requirements." },
];

/* ─── Page component ─── */

export default function Products() {
  return (
    <main>
      {/* ── Hero Section ── */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden">
        <div className="absolute top-16 left-8 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-slow-pulse" />
        <div className="absolute -bottom-16 right-16 w-[28rem] h-[28rem] bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-slow-pulse" />
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-slow-pulse" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — Text */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                AI Solutions for{' '}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Engineering &amp; Manufacturing
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                We deliver AI-driven solutions to automate engineering workflows, enable multilingual content and training, and improve operational efficiency across manufacturing and enterprise environments.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-10">
                Infodra combines engineering expertise with AI capabilities to build scalable, real-world solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#ai-engineering"
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-10 py-4 rounded-lg font-semibold text-lg tracking-wider hover:shadow-2xl active:shadow-lg transition duration-200 shadow-lg text-center"
                >
                  Explore AI Solutions
                </a>
                <a
                  href="#use-cases"
                  className="border-2 border-gray-900 text-gray-900 px-8 py-3.5 rounded-lg font-semibold text-lg tracking-wider hover:bg-gray-100 active:bg-gray-200 transition duration-200 text-center"
                >
                  View Use Cases
                </a>
              </div>
            </div>

            {/* Right — Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full">
                <div className="absolute -inset-6 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-3xl blur-2xl opacity-25 animate-slow-pulse" />
                <Image
                  src="/feature-images/ai-hero.jpg"
                  alt="AI Solutions for Engineering and Enterprise"
                  width={800}
                  height={600}
                  className="relative w-full h-auto rounded-2xl shadow-2xl object-cover"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 1 — AI for Engineering & Manufacturing ── */}
      <section id="ai-engineering" className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-center">AI for Engineering &amp; Manufacturing</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-16 leading-relaxed">Leverage AI to automate design processes, generate documentation, and integrate intelligence into your engineering stack.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {engineeringItems.map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-blue-200">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                  <item.Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 2 — Business Process Automation ── */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-center">Business Process Automation</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-16 leading-relaxed">Automate repetitive workflows, extract insights from data, and improve operational efficiency with intelligent automation.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bpaItems.map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-emerald-200">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center mb-6">
                  <item.Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3 — Multilingual AI & Content Automation ── */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-center">Multilingual AI &amp; Content Automation</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-16 leading-relaxed">Create, translate, and localize content across languages at scale — from training videos to technical documents.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {multilingualItems.map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-cyan-200">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <item.Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4 — AI Platforms & Capabilities ── */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-center">AI Platforms &amp; Capabilities</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-16 leading-relaxed">Enterprise-ready AI infrastructure designed for reliability, scalability, and seamless integration.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformCapabilities.map((cap, i) => (
              <div key={i} className="bg-white border-l-4 border-blue-600 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mb-5">
                  <cap.Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cap.title}</h3>
                <p className="text-gray-700 leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5 — Industries We Serve ── */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-center">Industries We Serve</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-16 leading-relaxed">Our AI solutions are purpose-built for sectors where engineering precision and operational efficiency matter most.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((ind, i) => {
              const colors = [
                "from-blue-50 to-blue-100 border-blue-200",
                "from-cyan-50 to-cyan-100 border-cyan-200",
                "from-slate-50 to-slate-100 border-slate-200",
                "from-emerald-50 to-emerald-100 border-emerald-200",
              ];
              return (
                <div key={i} className={`text-center bg-gradient-to-br ${colors[i]} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border`}>
                  <span className="text-5xl mb-5 block">{ind.icon}</span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{ind.name}</h3>
                  <p className="text-gray-700 leading-relaxed">{ind.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Section 6 — Featured Use Cases ── */}
      <section id="use-cases" className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-center">Featured Use Cases</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-16 leading-relaxed">Real-world applications of our AI solutions across engineering and enterprise environments.</p>
          <div className="space-y-6">
            {useCases.map((uc, i) => (
              <div key={i} className="bg-white border-l-4 border-cyan-600 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{uc.tag}</h3>
                <p className="text-gray-700 leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <a
              href="https://www.infodra.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3.5 rounded-lg font-semibold text-lg hover:shadow-xl transition-all shadow-md"
            >
              Explore AI Platforms →
            </a>
          </div>
        </div>
      </section>

      {/* ── Section 7 — Trust & Differentiation ── */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-16 text-center">Why Infodra</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trustItems.map((item, i) => (
              <div key={i} className="flex items-start">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-8 h-8 text-blue-600 mt-1" />
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="relative bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-8 md:py-10 overflow-hidden rounded-3xl mx-4 sm:mx-6 lg:mx-8 my-16">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">Ready to Transform Your Operations with AI?</h2>
          <p className="text-lg md:text-xl text-emerald-50 mb-6 max-w-2xl mx-auto leading-relaxed">
            Partner with Infodra to build AI solutions that deliver measurable impact across engineering and enterprise workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-6">
            <Link
              href="/contact"
              className="bg-white text-emerald-600 px-8 py-3.5 rounded-lg font-semibold text-lg tracking-wider hover:bg-emerald-50 hover:shadow-2xl active:shadow-lg transition-all duration-200 shadow-lg inline-block"
            >
              Contact Us
            </Link>
            <Link
              href="mailto:connect@infodratech.com"
              className="border-2 border-white text-white px-8 py-3.5 rounded-lg font-semibold text-lg tracking-wider hover:bg-emerald-400 hover:border-white active:bg-emerald-600 transition-all duration-200 inline-block"
            >
              Email Us
            </Link>
          </div>
          <div className="space-y-2 text-emerald-50">
            <p className="text-lg font-semibold">📧 Email: connect@infodratech.com</p>
          </div>
        </div>
      </section>
    </main>
  );
}
