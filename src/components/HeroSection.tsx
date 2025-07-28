"use client";

import React, { useState, useEffect } from "react";
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

const HeroSection = ({
  title,
  description,
  media,
  ctaText,
  checklist,
}: Props) => {
  const [isSticky, setIsSticky] = useState(false);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [stickyPosition, setStickyPosition] = useState({ top: 0, right: 0 });

  // Filter preview gallery items
  const previewGalleryItems =
    media?.filter((item) => item.name === "preview_gallery") || [];

  // Get current media item
  const currentMediaItem = previewGalleryItems[currentMediaIndex];

  // Handle scroll for sticky sidebar
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = 300; // Your hero section height

      if (scrollPosition > heroHeight) {
        setIsSticky(true);
        // Calculate position to keep it on right side
        const rightSideContainer = document.querySelector(
          ".right-sidebar-container"
        );
        if (rightSideContainer) {
          const rect = rightSideContainer.getBoundingClientRect();
          setStickyPosition({
            top: 20, // 20px from top when sticky
            right: window.innerWidth - rect.right, // Keep it aligned to right
          });
        }
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <div className="relative">
      {/* Hero Background */}
      <section
        className="text-white py-16 px-4 h-[300px] md:h-[300px] relative"
        style={{
          backgroundImage:
            "url(https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto h-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
            {/* Left Content - 2/3 width */}
            <div className="lg:col-span-2 space-y-6 flex flex-col w-full">
              <div className="space-y-4">
                <h1 className="text-xl md:text-4xl font-semibold leading-tight text-white">
                  {title}
                </h1>

                <div className="flex items-center space-x-2">
                  <div className="flex text-[#FFA500] gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>
                        <Star className="w-5 h-5" />
                      </span>
                    ))}
                  </div>
                  <span className="text-sm md:text-base text-white">
                    (81.8% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)
                  </span>
                </div>

                <div
                  className="text-base text-gray-400 leading-relaxed prose"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              </div>
            </div>

            {/* Right Sidebar - 1/3 width */}
            <div className="lg:col-span-1 right-sidebar-container">
              <div
                className={`${
                  isSticky ? "fixed z-50 w-80 lg:w-96" : "relative w-full"
                }`}
              >
                <div className="bg-white rounded-[4px] overflow-hidden shadow-lg">
                  {/* Video Section - Show in mobile when sticky, hide in desktop when sticky */}
                  <div className={`${isSticky ? "lg:hidden block" : "block"}`}>
                    <div className="aspect-video relative bg-gray-200 p-1">
                      {/* Main Media Display */}
                      {currentMediaItem && (
                        <div className="w-full h-full relative">
                          {/* Video or Image Background */}
                          {currentMediaItem.resource_type === "video" ? (
                            <>
                              {isVideoPlaying ? (
                                // Show YouTube embed when playing
                                <iframe
                                  src={getVideoEmbedUrl(
                                    currentMediaItem.resource_value
                                  )}
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
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              className="object-cover"
                            />
                          )}

                          {/* Navigation Arrows - only show if not playing video */}
                          {!isVideoPlaying &&
                            previewGalleryItems.length > 1 && (
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

                    {/* Media Thumbnails - Hide scrollbar */}
                    <div className="flex space-x-2 p-2 bg-gray-100 overflow-x-auto scrollbar-hide">
                      {previewGalleryItems.map((item, index) => (
                        <div
                          key={index}
                          onClick={() => handleThumbnailClick(index)}
                          className={`w-16 h-12 rounded cursor-pointer flex-shrink-0 relative overflow-hidden ${
                            index === currentMediaIndex
                              ? "ring-2 ring-red-500"
                              : ""
                          }`}
                        >
                          {item.resource_type === "video" ? (
                            <div className="relative w-full h-full">
                              <Image
                                src={
                                  item.thumbnail_url || "/default-thumbnail.jpg"
                                }
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
                  </div>

                  {/* Price and Features Section */}
                  <div className="p-4">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="text-2xl font-bold text-gray-900">
                        ৳1000
                      </span>
                    </div>

                    <button className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors mb-6">
                      {ctaText?.name || "Enroll Now"}
                    </button>

                    {/* Course Features */}
                    <div className="space-y-1">
                      <h4 className="font-semibold text-gray-900 mb-4">
                        এই কোর্সে যা থাকছে
                      </h4>
                      {checklist?.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3 text-sm text-gray-700 py-1"
                        >
                          <Image
                            src={feature.icon}
                            width={20}
                            height={20}
                            alt="icon"
                            className="object-cover"
                          />
                          <span>{feature.text}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-200 flex items-center justify-between text-sm">
                      <span className="text-gray-600">
                        কোনটি সম্পর্কে বিস্তারিত জানতে
                      </span>
                      <a
                        href="tel:16910"
                        className="text-green-500 font-medium flex items-center space-x-1"
                      >
                        <span>📞</span>
                        <span>ফোন করুন (16910)</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compact Sticky Bottom Bar for Mobile */}
      {isSticky && (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-40">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-lg font-bold text-gray-900">৳3850</span>
              <span className="text-sm text-gray-500 line-through ml-2">
                ৳5000
              </span>
            </div>
            <button className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold">
              {ctaText?.name || "Enroll"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
