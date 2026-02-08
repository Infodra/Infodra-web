interface HowItWorksItem {
  step: number;
  title: string;
  description: string;
}

interface HowItWorksProps {
  items: HowItWorksItem[];
}

export function HowItWorks({ items }: HowItWorksProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple, straightforward process to get started
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
            {items.map((item) => (
              <div key={item.step} className="relative flex justify-center">
                <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl border border-gray-100 hover:border-blue-200 transition-all duration-300 h-full w-full">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-emerald-600 to-cyan-700 text-white font-bold text-xl mb-4 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.step < items.length && (
                <div className="hidden lg:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-2 rounded-full shadow-lg">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
