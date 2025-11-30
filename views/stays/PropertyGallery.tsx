"use client";
import GridsIcon from "@/public/assets/icons/grids";
import Image from "next/image";
import { useState } from "react";

interface PropertyGalleryProps {
  images: string[];
}

const PropertyGallery = ({ images }: PropertyGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="mb-8">
      {/* Container with max height 494px */}
      <div className="relative w-full max-h-[494px] rounded-2xl overflow-hidden">
        <div className="flex gap-[19px] h-[494px]">
          {/* Main large image on the left - 494px height */}
          <div 
            className="relative flex-[1.65] min-w-0 h-[494px]"
            style={{ aspectRatio: '637/494' }}
          >
            <Image
              src={images[selectedImage] || images[0]}
              alt="Property main"
              fill
              className="object-cover rounded-l-2xl"
              priority
            />
          </div>
          {/* Thumbnail images on the right in 2x2 grid */}
          {/* Grid height: 494px, gap: 19px, so each row = (494 - 19) / 2 = 237.5px */}
          <div className="grid grid-cols-2 gap-[19px] flex-1 min-w-0 h-[494px]">
            {images.slice(0, 4).map((image, index) => (
              <div
                key={index}
                className={`relative w-full h-full cursor-pointer group overflow-hidden ${
                  index === 0 ? 'none' : ''
                } ${
                  index === 3 ? 'rounded-br-2xl' : ''
                } ${
                  selectedImage === index ? 'ring-2 ring-deep-green' : ''
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image}
                  alt={`Property ${index + 1}`}
                  fill
                  className={`object-cover group-hover:opacity-90 transition-opacity ${
                    selectedImage === index ? 'opacity-100' : 'opacity-80'
                  }`}
                />
                {index === 3 && images.length > 4 && (
                  <div className="absolute inset-0 flex items-end justify-end p-4">
                    <button className="flex items-center gap-2 text-black font-medium font-inter text-[16px] sm:text-sm bg-white px-2 sm:px-4 py-1 sm:py-2 rounded-lg">
                      <GridsIcon />Show all {images.length}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyGallery;

