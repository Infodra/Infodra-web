import type { Metadata } from "next";
import { ROICalculatorWidget } from "@/components/ROICalculatorWidget";
import { DigitalSolutionsContent } from "@/components/DigitalSolutionsPageContent";

export const metadata: Metadata = {
  title: "Website Development, SEO & Web Applications | Infodra Technologies",
  description:
    "Infodra Technologies provides professional website development, SEO services, web applications, and automation solutions to help businesses grow online.",
  keywords: [
    "website development",
    "SEO services",
    "web applications",
    "automation solutions",
    "digital marketing",
    "web design",
    "Infodra Technologies",
  ],
  openGraph: {
    title: "Website Development, SEO & Web Applications | Infodra Technologies",
    description:
      "Professional digital solutions for business growth. Website development, SEO, web apps, and automation.",
    url: "https://infodra.com/digital-solutions",
    type: "website",
  },
};

export default function DigitalSolutions() {
  return (
    <ROICalculatorWidget>
      <DigitalSolutionsContent />
    </ROICalculatorWidget>
  );
}
