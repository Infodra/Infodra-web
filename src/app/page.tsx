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
              AI-Powered Digital Solutions <br className="mb-4" />
              to Grow Your Business
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-5xl mx-auto mb-8">
              Leverage cutting-edge AI tools, professional websites, and smart automation to scale your business faster. <br />
              From AI products to custom web development, we've got everything you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="inline-block bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition transform hover:scale-105"
              >
                Explore AI Products
              </Link>
              <Link
                href="/digital-solutions"
                className="inline-block bg-transparent text-white px-8 py-4 rounded-lg font-semibold border-2 border-white hover:bg-white hover:text-slate-900 transition transform hover:scale-105"
              >
                Get a Professional Website
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
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            AI Products
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
            Powerful AI tools designed to automate your business and unlock new possibilities
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition">
              <Zap className="text-blue-600 mb-4" size={32} />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">AI Video Translator</h3>
              <p className="text-gray-600">
                Translate videos to 50+ languages with AI precision. Break language barriers instantly.
              </p>
            </div>
            <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition">
              <Zap className="text-blue-600 mb-4" size={32} />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Document Processing</h3>
              <p className="text-gray-600">
                Automate document analysis, extraction, and processing with 99.5% accuracy.
              </p>
            </div>
            <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition">
              <Zap className="text-blue-600 mb-4" size={32} />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Lead Generation</h3>
              <p className="text-gray-600">
                Identify and qualify leads automatically. Access 50M+ verified business contacts.
              </p>
            </div>
            <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition">
              <Zap className="text-blue-600 mb-4" size={32} />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Business Automation</h3>
              <p className="text-gray-600">
                Streamline workflows and reduce manual tasks with intelligent automation.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Explore More →
            </Link>
          </div>
        </div>
      </section>

      {/* DIGITAL SOLUTIONS SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Digital Solutions
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
            Complete digital services to establish and grow your online presence
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-lg hover:shadow-lg transition">
              <Globe className="text-blue-600 mb-4" size={32} />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Website Development</h3>
              <p className="text-gray-600 mb-4">
                Custom, responsive websites that convert visitors into customers. Fast, secure, and SEO-ready.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg hover:shadow-lg transition">
              <Zap className="text-blue-600 mb-4" size={32} />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">SEO Services</h3>
              <p className="text-gray-600 mb-4">
                Rank higher on Google. We optimize your website to attract organic traffic and increase visibility.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg hover:shadow-lg transition">
              <Code2 className="text-blue-600 mb-4" size={32} />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Web App Development</h3>
              <p className="text-gray-600 mb-4">
                Scalable web applications built with modern technologies. Perfect for startups and enterprises.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg hover:shadow-lg transition">
              <Briefcase className="text-blue-600 mb-4" size={32} />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Business Automation</h3>
              <p className="text-gray-600 mb-4">
                Automate repetitive tasks and streamline your business processes to save time and costs.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/digital-solutions"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Explore More →
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE INFODRA SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Why Choose Infodra Technologies?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="text-blue-600 mx-auto mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">
                Years of experience in AI, web development, and digital transformation.
              </p>
            </div>
            <div className="text-center">
              <Clock className="text-blue-600 mx-auto mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quick Turnaround</h3>
              <p className="text-gray-600">
                Fast delivery without compromising on quality. Real-time support available.
              </p>
            </div>
            <div className="text-center">
              <Zap className="text-blue-600 mx-auto mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Affordable Pricing</h3>
              <p className="text-gray-600">
                Get enterprise-grade solutions at competitive prices that fit your budget.
              </p>
            </div>
            <div className="text-center">
              <Users className="text-blue-600 mx-auto mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dedicated Support</h3>
              <p className="text-gray-600">
                24/7 customer support and ongoing maintenance for your peace of mind.
              </p>
            </div>
            <div className="text-center">
              <Globe className="text-blue-600 mx-auto mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Scalability</h3>
              <p className="text-gray-600">
                Solutions that grow with your business. From startups to large enterprises.
              </p>
            </div>
            <div className="text-center">
              <Briefcase className="text-blue-600 mx-auto mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600">
                Trusted by hundreds of companies to transform their digital operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RESOURCING SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Resourcing
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
            Skilled professionals across IT, Mechanical, R&D, and Engineering domains, delivering resource deployment solutions for industry leaders and innovative startups.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-lg hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">IT Resources</h3>
              <p className="text-gray-600 mb-4">
                Full-time or part-time developers and engineers specialized in software development, web, mobile, and AI.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Mechanical Engineers</h3>
              <p className="text-gray-600 mb-4">
                Skilled mechanical engineers for product design, CAD, manufacturing support, and technical consulting.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">R&D Specialists</h3>
              <p className="text-gray-600 mb-4">
                Research and development professionals for innovation, prototyping, and technical problem-solving.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Project-Based Teams</h3>
              <p className="text-gray-600 mb-4">
                Complete teams assembled for specific projects with clear timelines and deliverables across all domains.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/resourcing"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Explore More →
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Start your digital journey today. Get expert guidance, innovative solutions, and dedicated support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/918148146785"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp: 81481 46785
            </a>
            <Link
              href="/contact"
              className="inline-block bg-transparent text-white px-8 py-4 rounded-lg font-semibold border-2 border-white hover:bg-white hover:text-blue-600 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
