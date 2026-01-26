interface PricingOption {
  name: string;
  description: string;
  price: string;
  features: string[];
  cta: string;
}

interface PricingPreviewProps {
  pricing: PricingOption[];
}

export function PricingPreview({ pricing }: PricingPreviewProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Flexible Pricing Plans
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
          {pricing.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden shadow-md transition-all duration-300 border ${
                index === 1
                  ? "ring-2 ring-blue-600 md:scale-105 shadow-2xl border-blue-300 bg-gradient-to-b from-blue-50 to-white"
                  : "border-gray-200 bg-white hover:shadow-xl hover:border-blue-200"
              }`}
            >
              {/* Header */}
              <div
                className={`p-8 ${
                  index === 1
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white"
                    : "bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200"
                }`}
              >
                {index === 1 && (
                  <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold text-white mb-3">
                    ⭐ Most Popular
                  </div>
                )}
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    index === 1 ? "text-white" : "text-gray-900"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm ${
                    index === 1 ? "text-blue-100" : "text-gray-600"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              {/* Content */}
              <div className="p-8 space-y-6">
                {/* Price */}
                <div>
                  <span className="text-5xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <p className="text-gray-600 text-sm mt-2">per month</p>
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="text-gray-700 flex items-start gap-3"
                    >
                      <span className="text-green-500 font-bold flex-shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 mt-6 ${
                    index === 1
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-lg active:shadow-md"
                      : "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900 hover:from-gray-200 hover:to-gray-300 hover:shadow-md active:shadow-sm"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
