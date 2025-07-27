import CourseDetails from "@/components/CourseDetails";
import CoursesExclusiveFeatures from "@/components/CoursesExclusiveFeatures";
import FeaturesLayout from "@/components/FeaturesLayout";
import HeroSection from "@/components/HeroSection";
import InstructorSection from "@/components/InstructoreSection";
import PointersSection from "@/components/PointersSection";
import { getProductBySlug } from "@/lib/getProductBySlug";
import { Data } from "@/types/products";

interface PageProps {
  params: {
    slug: string;
  };
  searchParams: {
    lang?: string;
  };
}

export default async function ProductPage({ params, searchParams }: PageProps) {
  const lang = (await searchParams.lang) || "en";
  const product: Data = await getProductBySlug(params.slug, lang as any);
  const productData = await product.data;

  if (!product) return <div className="p-8 text-center">Product not found</div>;
  // Find the instructor section (it should be the one with type "instructors")
  const instructorSection = product.data.sections.find(
    (section) => section.type === "instructors"
  );
  // Get the first instructor from the values array
  const instructor = instructorSection?.values?.[0];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title={productData.title}
        description={productData.description}
        media={productData.media}
        ctaText={productData.cta_text}
        checklist={productData.checklist}
      />

      <main>
        {/* Instructor Section */}
        {instructor && <InstructorSection instructor={instructor} />}

        <FeaturesLayout sections={productData.sections} />
        <PointersSection pointers={productData.sections} />
        <CoursesExclusiveFeatures
          coursesExclusiveFeatures={productData.sections}
        />
        <CourseDetails sections={productData.sections} />
      </main>
    </div>
  );
}
