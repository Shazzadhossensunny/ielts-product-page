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
    <section className="bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-[#212337]">
          Course details
        </h2>

        <div className="space-y-4">
          {aboutSection.values.map((item, index) => {
            const isOpen = openSections[item.id] || false;
            const cleanTitle = stripHtmlTags(item.title);

            return (
              <div
                key={item.id || index}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden"
              >
                {/* Header - Clickable */}
                <button
                  onClick={() => toggleSection(item.id)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-medium text-gray-900">
                    {cleanTitle}
                  </h3>
                  <div className="flex-shrink-0 ml-4">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                </button>

                {/* Collapsible Content */}
                {isOpen && (
                  <div className="px-6 pb-6 border-t border-gray-100">
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
    </section>
  );
};

export default CourseDetails;
