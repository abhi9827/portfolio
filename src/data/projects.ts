export interface Project {
  slug: string
  title: string
  category: string
  description: string
  technologies: string[]
  metrics?: string
  highlights?: string[]
  role?: string
}

export const projects: Project[] = [
  {
    slug: "f1soft-banking-suite",
    title: "F1Soft Banking Suite",
    category: "Fintech / Mobile Banking",
    description: "Production-grade mobile banking infrastructure powering 90% of financial institutions and over 3 million users in Nepal's largest DFS ecosystem.",
    metrics: "3M+ Users • 90% Market Share • Zero-Trust Security",
    role: "Flutter Developer",
    technologies: [
      "Flutter",
      "Dart",
      "Riverpod",
      "Clean Architecture",
      "Biometrics & Keystore",
      "InAppWebView Token Bridge",
      "Fastlane & Bitrise",
      "Crashlytics",
    ],
    highlights: [
      "Engineered core digital banking features: inter-bank fund transfers, wallet top-ups, loan applications, and transaction statements.",
      "Implemented hardware-backed biometric authentication (Face ID / Fingerprint) and unique device binding for bank-grade security.",
      "Integrated secure InAppWebView sessions with custom user-agent header injection and token synchronization for third-party banking portals.",
      "Structured codebase using Riverpod and Clean Architecture, decoupling domain logic from UI presentation.",
      "Configured automated Fastlane and Bitrise CI/CD release pipelines, eliminating manual distribution overhead and standardizing build artifacts.",
      "Monitored production crash logs and memory profiles using Firebase Crashlytics to maintain high uptime and 60 FPS rendering.",
    ],
  },
  {
    slug: "dynamic-erp-suite",
    title: "Dynamic ERP & Accounting Suite",
    category: "Enterprise / Fintech",
    description: "Enterprise mobile ecosystem delivering ERP, HRM, and Nepal's first IRD-approved accounting software mobile companion for 500+ corporate businesses.",
    metrics: "500+ Businesses • IRD-Approved • Offline-First Sync",
    role: "Flutter Developer",
    technologies: [
      "Flutter",
      "Clean Architecture",
      "Hive & SQLite",
      "REST APIs",
      "Real-time Tax Engine",
      "Push Notifications",
    ],
    highlights: [
      "Delivered mobile companion for Nepal's first IRD-approved accounting system, facilitating compliant invoice & receipt generation.",
      "Built real-time GST and IRD tax calculation engine matching government billing regulations.",
      "Developed finance, payroll, attendance, and inventory management modules tailored for on-the-go business executives.",
      "Implemented robust offline-first caching using Hive and SQLite to enable uninterrupted field operations with asynchronous server sync.",
      "Designed modular analytics dashboards and task notification flows to boost daily user engagement.",
    ],
  },
  {
    slug: "kheti-platform",
    title: "KHETI Agricultural Platform",
    category: "Agri-Fintech / Digital Lending",
    description: "Nepal's first digital agri-loan system, facilitating collateral-free agricultural financing to over 1,000+ farmers in direct partnership with NMB Bank.",
    metrics: "1,000+ Farmers Funded • NMB Bank API • Collateral-Free Loans",
    role: "Flutter Developer",
    technologies: [
      "Flutter",
      "NMB Bank APIs",
      "eKYC Verification",
      "Data Encryption",
      "Offline Storage",
      "REST APIs",
    ],
    highlights: [
      "Spearheaded mobile development of the KHETI agri-loan platform, connecting unbanked rural farmers with formal institutional credit.",
      "Integrated NMB Bank lending APIs to automate digital credit eligibility checks and instantaneous loan sanctioning.",
      "Engineered automated eKYC verification pipelines, document scanning, and farmer biometric profile capture.",
      "Designed intuitive 'Buy Today, Pay Later' agri-input financing journeys with offline resilience for rural areas with erratic connectivity.",
      "Enforced strict data encryption protocols across all client-server communication channels handling sensitive financial records.",
    ],
  },
  {
    slug: "pokhara-citizen-services",
    title: "Pokhara Metropolitan Citizen App",
    category: "Public Sector / Mobile & Maps",
    description: "Citizen services and municipal governance platform for Pokhara Metropolitan City, featuring digital grievance reporting, municipal fee payments, and geospatial mapping.",
    metrics: "Metropolitan Wide • Municipal Payments • Geospatial Mapping",
    role: "Flutter Developer",
    technologies: [
      "Flutter",
      "Dart",
      "Galli Maps SDK",
      "Geospatial Routing",
      "Municipal Payment APIs",
      "Push Notifications",
    ],
    highlights: [
      "Delivered citizen mobile application streamlining digital municipal services, ward inquiries, and citizen announcements.",
      "Integrated Galli Maps SDK for high-precision Nepal geospatial data, ward boundaries, and municipal route navigation.",
      "Engineered secure payment integration for municipal tax assessments, property fees, and utility payments.",
      "Designed clean, bilingual user experience (Nepali & English) optimized for citizens of all digital literacy levels.",
    ],
  },
]
