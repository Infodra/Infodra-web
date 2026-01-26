import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Hero } from "@/components/Hero";
import { UseCases } from "@/components/UseCases";
import { HowItWorks } from "@/components/HowItWorks";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
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

      {/* Service Modes Section - Only for Voice Generation Studio */}
      {product.serviceModes && (
        <section className="py-16 bg-gradient-to-b from-indigo-50 to-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Choose Your Service Mode
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We offer two professional service modes to meet your needs while ensuring legal and responsible AI usage
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {product.serviceModes.map((mode, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-8 border-2 transition-all duration-300 ${
                    mode.highlight
                      ? "border-amber-400 bg-gradient-to-br from-amber-50 to-orange-50 shadow-lg scale-105 lg:scale-105"
                      : "border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-lg"
                  }`}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    {mode.title}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                    {mode.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {mode.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <span className="text-lg font-bold text-gray-900 mt-0.5">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                      mode.highlight
                        ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:shadow-lg hover:scale-105"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    {mode.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Demo Section Placeholder */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              See It In Action
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {product.shortDescription}
            </p>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-4 border-gray-200">
              <div className="aspect-video bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-block bg-blue-100 rounded-full p-6 mb-4">
                    <svg
                      className="w-12 h-12 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 font-semibold">
                    Product Demo Video Coming Soon
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={product.primaryCTA.url || "#"}
                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
              >
                {product.primaryCTA.text}
              </a>
              <WhatsAppCTA productName={product.title} size="md" />
            </div>
          </div>
        </div>
      </section>

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

      {/* Use Cases Section */}
      <UseCases useCases={product.useCases} />

      {/* How It Works Section */}
      <HowItWorks items={product.howItWorks} />

      {/* Responsible Use Notice - For products that have it */}
      {product.responsibleUseNotice && (
        <section className="py-16 bg-gradient-to-r from-red-50 to-orange-50 border-b-4 border-red-400">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl p-8 border-2 border-red-300 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl">⚠️</div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Responsible AI Voice Usage Policy
                  </h2>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed font-semibold">
                  {product.responsibleUseNotice}
                </p>
                <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-400 rounded">
                  <p className="text-gray-800 font-medium">
                    <span className="text-red-600 font-bold">Legal Compliance:</span> We take responsible AI usage seriously and comply with all applicable laws and regulations regarding voice cloning, impersonation prevention, and consent verification.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <FAQ items={product.faqs} />

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white py-16 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 -ml-48 -mb-48" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-slate-200 mb-8">
            Join hundreds of Indian enterprises already benefiting from {product.title}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={product.primaryCTA.url || "#"}
              className="inline-flex items-center justify-center bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition font-semibold shadow-lg hover:shadow-2xl"
            >
              {product.primaryCTA.text}
            </a>
            <WhatsAppCTA productName={product.title} variant="gradient" size="md" />
          </div>
        </div>
      </section>
    </main>
  );
}
