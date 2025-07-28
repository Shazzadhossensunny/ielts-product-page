import CourseDetails from "@/components/CourseDetails";
import CoursesExclusiveFeatures from "@/components/CoursesExclusiveFeatures";
import FeaturesLayout from "@/components/FeaturesLayout";
import HeroSection from "@/components/HeroSection";
import InstructorSection from "@/components/InstructoreSection";
import PointersSection from "@/components/PointersSection";
import { getProductBySlug } from "@/lib/getProductBySlug";
import { Data, Section } from "@/types/products";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    lang?: string;
  }>;
}

export default async function ProductPage({ params, searchParams }: PageProps) {
  // Await both params and searchParams
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  const lang = resolvedSearchParams.lang || "en";
  const product: Data = await getProductBySlug(
    resolvedParams.slug,
    lang as any
  );
  // const productData = await product.data;

  if (!product) return <div className="p-8 text-center">Product not found</div>;

  // Find the instructor section (it should be the one with type "instructors")
  const instructorSection = product.sections.find(
    (section: Section) => section.type === "instructors"
  );
  // Get the first instructor from the values array
  const instructor = instructorSection?.values?.[0];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title={product.title}
        description={product.description}
        media={product.media}
        ctaText={product.cta_text}
        checklist={product.checklist}
      />

      {/* Instructor Section */}
      {instructor && <InstructorSection instructor={instructor} />}

      <FeaturesLayout sections={product.sections} />
      <PointersSection pointers={product.sections} />
      <CoursesExclusiveFeatures coursesExclusiveFeatures={product.sections} />
      <CourseDetails sections={product.sections} />
    </div>
  );
}
