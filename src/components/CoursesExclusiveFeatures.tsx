import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { Section } from "@/types/products";

interface Props {
  coursesExclusiveFeatures: Section[];
}

const CourseExclusiveFeatures = ({ coursesExclusiveFeatures }: Props) => {
  const featureExplanationSection = coursesExclusiveFeatures.find(
    (section) => section.type === "feature_explanations"
  );

  if (!featureExplanationSection || !featureExplanationSection.values)
    return null;

  return (
    <section className="pb-12 bg-white px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-2 w-full">
            {/* Section Title */}
            <h2 className="text-2xl font-semibold text-[#111827] mb-4">
              {featureExplanationSection.name || "কোর্স এক্সক্লুসিভ ফিচার"}
            </h2>

            <div className="space-y-4 border bg-white border-[#dbe1eb] rounded-[4px] p-4">
              {featureExplanationSection.values.map((feature, index) => (
                <div
                  key={feature.id || index}
                  className="bg-white flex flex-col md:flex-row justify-between gap-3 px-2 py-5 border-b border-[#dbe1eb] last:border-b-0 mx-3 overflow-hidden"
                >
                  {/* Feature Content */}
                  <div>
                    <h3 className="text-base font-medium text-[#111827] mb-4">
                      {feature.title}
                    </h3>

                    {feature.checklist && (
                      <div className="space-y-3">
                        {feature.checklist.map(
                          (item: string, itemIndex: any) => (
                            <div
                              key={itemIndex}
                              className="flex items-start gap-3"
                            >
                              <div className="flex-shrink-0">
                                <Check className="w-5 h-5 text-blue-500 mt-0.5" />
                              </div>
                              <p className="text-gray-700 text-base">{item}</p>
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </div>

                  {/* Feature Image */}
                  {feature.file_url && (
                    <div className="relative w-full md:w-[250px]">
                      <Image
                        src={feature.file_url}
                        alt={feature.title || `Feature ${index + 1}`}
                        width={250}
                        height={200}
                        className="object-cover w-full h-auto"
                      />
                    </div>
                  )}

                  {/* Fallback when no image */}
                  {!feature.file_url && (
                    <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-4xl font-bold mb-2">
                          {index === 0 ? "50+" : "IELTS"}
                        </div>
                        <div className="text-sm font-medium whitespace-pre-line">
                          {index === 0
                            ? "VIDEO LECTURES"
                            : "READING & LISTENING\nMOCK TESTS"}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseExclusiveFeatures;
