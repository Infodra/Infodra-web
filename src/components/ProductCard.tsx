import Link from "next/link";

interface ProductCardProps {
  name: string;
  description: string;
  icon: string;
  slug: string;
  features: string[];
}

export function ProductCard({
  name,
  description,
  icon,
  slug,
  features,
}: ProductCardProps) {
  return (
    <div className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 flex flex-col h-full">
      {/* Header with gradient */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 text-center border-b border-blue-100 group-hover:from-blue-100 group-hover:to-indigo-100 transition">
        <div className="text-6xl mb-4 transition-transform group-hover:scale-110 duration-300">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 whitespace-pre-line">{name}</h3>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6 flex flex-col flex-1">
        {/* Description */}
        <p className="text-gray-700 leading-relaxed min-h-[48px]">{description}</p>

        {/* Features */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide text-blue-600">
            Key Features
          </h4>
          <ul className="space-y-2.5">
            {features.slice(0, 3).map((feature, index) => (
              <li
                key={index}
                className="text-sm text-gray-700 flex items-start gap-2.5"
              >
                <span className="text-blue-500 font-bold flex-shrink-0 mt-0.5">→</span>
                <span>{feature}</span>
              </li>
            ))}
            {features.length > 3 && (
              <li className="text-xs text-blue-600 font-semibold pt-2">
                + {features.length - 3} more features
              </li>
            )}
          </ul>
        </div>

        {/* CTA Button */}
        <Link
          href={`/products/${slug}`}
          className="block w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white text-center py-3 rounded-lg hover:shadow-lg active:shadow-md transition-all duration-200 font-semibold group-hover:from-emerald-700 group-hover:to-emerald-800 mt-auto"
        >
          Learn More →
        </Link>
      </div>
    </div>
  );
}
