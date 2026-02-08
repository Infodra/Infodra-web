import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Globe, Zap, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us - Infodra Technologies | AI, Digital & Engineering Experts',
  description: 'Learn about Infodra Technologies, a technology-driven company founded by experienced professionals with 20+ years of expertise in AI, digital systems, engineering, and automotive industries.',
  keywords: [
    'about infodra',
    'company profile',
    'technology experts',
    'AI solutions',
    'digital transformation',
    'engineering services',
    'IT resourcing',
    'infodra technologies',
  ],
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-gray-50 pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden">
        {/* Animated background circles */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-slow-pulse" />
        <div className="absolute -bottom-20 right-20 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-slow-pulse" />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-10" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Engineering Excellence Meets{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                AI-Powered Innovation
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-6">
              Infodra Technologies is built on over two decades of real-world industry experience across automotive engineering, digital transformation, AI, and advanced technology systems.
            </p>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We combine deep engineering expertise with modern AI-driven innovation to deliver scalable and future-ready technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-12 text-center">Who We Are</h2>
          <div className="space-y-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Infodra Technologies is a technology-driven company specializing in delivering AI-powered digital solutions, enterprise engineering services, and strategic IT resourcing. Founded by experienced professionals with deep industry roots, we translate complex business challenges into scalable, intelligent technology systems.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                <h3 className="text-2xl font-semibold text-blue-900 mb-3">What We Do</h3>
                <p className="text-gray-700">We design and implement intelligent automation, digital transformation, and engineering solutions that drive efficiency and growth.</p>
              </div>
              <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-6 rounded-lg border border-cyan-200">
                <h3 className="text-2xl font-semibold text-cyan-900 mb-3">How We Work</h3>
                <p className="text-gray-700">We combine proven industry practices with modern innovation, ensuring solutions are practical, sustainable, and aligned with real-world business needs.</p>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-lg border border-emerald-200">
                <h3 className="text-2xl font-semibold text-emerald-900 mb-3">Our Commitment</h3>
                <p className="text-gray-700">We partner with clients for long-term success, delivering measurable business impact through excellence, transparency, and technical expertise.</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              From intelligent automation and advanced engineering to talent resourcing and digital transformation, we help enterprises build the technology systems that fuel their next phase of growth.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership & Industry Experience */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-12 text-center w-full">Leadership & Industry Experience</h2>
          <div className="space-y-10">
            <p className="text-lg text-gray-700 leading-relaxed">
              Infodra Technologies is founded by professionals with over 20 years of industry experience across automotive engineering, software development, AI, and technical recruitment. Our leadership team combines academic excellence with proven execution in enterprise environments.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Education Card */}
              <div className="bg-white border-l-4 border-blue-600 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Academic Foundation</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Bachelor's in Computer Science Engineering (MIT, Chennai)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Bachelor's in Mechanical Engineering</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Advanced trainings from IIT Madras and MSME Technology Center</span>
                  </li>
                </ul>
              </div>

              {/* Industry Experience Card */}
              <div className="bg-white border-l-4 border-cyan-600 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Enterprise Experience</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-cyan-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Global automotive OEM exposure and enterprise experience</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-cyan-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Enterprise-grade engineering standards and practices</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-cyan-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Complex digital ecosystem implementation and scaling</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 border border-emerald-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Integrated Expertise</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our multidisciplinary team brings deep expertise across critical technology domains, enabling us to deliver comprehensive solutions aligned with real-world business requirements:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700"><strong>AI & Machine Learning</strong> — Advanced algorithms and intelligent automation</span>
                </div>
                <div className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700"><strong>Engineering Services</strong> — CAD/CAE, prototype development, technical design</span>
                </div>
                <div className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700"><strong>Enterprise Software</strong> — Java, Python, cloud architecture, scalable systems</span>
                </div>
                <div className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700"><strong>Talent Acquisition</strong> — Strategic resourcing and professional placement</span>
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
              This foundation of proven experience, continuous learning, and technical excellence enables Infodra Technologies to deliver enterprise-grade solutions that are not just innovative, but grounded in real-world industry practices and operational excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Core Expertise */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-16 text-center">Our Core Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* AI & Intelligent Systems */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">AI & Intelligent Systems</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  <span>AI/ML solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  <span>Automation tools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  <span>Data-driven applications</span>
                </li>
              </ul>
            </div>

            {/* Digital Solutions */}
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Digital Solutions</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-cyan-600 mr-3">•</span>
                  <span>Website development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 mr-3">•</span>
                  <span>SEO & digital growth</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 mr-3">•</span>
                  <span>Web applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 mr-3">•</span>
                  <span>Cloud & integration systems</span>
                </li>
              </ul>
            </div>

            {/* Engineering Services */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Engineering Services</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-slate-600 mr-3">•</span>
                  <span>CAD / CAE / CAM</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-600 mr-3">•</span>
                  <span>Mechanical design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-600 mr-3">•</span>
                  <span>R&D and prototype support</span>
                </li>
              </ul>
            </div>

            {/* Resourcing & Talent Solutions */}
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Resourcing & Talent Solutions</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-3">•</span>
                  <span>IT & AI professionals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-3">•</span>
                  <span>Mechanical & engineering experts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-3">•</span>
                  <span>Flexible deployment models</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To empower businesses with intelligent technology solutions that combine engineering excellence and AI-driven innovation to deliver measurable business outcomes.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-4xl font-bold text-gray-900 mb-6">Our Vision</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To become a trusted global technology partner delivering scalable digital platforms, AI-powered systems, and engineering expertise across industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Statement */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg md:text-2xl text-gray-700 leading-relaxed font-medium">
            We are committed to building long-term partnerships grounded in trust, transparency, and technical excellence.
          </p>
        </div>
      </section>

      {/* Why Infodra */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-12 text-center">Why Infodra Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <CheckCircle className="w-8 h-8 text-blue-600 mt-1" />
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">20+ Years of Experience</h4>
                <p className="text-gray-700">Industry-backed expertise across multiple domains and global organizations</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <CheckCircle className="w-8 h-8 text-blue-600 mt-1" />
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Enterprise-Level Exposure</h4>
                <p className="text-gray-700">Deep experience with enterprise-scale automotive and industrial environments</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <CheckCircle className="w-8 h-8 text-blue-600 mt-1" />
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Multi-Domain Expertise</h4>
                <p className="text-gray-700">AI, Digital Solutions, Mechanical Engineering, and IT Services</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <CheckCircle className="w-8 h-8 text-blue-600 mt-1" />
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Business-Focused Execution</h4>
                <p className="text-gray-700">Solutions designed for measurable impact and sustainable growth</p>
              </div>
            </div>

            <div className="flex items-start md:col-span-2">
              <div className="flex-shrink-0">
                <CheckCircle className="w-8 h-8 text-blue-600 mt-1" />
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Long-Term Partnership Mindset</h4>
                <p className="text-gray-700">We invest in understanding your business and delivering lasting value</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-8 md:py-10 overflow-hidden rounded-3xl mx-4 sm:mx-6 lg:mx-8 my-16">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">
            Let's Build the Future Together
          </h2>
          <p className="text-lg md:text-xl text-emerald-50 mb-6 max-w-2xl mx-auto leading-relaxed">
            Whether you require AI-powered digital systems, engineering expertise, or skilled technical resources, Infodra Technologies is ready to support your growth journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-6">
            <Link
              href="https://wa.me/918148146785"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-emerald-600 px-8 py-3.5 rounded-lg font-semibold text-lg tracking-wider hover:bg-emerald-50 hover:shadow-2xl active:shadow-lg transition-all duration-200 shadow-lg inline-block"
            >
              Chat on WhatsApp
            </Link>
            <Link
              href="mailto:business@infodratechnologies.com"
              className="border-2 border-white text-white px-8 py-3.5 rounded-lg font-semibold text-lg tracking-wider hover:bg-emerald-400 hover:border-white active:bg-emerald-600 transition-all duration-200 inline-block"
            >
              Email Us
            </Link>
          </div>

          <div className="space-y-2 text-emerald-50">
            <p className="text-lg font-semibold">📞 WhatsApp: 81481 46785</p>
            <p className="text-lg font-semibold">📧 Email: business@infodratechnologies.com</p>
          </div>
        </div>
      </section>
    </main>
  );
}
