import type { Metadata } from "next";
import { TechnologyPageContent } from "@/components/TechnologyPageContent";
import { ROICalculatorWidget } from "@/components/ROICalculatorWidget";

export const metadata: Metadata = {
  title:
    "Technology Solutions | Custom Software, System Integration & Digital Transformation | Infodra Technologies",
  description:
    "Enterprise technology solutions — custom software development, system integration, scalable digital platforms, business process automation, and AI-enabled solutions for complex business environments.",
  keywords: [
    "custom software development",
    "system integration",
    "digital transformation",
    "business process automation",
    "AI solutions",
    "cloud native platforms",
    "enterprise software",
    "SaaS platforms",
    "microservices",
    "API architecture",
    "Infodra Technologies",
  ],
  openGraph: {
    title: "Technology Solutions | Custom Software & Digital Transformation | Infodra Technologies",
    description:
      "Enterprise technology solutions — custom software development, system integration, scalable digital platforms, and AI-enabled automation.",
    url: "https://infodra.com/technology",
    type: "website",
  },
};

export default function Technology() {
  return (
    <ROICalculatorWidget>
      <TechnologyPageContent />
    </ROICalculatorWidget>
  );
}
