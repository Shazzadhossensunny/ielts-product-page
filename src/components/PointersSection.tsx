import { Pointer } from "@/types/products";
import { CheckCircle } from "lucide-react";

interface Props {
  pointers: Pointer[];
  title?: string;
}

const PointersSection = ({
  pointers,
  title = "কোর্সটি করে যা শিখবেন",
}: Props) => {
  if (!pointers || pointers.length === 0) return null;

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#212337]">
          {title}
        </h2>

        <div className="space-y-6">
          {pointers.map((pointer, index) => (
            <div
              key={pointer.id}
              className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg"
            >
              <CheckCircle
                className="text-green-500 mt-1 flex-shrink-0"
                size={24}
              />
              <p className="text-gray-700 leading-7">{pointer.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PointersSection;
