import type { Metadata } from "next";
import { ROICalculatorWidget } from "@/components/ROICalculatorWidget";
import { DigitalSolutionsContent } from "@/components/DigitalSolutionsPageContent";

export const metadata: Metadata = {
  title:
    "Engineering Services | CAD Design, 3D Modeling & Product Development | Infodra Technologies",
  description:
    "Infodra Technologies provides professional engineering services including CAD design (CATIA, SolidWorks, Siemens NX, Creo), 3D modeling, technical drafting, and product design & development support for manufacturing, automotive, and industrial enterprises.",
  keywords: [
    "engineering services",
    "CAD design services",
    "CATIA design services",
    "SolidWorks engineering",
    "Siemens NX",
    "3D modeling and drafting",
    "product design and development",
    "design for manufacturing",
    "contract engineering staffing",
    "engineering resource deployment",
    "Infodra Technologies",
  ],
  openGraph: {
    title: "Engineering Services | Infodra Technologies",
    description:
      "Professional CAD design, 3D modeling, product development support, and skilled engineering resource deployment for global enterprises.",
    url: "https://infodratechnologies.com/engineering",
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
