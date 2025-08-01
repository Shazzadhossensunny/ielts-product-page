import { Section } from "@/types/products";
import Image from "next/image";

interface Props {
  sections: Section[];
}

const FeaturesLayout = ({ sections }: Props) => {
  const featureSection = sections.find(
    (section) => section.type === "features"
  );

  if (!featureSection || !featureSection.values) return null;

  return (
    <section className="pb-12 px-4 sm:px-6 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-2 w-full">
            {/* Section Title */}
            <h2 className="text-xl font-semibold mb-4 text-[#111827]">
              {featureSection.name || "How the course is laid out"}
            </h2>

            {/* Features Grid */}
            <div className="bg-[#111827] rounded-lg p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featureSection.values.map((feature, index) => (
                  <div
                    key={feature.id || index}
                    className="flex items-start gap-4"
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      {feature.icon ? (
                        <Image
                          src={feature.icon}
                          alt="icon"
                          width={36}
                          height={36}
                          className="object-cover"
                        />
                      ) : (
                        // Fallback icon based on index
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center ${
                            index === 0
                              ? "bg-green-500"
                              : index === 1
                              ? "bg-blue-500"
                              : index === 2
                              ? "bg-orange-500"
                              : "bg-red-500"
                          }`}
                        >
                          {index === 0 && (
                            <svg
                              className="w-6 h-6 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 12L15 7l-1.41-1.41L10 9.17 6.41 5.59 5 7l5 5z" />
                            </svg>
                          )}
                          {index === 1 && (
                            <svg
                              className="w-6 h-6 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M4 4v12h12V4H4zm10 10H6V6h8v8z" />
                            </svg>
                          )}
                          {index === 2 && (
                            <svg
                              className="w-6 h-6 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                              <path
                                fillRule="evenodd"
                                d="M4 5a2 2 0 012-2v1a1 1 0 001 1h6a1 1 0 001-1V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                          {index === 3 && (
                            <svg
                              className="w-6 h-6 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                            </svg>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {feature.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesLayout;
