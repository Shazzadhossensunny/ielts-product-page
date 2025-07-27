"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Globe } from "lucide-react";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [lang, setLang] = useState<"en" | "bn">("en");

  useEffect(() => {
    const urlLang = searchParams.get("lang") as "en" | "bn";
    if (urlLang) setLang(urlLang);
  }, [searchParams]);

  const toggleLanguage = () => {
    const newLang = lang === "en" ? "bn" : "en";
    const params = new URLSearchParams(searchParams.toString());
    params.set("lang", newLang);
    router.replace(`${pathname}?${params.toString()}`);
    setLang(newLang);
  };

  return (
    <header className="w-full bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-[#ff6a1a]">
          10 Minute School
        </h1>

        <button
          onClick={toggleLanguage}
          className="flex items-center gap-2 text-sm bg-gray-100 px-3 py-2 rounded hover:bg-gray-200 transition-colors"
        >
          <Globe size={18} />
          {lang === "en" ? "বাংলা" : "English"}
        </button>
      </div>
    </header>
  );
};

export default Header;
