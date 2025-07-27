import { extractVideoId, getYouTubeEmbedUrl } from "@/lib/getProductBySlug";
import { Data } from "@/types/products";

interface Props {
  title: string;
  description: string;
  media: Data["media"];
}

const HeroSection = ({ title, description, media }: Props) => {
  // Find the first video in media for trailer
  const trailerVideo = media?.find(
    (item) => item.name === "preview_gallery" && item.resource_type === "video"
  );

  const videoEmbedUrl = trailerVideo
    ? getYouTubeEmbedUrl(extractVideoId(trailerVideo.resource_value))
    : null;

  return (
    <section className="bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#212337]">
            {title}
          </h1>

          <div
            className="text-lg text-gray-700 space-y-4 leading-7 prose"
            dangerouslySetInnerHTML={{ __html: String(description) }}
          />
        </div>

        {/* Video */}
        {videoEmbedUrl && (
          <div className="w-full aspect-video">
            <iframe
              src={videoEmbedUrl}
              title="Course Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg shadow-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
