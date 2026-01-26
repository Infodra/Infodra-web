interface Feature {
  title: string;
  description: string;
}

interface UseCase {
  title: string;
  description: string;
}

interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
}

interface PricingTier {
  price: string;
  notes: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface CTA {
  text: string;
  url?: string;
}

interface ServiceMode {
  mode: string;
  title: string;
  description: string;
  features: string[];
  cta: string;
  highlight: boolean;
}

export interface Product {
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  icon: string;
  serviceModes?: ServiceMode[];
  features: Feature[];
  useCases: UseCase[];
  howItWorks: HowItWorksStep[];
  pricingPreview: {
    Starter: PricingTier;
    Business?: PricingTier;
    Enterprise: PricingTier;
    [key: string]: PricingTier | undefined;
  };
  faqs: FAQ[];
  primaryCTA: CTA;
  secondaryCTA: CTA;
  responsibleUseNotice?: string;
}

export const products: Product[] = [
  {
    slug: "ai-video-translator",
    title: "AI Video Translator",
    tagline: "Break Language Barriers in Global Business",
    shortDescription:
      "Instantly translate video content into multiple languages with AI-powered voice cloning and lip-sync technology. Perfect for Indian enterprises expanding globally.",
    icon: "🎬",
    features: [
      {
        title: "Multi-Language Support",
        description:
          "Translate videos into 50+ languages including Hindi, Marathi, Bengali, Tamil, Telugu, Kannada, and Malayalam",
      },
      {
        title: "AI Voice Cloning",
        description:
          "Maintains original speaker's voice characteristics and emotions in translated audio tracks",
      },
      {
        title: "Lip-Sync Technology",
        description:
          "Automatically synchronizes lip movements with translated audio for natural viewing experience",
      },
      {
        title: "Bulk Processing",
        description:
          "Process multiple videos simultaneously to save time and resources for training programs",
      },
      {
        title: "Quality Control",
        description:
          "Manual review and editing options to ensure brand consistency and message accuracy",
      },
      {
        title: "Subtitle Generation",
        description:
          "Auto-generated subtitles in translated languages with customizable styling and positioning",
      },
    ],
    useCases: [
      {
        title: "Corporate Training",
        description:
          "Localize employee training videos for workforce across India and international offices",
      },
      {
        title: "Marketing Campaigns",
        description:
          "Reach Indian regional markets and global audiences with localized promotional content",
      },
      {
        title: "Customer Support",
        description:
          "Create multilingual instructional videos for diverse customer bases across regions",
      },
      {
        title: "Educational Content",
        description:
          "Expand educational reach by translating online courses and webinars into regional languages",
      },
      {
        title: "Compliance & Documentation",
        description:
          "Maintain regulatory compliance by providing localized documentation for different markets",
      },
      {
        title: "International Partnerships",
        description:
          "Facilitate communication with global partners through professionally translated content",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Upload Your Video",
        description:
          "Upload video files in any format (MP4, MOV, AVI, WebM). Our system automatically detects language and quality",
      },
      {
        step: 2,
        title: "Select Target Languages",
        description:
          "Choose desired output languages from our comprehensive list and customize voice preferences and subtitle options",
      },
      {
        step: 3,
        title: "Download Translated Video",
        description:
          "Get fully translated videos with dubbed audio, lip-synced visuals, and synchronized subtitles ready to share",
      },
    ],
    pricingPreview: {
      Starter: {
        price: "₹99/month",
        notes: "",
      },
      Business: {
        price: "₹999/month",
        notes: "",
      },
      Enterprise: {
        price: "Custom pricing",
        notes: "",
      },
    },
    faqs: [
      {
        question: "Which video formats are supported?",
        answer:
          "We support MP4, MOV, AVI, WebM, MKV, FLV and other common formats. Maximum file size is 2GB per video.",
      },
      {
        question: "How long does translation take?",
        answer:
          "Processing time depends on video length and selected features. Typically 5 mins to 1 hour for standard processing. Enterprise customers get priority processing.",
      },
      {
        question: "Can I edit the translated content?",
        answer:
          "Yes, all plans include basic editing tools. You can adjust subtitles, audio levels, and video segments after translation.",
      },
      {
        question: "Is the original audio preserved?",
        answer:
          "You can choose to keep the original audio track alongside the translation, or replace it completely for a seamless dubbed experience.",
      },
      {
        question: "What about copyright and licensing?",
        answer:
          "You retain all rights to your content. Our platform complies with Indian copyright laws and international standards.",
      },
    ],
    primaryCTA: {
      text: "Contact for Price",
      url: "/contact",
    },
    secondaryCTA: {
      text: "WhatsApp",
      url: "https://wa.me/918148146785",
    },
  },
  {
    slug: "ai-user-manual-generation",
    title: "AI User Manual Generation",
    tagline: "Create Professional Documentation Instantly",
    shortDescription:
      "Generate comprehensive user manuals, process documentation, and technical guides automatically. Save weeks of documentation effort with AI-powered content creation.",
    icon: "📖",
    features: [
      {
        title: "Intelligent Content Creation",
        description:
          "AI automatically generates clear, structured documentation from product specifications and design documents",
      },
      {
        title: "Multi-Format Output",
        description:
          "Export manuals as PDF, HTML, DOCX, and interactive web formats suitable for digital distribution",
      },
      {
        title: "Localization Support",
        description:
          "Generate documentation in Hindi, English, and regional Indian languages automatically",
      },
      {
        title: "Visual Integration",
        description:
          "Automatically organize screenshots, diagrams, and flowcharts with intelligent placement and captioning",
      },
      {
        title: "Version Control",
        description:
          "Track changes and manage multiple versions of documentation with built-in version history",
      },
      {
        title: "Compliance Templates",
        description:
          "Pre-built templates for Indian regulatory requirements including BIS, ISI, and industry-specific compliance",
      },
    ],
    useCases: [
      {
        title: "Software Product Documentation",
        description:
          "Auto-generate user guides and API documentation for software products and SaaS platforms",
      },
      {
        title: "Manufacturing & Operations",
        description:
          "Create machine operation manuals and process documentation for manufacturing facilities",
      },
      {
        title: "Employee Onboarding",
        description:
          "Generate employee handbooks and process documentation for training new team members",
      },
      {
        title: "Regulatory Compliance",
        description:
          "Produce documentation meeting Indian regulatory standards for banking, healthcare, and manufacturing sectors",
      },
      {
        title: "Product Support",
        description:
          "Create FAQ documents and troubleshooting guides to reduce support team workload",
      },
      {
        title: "Knowledge Management",
        description:
          "Build searchable internal documentation and knowledge bases for enterprise systems",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Upload Source Materials",
        description:
          "Provide product specifications, design documents, screenshots, or existing content. Supports PDF, DOCX, images, and video files",
      },
      {
        step: 2,
        title: "Customize & Configure",
        description:
          "Select output format, language preference, compliance standards, and documentation structure. Preview AI-generated outline for approval",
      },
      {
        step: 3,
        title: "Generate & Distribute",
        description:
          "AI generates complete documentation. Review, edit as needed, and export in your preferred format for distribution",
      },
    ],
    pricingPreview: {
      Starter: {
        price: "₹4,999/month",
        notes: "",
      },
      Business: {
        price: "₹14,999/month",
        notes: "",
      },
      Enterprise: {
        price: "Custom pricing",
        notes: "",
      },
    },
    faqs: [
      {
        question: "How accurate is the AI-generated content?",
        answer:
          "Our AI achieves 95%+ accuracy with industry-specific training. All content is review-ready and can be edited before final output.",
      },
      {
        question: "Can I maintain brand voice and style?",
        answer:
          "Yes, you can customize tone, terminology, brand guidelines, and content style. AI learns and adapts to your preferences.",
      },
      {
        question: "Do you support Indian languages and regional variations?",
        answer:
          "We support Hindi, Marathi, Bengali, Tamil, Telugu, Kannada, and Malayalam with localized context and compliance considerations.",
      },
      {
        question: "What file formats can I upload?",
        answer:
          "We accept PDF, DOCX, PPTX, images (PNG, JPG), video, audio files, and plain text. Maximum total file size: 500MB.",
      },
      {
        question: "Is the documentation owned by us?",
        answer:
          "Yes, you have complete ownership of all generated documentation. We do not retain or reuse any content from your projects.",
      },
    ],
    primaryCTA: {
      text: "Contact for Price",
      url: "/contact",
    },
    secondaryCTA: {
      text: "WhatsApp",
      url: "https://wa.me/918148146785",
    },
  },
  {
    slug: "ai-voice-generation-studio",
    title: "AI Voice Generation Studio",
    tagline: "Create natural AI voiceovers or securely clone your own voice",
    shortDescription:
      "A professional AI platform that allows businesses and creators to generate high-quality voiceovers using platform AI voices or legally authorized custom voice cloning.",
    icon: "🎙️",
    serviceModes: [
      {
        mode: "AI Platform Voices",
        title: "🔹 AI Platform Voices (Public Plans)",
        description: "Use professionally generated AI voices provided by the platform",
        features: [
          "Use professionally generated AI voices provided by the platform",
          "No voice cloning required",
          "Instant access after signup",
          "Suitable for content creators, educators, businesses",
          "Safe for general public usage",
        ],
        cta: "Start with AI Voices",
        highlight: false,
      },
      {
        mode: "Custom Voice Cloning",
        title: "🔸 Custom Voice Cloning (Enterprise Only)",
        description: "Users can clone only their own voice OR a voice they have legal authorization for",
        features: [
          "Users can clone only their own voice",
          "OR a voice they have legal authorization for",
          "Requires signed MoU/consent verification",
          "Manual approval by Infodra team",
          "Designed for enterprises, media, training teams",
        ],
        cta: "Request Custom Voice Access",
        highlight: true,
      },
    ],
    features: [
      {
        title: "Voice Management",
        description: "Record your own voice directly in browser, upload voice samples, and organize multiple voice profiles",
      },
      {
        title: "Script Input",
        description: "Type or paste scripts, upload script files (TXT, CSV, JSON), and use structured Q&A conversational format",
      },
      {
        title: "Audio Generation",
        description: "Generate natural AI voiceovers, choose AI voice or approved custom voice, and control tone and pacing",
      },
      {
        title: "History & File Management",
        description: "View past generated audios, download/export audio files, and search and filter previous projects",
      },
      {
        title: "Desktop & Mobile Responsive",
        description: "Access from any device with tab-based dashboard and real-time progress monitoring",
      },
      {
        title: "Security & Compliance",
        description: "End-to-end encryption, consent verification system, and audit trails for all voice cloning requests",
      },
    ],
    useCases: [
      {
        title: "Financial Services Voice Assistants",
        description: "Create professional voice assistants and IVR systems for banking and financial institutions",
      },
      {
        title: "Media & Broadcasting Narration",
        description: "Generate high-quality narration for documentaries, news broadcasts, and multimedia content",
      },
      {
        title: "Education & E-learning Voiceovers",
        description: "Create engaging educational content with natural-sounding voice narration for online courses",
      },
      {
        title: "Enterprise Training Materials",
        description: "Produce training videos and instructional content for employee onboarding and development",
      },
      {
        title: "E-commerce Product Audio",
        description: "Generate product descriptions and audio for e-commerce platforms and marketplaces",
      },
      {
        title: "Content Creation & YouTube Automation",
        description: "Create voiceovers for YouTube videos, podcasts, and automated content workflows",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Choose AI Voice or Request Custom Voice Access",
        description: "Select from our library of professional AI voices or request custom voice cloning with proper authorization",
      },
      {
        step: 2,
        title: "Enter or Upload Your Script",
        description: "Type your script, upload text files (TXT, CSV, JSON), or use structured Q&A format for conversational audio",
      },
      {
        step: 3,
        title: "Generate and Download Professional AI Audio",
        description: "Generate studio-quality voiceovers with natural tone and pacing, then download and export your audio files",
      },
    ],
    pricingPreview: {
      Starter: {
        price: "₹2,999/month",
        notes: "",
      },
      Business: {
        price: "₹9,999/month",
        notes: "",
      },
      Enterprise: {
        price: "Custom pricing",
        notes: "",
      },
    },
    faqs: [
      {
        question: "Can I use AI Platform Voices for commercial projects?",
        answer:
          "Yes, all AI Platform Voices are licensed for commercial use. The licensing terms apply based on your subscription plan. For Enterprise plans, custom arrangements can be made.",
      },
      {
        question: "What does custom voice cloning require?",
        answer:
          "Custom voice cloning requires a voice sample (typically 2-3 minutes), signed consent/MoU from the voice owner, and manual approval by our Infodra team. Processing typically takes 3-5 business days.",
      },
      {
        question: "Can I clone someone else's voice?",
        answer:
          "Only with their explicit written consent or a signed MoU. Using voice cloning for impersonation, fraud, or deception is strictly prohibited and will result in immediate account suspension.",
      },
      {
        question: "What audio formats can I export?",
        answer:
          "We support MP3, WAV, OGG, and AAC formats. You can also integrate directly with platforms like YouTube, podcast hosting, and social media.",
      },
      {
        question: "What script formats are supported?",
        answer:
          "We support plain text, DOCX, PDF, CSV, and JSON formats. Maximum script length is 50,000 characters per generation.",
      },
      {
        question: "How does the consent verification process work?",
        answer:
          "For custom voice cloning, you provide the voice owner's signed consent/MoU. Our legal team reviews and verifies before approving the voice model. All documentation is securely stored.",
      },
    ],
    primaryCTA: {
      text: "Contact for Price",
      url: "/contact",
    },
    secondaryCTA: {
      text: "WhatsApp",
      url: "https://wa.me/918148146785",
    },
    responsibleUseNotice:
      "Users may only clone their own voice OR voices they have legal rights to use. Written consent or MoU is mandatory for custom voice cloning. Impersonation, fraud, or misuse of voice technology is strictly prohibited. Infodra reserves the right to suspend access for policy violations.",
  },
  {
    slug: "bizlead-database",
    title: "BiZlead\nDatabase",
    tagline: "Access India's Most Comprehensive B2B Business Database",
    shortDescription:
      "Discover verified business leads, company information, and contact details for decision makers. Target the right prospects with India's most accurate B2B database.",
    icon: "💼",
    features: [
      {
        title: "50+ Million Business Records",
        description:
          "Access verified data on Indian companies, businesses, and decision makers across all sectors and regions",
      },
      {
        title: "Advanced Filtering",
        description:
          "Filter leads by industry, company size, revenue, location, and role to find your ideal target customers",
      },
      {
        title: "Real-Time Verification",
        description:
          "All contact information is verified and updated regularly to ensure accuracy and deliverability",
      },
      {
        title: "Decision Maker Mapping",
        description:
          "Identify correct decision makers and influencers within organizations for targeted outreach",
      },
      {
        title: "Export Flexibility",
        description:
          "Export leads in multiple formats for CRM integration, email campaigns, and direct mail purposes",
      },
      {
        title: "Lead Scoring",
        description:
          "AI-powered scoring system identifies highest-quality prospects based on your success metrics",
      },
    ],
    useCases: [
      {
        title: "Sales Prospecting",
        description:
          "Identify and reach verified decision makers in target companies for B2B sales and business development",
      },
      {
        title: "Market Research",
        description:
          "Analyze business landscape, competitor presence, and market opportunities in specific sectors and regions",
      },
      {
        title: "Partner Identification",
        description:
          "Find potential partners, distributors, and channel partners for business expansion and collaboration",
      },
      {
        title: "Recruitment & HR",
        description:
          "Source potential candidates and find hiring managers for business development and HR purposes",
      },
      {
        title: "Trade Finance & Services",
        description:
          "Identify export-import companies, trading houses, and logistics partners for B2B service providers",
      },
      {
        title: "Government Tenders",
        description:
          "Find registered government contractors and eligible suppliers for tender bidding opportunities",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Define Your Target",
        description:
          "Specify industry, company size, location, and other criteria. Use our advanced search filters to narrow down to your ideal customer profile",
      },
      {
        step: 2,
        title: "Review & Select Leads",
        description:
          "Browse verified business records with company details, financial information, and key contact persons. Save leads to your workspace",
      },
      {
        step: 3,
        title: "Export & Outreach",
        description:
          "Export leads to CSV, Excel, or integrate directly with your CRM. Use built-in email templates for immediate outreach",
      },
    ],
    pricingPreview: {
      Starter: {
        price: "₹4,999/month",
        notes: "",
      },
      Business: {
        price: "₹14,999/month",
        notes: "",
      },
      Enterprise: {
        price: "Custom pricing",
        notes: "",
      },
    },
    faqs: [
      {
        question: "How current is the database information?",
        answer:
          "Our database is updated daily with new company registrations, business changes, and contact updates. We verify information monthly to maintain 98%+ accuracy.",
      },
      {
        question: "Can I use this data for cold calling or emails?",
        answer:
          "Yes, all leads are verified for compliance with Indian telemarketing and email regulations. You receive TCPA/DND compliant data.",
      },
      {
        question: "What industries are covered?",
        answer:
          "We cover all major industries: IT, manufacturing, retail, healthcare, finance, logistics, engineering, hospitality, and more with 500+ sub-categories.",
      },
      {
        question: "Is there a limit on lead exports?",
        answer:
          "Export limits depend on your plan. Starter: 1000/month, Professional: 6000/month, Enterprise: unlimited. Unused quota rolls over, click Pricing for more details.",
      },
      {
        question: "How accurate are the contact details?",
        answer:
          "We maintain 98%+ accuracy through continuous verification, automated updates, and manual review processes. We offer contact replacement for invalid data.",
      },
    ],
    primaryCTA: {
      text: "Pricing",
      url: "#",
    },
    secondaryCTA: {
      text: "WhatsApp",
      url: "https://wa.me/918148146785",
    },
  },
  {
    slug: "ai-document-translator",
    title: "AI Document\nTranslator",
    tagline: "Translate Business Documents Instantly with AI Precision",
    shortDescription:
      "Automatically translate business documents, contracts, and reports into multiple languages with advanced AI. Perfect for Indian enterprises managing international business documents, legal contracts, and regulatory compliance with accuracy and security.",
    icon: "📄",
    features: [
      {
        title: "Multi-Language Support",
        description:
          "Translate documents into 100+ languages including Indian regional languages: Hindi, Marathi, Bengali, Tamil, Telugu, Kannada, Malayalam, and Gujarati",
      },
      {
        title: "Format Preservation",
        description:
          "Maintains original document layout, formatting, fonts, and structure during translation. Supports PDF, DOCX, XLSX, PPT, and image formats",
      },
      {
        title: "Industry-Specific Terminology",
        description:
          "Pre-built glossaries for legal, financial, medical, technical, and manufacturing sectors ensuring accurate domain-specific translation",
      },
      {
        title: "OCR Technology",
        description:
          "Extract and translate text from scanned documents, images, and PDFs with advanced optical character recognition",
      },
      {
        title: "Quality Assurance",
        description:
          "AI-powered proofreading, grammar checking, and human review options to ensure translation accuracy and professionalism",
      },
      {
        title: "Batch Processing & Automation",
        description:
          "Process multiple documents simultaneously and set up automated translation workflows for recurring document types",
      },
      {
        title: "Secure & Confidential",
        description:
          "End-to-end encryption, data privacy compliance (GDPR, Indian Data Protection Act), and secure document storage",
      },
    ],
    useCases: [
      {
        title: "Legal & Contract Translation",
        description:
          "Translate contracts, agreements, and legal documents for international business, litigation, and regulatory compliance",
      },
      {
        title: "Business Reports & Analysis",
        description:
          "Translate quarterly reports, market analysis, financial statements, and business proposals for global stakeholders",
      },
      {
        title: "Marketing & Sales Materials",
        description:
          "Localize brochures, product manuals, catalogs, and sales presentations for Indian regional markets and international expansion",
      },
      {
        title: "Employee Onboarding & HR",
        description:
          "Translate employee handbooks, policies, benefits documents, and training materials into regional languages",
      },
      {
        title: "Government & Regulatory Documents",
        description:
          "Translate compliance documents, government forms, tax filings, and regulatory submissions for multiple jurisdictions",
      },
      {
        title: "Medical & Healthcare Documentation",
        description:
          "Translate patient records, medical reports, prescriptions, and healthcare documents with specialized medical terminology",
      },
      {
        title: "Technical Documentation",
        description:
          "Translate technical manuals, API documentation, software guides, and engineering specifications for global teams",
      },
      {
        title: "Import/Export & Trade Documents",
        description:
          "Translate shipping documents, customs forms, invoices, and international trade documents for logistics and trade",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Upload Your Document",
        description:
          "Upload documents in PDF, DOCX, XLSX, PPT, or image formats. Supports single files or batch uploads for volume translation needs",
      },
      {
        step: 2,
        title: "Select Languages & Options",
        description:
          "Choose source and target languages, select industry-specific glossaries, set quality level (standard/premium), and review preview",
      },
      {
        step: 3,
        title: "Download Translated Document",
        description:
          "Get professionally translated documents with original formatting preserved. Option for human review and unlimited revisions",
      },
    ],
    pricingPreview: {
      Starter: {
        price: "₹2,999/month",
        notes: "",
      },
      Business: {
        price: "₹9,999/month",
        notes: "",
      },
      Enterprise: {
        price: "Custom pricing",
        notes: "",
      },
    },
    faqs: [
      {
        question: "What document formats are supported?",
        answer:
          "We support PDF, Microsoft Word (DOCX), Excel (XLSX), PowerPoint (PPT), images (JPG, PNG), and plain text files. Maximum file size is 50MB per document.",
      },
      {
        question: "How accurate are the translations?",
        answer:
          "Our AI achieves 95-98% accuracy for standard documents. Premium quality option includes human proofreading and industry expert review for mission-critical documents.",
      },
      {
        question: "How long does document translation take?",
        answer:
          "Standard translation takes 30 minutes to 2 hours depending on document length. Enterprise customers get priority processing with 24-hour turnaround for urgent requests.",
      },
      {
        question: "Is my document data secure and confidential?",
        answer:
          "Yes, all documents are encrypted end-to-end and deleted automatically after 30 days. We comply with GDPR and Indian Data Protection Act. Enterprise customers get unlimited retention and compliance certifications.",
      },
      {
        question: "Can I use this for legal and official documents?",
        answer:
          "Yes, our certified translations include digital signatures and authenticity verification. Business and Enterprise plans include certification options recognized for legal and official purposes.",
      },
      {
        question: "Do you preserve document formatting and layout?",
        answer:
          "Yes, we maintain original formatting, fonts, colors, images, tables, and layout structure. Complex designs are reviewed to ensure professional output.",
      },
      {
        question: "What if I need industry-specific terminology?",
        answer:
          "Business and Enterprise plans include access to 50+ pre-built industry glossaries. Enterprise customers can create custom glossaries for specialized terminology and branding consistency.",
      },
    ],
    primaryCTA: {
      text: "Contact for Price",
      url: "/contact",
    },
    secondaryCTA: {
      text: "WhatsApp",
      url: "https://wa.me/918148146785",
    },
  },
  {
    slug: "ai-prediction-ml-platforms",
    title: "AI Prediction / ML Platforms",
    tagline: "Advanced Machine Learning & Predictive Analytics for Business Intelligence",
    shortDescription:
      "Build, deploy, and manage custom machine learning models for predictive analytics, forecasting, and intelligent decision-making. Comprehensive ML platform designed for Indian enterprises with no-code and low-code options.",
    icon: "🤖",
    features: [
      {
        title: "Pre-Built ML Models",
        description:
          "Access 50+ pre-trained machine learning models for demand forecasting, customer churn prediction, sales forecasting, and risk assessment",
      },
      {
        title: "No-Code ML Studio",
        description:
          "Drag-and-drop interface to build custom ML models without coding experience. Train, test, and deploy models in minutes",
      },
      {
        title: "Advanced Data Processing",
        description:
          "Automated data cleaning, feature engineering, and data normalization. Handle missing values and outliers intelligently",
      },
      {
        title: "Real-Time Predictions",
        description:
          "Deploy models for real-time predictions via APIs. Get instant insights for live business data and streaming inputs",
      },
      {
        title: "Model Explainability",
        description:
          "Understand how models make predictions with SHAP values, feature importance analysis, and decision tree visualization",
      },
      {
        title: "Multi-Algorithm Support",
        description:
          "Support for regression, classification, clustering, time-series forecasting, and deep learning models",
      },
      {
        title: "Integration & APIs",
        description:
          "Easy integration with data warehouses, CRM systems, and business applications. REST APIs and webhooks for seamless connectivity",
      },
      {
        title: "Performance Monitoring",
        description:
          "Track model performance, detect data drift, and receive alerts for degraded predictions with automated retraining",
      },
    ],
    useCases: [
      {
        title: "Demand Forecasting & Inventory Management",
        description:
          "Predict product demand, optimize inventory levels, and reduce stockouts for retail and manufacturing businesses",
      },
      {
        title: "Customer Churn Prediction",
        description:
          "Identify at-risk customers, predict churn probability, and trigger retention campaigns for SaaS and subscription businesses",
      },
      {
        title: "Sales Forecasting & Revenue Prediction",
        description:
          "Forecast sales pipeline, predict revenue, and optimize sales strategies for accurate business planning",
      },
      {
        title: "Credit Risk & Fraud Detection",
        description:
          "Assess credit risk, detect fraudulent transactions, and identify suspicious patterns for financial institutions",
      },
      {
        title: "Customer Segmentation & Targeting",
        description:
          "Segment customers by behavior, demographics, and value. Identify high-value customers for targeted marketing",
      },
      {
        title: "Predictive Maintenance",
        description:
          "Predict equipment failures before they occur. Schedule maintenance proactively to reduce downtime and costs",
      },
      {
        title: "Price Optimization",
        description:
          "Optimize pricing strategies based on demand elasticity, competition, and customer willingness to pay",
      },
      {
        title: "Supply Chain Optimization",
        description:
          "Predict logistics costs, optimize routes, and forecast supply chain disruptions for efficient operations",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Connect Data Sources",
        description:
          "Connect databases, data warehouses, CSV files, or APIs. Securely import historical data for model training",
      },
      {
        step: 2,
        title: "Configure & Train Model",
        description:
          "Select prediction type, choose algorithm, set parameters, and train model on your data. Auto-optimization available",
      },
      {
        step: 3,
        title: "Deploy & Predict",
        description:
          "Deploy model to production, integrate via API, and start making real-time predictions for business decisions",
      },
    ],
    pricingPreview: {
      Starter: {
        price: "₹9,999/month",
        notes: "",
      },
      Business: {
        price: "₹29,999/month",
        notes: "",
      },
      Enterprise: {
        price: "Custom pricing",
        notes: "",
      },
    },
    faqs: [
      {
        question: "Do I need data science expertise to use this platform?",
        answer:
          "No, the no-code studio is designed for business users. However, data scientists can also use the Python SDK and advanced features for custom model development.",
      },
      {
        question: "What size datasets can I handle?",
        answer:
          "Starter handles up to 1M rows, Business up to 100M rows, Enterprise unlimited. Data is processed in-memory for fast training.",
      },
      {
        question: "How accurate are the predictions?",
        answer:
          "Accuracy depends on data quality and model selection. Average accuracy is 85-95% for well-structured data. We provide validation metrics for all models.",
      },
      {
        question: "Can I integrate with my existing systems?",
        answer:
          "Yes, we offer REST APIs, webhooks, SQL connectors, and integrations with popular tools like Salesforce, SAP, and Tableau.",
      },
      {
        question: "What about data security and compliance?",
        answer:
          "All data is encrypted in transit and at rest. Compliant with GDPR, Indian Data Protection Act, and ISO 27001. Enterprise customers get dedicated security reviews.",
      },
      {
        question: "Can I train models on sensitive business data?",
        answer:
          "Yes, all data remains in your account and is never used for training other customers' models. Enterprise customers can deploy on-premise.",
      },
      {
        question: "How often should I retrain models?",
        answer:
          "We recommend monthly retraining for most use cases. The platform automatically detects data drift and alerts when retraining is needed.",
      },
    ],
    primaryCTA: {
      text: "Contact for Price",
      url: "/contact",
    },
    secondaryCTA: {
      text: "WhatsApp",
      url: "https://wa.me/918148146785",
    },
  },
];


export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map((product) => product.slug);
}
