import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import ThemeProvider from "./providers/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "./sections/navbar";
import { Toaster } from "@/components/ui/toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alok Pandey",
  description: "Freelance Web developer",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
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
              {children}
              <Toaster />
            </TooltipProvider>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
