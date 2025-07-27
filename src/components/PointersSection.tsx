import { Section } from "@/types/products";
import { CheckCircle } from "lucide-react";

interface Props {
  pointers: Section[];
  title?: string;
}

const PointersSection = ({ pointers, title }: Props) => {
  // Find the pointers section
  const pointersSection = pointers.find(
    (section) => section.type === "pointers"
  );

  if (!pointersSection || !pointersSection.values) return null;

  const sectionTitle =
    title || pointersSection.name || "What you will learn by doing the course";

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="col-span-2">
            {/* Section Title */}
            <h2 className="text-3xl font-bold mb-12 text-[#212337]">
              {sectionTitle}
            </h2>

            {/* Pointers Container */}
            <div className="border border-gray-200 rounded-lg p-8 bg-gray-50">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {pointersSection.values.map((pointer, index) => (
                  <div
                    key={pointer.id || index}
                    className="flex items-start gap-3"
                  >
                    {/* Checkmark Icon */}
                    <CheckCircle
                      className="text-blue-500 mt-1 flex-shrink-0"
                      size={20}
                    />

                    {/* Pointer Text */}
                    <p className="text-gray-700 leading-6 text-sm">
                      {pointer.text}
                    </p>
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

export default PointersSection;
