import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import ThemeProvider from "./providers/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "./sections/navbar";
import { Toaster } from "@/components/ui/toast";
import { Analytics } from "@vercel/analytics/next"
import VisitorTracker from "@/components/VisitorTracker";
import { bind } from "cuelume";
import CuelumeProvide from "@/components/CuelumeProvider";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const siteUrl = "https://devwithalok.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Alok Pandey",
    template: "%s | Alok Pandey",
  },

  description:
    "Alok Pandey is a creative developer building fast, interactive websites and full-stack digital experiences. Explore selected projects and get in touch.",

  applicationName: "Alok Pandey Portfolio",

  keywords: [
    "Alok Pandey",
    "Creative Developer",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Frontend Developer",
    "Web Developer Portfolio",
  ],

  authors: [
    {
      name: "Alok Pandey",
      url: siteUrl,
    },
  ],

  creator: "Alok Pandey",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Alok Pandey",
    title: "Alok Pandey | Creative Developer",
    description:
      "Designing and developing digital experiences that feel as good as they work.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alok Pandey — Creative Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Alok Pandey | Creative Developer",
    description:
      "Designing and developing digital experiences that feel as good as they work.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  bind();
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`} suppressHydrationWarning
    >
      <body className="relative min-h-full flex flex-col">
        <ThemeProvider>
          <div className="relative flex flex-col justify-start items-center w-screen bg-background text-foreground ">
            <Navbar />
            {/* <Script src="/oneko.js" strategy="afterInteractive" /> */}

            <TooltipProvider>
              <VisitorTracker />
              <CuelumeProvide />
              {children}
              <Analytics />
              <Toaster />
            </TooltipProvider>
          </div >
        </ThemeProvider >
      </body >
    </html >
  );
}
