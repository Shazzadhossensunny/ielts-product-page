import { Checklist as ChecklistType } from "@/types/products";
import Image from "next/image";

interface Props {
  checklist: ChecklistType[];
}

const Checklist = ({ checklist }: Props) => {
  if (!checklist || checklist.length === 0) return null;

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#212337]">
          কোর্সের তথ্য
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {checklist.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-lg p-6 shadow-md text-center"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={item.icon}
                  alt=""
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-700 font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Checklist;
