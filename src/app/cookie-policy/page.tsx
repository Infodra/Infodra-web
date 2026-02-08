import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Infodra Technologies",
  description:
    "Learn how Infodra Technologies uses cookies and similar technologies to enhance user experience and improve our website and SaaS platforms.",
  keywords: [
    "cookie policy",
    "cookies",
    "website cookies",
    "analytics cookies",
    "cookie settings",
  ],
};

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Cookie Policy</h1>
          <p className="text-lg text-gray-200 leading-relaxed">
            This Cookie Policy explains how Infodra Technologies uses cookies and similar technologies when you visit our website or use our SaaS platforms, including BizLead Database.
          </p>
          <p className="text-sm text-gray-400 mt-6">
            Last Updated: February 7, 2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section 1: What Are Cookies */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. What Are Cookies?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when you visit websites. They contain information about your browsing activity and preferences, and are sent back to the website server on subsequent visits.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We use cookies to enhance the functionality and user experience of our website and SaaS platforms. Cookies allow us to remember your preferences, analyze traffic patterns, and provide personalized content and services.
            </p>
          </div>

          {/* Section 2: Types of Cookies We Use */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Types of Cookies We Use
            </h2>

            {/* A) Essential Cookies */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                A) Essential Cookies
              </h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                These cookies are strictly necessary for the operation of our website and SaaS platforms. They enable core functionality such as:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>User authentication and login functionality</li>
                <li>Session management for SaaS platform access</li>
                <li>Security features and fraud prevention</li>
                <li>Maintaining your subscription status</li>
                <li>Basic security and compliance measures</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">
                These cookies are essential for the service to function properly, and you cannot disable them without impairing the website or platform functionality.
              </p>
            </div>

            {/* B) Performance & Analytics Cookies */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                B) Performance & Analytics Cookies
              </h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                These cookies collect information about how you interact with our website and platforms. They help us:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Analyze website traffic and usage patterns</li>
                <li>Measure the effectiveness of marketing campaigns</li>
                <li>Identify which pages are popular or frequently visited</li>
                <li>Understand how users navigate our platforms</li>
                <li>Improve website and platform performance</li>
                <li>Identify and fix technical issues</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">
                Examples include Google Analytics and similar analytics services. These cookies collect aggregated data and do not identify you personally.
              </p>
            </div>

            {/* C) Functional Cookies */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                C) Functional Cookies
              </h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                These cookies enable enhanced functionality and personalization. They allow us to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Remember your preferences and settings</li>
                <li>Store language and display preferences</li>
                <li>Maintain your search history and filters</li>
                <li>Remember items in your cart or workspace</li>
                <li>Provide customized content and features</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">
                While not strictly essential, disabling these cookies may reduce the functionality and personalization of your experience.
              </p>
            </div>

            {/* D) Marketing Cookies */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                D) Marketing & Targeting Cookies
              </h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                These cookies may be used to track your preferences and behavior across websites to deliver targeted advertising and marketing campaigns. They help us:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Deliver relevant advertisements and promotional content</li>
                <li>Measure marketing campaign effectiveness</li>
                <li>Track interactions with our ads across other websites</li>
                <li>Understand your interests and preferences</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">
                You can opt-out of marketing cookies through your browser settings or third-party opt-out mechanisms.
              </p>
            </div>
          </div>

          {/* Section 3: Third-Party Services */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Third-Party Services
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We may use trusted third-party services and partners to enhance our website and platforms. These services may include:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 mb-4">
              <li>Analytics platforms (e.g., Google Analytics)</li>
              <li>Payment processors and gateways</li>
              <li>Customer support and communication tools</li>
              <li>Marketing and advertising platforms</li>
              <li>Cloud hosting and infrastructure providers</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              These third-party services may place their own cookies on your device and have their own privacy and cookie policies. We recommend reviewing their policies to understand how they use cookie information. While we endeavor to ensure these partners comply with data protection standards, we are not responsible for their cookie practices.
            </p>
          </div>

          {/* Section 4: Managing Cookies */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Managing Cookies
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              You have the ability to control and manage cookies through your browser settings. Most web browsers allow you to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 mb-4">
              <li>View which cookies are stored on your device</li>
              <li>Accept or reject cookies from specific websites</li>
              <li>Block cookies from specific categories (e.g., marketing cookies)</li>
              <li>Delete cookies that have already been stored</li>
              <li>Set your browser to warn you before accepting cookies</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mb-4">
              You can typically find cookie settings in your browser's preferences or settings menu. Please note that the exact steps vary depending on your browser (Chrome, Firefox, Safari, Edge, etc.).
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>Important:</strong> Disabling essential cookies may prevent you from accessing certain features of our website or SaaS platforms, including login functionality and subscription access. Non-essential cookies can typically be disabled without impacting core functionality.
            </p>
          </div>

          {/* Section 5: Changes to Cookie Policy */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Changes to This Cookie Policy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Infodra Technologies reserves the right to modify this Cookie Policy at any time. Changes become effective upon posting to our website. We will update the "Last Updated" date to reflect any modifications.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              We encourage you to review this Cookie Policy periodically to stay informed about how we use cookies. Your continued use of our website and platforms constitutes acceptance of any changes to this policy.
            </p>
          </div>

          {/* Section 6: Contact Information */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Contact Information
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you have questions, concerns, or wish to exercise your rights regarding cookies, please contact:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="font-semibold text-gray-900 mb-2">Infodra Technologies Private Limited</p>
              <p className="text-gray-600 mb-2">
                <strong>Email:</strong>{" "}
                <a href="mailto:business@infodratechnologies.com" className="text-blue-600 hover:underline">
                  business@infodratechnologies.com
                </a>
              </p>
              <p className="text-gray-600 mb-2">
                <strong>WhatsApp:</strong>{" "}
                <a href="https://wa.me/918148146785" className="text-blue-600 hover:underline">
                  +91 81481 46785
                </a>
              </p>
              <p className="text-gray-600">
                <strong>Website:</strong>{" "}
                <a href="https://infodratechnologies.com" className="text-blue-600 hover:underline">
                  www.infodratechnologies.com
                </a>
              </p>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-gray-600 leading-relaxed">
              By continuing to use Infodra Technologies' website and SaaS platforms, you consent to our use of cookies as described in this Cookie Policy. If you do not consent to our cookie practices, please adjust your browser settings or discontinue use of our services.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
