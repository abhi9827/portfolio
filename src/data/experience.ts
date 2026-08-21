export interface ExperienceItem {
  role: string
  company: string
  date: string
  description: string
  highlights: string[]
  focus: string[]
}

export const experience: ExperienceItem[] = [
  {
    role: "Flutter Developer",
    company: "F1Soft International Pvt. Ltd.",
    date: "07/2024 — Present",
    description: "Developing production mobile banking and payment infrastructure serving 3M+ active users across Nepal's largest Digital Financial Services (DFS) ecosystem.",
    highlights: [
      "Architected core digital banking modules including fund transfers, wallet integrations, lending journeys, and statement exports using Flutter.",
      "Structured applications with Riverpod and Clean Architecture, establishing predictable reactive state flow and modular feature boundaries.",
      "Implemented bank-grade security protocols: biometric authentication, hardware keystore integration, device binding, and cryptographic payload signing.",
      "Configured automated CI/CD release pipelines via Fastlane, Bitrise, and GitLab CI, streamlining staging and production deployment workflows.",
      "Proactively monitored production performance and crash logs with Firebase Crashlytics, profiling memory usage and optimizing frame render times.",
    ],
    focus: [
      "Flutter & Dart",
      "Riverpod State Management",
      "Clean Architecture",
      "Biometrics & Device Binding",
      "CI/CD (Fastlane & Bitrise)",
      "Crashlytics Profiling",
    ],
  },
  {
    role: "Flutter Developer",
    company: "Dynamic Technosoft Pvt. Ltd.",
    date: "01/2023 — 07/2024",
    description: "Delivered enterprise ERP, HRM, and accounting mobile applications serving 500+ commercial clients across Nepal.",
    highlights: [
      "Engineered mobile companion for Nepal's first IRD-approved accounting software, supporting real-time GST/IRD tax calculations and invoice generation.",
      "Built cross-platform finance, payroll, attendance, and analytics dashboards converted from complex desktop ERP workflows.",
      "Implemented resilient offline-first data synchronization using Hive and SQLite to support field representatives with low connectivity.",
      "Improved mobile application rendering performance and startup latency through modular component design and lazy state initialization.",
      "Conducted structured code reviews and enforced clean coding standards across the mobile development team.",
    ],
    focus: [
      "Clean Architecture",
      "Enterprise ERP & HRM",
      "IRD Tax Calculation Engine",
      "Offline-First (Hive / SQLite)",
      "REST APIs & Push Services",
    ],
  },
  {
    role: "Flutter Developer",
    company: "DV Excellus Pvt. Ltd.",
    date: "01/2022 — 12/2022",
    description: "Spearheaded mobile development for the KHETI agri-fintech platform and Pokhara Metropolitan City citizen services app.",
    highlights: [
      "Developed KHETI platform, Nepal's pioneering digital agri-loan ecosystem facilitating collateral-free agricultural credit in partnership with NMB Bank.",
      "Built end-to-end user journeys for farmer onboarding, automated eKYC verification, credit scoring checks, and loan repayment scheduling.",
      "Architected intuitive 'Buy Today, Pay Later' agri-input financing flows with lightweight offline caching for rural network environments.",
      "Delivered citizen services mobile application for Pokhara Metropolitan City, enabling municipal payments and digital grievance reporting.",
      "Enforced data encryption standards for sensitive customer and banking communication across all client-server endpoints.",
    ],
    focus: [
      "Agri-Fintech & Digital Loans",
      "NMB Bank API Integrations",
      "eKYC & Credit Verification",
      "Pokhara Citizen App",
      "Data Encryption Standards",
    ],
  },
]
