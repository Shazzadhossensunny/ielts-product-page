export async function getProductBySlug(slug: string) {
  const res = await fetch(
    `https://api.10minuteschool.com/discovery-service/api/v1/products/${slug}?lang=en`,
    {
      headers: {
        "X-TENMS-SOURCE-PLATFORM": "web",
      },
      next: { revalidate: 60 },
    }
  );

  return res.json();
}
