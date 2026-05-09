"use client";

import Link from "next/link";

interface CTASectionProps {
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
}

export function CTASection({
  title,
  description,
  primaryCTA,
  secondaryCTA,
}: CTASectionProps) {
  // Check if URL is external
  const isExternalUrl = (url: string) => url.startsWith("http://") || url.startsWith("https://");

  const isPrimaryExternal = isExternalUrl(primaryCTA.href);
  const isSecondaryExternal = secondaryCTA ? isExternalUrl(secondaryCTA.href) : false;

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-emerald-900 to-cyan-900 text-white py-20 overflow-hidden rounded-3xl mx-4 sm:mx-6 lg:mx-8 my-20">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          {title}
        </h2>
        <p className="text-lg md:text-xl text-emerald-50 mb-10 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {isPrimaryExternal ? (
            <a
              href={primaryCTA.href}
              className="bg-white text-emerald-600 px-8 py-3.5 rounded-lg font-semibold text-lg tracking-widerr hover:bg-emerald-50 hover:shadow-2xl active:shadow-lg transition-all duration-200 shadow-lg inline-block"
            >
              {primaryCTA.text}
            </a>
          ) : (
            <Link
              href={primaryCTA.href}
              className="bg-white text-emerald-600 px-8 py-3.5 rounded-lg font-semibold text-lg hover:bg-emerald-50 hover:shadow-2xl active:shadow-lg transition-all duration-200 shadow-lg inline-block"
            >
              {primaryCTA.text}
            </Link>
          )}
          {secondaryCTA && (
            isSecondaryExternal ? (
              <a
                href={secondaryCTA.href}
                  className="border-2 border-white text-white px-8 py-3.5 rounded-lg font-semibold text-lg tracking-widerr hover:bg-emerald-400 hover:border-white active:bg-emerald-600 transition-all duration-200 inline-block"
              >
                {secondaryCTA.text}
              </a>
            ) : (
              <Link
                href={secondaryCTA.href}
                className="border-2 border-white text-white px-8 py-3.5 rounded-lg font-semibold text-lg tracking-widest hover:bg-emerald-400 hover:border-white active:bg-emerald-600 transition-all duration-200 inline-block"
              >
                {secondaryCTA.text}
              </Link>
            )
          )}
        </div>

        {primaryCTA.subtext && (
          <p className="text-base text-gray-300 mt-6 max-w-2xl mx-auto">
            {primaryCTA.subtext}
          </p>
        )}
      </div>
    </section>
  );
}
