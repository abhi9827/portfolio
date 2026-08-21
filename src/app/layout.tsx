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
  description: "Dynamic Flutter Developer with 3 years of experience in fintech, digital banking, and enterprise mobile systems, impacting 3M+ users.",
  openGraph: {
    title: "Abhishek Lamichhane — Flutter Developer",
    description: "Flutter Developer specializing in mobile banking, fintech security, and clean architecture at F1Soft International.",
    type: "website",
    images: ["/images/profile-headshot.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Lamichhane — Flutter Developer",
    description: "Flutter Developer specializing in mobile banking, fintech security, and clean architecture.",
    images: ["/images/profile-headshot.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
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
