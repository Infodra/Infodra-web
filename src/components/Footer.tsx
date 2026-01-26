import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="text-lg font-bold">Infodra</span>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Transforming businesses with cutting-edge AI technologies.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p className="font-semibold text-white text-xs uppercase tracking-wide">INFODRA TECHNOLOGIES</p>
              <p>INNOV8, 2ND FLOOR</p>
              <p>RMZ MILLENIA BUSINESS PARK</p>
              <p>CHENNAI-600096</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-5 text-sm uppercase tracking-wider text-blue-400">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/" className="hover:text-blue-400 transition font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-blue-400 transition font-medium">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-5 text-sm uppercase tracking-wider text-blue-400">Products</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/products/ai-video-translator" className="hover:text-blue-400 transition font-medium">
                  Video Translator
                </Link>
              </li>
              <li>
                <Link href="/products/ai-user-manual-generation" className="hover:text-blue-400 transition font-medium">
                  User Manual Generator
                </Link>
              </li>
              <li>
                <Link href="/products/ai-document-translator" className="hover:text-blue-400 transition font-medium">
                  Document Translator
                </Link>
              </li>
              <li>
                <Link href="/products/bizlead-database" className="hover:text-blue-400 transition font-medium">
                  BiZlead Database
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-5 text-sm uppercase tracking-wider text-blue-400">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-blue-400 transition font-medium">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition font-medium">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition font-medium">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition font-medium">
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-5 text-sm uppercase tracking-wider text-blue-400">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="tel:+919884053540"
                  className="hover:text-blue-400 transition font-medium"
                >
                  +91 98840 53540
                </a>
              </li>
              <li>
                <a
                  href="mailto:business@infodratechnologies.com"
                  className="hover:text-blue-400 transition font-medium"
                >
                  business@infodratechnologies.com
                </a>
              </li>
              <li className="pt-2">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Follow us</p>
                <div className="flex gap-3">
                  <a href="https://twitter.com" className="text-gray-400 hover:text-blue-400 transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" />
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/company/infodra-technologies-private-limited/" className="text-gray-400 hover:text-blue-400 transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a href="https://instagram.com" className="text-gray-400 hover:text-blue-400 transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                    </svg>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Infodra Technologies Private Limited. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-blue-400 transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                Terms of Service
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
