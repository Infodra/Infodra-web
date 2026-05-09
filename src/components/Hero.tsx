"use client";

interface HeroProps {
  title: string;
  description: string;
  primaryCTA: {
    text: string;
    href: string;
    subtext?: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
}

export function Hero({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
}: HeroProps) {
  return (
    <section
      className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-gray-50 text-gray-900 overflow-hidden"
      style={{
        backgroundImage: backgroundImage
          ? `linear-gradient(135deg, rgba(240, 249, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${backgroundImage})`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Decorative gradient elements with animations */}
      <div className="absolute top-40 right-32 w-80 h-80 bg-emerald-400 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-subtle-pulse" />
      <div className="absolute bottom-0 left-20 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-subtle-pulse" />
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-2xl opacity-10" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight text-gray-900">
          {title}
        </h1>
        <p className="text-lg md:text-xl mb-10 text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={primaryCTA.href}
            className="bg-green-500 text-white px-10 py-4 rounded-lg font-semibold text-xl tracking-wider hover:bg-green-600 hover:shadow-2xl active:shadow-lg transition duration-200 shadow-lg"
          >
            {primaryCTA.text}
          </a>
          {secondaryCTA && (
            <a
              href={secondaryCTA.href}
              className="border-2 border-gray-900 text-gray-900 px-8 py-3.5 rounded-lg font-semibold text-lg tracking-wider hover:bg-gray-100 hover:border-gray-900 active:bg-gray-200 transition duration-200"
            >
              {secondaryCTA.text}
            </a>
          )}
        </div>
        {primaryCTA.subtext && (
          <p className="text-base text-gray-700 mt-6 max-w-2xl mx-auto">
            {primaryCTA.subtext}
          </p>
        )}
      </div>
    </section>
  );
}
