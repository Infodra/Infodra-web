import { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Globe, Zap, Users, Shield, Clock, Code2, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Solutions, Website Development & Digital Services | Infodra Technologies",
  description:
    "Infodra Technologies provides AI solutions, website development, SEO services, web apps, and business automation. Grow your business with cutting-edge digital tools and expert support.",
  keywords: [
    "AI solutions",
    "website development",
    "SEO services",
    "web app development",
    "business automation",
    "digital solutions",
    "resourcing services",
    "engineering services",
  ],
};

export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 overflow-hidden">
        {/* Decorative gradient elements */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-emerald-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse" />
        <div className="absolute -bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse" />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-emerald-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-wide">
              Engineering-Led AI & Digital
              <br className="mb-2" />
              Solutions <span className="text-white">for</span>
              <br className="mb-2" />
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Scalable Growth</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto mb-8 leading-relaxed">
              We combine enterprise engineering expertise with AI-driven innovation to design secure, scalable, and future-ready technology systems that deliver measurable business impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="inline-block bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg tracking-wider hover:bg-green-600 transition transform hover:scale-105"
              >
                Explore AI Solutions
              </Link>
              <Link
                href="/digital-solutions"
                className="inline-block bg-transparent text-white px-8 py-4 rounded-lg font-semibold text-lg tracking-wider border-2 border-white hover:bg-white hover:text-slate-900 transition transform hover:scale-105"
              >
                Explore Digital Solutions
              </Link>
            </div>
            <div className="mt-8">
              <a
                href="https://wa.me/918148146785"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white font-semibold hover:text-gray-300 transition"
              >
                <MessageCircle size={20} />
                Chat with us on WhatsApp: 81481 46785
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AI PRODUCTS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center text-gray-900 mb-4">
            AI Products
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
            Powerful AI tools designed to automate your business and unlock new possibilities
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="relative p-8 bg-white border-0 border-l-4 border-blue-600 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Video Translator</h3>
              <p className="text-gray-600 leading-relaxed">
                Translate videos to 50+ languages with AI precision. Break language barriers instantly.
              </p>
            </div>

            {/* Card 2 */}
            <div className="relative p-8 bg-white border-0 border-l-4 border-green-600 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Document Processing</h3>
              <p className="text-gray-600 leading-relaxed">
                Automate document analysis, extraction, and processing with 99.5% accuracy.
              </p>
            </div>

            {/* Card 3 */}
            <div className="relative p-8 bg-white border-0 border-l-4 border-amber-600 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Lead Generation</h3>
              <p className="text-gray-600 leading-relaxed">
                Identify and qualify leads automatically. Access 50M+ verified business contacts.
              </p>
            </div>

            {/* Card 4 */}
            <div className="relative p-8 bg-white border-0 border-l-4 border-indigo-600 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Automation</h3>
              <p className="text-gray-600 leading-relaxed">
                Streamline workflows and reduce manual tasks with intelligent automation.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
            >
              Explore More →
            </Link>
          </div>
        </div>
      </section>

      {/* DIGITAL SOLUTIONS SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center text-gray-900 mb-4">
            Digital Solutions
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
            Complete digital services to establish and grow your online presence
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="p-8 bg-white border-0 border-l-4 border-blue-600 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Website Development</h3>
              <p className="text-gray-600 leading-relaxed">
                Custom, responsive websites that convert visitors into customers. Fast, secure, and SEO-ready.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 bg-white border-0 border-l-4 border-green-600 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">SEO Services</h3>
              <p className="text-gray-600 leading-relaxed">
                Rank higher on Google. We optimize your website to attract organic traffic and increase visibility.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 bg-white border-0 border-l-4 border-amber-600 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Web App Development</h3>
              <p className="text-gray-600 leading-relaxed">
                Scalable web applications built with modern technologies. Perfect for startups and enterprises.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-8 bg-white border-0 border-l-4 border-indigo-600 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Automation</h3>
              <p className="text-gray-600 leading-relaxed">
                Automate repetitive tasks and streamline your business processes to save time and costs.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/digital-solutions"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
            >
              Explore More →
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE INFODRA SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Infodra Technologies?
            </h2>
            <p className="text-xl text-gray-600 font-semibold max-w-3xl mx-auto">
              Enterprise Experience. Engineering Discipline. AI-Driven Innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Enterprise-Grade Experience */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Enterprise-Grade Experience</h3>
              <p className="text-gray-700 leading-relaxed">
                Over two decades of exposure to global automotive OEM and enterprise engineering environments — bringing structured standards into every solution we deliver.
              </p>
            </div>

            {/* Engineering-Driven Execution */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center mb-6">
                <Code2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Engineering-Driven Execution</h3>
              <p className="text-gray-700 leading-relaxed">
                Our foundation is built on engineering discipline, ensuring scalable architecture, performance optimization, and long-term system stability.
              </p>
            </div>

            {/* AI-Integrated Solutions */}
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">AI-Integrated Solutions</h3>
              <p className="text-gray-700 leading-relaxed">
                We embed automation, data intelligence, and AI capabilities into digital platforms to create future-ready business systems.
              </p>
            </div>

            {/* Multi-Domain Expertise */}
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center mb-6">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Multi-Domain Expertise</h3>
              <p className="text-gray-700 leading-relaxed">
                From AI and digital platforms to mechanical engineering and technical resourcing — we provide integrated capabilities under one roof.
              </p>
            </div>

            {/* Business-Focused Delivery */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Business-Focused Delivery</h3>
              <p className="text-gray-700 leading-relaxed">
                Every solution is aligned with measurable impact, operational efficiency, and sustainable growth objectives.
              </p>
            </div>

            {/* Strategic Partnership Approach */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Strategic Partnership Approach</h3>
              <p className="text-gray-700 leading-relaxed">
                We build long-term collaborations grounded in trust, transparency, and technical excellence — not just project-based engagements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RESOURCING SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center text-gray-900 mb-4">
            Resourcing
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
            Skilled professionals across IT, Mechanical, R&D, and Engineering domains, delivering resource deployment solutions for industry leaders and innovative startups.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="p-8 bg-white border-0 border-l-4 border-blue-600 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">IT Resources</h3>
              <p className="text-gray-600 leading-relaxed">
                Full-time or part-time developers and engineers specialized in software development, web, mobile, and AI.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 bg-white border-0 border-l-4 border-green-600 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mechanical Engineers</h3>
              <p className="text-gray-600 leading-relaxed">
                Skilled mechanical engineers for product design, CAD, manufacturing support, and technical consulting.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 bg-white border-0 border-l-4 border-amber-600 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">R&D Specialists</h3>
              <p className="text-gray-600 leading-relaxed">
                Research and development professionals for innovation, prototyping, and technical problem-solving.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-8 bg-white border-0 border-l-4 border-indigo-600 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Project-Based Teams</h3>
              <p className="text-gray-600 leading-relaxed">
                Complete teams assembled for specific projects with clear timelines and deliverables across all domains.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/resourcing"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
            >
              Explore More →
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-emerald-900 to-cyan-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-emerald-100">
            Start your digital journey today. Get expert guidance, innovative solutions,<br />
            and dedicated support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/918148146785"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp: 81481 46785
            </a>
            <Link
              href="/contact"
              className="inline-block bg-transparent text-white px-8 py-4 rounded-lg font-semibold border-2 border-white hover:bg-white hover:text-emerald-600 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
