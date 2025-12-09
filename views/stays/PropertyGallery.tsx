"use client";
import GridsIcon from "@/public/assets/icons/grids";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

interface PropertyGalleryProps {
  images: string[];
}

const PropertyGallery = ({ images }: PropertyGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);
  const mainImageRef = useRef<HTMLDivElement>(null);
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!galleryRef.current || !mainImageRef.current || !thumbnailsRef.current) return;

    // Optimize: Use will-change for better performance
    if (mainImageRef.current) {
      mainImageRef.current.style.willChange = "transform, opacity";
    }
    Array.from(thumbnailsRef.current.children).forEach((child) => {
      (child as HTMLElement).style.willChange = "transform, opacity";
    });

    const tl = gsap.timeline({ delay: 0.2 });

    tl.fromTo(
      mainImageRef.current,
      {
        opacity: 0,
        scale: 0.98,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "power2.out",
      }
    ).fromTo(
      thumbnailsRef.current.children,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
      },
      "-=0.3"
    );

    // Cleanup
    return () => {
      tl.kill();
      if (mainImageRef.current) {
        mainImageRef.current.style.willChange = "auto";
      }
      if (thumbnailsRef.current) {
        Array.from(thumbnailsRef.current.children).forEach((child) => {
          (child as HTMLElement).style.willChange = "auto";
        });
      }
    };
  }, []);

  const handleImageClick = (index: number) => {
    if (mainImageRef.current) {
      gsap.to(mainImageRef.current, {
        opacity: 0.5,
        scale: 0.98,
        duration: 0.2,
        ease: "power2.out",
        onComplete: () => {
          setSelectedImage(index);
          gsap.to(mainImageRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        },
      });
    } else {
      setSelectedImage(index);
    }
  };

  return (
    <div ref={galleryRef} className="mb-8">
      <div className="relative w-full lg:max-h-[494px] rounded-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-[19px] lg:h-[494px]">
          <div
            ref={mainImageRef}
            className="relative w-full lg:flex-[1.65] min-w-0 h-[300px] sm:h-[400px] lg:h-[494px]"
            style={{ aspectRatio: "auto" }}
          >
            <Image
              src={images[selectedImage] || images[0]}
              alt="Property main"
              fill
              className="object-cover rounded-t-2xl lg:rounded-l-2xl lg:rounded-t-none"
              priority
            />
          </div>
          <div
            ref={thumbnailsRef}
            className="grid grid-cols-2 gap-[19px] w-full lg:flex-1 min-w-0 h-auto lg:h-[494px]"
          >
            {images.slice(0, 4).map((image, index) => (
              <div
                key={index}
                className={`relative w-full h-[150px] sm:h-[200px] lg:h-full cursor-pointer group overflow-hidden ${
                  index === 0 ? "none" : ""
                } ${
                  index === 3 ? "rounded-br-2xl lg:rounded-br-2xl" : ""
                } ${
                  index === 2 ? "rounded-bl-2xl lg:rounded-bl-none" : ""
                } ${
                  selectedImage === index ? "ring-2 ring-deep-green" : ""
                }`}
                onClick={() => handleImageClick(index)}
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget, {
                    scale: 1.02,
                    duration: 0.2,
                    ease: "power1.out",
                  });
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.currentTarget, {
                    scale: 1,
                    duration: 0.2,
                    ease: "power1.out",
                  });
                }}
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

