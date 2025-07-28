"use client";

import React, { useState } from "react";
import { Play, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Checklist, CtaText, Data } from "@/types/products";
import Image from "next/image";

interface Props {
  title: string;
  description: string;
  media: Data["media"];
  ctaText: CtaText;
  checklist: Checklist[];
}

const MobileHeroSection = ({
  title,
  description,
  media,
  ctaText,
  checklist,
}: Props) => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Filter preview gallery items
  const previewGalleryItems =
    media?.filter((item) => item.name === "preview_gallery") || [];

  // Get current media item
  const currentMediaItem = previewGalleryItems[currentMediaIndex];

  // Navigate to previous media
  const handlePrevious = () => {
    setCurrentMediaIndex((prev) =>
      prev === 0 ? previewGalleryItems.length - 1 : prev - 1
    );
    setIsVideoPlaying(false);
  };

  // Navigate to next media
  const handleNext = () => {
    setCurrentMediaIndex((prev) =>
      prev === previewGalleryItems.length - 1 ? 0 : prev + 1
    );
    setIsVideoPlaying(false);
  };

  // Handle thumbnail click
  const handleThumbnailClick = (index: number) => {
    setCurrentMediaIndex(index);
    setIsVideoPlaying(false);
  };

  // Handle play button click
  const handlePlayClick = () => {
    if (currentMediaItem?.resource_type === "video") {
      setIsVideoPlaying(true);
    }
  };

  // Get YouTube embed URL
  const getVideoEmbedUrl = (videoId: string) => {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Video/Media Section - First */}
      <div className="w-full">
        <div className="bg-white rounded-lg overflow-hidden shadow-sm">
          <div className="aspect-video relative bg-gray-200">
            {/* Main Media Display */}
            {currentMediaItem && (
              <div className="w-full h-full relative">
                {/* Video or Image Background */}
                {currentMediaItem.resource_type === "video" ? (
                  <>
                    {isVideoPlaying ? (
                      // Show YouTube embed when playing
                      <iframe
                        src={getVideoEmbedUrl(currentMediaItem.resource_value)}
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      // Show thumbnail with play button
                      <>
                        <Image
                          src={
                            currentMediaItem.thumbnail_url ||
                            "/default-thumbnail.jpg"
                          }
                          alt="Video thumbnail"
                          fill
                          sizes="100vw"
                          className="object-cover"
                        />
                        {/* Play Button Overlay */}
                        <div
                          className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center cursor-pointer"
                          onClick={handlePlayClick}
                        >
                          <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all">
                            <Play className="w-8 h-8 text-red-500 ml-1" />
                          </div>
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  // Show image
                  <Image
                    src={currentMediaItem.resource_value}
                    alt="Preview"
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                )}

                {/* Navigation Arrows - only show if not playing video */}
                {!isVideoPlaying && previewGalleryItems.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevious}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Media Thumbnails */}
          {previewGalleryItems.length > 1 && (
            <div className="flex space-x-2 p-3 bg-gray-50 overflow-x-auto">
              {previewGalleryItems.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleThumbnailClick(index)}
                  className={`w-16 h-12 rounded cursor-pointer flex-shrink-0 relative overflow-hidden ${
                    index === currentMediaIndex ? "ring-2 ring-red-500" : ""
                  }`}
                >
                  {item.resource_type === "video" ? (
                    <div className="relative w-full h-full">
                      <Image
                        src={item.thumbnail_url || "/default-thumbnail.jpg"}
                        alt="Video thumbnail"
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                        <Play className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={item.resource_value}
                      alt="Preview thumbnail"
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Content Section - Second */}
      <div className="px-4 py-6">
        {/* Hero Content with Background */}
        <div
          className="rounded-lg p-6 mb-6"
          style={{
            backgroundImage:
              "url(https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="space-y-4">
            <h1 className="text-2xl font-bold leading-tight text-white">
              {title}
            </h1>

            <div className="flex items-center space-x-2">
              <div className="flex text-yellow-400 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-sm text-white opacity-90">
                (81.8% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)
              </span>
            </div>

            <div
              className="text-sm text-gray-200 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
        </div>

        {/* Price and CTA Section */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-3xl font-bold text-gray-900">৳1000</span>
            </div>
          </div>

          <button className="w-full bg-green-500 text-white py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors">
            {ctaText?.name || "Enroll Now"}
          </button>
        </div>

        {/* Course Features */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h4 className="font-bold text-gray-900 mb-4 text-lg">
            এই কোর্সে যা থাকছে
          </h4>
          <div className="space-y-3">
            {checklist?.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 text-gray-700 py-2"
              >
                <Image
                  src={feature.icon}
                  width={24}
                  height={24}
                  alt="icon"
                  className="object-contain flex-shrink-0"
                />
                <span className="text-sm leading-relaxed">{feature.text}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">
                কোনটি সম্পর্কে বিস্তারিত জানতে
              </p>
              <a
                href="tel:16910"
                className="inline-flex items-center space-x-2 text-green-500 font-semibold text-lg"
              >
                <span>📞</span>
                <span>ফোন করুন (16910)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHeroSection;
