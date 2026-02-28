import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Image 
              src="/technologies-logo.png" 
              alt="Infodra Technologies Logo" 
              width={200}
              height={60}
              className="w-48 h-auto object-contain mb-6"
              unoptimized
            />
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Transforming businesses with cutting-edge AI technologies.
            </p>
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
                <Link href="/digital-solutions" className="hover:text-blue-400 transition font-medium">
                  Digital Solutions
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
                <Link href="/about" className="hover:text-blue-400 transition font-medium">
                  About Us
                </Link>
              </li>
              <li>
                <a href="/presentation.html" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition font-medium">
                  Presentation
                </a>
              </li>
              <li>
                <Link href="/careers" className="hover:text-blue-400 transition font-medium">
                  Admin
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition font-medium">
                  Blog
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
                  href="tel:+918148146785"
                  className="hover:text-blue-400 transition font-medium"
                >
                  +91 81481 46785
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
                  <a href="https://www.linkedin.com/company/109277634/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a href="https://www.facebook.com/share/17tsnE46Cv/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/infodratech?igsh=MmpkczBpMTE0dzRh" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110 2.881 1.44 1.44 0 010-2.881z" />
                    </svg>
                  </a>
                  <a href="https://wa.me/918148146785" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.6 6.32c-1.63-1.6-3.8-2.48-6.1-2.48-4.76 0-8.63 3.87-8.63 8.63 0 1.52.39 3 1.15 4.32L2.7 21.3l4.53-1.19c1.26.68 2.68 1.04 4.14 1.04 4.76 0 8.64-3.88 8.64-8.64 0-2.3-.89-4.47-2.51-6.1zM11.6 19.3c-1.3 0-2.57-.33-3.68-.95l-.26-.16-2.71.71.72-2.68-.17-.27c-.75-1.2-1.15-2.57-1.15-3.98 0-3.96 3.22-7.18 7.18-7.18 1.91 0 3.71.74 5.06 2.08 1.35 1.35 2.09 3.15 2.09 5.06 0 3.97-3.22 7.19-7.18 7.19zm3.94-5.38c-.21-.11-1.28-.63-1.48-.7-.2-.06-.35-.11-.49.1-.14.21-.56.7-.68.85-.12.14-.25.16-.46.05-.21-.11-1.45-.42-2.76-1.35-.81-.58-.96-1.14-.96-1.35 0-.14.01-.33.12-.5.11-.16.5-.63.63-.85.13-.22.2-.37.3-.62.1-.25.05-.47-.02-.66-.07-.19-.48-1.19-.66-1.63-.18-.42-.36-.36-.48-.37l-.41-.01c-.14 0-.37.05-.56.25-.2.2-.75.73-.75 1.78s.77 2.06.87 2.2c.11.15 1.53 2.33 3.7 3.27 1.45.62 1.83.62 2.5.52.67-.1 2.16-.88 2.46-1.73.3-.85.3-1.58.21-1.73-.09-.15-.3-.24-.51-.33z" />
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
              <Link href="/privacy-policy" className="hover:text-blue-400 transition">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-blue-400 transition">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="hover:text-blue-400 transition">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
