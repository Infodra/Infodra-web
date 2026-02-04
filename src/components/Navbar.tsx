"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  const navLinkClass = (path: string) =>
    `transition font-medium ${
      isActive(path)
        ? "text-blue-600 border-b-2 border-blue-600 pb-1"
        : "text-gray-700 hover:text-blue-600"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-950 border-b border-slate-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="https://www.infodratechnologies.com/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Infodra Technologies
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`transition font-medium ${
              isActive("/")
                ? "text-emerald-400 border-b-2 border-emerald-400 pb-1"
                : "text-slate-300 hover:text-emerald-400"
            }`}>
              Home
            </Link>

            <Link href="/products" className={`transition font-medium ${
              isActive("/products")
                ? "text-emerald-400 border-b-2 border-emerald-400 pb-1"
                : "text-slate-300 hover:text-emerald-400"
            }`}>
              Products
            </Link>

            <Link href="/digital-solutions" className={`transition font-medium ${
              isActive("/digital-solutions")
                ? "text-emerald-400 border-b-2 border-emerald-400 pb-1"
                : "text-slate-300 hover:text-emerald-400"
            }`}>
              Digital Solutions
            </Link>
            <Link href="/resourcing" className={`transition font-medium ${
              isActive("/resourcing")
                ? "text-emerald-400 border-b-2 border-emerald-400 pb-1"
                : "text-slate-300 hover:text-emerald-400"
            }`}>
              Resourcing
            </Link>
            <Link href="/contact" className={`transition font-medium ${
              isActive("/contact")
                ? "text-emerald-400 border-b-2 border-emerald-400 pb-1"
                : "text-slate-300 hover:text-emerald-400"
            }`}>
              Contact
            </Link>
          </div>

          {/* Desktop CTA Button */}
          <Link
            href="/contact"
            className="hidden md:inline-block bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-6 py-2 rounded-lg hover:shadow-lg transition font-semibold"
          >
            Get Started
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:bg-slate-700 rounded-lg transition"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-slate-700 space-y-2 bg-slate-800">
            <Link
              href="/"
              className={`block px-4 py-2 rounded-lg transition ${
                isActive("/")
                  ? "bg-slate-700 text-emerald-400 font-semibold"
                  : "text-slate-300 hover:bg-slate-700"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/products"
              className={`block px-4 py-2 rounded-lg transition ${
                isActive("/products")
                  ? "bg-slate-700 text-emerald-400 font-semibold"
                  : "text-slate-300 hover:bg-slate-700"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </Link>

            <Link
              href="/digital-solutions"
              className={`block px-4 py-2 rounded-lg transition ${
                isActive("/digital-solutions")
                  ? "bg-slate-700 text-emerald-400 font-semibold"
                  : "text-slate-300 hover:bg-slate-700"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Digital Solutions
            </Link>
            <Link
              href="/resourcing"
              className={`block px-4 py-2 rounded-lg transition ${
                isActive("/resourcing")
                  ? "bg-slate-700 text-emerald-400 font-semibold"
                  : "text-slate-300 hover:bg-slate-700"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Resourcing
            </Link>
            <Link
              href="/contact"
              className={`block px-4 py-2 rounded-lg transition ${
                isActive("/contact")
                  ? "bg-slate-700 text-emerald-400 font-semibold"
                  : "text-slate-300 hover:bg-slate-700"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg hover:shadow-lg transition font-semibold text-center mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
