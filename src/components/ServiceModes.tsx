"use client";

interface ServiceMode {
  mode: string;
  title: string;
  description: string;
  features: string[];
  cta: string;
  highlight: boolean;
}

interface ServiceModesProps {
  serviceModes: ServiceMode[];
}

export function ServiceModes({ serviceModes }: ServiceModesProps) {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional Service Modes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer two professional service modes to meet your needs while ensuring legal and responsible AI usage
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {serviceModes.map((mode, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 transition-all duration-300 ${
                mode.highlight
                  ? "border-2 border-yellow-400 bg-gradient-to-br from-yellow-50 to-orange-50 shadow-lg hover:shadow-xl"
                  : "border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-lg"
              }`}
            >
              {/* Icon and Title */}
              <div className="mb-6">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  {mode.title}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {mode.description}
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {mode.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className={`flex-shrink-0 mt-1 ${
                      mode.highlight ? "text-orange-500" : "text-blue-500"
                    }`}>
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-base leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-3 rounded-lg font-semibold text-white transition-all duration-200 hover:shadow-lg active:shadow-md ${
                  mode.highlight
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                    : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                }`}
              >
                {mode.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
