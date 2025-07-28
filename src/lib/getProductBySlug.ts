import { ApiResponse } from "@/types/products";

const API_BASE_URL = "https://api.10minuteschool.com/discovery-service/api/v1";

export async function getProductBySlug(
  slug: string,
  lang: "en" | "bn" = "en"
): Promise<any> {
  const response = await fetch(
    `${API_BASE_URL}/products/${slug}?lang=${lang}`,
    {
      headers: {
        "X-TENMS-SOURCE-PLATFORM": "web",
        accept: "application/json",
      },
      next: { revalidate: 60 }, // ISR - revalidate every hour
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch product data");
  }

  const data = await response.json();
  return data.data;
}

// export function getYouTubeEmbedUrl(videoId: string): string {
//   return `https://www.youtube.com/embed/${videoId}`;
// }

// export function extractVideoId(url: string): string {
//   // Handle direct video IDs and YouTube URLs
//   const videoIdRegex =
//     /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
//   const match = url.match(videoIdRegex);
//   return match ? match[1] : url;
// }
