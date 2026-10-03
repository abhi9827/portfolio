import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import CustomCursor from "@/components/custom-cursor";
import Navbar from "@/components/navbar";
import InitialLoader from "@/components/initial-loader";
import CommandPalette from "@/components/command-palette";
import CopyEmail from "@/components/copy-email";
import AdSense from "@/components/AdSense";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://abhisheklamichhane.me"),
  title: "Abhishek Lamichhane | Flutter Developer",
  description: "Abhishek Lamichhane is a Flutter Developer and Associate Software Engineer specializing in Flutter, Dart, mobile applications, and cross-platform development.",
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
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Abhishek Lamichhane | Flutter Developer",
    description: "Portfolio of Abhishek Lamichhane — Flutter Developer and Associate Software Engineer.",
    url: "https://abhisheklamichhane.me/",
    siteName: "Abhishek Lamichhane",
    type: "website",
    images: [
      {
        url: "https://abhisheklamichhane.me/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abhishek Lamichhane — Flutter Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Lamichhane | Flutter Developer",
    description: "Portfolio of Abhishek Lamichhane — Flutter Developer and Associate Software Engineer.",
    images: ["https://abhisheklamichhane.me/og-image.png"],
  },
  alternates: {
    canonical: "https://abhisheklamichhane.me/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://abhisheklamichhane.me/#person",
      name: "Abhishek Lamichhane",
      jobTitle: "Flutter Developer",
      url: "https://abhisheklamichhane.me/",
      image: "https://abhisheklamichhane.me/images/profile-headshot.jpg",
      sameAs: [
        "https://github.com/abhi9827",
        "https://linkedin.com/in/abhisheklamichhane",
        "https://pub.dev/packages/advanced_native_contact_picker"
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
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://abhisheklamichhane.me/#website",
      name: "Abhishek Lamichhane",
      url: "https://abhisheklamichhane.me/"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <AdSense pId={process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || "ca-pub-XXXXXXXXXXXXXXXX"} />
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
