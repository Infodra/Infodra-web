import { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { products } from "@/data/products";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our AI Products & Pricing - Infodra Technologies",
  description:
    "Explore our complete suite of AI-powered solutions for business transformation.",
  keywords: ["AI products", "solutions", "software", "automation", "pricing"],
};

// Product categories
const categories = {
  "Video AI": ["ai-video-translator"],
  "Document AI": ["ai-user-manual-generation", "ai-document-translator"],
  "Business AI": ["bizlead-database"],
};

export default function PricingPage() {
  const filters = ["All", "Video AI", "Document AI", "Business AI"];

  return (
    <main>
      <Hero
        title="Our AI-Powered Products"
        description="Discover our comprehensive suite of cutting-edge AI solutions designed to transform your business operations across different domains."
        primaryCTA={{ text: "Schedule Demo", href: "/contact" }}
      />

      {/* Products Grid Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => {
              const categoryName = Object.entries(categories).find(
                ([_, slugs]) => slugs.includes(product.slug)
              )?.[0] || "Product";

              return (
                <div
                  key={product.slug}
                  className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition h-full flex flex-col group"
                >
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">
                      {categoryName}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                    {product.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.tagline}
                  </p>

                  <p className="text-gray-600 mb-6 flex-grow">
                    {product.shortDescription}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <li
                          key={index}
                          className="text-sm text-gray-600 flex items-start"
                        >
                          <span className="text-blue-600 font-bold mr-2">
                            •
                          </span>
                          <span>{feature.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3 pt-6 border-t border-gray-200">
                    <Link
                      href={`/products/${product.slug}`}
                      className="flex-1 px-6 py-2 bg-gradient-to-r from-slate-700 to-slate-800 text-emerald-400 rounded-lg hover:from-slate-600 hover:to-slate-700 hover:shadow-lg transition font-semibold group-hover:shadow-md text-center border border-slate-600 hover:border-emerald-400"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-xl text-slate-200 mb-8">
            Our experts are ready to find the perfect AI solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 hover:shadow-lg transition font-semibold"
            >
              Schedule a Demo
            </a>
            <a
              href="https://wa.me/918148146785"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-cyan-500 text-slate-900 px-8 py-3 rounded-lg hover:bg-cyan-400 transition font-semibold"
            >
              Chat with Us
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose Infodra AI?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50M+</div>
              <p className="text-gray-600 font-semibold">Business Data Points</p>
              <p className="text-gray-500 text-sm mt-2">
                Access verified information on millions of companies
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <p className="text-gray-600 font-semibold">Languages Supported</p>
              <p className="text-gray-500 text-sm mt-2">
                Break language barriers for global expansion
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%+</div>
              <p className="text-gray-600 font-semibold">Accuracy Rate</p>
              <p className="text-gray-500 text-sm mt-2">
                Enterprise-grade accuracy and reliability
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
