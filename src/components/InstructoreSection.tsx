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
          <div className="col-span-2 flex flex-col md:flex-row items-center gap-8 border border-red-500">
            {/* Instructor Image */}
            <div className="w-40 h-40 shrink-0">
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-full h-full object-cover rounded-full shadow-md"
              />
            </div>

            {/* Instructor Info */}
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-[#212337]">
                Meet Your Instructor
              </h2>
              <p className="text-xl font-medium text-gray-800">
                {instructor.name}
              </p>
              <p className="text-gray-600 text-sm">
                {instructor.short_description}
              </p>
              {/* Display HTML description safely */}
              <div
                className="text-gray-600 leading-relaxed prose prose-sm max-w-none"
                dangerouslySetInnerHTML={{ __html: instructor.description }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;
