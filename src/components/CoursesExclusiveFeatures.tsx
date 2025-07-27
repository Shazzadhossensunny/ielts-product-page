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
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="col-span-2">
            {/* Section Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              {featureExplanationSection.name || "কোর্স এক্সক্লুসিভ ফিচার"}
            </h2>

            <div className="space-y-2">
              {featureExplanationSection.values.map((feature, index) => (
                <div
                  key={feature.id || index}
                  className="bg-white flex justify-between rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  {/* Feature Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      {feature.title}
                    </h3>

                    {feature.checklist && (
                      <div className="space-y-3">
                        {feature.checklist.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="flex items-start gap-3"
                          >
                            <div className="flex-shrink-0">
                              <Check className="w-5 h-5 text-blue-500 mt-0.5" />
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Feature Image */}
                  {feature.file_url && (
                    <div className="relative h-48">
                      <Image
                        src={feature.file_url}
                        alt={feature.title || `Feature ${index + 1}`}
                        width={250}
                        height={200}
                        loading="lazy"
                        className="object-cover"
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
