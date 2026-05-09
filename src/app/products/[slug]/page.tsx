import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Hero } from "@/components/Hero";
import { UseCases } from "@/components/UseCases";
import { HowItWorks } from "@/components/HowItWorks";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { ServiceModes } from "@/components/ServiceModes";
import { getProductBySlug, getAllProductSlugs } from "@/data/products";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: `${product.title} | Infodra AI Solutions`,
    description: product.shortDescription,
    openGraph: {
      title: product.title,
      description: product.shortDescription,
      type: "website",
    },
  };
}

export async function generateStaticParams() {
  const slugs = getAllProductSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main>
      {/* Hero Section */}
      <Hero
        title={product.title}
        description={product.tagline}
        primaryCTA={{
          text: product.primaryCTA.text,
          href: product.primaryCTA.url || "#contact",
        }}
        secondaryCTA={{
          text: product.secondaryCTA.text,
          href: product.secondaryCTA.url || "#",
        }}
      />

      {/* Features Section with Descriptions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-lg text-gray-600">
              Powerful capabilities designed to solve your business challenges
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:shadow-lg transition-shadow">
                      <span className="text-2xl text-white">✓</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Modes Section */}
      {product.serviceModes && product.serviceModes.length > 0 && (
        <ServiceModes serviceModes={product.serviceModes} />
      )}

      {/* Use Cases Section */}
      {product.useCases && product.useCases.length > 0 && (
        <UseCases useCases={product.useCases} />
      )}

      {/* How It Works Section */}
      {product.howItWorks && product.howItWorks.length > 0 && (
        <HowItWorks items={product.howItWorks} />
      )}

      {/* FAQ Section */}
      {product.faqs && product.faqs.length > 0 && (
        <FAQ items={product.faqs} />
      )}

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Business?"
        description={`Join hundreds of Indian enterprises already benefiting from ${product.title}`}
        primaryCTA={{
          text: product.primaryCTA.text,
          href: product.primaryCTA.url || "#",
          subtext: product.primaryCTA.subtext,
        }}
        secondaryCTA={{
          text: product.secondaryCTA.text,
          href: product.secondaryCTA.url || "#",
        }}
      />
    </main>
  );
}
