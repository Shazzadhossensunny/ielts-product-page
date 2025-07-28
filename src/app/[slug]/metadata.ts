import { Metadata } from "next";
import { getProductBySlug } from "@/lib/getProductBySlug";

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { lang?: string };
}): Promise<Metadata> {
  const lang = searchParams.lang || "en";
  const product = await getProductBySlug(params.slug, lang as "en" | "bn");

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      images: product.media?.[0]?.thumbnail_url
        ? [{ url: product.media[0].thumbnail_url }]
        : [],
    },
  };
}
