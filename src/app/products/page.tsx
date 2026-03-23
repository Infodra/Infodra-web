import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Platforms Built by Infodra | Infodra Technologies",
  description:
    "Explore AI-powered SaaS platforms designed to automate workflows, generate content, and accelerate business innovation. All products now available on Infodra AI platform.",
  keywords: [
    "AI platforms",
    "AI SaaS",
    "Infodra AI",
    "AI automation",
    "AI business tools",
    "AI video translator",
    "AI documentation",
    "AI voice generation",
    "business intelligence",
  ],
  openGraph: {
    title: "AI Platforms Built by Infodra | Infodra Technologies",
    description:
      "Explore AI-powered SaaS platforms designed to automate workflows, generate content, and accelerate business innovation.",
    url: "https://infodra.com/products",
    type: "website",
  },
};

const featuredPlatforms = [
  {
    name: "AI Video Translator",
    description: "Break language barriers with AI-powered video translation and voice cloning",
    link: "https://www.infodra.ai/products/ai-video-translator",
  },
  {
    name: "AI User Manual Generator",
    description: "Create professional documentation instantly with AI automation",
    link: "https://www.infodra.ai/products/ai-user-manual-generation",
  },
  {
    name: "AI Voice Generation Studio",
    description: "Generate natural AI voiceovers or securely clone your own voice",
    link: "https://www.infodra.ai/products/ai-voice-generation-studio",
  },
  {
    name: "BizLead Business Intelligence Platform",
    description: "Access India's most comprehensive B2B business database",
    link: "https://www.infodra.ai/products/bizlead-database",
  },
];

export default function Products() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-gray-50 text-gray-900 overflow-hidden">
        {/* Decorative gradient elements with animations */}
        <div className="absolute top-40 right-32 w-80 h-80 bg-emerald-400 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-pulse" />
        <div className="absolute bottom-0 left-20 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-pulse" />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-2xl opacity-10" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight text-gray-900">
            AI Platforms Built by <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Infodra</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore our AI-powered SaaS platforms designed to automate workflows, generate content, and accelerate business innovation. All Infodra AI products are now available on our dedicated AI platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.infodra.ai/products"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-10 py-4 rounded-lg font-semibold text-xl tracking-wider hover:bg-green-600 hover:shadow-2xl active:shadow-lg transition duration-200 shadow-lg"
            >
              Explore AI Platform
            </a>
            <a
              href="https://www.infodra.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-gray-900 text-gray-900 px-8 py-3.5 rounded-lg font-semibold text-lg tracking-wider hover:bg-gray-100 hover:border-gray-900 active:bg-gray-200 transition duration-200"
            >
              Visit Infodra AI
            </a>
          </div>
        </div>
      </section>

      {/* Platform Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Infodra AI Platform
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Infodra AI is our dedicated platform for intelligent SaaS applications designed for modern enterprises. 
              It provides tools for automation, content generation, voice technology, business intelligence, and AI-powered workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="font-semibold text-gray-900 mb-2">AI-powered SaaS applications</h3>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-3xl mb-3">🏢</div>
              <h3 className="font-semibold text-gray-900 mb-2">Enterprise-ready cloud platforms</h3>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="font-semibold text-gray-900 mb-2">Scalable AI infrastructure</h3>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="font-semibold text-gray-900 mb-2">Continuous product innovation</h3>
            </div>
          </div>

          <div className="text-center">
            <a 
              href="https://www.infodra.ai/products"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View AI Products
            </a>
          </div>
        </div>
      </section>

      {/* Featured Platforms Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Featured Platforms
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredPlatforms.map((platform, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {platform.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {platform.description}
                </p>
                <a 
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Call-To-Action */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-emerald-900 to-cyan-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Access the Infodra AI Platform
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Discover our growing suite of AI-powered SaaS tools built to transform modern businesses.
          </p>
          <a 
            href="https://www.infodra.ai/products"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Explore All AI Products
          </a>
        </div>
      </section>

      {/* SEO Note */}
      <section className="py-8 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-600">
            Infodra AI products are now hosted on our dedicated AI platform.{" "}
            <a 
              href="https://www.infodra.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 underline"
            >
              Visit Infodra AI
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
