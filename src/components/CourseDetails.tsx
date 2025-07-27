import { Section } from "@/types/products";

interface Props {
  sections: Section[];
}

const CourseDetails = ({ sections }: Props) => {
  const aboutSection = sections.find((section) => section.type === "features");
  console.log(aboutSection);

  if (!aboutSection) return null;

  return (
    <section className="bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-[#212337]">
          Course Details
        </h2>

        <div
          className="text-lg text-gray-700 leading-7 space-y-4"
          dangerouslySetInnerHTML={{ __html: aboutSection.description }}
        />
      </div>
    </section>
  );
};

export default CourseDetails;
