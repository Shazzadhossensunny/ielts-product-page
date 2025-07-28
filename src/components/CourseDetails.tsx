"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Section } from "@/types/products";

interface Props {
  sections: Section[];
}

const CourseDetails = ({ sections }: Props) => {
  const aboutSection = sections.find((section) => section.type === "about");
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>(
    {}
  );

  if (!aboutSection || !aboutSection.values) return null;

  const toggleSection = (id: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const stripHtmlTags = (html: string) => {
    return html.replace(/<[^>]*>/g, "");
  };

  return (
    <section className="bg-white pb-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-2 w-full">
            <h2 className="text-2xl font-semibold mb-4 text-[#111827]">
              Course details
            </h2>

            <div className="space-y-4 border border-[#dbe1eb] rounded-[4px] px-5 pt-2">
              {aboutSection.values.map((item, index) => {
                const isOpen = openSections[item.id] || false;
                const cleanTitle = stripHtmlTags(item.title);

                return (
                  <div
                    key={item.id || index}
                    className="bg-white overflow-hidden border-dashed border-b border-[#dbe1eb] last:border-b-0"
                  >
                    {/* Header - Clickable */}
                    <button
                      onClick={() => toggleSection(item.id)}
                      className="w-full py-4 flex items-center justify-between text-left transition-colors duration-200"
                    >
                      <h3 className="text-base font-bold text-black">
                        {cleanTitle}
                      </h3>
                      <div className="flex-shrink-0 ml-4">
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-black" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-black" />
                        )}
                      </div>
                    </button>

                    {/* Collapsible Content */}
                    {isOpen && (
                      <div className="pb-4">
                        <div
                          className="text-gray-700 leading-relaxed space-y-3 pt-4"
                          dangerouslySetInnerHTML={{ __html: item.description }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
