import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  Search,
  Code2,
  Zap,
  CheckCircle2,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Website Development, SEO & Web Applications | Infodra Technologies",
  description:
    "Infodra Technologies provides professional website development, SEO services, web applications, and automation solutions to help businesses grow online.",
  keywords: [
    "website development",
    "SEO services",
    "web applications",
    "automation solutions",
    "digital marketing",
    "web design",
    "Infodra Technologies",
  ],
  openGraph: {
    title: "Website Development, SEO & Web Applications | Infodra Technologies",
    description:
      "Professional digital solutions for business growth. Website development, SEO, web apps, and automation.",
    url: "https://infodra.com/digital-solutions",
    type: "website",
  },
};

interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  items: string[];
}

interface WhyChooseCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const serviceCards: ServiceCard[] = [
  {
    icon: <Globe className="w-12 h-12 text-blue-600" />,
    title: "Professional Website Development",
    description:
      "We create modern, responsive, and fast-loading business websites that convert visitors into customers.",
    items: [
      "Business Websites",
      "Corporate Sites",
      "Landing Pages",
      "E-commerce Websites",
    ],
  },
  {
    icon: <Search className="w-12 h-12 text-blue-600" />,
    title: "SEO & Google Ranking Services",
    description:
      "Get found online with our comprehensive SEO strategies designed to boost your visibility and drive organic traffic.",
    items: [
      "Keyword Optimization",
      "On-Page SEO",
      "Technical SEO",
      "Local SEO",
    ],
  },
  {
    icon: <Code2 className="w-12 h-12 text-blue-600" />,
    title: "Custom Web Applications",
    description:
      "Build scalable and secure business tools tailored to your unique needs. From dashboards to customer portals.",
    items: [
      "Business Dashboards",
      "Customer Portals",
      "Internal Systems",
      "SaaS Platforms",
    ],
  },
  {
    icon: <Zap className="w-12 h-12 text-blue-600" />,
    title: "Business Process Automation",
    description:
      "Reduce manual work, improve efficiency, and scale your operations with intelligent automation solutions.",
    items: [
      "Workflow Automation",
      "CRM Integrations",
      "Reporting Dashboards",
      "Process Optimization",
    ],
  },
];

const whyChooseCards: WhyChooseCard[] = [
  {
    icon: <CheckCircle2 className="w-8 h-8 text-blue-600" />,
    title: "Business-Focused Solutions",
    description:
      "Every project is tailored to your business goals and revenue growth.",
  },
  {
    icon: <CheckCircle2 className="w-8 h-8 text-blue-600" />,
    title: "Affordable Pricing for SMEs",
    description:
      "High-quality digital solutions that fit your budget and deliver ROI.",
  },
  {
    icon: <CheckCircle2 className="w-8 h-8 text-blue-600" />,
    title: "Fast Turnaround",
    description: "Quick project delivery without compromising on quality.",
  },
  {
    icon: <CheckCircle2 className="w-8 h-8 text-blue-600" />,
    title: "Ongoing Technical Support",
    description:
      "Continuous support and maintenance to keep your systems running smoothly.",
  },
  {
    icon: <CheckCircle2 className="w-8 h-8 text-blue-600" />,
    title: "Scalable & Secure Systems",
    description:
      "Built with industry best practices to grow with your business.",
  },
  {
    icon: <CheckCircle2 className="w-8 h-8 text-blue-600" />,
    title: "Proven Track Record",
    description: "Trusted by startups and established businesses across India.",
  },
];

export default function DigitalSolutions() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
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
                Digital Solutions That Grow Your Business Online
              </h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Professional website development, SEO services, custom web applications,
                and business automation solutions to help you scale faster and reach
                more customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  Start Your Project
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
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80"
                  alt="Digital Solutions - Website Development and SEO"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 md:py-32 bg-white border-t border-gray-100"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Digital Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive services to transform your digital presence and drive
              business growth
            </p>
          </div>

          {/* Website Development Section */}
          <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80"
                  alt="Website Development - Modern Responsive Design"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all">
              <div className="mb-4 p-4 w-fit bg-blue-50 rounded-xl">
                <Globe className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Professional Website Development
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We create modern, responsive, and fast-loading business websites that convert visitors into customers.
              </p>
              <div className="space-y-3">
                {["Business Websites", "Corporate Sites", "Landing Pages", "E-commerce Websites"].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SEO Services Section */}
          <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all">
              <div className="mb-4 p-4 w-fit bg-blue-50 rounded-xl">
                <Search className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                SEO & Google Ranking Services
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Get found online with our comprehensive SEO strategies designed to boost your visibility and drive organic traffic.
              </p>
              <div className="space-y-3">
                {["Keyword Optimization", "On-Page SEO", "Technical SEO", "Local SEO"].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&q=80"
                alt="SEO Services - Search Engine Optimization"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Web Applications Section */}
          <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&q=80"
                  alt="Web Applications - Custom Business Solutions"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all">
              <div className="mb-4 p-4 w-fit bg-blue-50 rounded-xl">
                <Code2 className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Custom Web Applications
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Build scalable and secure business tools tailored to your unique needs. From dashboards to customer portals.
              </p>
              <div className="space-y-3">
                {["Business Dashboards", "Customer Portals", "Internal Systems", "SaaS Platforms"].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Automation Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all">
              <div className="mb-4 p-4 w-fit bg-blue-50 rounded-xl">
                <Zap className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Business Process Automation
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Reduce manual work, improve efficiency, and scale your operations with intelligent automation solutions.
              </p>
              <div className="space-y-3">
                {["Workflow Automation", "CRM Integrations", "Reporting Dashboards", "Process Optimization"].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop&q=80"
                alt="Automation - Workflow Process Optimization"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Infodra Technologies?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to delivering solutions that drive real business
              results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseCards.map((card, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A transparent, collaborative approach from discovery to delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description:
                  "We understand your business goals and create a strategic plan",
              },
              {
                step: "02",
                title: "Design & Strategy",
                description:
                  "Wireframing and design mockups for your approval",
              },
              {
                step: "03",
                title: "Development & Testing",
                description: "Building and rigorous testing of your solution",
              },
              {
                step: "04",
                title: "Launch & Support",
                description: "Deployment and ongoing maintenance support",
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

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-600 to-blue-700 text-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Let's Build Your Digital Growth System
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl mx-auto">
            Ready to transform your business with professional digital solutions?
            Get in touch with us today and let's create something amazing together.
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
              Contact Us
              <ArrowRight className="ml-3 w-6 h-6" />
            </Link>
          </div>

          <p className="text-blue-100 text-sm mt-8">
            Available Monday to Friday, 9 AM - 6 PM IST
          </p>
        </div>
      </section>

      {/* FAQ Section */}
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
                question: "How long does it take to build a website?",
                answer:
                  "Typically, a professional business website takes 4-8 weeks depending on complexity. A landing page can be ready in 2-3 weeks.",
              },
              {
                question: "Do you provide ongoing support after launch?",
                answer:
                  "Yes, we offer comprehensive maintenance packages including updates, security monitoring, performance optimization, and technical support.",
              },
              {
                question: "Can you help with SEO for existing websites?",
                answer:
                  "Absolutely! We conduct SEO audits and create optimization strategies for existing sites, including technical, on-page, and content improvements.",
              },
              {
                question: "What about budget constraints?",
                answer:
                  "We work with businesses of all sizes. We offer flexible project scopes and can create solutions that fit your budget while maintaining quality.",
              },
              {
                question: "Do you build mobile apps?",
                answer:
                  "We focus on web applications and responsive web design. For native mobile apps, we can recommend trusted partners or build progressive web apps.",
              },
              {
                question: "How do you ensure security?",
                answer:
                  "We implement industry best practices including SSL certificates, data encryption, secure authentication, regular updates, and security audits.",
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
