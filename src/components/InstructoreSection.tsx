import { ChevronRight } from "lucide-react";
import Image from "next/image";

interface Instructor {
  name: string;
  image: string;
  description: string;
  short_description: string;
  has_instructor_page: boolean;
  slug: string;
}

interface Props {
  instructor: Instructor;
}

const InstructorSection = ({ instructor }: Props) => {
  if (!instructor) return null;

  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="col-span-2 relative z-10">
            {/* title */}
            <h2 className="text-2xl font-semibold text-[#111827] mb-4">
              Course instructor
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-1 border border-[#dbe1eb] rounded-[4px] p-5 pb-0 w-full md:w-5/6">
              {/* Instructor Image */}
              <div className="w-24 h-24 shrink-0">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  width={80}
                  height={80}
                  className="object-cover rounded-full shadow-md"
                />
              </div>

              {/* Instructor Info */}
              <div className="space-y-1">
                <h3 className="text-lg font-medium text-gray-800 flex items-center gap-1 cursor-pointer hover:text-green-500">
                  {instructor.name}
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </h3>

                {/* Display HTML description safely */}
                <div
                  className="text-gray-600"
                  dangerouslySetInnerHTML={{ __html: instructor.description }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;
