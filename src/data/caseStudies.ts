export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  category: "engineering" | "ai-technology" | "technology" | "resourcing";
  objective: string;
  problems: string[];
  scopeOfWork?: string[];
  solution: string[];
  results: string[];
  status: string;
  keyValueDelivered: string;
  shortDescription: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "ai-multilingual-video-localization",
    title: "AI-Based Multilingual Video Localization for Vehicle Assembly",
    client: "Two-Wheeler Manufacturing Unit (Confidential)",
    category: "ai-technology",
    objective:
      "Reduce cost and effort in translating vehicle assembly training videos into multiple languages.",
    problems: [
      "Vehicle assembly training content only available in English",
      "High cost for manual translation and dubbing of assembly procedures",
      "Repeated effort for each target language across assembly lines",
    ],
    solution: [
      "Developed AI tool to convert vehicle assembly videos into 15+ languages",
      "Automated voice and subtitle synchronization for assembly instructions",
      "Eliminated manual dubbing process entirely for assembly training",
    ],
    results: [
      "Reduced translation cost significantly for assembly content",
      "Faster deployment of multilingual vehicle assembly training",
      "Improved assembly workforce understanding across regions",
    ],
    status: "Prototype completed",
    keyValueDelivered:
      "Scalable, AI-driven multilingual training pipeline reducing manual effort and cost across vehicle assembly operations.",
    shortDescription:
      "AI-powered solution converting vehicle assembly training videos into 15+ languages with automated voice and subtitle synchronization.",
  },
  {
    slug: "ai-user-manual-generation",
    title: "AI-Driven User Manual Generation from Engineering Sketches",
    client: "Manufacturing Organization (Confidential)",
    category: "ai-technology",
    objective:
      "Automate creation of user manuals and enable multilingual documentation from engineering sketches.",
    problems: [
      "Manual documentation is time-intensive",
      "Requires dedicated technical writers",
      "Multi-language support is costly and slow",
    ],
    solution: [
      "AI system to generate structured manuals from engineering sketches",
      "Automated documentation with consistent formatting",
      "Integrated multi-language translation pipeline",
    ],
    results: [
      "Reduced documentation effort by significant margin",
      "Faster product readiness with auto-generated manuals",
      "Scalable documentation process across product lines",
    ],
    status: "Under evaluation / Pilot phase",
    keyValueDelivered:
      "Automated technical documentation pipeline transforming engineering sketches into production-ready, multilingual user manuals.",
    shortDescription:
      "AI system generating structured user manuals from engineering sketches with integrated multi-language translation.",
  },
  {
    slug: "mechanical-design-optimization-solidworks",
    title: "Mechanical Component Design Optimization Using SolidWorks",
    client: "Industrial Equipment Manufacturer (Confidential)",
    category: "engineering",
    objective:
      "Improve performance and manufacturability of machine components through design optimization.",
    problems: [
      "Existing component designs lacked efficiency",
      "Manufacturing complexity increased production costs",
      "Design iterations were time-consuming without proper CAD tools",
    ],
    scopeOfWork: [
      "CAD modeling using SolidWorks",
      "Design optimization for performance and cost",
      "Engineering drawing updates and validation",
    ],
    solution: [
      "Redesigned components for improved efficiency and performance",
      "Improved manufacturability reducing production steps",
      "Validated design feasibility through simulation and analysis",
    ],
    results: [
      "Improved component performance and reliability",
      "Reduced manufacturing complexity",
      "Better production efficiency and lower unit cost",
    ],
    status: "Proposal submitted",
    keyValueDelivered:
      "Optimized mechanical designs improving performance while reducing manufacturing complexity and production costs.",
    shortDescription:
      "SolidWorks-based design optimization improving performance and manufacturability of industrial machine components.",
  },
  {
    slug: "workforce-tracking-stafftrack",
    title: "Workforce Tracking & Attendance Management Platform (StaffTrack)",
    client: "Startup Organization (Confidential)",
    category: "technology",
    objective:
      "Enable real-time workforce tracking, attendance monitoring, and leave management through a centralized digital platform.",
    problems: [
      "No centralized system for employee tracking",
      "Manual attendance management process",
      "Lack of visibility into field workforce",
      "Inefficient leave tracking and reporting",
    ],
    solution: [
      "Developed StaffTrack, a web-based workforce management platform",
      "Implemented GPS-based login/logout tracking",
      "Built attendance and leave management system",
      "Designed real-time monitoring dashboard",
      "Enabled role-based access for administrators",
    ],
    results: [
      "Real-time workforce visibility",
      "Improved attendance accuracy",
      "Reduced manual administrative effort",
      "Centralized reporting and insights",
    ],
    status: "Deployed",
    keyValueDelivered:
      "Enabled efficient workforce monitoring and improved operational control through a scalable and user-friendly platform.",
    shortDescription:
      "Web-based workforce management platform with GPS tracking, real-time monitoring dashboard, and attendance & leave management for field teams.",
  },
  {
    slug: "rapid-cad-talent-deployment",
    title: "Rapid Deployment of CAD Design Talent for Automotive Project",
    client: "Automotive Manufacturer (via vendor partner) (Confidential)",
    category: "resourcing",
    objective:
      "Rapidly deploy qualified CAD design engineers to support an automotive client's urgent project timeline with zero ramp-up delays.",
    problems: [
      "Client had an urgent need for CAD design engineers with automotive domain experience",
      "Traditional hiring pipelines were too slow for the project deadline",
      "Vendor partner required same-day shortlisting and rapid onboarding",
      "Candidates needed expertise in SolidWorks and automotive HVAC unit design",
    ],
    scopeOfWork: [
      "Source and screen CAD design engineers with automotive experience",
      "Shortlist qualified candidates within same-day turnaround",
      "Coordinate technical interviews and skill validation",
      "Complete onboarding and deployment within 1–10 business days",
      "Provide ongoing HR support and performance tracking",
    ],
    solution: [
      "Activated pre-vetted talent pool of CAD engineers with automotive expertise",
      "Delivered same-day candidate shortlists matching exact skill requirements",
      "Completed end-to-end screening including SolidWorks proficiency validation",
      "Deployed engineers on-site within 1–10 business days of requirement confirmation",
      "Provided dedicated account management for seamless integration",
    ],
    results: [
      "Same-day shortlisting — candidates presented within hours of requirement",
      "1–10 days deployment — engineers productive on-site within days, not weeks",
      "Zero project delays — client timeline fully maintained",
      "100% skill-match accuracy — all deployed engineers met technical requirements",
      "Seamless vendor coordination — smooth handoff with partner organization",
    ],
    status: "Completed",
    keyValueDelivered:
      "Demonstrated ability to rapidly deploy specialized CAD talent for time-critical automotive projects, eliminating hiring delays and ensuring zero impact on client project timelines.",
    shortDescription:
      "Rapid deployment of qualified CAD design engineers for an automotive project — same-day shortlisting and on-site placement within 1–10 days.",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getCaseStudiesByCategory(
  category: "engineering" | "ai-technology" | "technology" | "resourcing"
): CaseStudy[] {
  return caseStudies.filter((cs) => cs.category === category);
}
