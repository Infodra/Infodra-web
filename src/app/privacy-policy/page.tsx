import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Infodra Technologies",
  description:
    "Read the Privacy Policy of Infodra Technologies to understand how we collect, use, and protect your personal information.",
  keywords: [
    "privacy policy",
    "data protection",
    "infodra technologies",
    "privacy",
    "gdpr",
    "data security",
  ],
};

export default function PrivacyPolicyPage() {
  const currentYear = new Date().getFullYear();

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-gray-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            Last Updated: February {new Date().getDate()}, {currentYear}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-16">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Infodra Technologies is committed to protecting your privacy and ensuring transparency in how we collect, use, and safeguard your information. This Privacy Policy outlines our practices regarding personal data collected through our website and services.
            </p>
          </div>

          {/* Section 1: Information We Collect */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              1. Information We Collect
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We may collect various types of information from you to provide better services and improve your experience. This includes:
            </p>
            <ul className="space-y-3 ml-6 mb-8">
              <li className="text-gray-700 flex items-start">
                <span className="text-blue-600 mr-4 font-bold">•</span>
                <span><strong>Personal Information:</strong> Name, email address, phone number, and company information</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-blue-600 mr-4 font-bold">•</span>
                <span><strong>Career Data:</strong> Resume/CV details, work experience, and qualifications (for careers page submissions)</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-blue-600 mr-4 font-bold">•</span>
                <span><strong>Business Information:</strong> Company details shared via contact forms and inquiries</span>
              </li>
            </ul>
          </section>

          {/* Section 2: How We Use Your Information */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We use your information for the following purposes:
            </p>
            <ul className="space-y-3 ml-6 mb-8">
              <li className="text-gray-700 flex items-start">
                <span className="text-blue-600 mr-4 font-bold">•</span>
                <span>Responding to your inquiries and requests</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-blue-600 mr-4 font-bold">•</span>
                <span>Providing products and services you have requested</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-blue-600 mr-4 font-bold">•</span>
                <span>Recruitment and talent evaluation</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-blue-600 mr-4 font-bold">•</span>
                <span>Improving website performance and user experience</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-blue-600 mr-4 font-bold">•</span>
                <span>Business communication and relationship management</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-blue-600 mr-4 font-bold">•</span>
                <span>Compliance with legal and regulatory obligations</span>
              </li>
            </ul>
          </section>

          {/* Section 3: Recruitment & Resume Data */}
          <section className="mb-16 bg-blue-50 border-l-4 border-blue-600 p-8 rounded-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              3. Recruitment & Resume Data
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              If you submit your resume through our Careers page, we collect and store your information for recruitment and talent evaluation purposes. We retain applicant data only for as long as necessary for hiring consideration or as required by law.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              <strong>Data Deletion Rights:</strong> Applicants may request deletion of their data by contacting us at <a href="mailto:business@infodratechnologies.com" className="text-blue-600 hover:underline">business@infodratechnologies.com</a> or via WhatsApp at 81481 46785.
            </p>
          </section>

          {/* Section 4: Data Storage & Security */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              4. Data Storage & Security
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We take data security seriously and implement reasonable technical and organizational security measures to protect your information. This includes:
            </p>
            <ul className="space-y-3 ml-6 mb-8">
              <li className="text-gray-700 flex items-start">
                <span className="text-blue-600 mr-4 font-bold">•</span>
                <span>Encryption of sensitive data during transmission</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-blue-600 mr-4 font-bold">•</span>
                <span>Secure storage using trusted cloud service providers</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-blue-600 mr-4 font-bold">•</span>
                <span>Access controls and authentication mechanisms</span>
              </li>
            </ul>
            <p className="text-gray-700 italic leading-relaxed">
              Please note: No method of transmission over the internet is 100% secure. While we take precautions to protect your data, we cannot guarantee absolute security.
            </p>
          </section>

          {/* Section 5: Third-Party Services */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              5. Third-Party Services
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We may use third-party services to support our operations, including:
            </p>
            <ul className="space-y-3 ml-6 mb-8">
              <li className="text-gray-700 flex items-start">
                <span className="text-blue-600 mr-4 font-bold">•</span>
                <span>Hosting and infrastructure providers</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-blue-600 mr-4 font-bold">•</span>
                <span>Analytics and website performance tools</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-blue-600 mr-4 font-bold">•</span>
                <span>Cloud databases and storage solutions</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-blue-600 mr-4 font-bold">•</span>
                <span>Payment gateways and processing services</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              These third-party services have their own privacy policies and terms of service. We encourage you to review their policies to understand how they handle your information.
            </p>
          </section>

          {/* Section 6: Cookies & Tracking */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              6. Cookies & Tracking
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our website may use cookies and similar technologies to enhance your user experience, remember your preferences, and analyze site usage. Cookies are small text files stored on your device.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              You can control cookies through your browser settings. Most browsers allow you to refuse cookies or alert you when cookies are being sent. However, blocking cookies may affect the functionality of our website.
            </p>
          </section>

          {/* Section 7: Data Retention */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              7. Data Retention
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We retain personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. Once we no longer need your information, we will securely delete or anonymize it.
            </p>
          </section>

          {/* Section 8: Your Rights */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              8. Your Rights
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              You have the following rights regarding your personal information:
            </p>
            <ul className="space-y-3 ml-6 mb-8">
              <li className="text-gray-700 flex items-start">
                <span className="text-blue-600 mr-4 font-bold">•</span>
                <span><strong>Right to Access:</strong> Request access to your personal data</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-blue-600 mr-4 font-bold">•</span>
                <span><strong>Right to Correction:</strong> Request correction of inaccurate information</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-blue-600 mr-4 font-bold">•</span>
                <span><strong>Right to Deletion:</strong> Request deletion of your data (subject to legal requirements)</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-blue-600 mr-4 font-bold">•</span>
                <span><strong>Right to Withdraw Consent:</strong> Withdraw your consent for data processing where applicable</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-blue-600 mr-4 font-bold">•</span>
                <span><strong>Right to Data Portability:</strong> Request a copy of your data in a portable format</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              To exercise any of these rights, please contact us using the information provided in the Contact section below.
            </p>
          </section>

          {/* Section 9: Contact Information */}
          <section className="mb-16 bg-gray-50 border border-gray-200 p-8 rounded-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              9. Contact Information
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="text-gray-900 font-semibold mb-3">Infodra Technologies</p>
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong>{" "}
                <a href="mailto:business@infodratechnologies.com" className="text-blue-600 hover:underline">
                  business@infodratechnologies.com
                </a>
              </p>
              <p className="text-gray-700">
                <strong>WhatsApp:</strong>{" "}
                <a href="https://wa.me/918148146785" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  81481 46785
                </a>
              </p>
            </div>
          </section>

          {/* Section 10: Changes to Policy */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              10. Changes to This Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. We will notify you of any material changes by updating the "Last Updated" date above. Your continued use of our website constitutes your acknowledgment of the updated policy.
            </p>
          </section>

          {/* Footer Note */}
          <section className="border-t border-gray-200 pt-8">
            <p className="text-gray-600 text-sm italic">
              This Privacy Policy is effective as of February {new Date().getDate()}, {currentYear}, and was last updated on this date. We recommend reviewing this policy periodically to stay informed about how we protect your information.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
