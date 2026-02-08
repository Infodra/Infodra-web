import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Infodra Technologies",
  description:
    "Review the Terms of Service governing the use of Infodra Technologies' website, SaaS platforms, and subscription services.",
  keywords: [
    "terms of service",
    "terms and conditions",
    "SaaS terms",
    "subscription terms",
    "BizLead terms",
  ],
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-lg text-gray-200 leading-relaxed">
            These Terms of Service govern your access to and use of the services provided by Infodra Technologies, including our website and SaaS platforms such as BizLead Database.
          </p>
          <p className="text-sm text-gray-400 mt-6">
            Last Updated: February 7, 2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section 1: Acceptance of Terms */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing, browsing, or using the Infodra Technologies website and our SaaS platforms (including but not limited to BizLead Database, AI solutions, and digital services), you agree to be bound by these Terms of Service. If you do not agree to abide by the above, please do not use this service.
            </p>
          </div>

          {/* Section 2: Services Provided */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Services Provided
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Infodra Technologies provides a range of digital solutions and services, including:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>AI-powered digital solutions and tools</li>
              <li>Engineering and technical services</li>
              <li>SaaS products such as BizLead Database (comprehensive B2B business database)</li>
              <li>Website development and optimization services</li>
              <li>Subscription-based access to digital platforms</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              Access to these services may be subject to subscription or payment terms as described on our website and billing pages.
            </p>
          </div>

          {/* Section 3: Account Registration */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Account Registration
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To use certain features of our SaaS platforms, you may be required to register for an account. When registering, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 mt-4">
              <li>Provide accurate, truthful, and complete information</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Promptly update account information to keep it accurate</li>
              <li>Accept responsibility for all activities conducted under your account</li>
              <li>Notify us immediately of unauthorized account access</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              You acknowledge that you are solely responsible for maintaining the security of your account and password.
            </p>
          </div>

          {/* Section 4: Subscription & Payment Terms */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Subscription & Payment Terms
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Subscription to our SaaS platforms is based on the following terms:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Services are subscription-based with recurring billing cycles (monthly or annual, as selected)</li>
              <li>Payments are processed through secure third-party payment gateways</li>
              <li>You authorize us to charge the payment method on file for subscription fees and applicable taxes</li>
              <li>Access to the service is contingent upon successful payment</li>
              <li>Pricing is subject to change with notice; changes will apply to renewals</li>
              <li>Subscriptions automatically renew at the end of each billing cycle unless canceled</li>
              <li>Cancellation requests must be made in writing or through your account portal</li>
              <li>Refund policies (if applicable) are provided upon purchase and vary by service</li>
            </ul>
          </div>

          {/* Section 5: Permitted Use */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Permitted Use
            </h2>
            <p className="text-gray-600 leading-relaxed">
              You may use our services for legitimate business purposes in accordance with your subscription plan. This includes:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 mt-4">
              <li>Accessing and searching the BizLead Database for sales prospecting and business development</li>
              <li>Exporting leads and contact information within your plan limits</li>
              <li>Integrating data with your internal CRM and business systems</li>
              <li>Using AI tools and digital solutions for internal business operations</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              Use must comply with all applicable laws, regulations, and industry standards including telemarketing and data protection laws.
            </p>
          </div>

          {/* Section 6: Prohibited Activities */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Prohibited Activities
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              You expressly agree NOT to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Resell, redistribute, republish, or share database content with unauthorized parties</li>
              <li>Scrape, crawl, or extract data beyond your subscription plan limits</li>
              <li>Reverse engineer, decompile, or disassemble any part of the platform</li>
              <li>Attempt unauthorized access or bypass security measures</li>
              <li>Use the service for unlawful, fraudulent, or malicious purposes</li>
              <li>Create competing databases or services from our data</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Harass, abuse, or harm any individual or entity</li>
              <li>Transmit malware, viruses, or harmful code</li>
              <li>Interfere with the normal operation of the platform</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              Violation of these terms may result in immediate suspension or termination of your account without refund.
            </p>
          </div>

          {/* Section 7: Intellectual Property */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. Intellectual Property Rights
            </h2>
            <p className="text-gray-600 leading-relaxed">
              All content, software, designs, code, databases, trademarks, logos, and other materials on the Infodra Technologies website and platforms are the exclusive property of Infodra Technologies or its licensors. No ownership rights are transferred to users.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              You are granted a limited, non-exclusive, non-transferable license to use the services solely for your internal business operations during your active subscription. You may not reproduce, modify, distribute, or create derivative works from any platform materials without prior written consent.
            </p>
          </div>

          {/* Section 8: Data & Privacy */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8. Data & Privacy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Your use of our services and the handling of your personal information is governed by our Privacy Policy. By using our services, you consent to the collection, processing, and storage of your data as described in our{" "}
              <a href="/privacy-policy" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>
              .
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Data provided in our platforms (such as business contact information) is collected, verified, and maintained in compliance with applicable data protection laws including India's data privacy standards.
            </p>
          </div>

          {/* Section 9: Service Availability */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              9. Service Availability
            </h2>
            <p className="text-gray-600 leading-relaxed">
              While we strive to maintain continuous service availability, we:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 mt-4">
              <li>Do not guarantee uninterrupted or error-free access to our platforms</li>
              <li>May perform maintenance, updates, or enhancements that temporarily interrupt service</li>
              <li>Will provide notice of planned maintenance when possible</li>
              <li>Reserve the right to modify or discontinue services with reasonable notice</li>
            </ul>
          </div>

          {/* Section 10: Limitation of Liability */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              10. Limitation of Liability
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              To the extent permitted by law:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Services are provided "as is" and "as available" without warranties</li>
              <li>Infodra Technologies disclaims all implied warranties including merchantability and fitness</li>
              <li>We are not liable for indirect, incidental, special, or consequential damages</li>
              <li>We do not guarantee specific business results or outcomes</li>
              <li>Data accuracy, while maintained at high standards, is not guaranteed</li>
              <li>We are not liable for third-party acts or data breaches beyond our control</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              Your sole remedy for service issues is discontinuation of the service and refund of any unused subscription fees (if applicable).
            </p>
          </div>

          {/* Section 11: Termination */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              11. Termination of Service
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Account termination may occur under the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>User initiates cancellation through their account or by written request</li>
              <li>Non-payment of subscription fees for 30 days</li>
              <li>Violation of these Terms of Service or prohibited activities</li>
              <li>Abuse of platform resources or security threats</li>
              <li>Infodra Technologies decision to discontinue the service</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              Upon termination, your access ceases immediately. Data retention after cancellation is governed by our Privacy Policy. No refunds are provided for partially used subscription periods except as required by law.
            </p>
          </div>

          {/* Section 12: Changes to Terms */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              12. Changes to Terms of Service
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Infodra Technologies reserves the right to modify these Terms of Service at any time. Changes become effective upon posting to our website. We will provide notice of material changes when possible.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Your continued use of our services after any modifications constitutes acceptance of the updated Terms. If you do not agree to changes, you may cancel your subscription.
            </p>
          </div>

          {/* Section 13: Governing Law */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              13. Governing Law & Jurisdiction
            </h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms of Service are governed by and construed in accordance with the laws of India, without regard to conflict of law principles. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of courts located in India.
            </p>
          </div>

          {/* Section 14: Contact Information */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              14. Contact Information
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              For questions, concerns, or disputes regarding these Terms of Service, please contact:
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

          {/* Acceptance Notice */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-gray-600 leading-relaxed italic">
              By using Infodra Technologies' services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree, please discontinue use of our services immediately.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
