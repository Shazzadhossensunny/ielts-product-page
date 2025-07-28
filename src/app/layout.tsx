import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Suspense } from "react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "10 Minute School - Online Learning Platform",
  description:
    "Learn with 10 Minute School - Bangladesh's largest online learning platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${(inter.variable, "font-sans")} `}
    >
      <body suppressHydrationWarning>
        <Suspense>
          <Header />
        </Suspense>
        {children}
        <Footer />
      </body>
    </html>
  );
}
