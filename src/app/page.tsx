import { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { FeatureGrid } from "@/components/FeatureGrid";
import { CTASection } from "@/components/CTASection";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Infodra AI Solutions - AI-Powered Business Tools",
  description:
    "Transform your business with cutting-edge AI solutions. Video translation, document processing, lead generation, and more.",
  keywords: [
    "AI solutions",
    "video translator",
    "document translation",
    "lead generation",
    "documentation automation",
  ],
};

export default function Home() {
  return (
    <main>
      <Hero
        title="AI Solutions That Transform Your Business"
        description="Leverage cutting-edge artificial intelligence to automate workflows, break language barriers, and unlock new growth opportunities."
        primaryCTA={{ text: "Explore Products", href: "/products" }}
        secondaryCTA={{ text: "Schedule Demo", href: "/contact" }}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Our Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.slug}
                name={product.title}
                description={product.shortDescription}
                icon={product.icon}
                slug={product.slug}
                features={product.features.map((f) => f.title)}
              />
            ))}
          </div>
        </div>
      </section>

      <FeatureGrid
        features={[
          "AI-Powered Technology",
          "99.5% Accuracy",
          "Real-Time Processing",
          "Multi-Language Support",
          "Enterprise Security",
          "24/7 Support",
        ]}
      />

      <CTASection
        title="Ready to Transform Your Business?"
        description="Join hundreds of companies using Infodra AI Solutions to automate workflows and boost productivity."
        primaryCTA={{ text: "Get Started Free", href: "/contact" }}
        secondaryCTA={{ text: "View Pricing", href: "/pricing" }}
      />

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
