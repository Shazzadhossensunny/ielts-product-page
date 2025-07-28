"use client";

import { useEffect, useState } from "react";
import { Checklist, CtaText, Data } from "@/types/products";
import MobileHeroSection from "./MobileHeroSection";
import HeroSection from "./HeroSection";

interface Props {
  title: string;
  description: string;
  media: Data["media"];
  ctaText: CtaText;
  checklist: Checklist[];
}

const HeroWrapper = (props: Props) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // Avoid hydration mismatch by not rendering until client-side
  if (!isClient) {
    return <div className="min-h-screen bg-gray-100 animate-pulse"></div>;
  }

  return isMobile ? (
    <MobileHeroSection {...props} />
  ) : (
    <HeroSection {...props} />
  );
};

export default HeroWrapper;
