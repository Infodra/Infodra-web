import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Infodra Technologies | Get in Touch",
  description:
    "Contact Infodra Technologies for engineering services, technology solutions, resourcing, and AI products. Reach out for consultations, quotes, and partnerships.",
  keywords: [
    "contact infodra",
    "get in touch",
    "engineering inquiry",
    "technology consultation",
    "resourcing inquiry",
    "Infodra Technologies",
  ],
  openGraph: {
    title: "Contact Infodra Technologies | Get in Touch",
    description:
      "Contact Infodra Technologies for engineering services, technology solutions, resourcing, and AI products.",
    url: "https://infodra.com/contact",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
