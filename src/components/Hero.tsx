"use client";

interface HeroProps {
  title: string;
  description: string;
  primaryCTA: {
    text: string;
    href: string;
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
      className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white overflow-hidden"
      style={{
        backgroundImage: backgroundImage
          ? `linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(2, 6, 23, 0.8)), url(${backgroundImage})`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Decorative gradient elements */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-emerald-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse" />
      <div className="absolute -bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse" />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-emerald-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight text-white">
          {title}
        </h1>
        <p className="text-lg md:text-xl mb-10 text-slate-200 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={primaryCTA.href}
            className="bg-green-600 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-green-700 hover:shadow-2xl active:shadow-lg transition duration-200 shadow-lg"
          >
            {primaryCTA.text}
          </a>
          {secondaryCTA && (
            <a
              href={secondaryCTA.href}
              className="border-2 border-slate-300 text-slate-100 px-8 py-3.5 rounded-lg font-semibold hover:bg-slate-700 hover:border-slate-200 active:bg-slate-800 transition duration-200 backdrop-blur-sm"
            >
              {secondaryCTA.text}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
