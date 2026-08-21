import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import CustomCursor from "@/components/custom-cursor";
import Navbar from "@/components/navbar";
import InitialLoader from "@/components/initial-loader";
import CommandPalette from "@/components/command-palette";
import CopyEmail from "@/components/copy-email";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://abhisheklamichhane.com"),
  title: "Abhishek Lamichhane — Flutter Developer & Mobile Software Engineer",
  description: "Abhishek Lamichhane is a Flutter Developer with 3 years of experience specializing in mobile banking, fintech security, and clean architecture, impacting 3M+ users.",
  keywords: [
    "Abhishek Lamichhane",
    "Abhishek Lamichhane Flutter",
    "Abhishek Lamichhane F1Soft",
    "Flutter Developer Nepal",
    "Mobile Software Engineer Kathmandu",
    "Fintech Flutter Developer",
    "advanced_native_contact_picker",
  ],
  authors: [{ name: "Abhishek Lamichhane", url: "https://github.com/abhi9827" }],
  creator: "Abhishek Lamichhane",
  openGraph: {
    title: "Abhishek Lamichhane — Flutter Developer & Mobile Software Engineer",
    description: "Dynamic Flutter Developer specializing in mobile banking, fintech security, and clean architecture.",
    url: "https://abhisheklamichhane.com",
    siteName: "Abhishek Lamichhane Portfolio",
    type: "profile",
    images: [
      {
        url: "/images/profile-headshot.jpg",
        width: 800,
        height: 1000,
        alt: "Abhishek Lamichhane — Flutter Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Lamichhane — Flutter Developer",
    description: "Flutter Developer specializing in mobile banking, fintech security, and clean architecture.",
    images: ["/images/profile-headshot.jpg"],
  },
  alternates: {
    canonical: "https://abhisheklamichhane.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abhishek Lamichhane",
  jobTitle: "Flutter Developer & Mobile Software Engineer",
  url: "https://abhisheklamichhane.com",
  image: "https://abhisheklamichhane.com/images/profile-headshot.jpg",
  sameAs: [
    "https://linkedin.com/in/abhisheklamichhane",
    "https://github.com/abhi9827",
    "https://pub.dev/packages/advanced_native_contact_picker",
  ],
  worksFor: {
    "@type": "Organization",
    name: "F1Soft International Pvt. Ltd.",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Texas College of Management and IT",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kathmandu",
    addressRegion: "Bagmati Province",
    addressCountry: "Nepal",
  },
  knowsAbout: [
    "Flutter",
    "Dart",
    "Mobile Banking",
    "Fintech",
    "Clean Architecture",
    "Riverpod",
    "Native Bridging (iOS & Android)",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground selection:bg-foreground selection:text-background min-h-screen flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Ambient Backgrounds */}
          <div className="fixed inset-0 z-[-2] bg-background"></div>
          <div className="fixed inset-0 z-[-1] bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 pointer-events-none"></div>
          <div className="fixed inset-0 z-[-1] opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>

          <InitialLoader />
          <CustomCursor />
          <CommandPalette />
          <CopyEmail />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
