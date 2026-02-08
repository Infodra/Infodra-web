import { Metadata } from "next";
import CareersPageContent from "./careers-content";

// SEO Metadata
export const metadata: Metadata = {
  title: "Careers at Infodra Technologies | Join Our Team",
  description:
    "Explore career opportunities at Infodra Technologies. Submit your CV and join our growing team in IT, Engineering, AI, and Digital Solutions.",
  keywords: [
    "careers",
    "jobs",
    "hiring",
    "IT jobs",
    "engineering",
    "AI",
    "Infodra Technologies",
  ],
};

export default function CareersPage() {
  return <CareersPageContent />;
}


