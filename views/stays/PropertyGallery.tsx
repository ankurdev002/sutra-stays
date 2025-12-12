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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSelectedImage, setModalSelectedImage] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);
  const mainImageRef = useRef<HTMLDivElement>(null);
  const thumbnailsRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const modalMainImageRef = useRef<HTMLDivElement>(null);

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

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setModalSelectedImage(selectedImage);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    if (modalRef.current) {
      gsap.to(modalRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.2,
        ease: "power2.out",
        onComplete: () => {
          setIsModalOpen(false);
          document.body.style.overflow = "auto";
        },
      });
    } else {
      setIsModalOpen(false);
      document.body.style.overflow = "auto";
    }
  };

  const handleImageInModalClick = (index: number) => {
    if (modalMainImageRef.current) {
      gsap.to(modalMainImageRef.current, {
        opacity: 0.5,
        scale: 0.98,
        duration: 0.2,
        ease: "power2.out",
        onComplete: () => {
          setModalSelectedImage(index);
          gsap.to(modalMainImageRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        },
      });
    } else {
      setModalSelectedImage(index);
    }
  };

  useEffect(() => {
    if (isModalOpen && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        {
          opacity: 0,
          scale: 0.95,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        }
      );
    }
  }, [isModalOpen]);

  useEffect(() => {
    if (isModalOpen && modalMainImageRef.current) {
      gsap.fromTo(
        modalMainImageRef.current,
        {
          opacity: 0,
          scale: 0.98,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        }
      );
    }
  }, [isModalOpen, modalSelectedImage]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;

      if (e.key === "Escape") {
        handleCloseModal();
      } else if (e.key === "ArrowRight") {
        setModalSelectedImage((prev) => (prev + 1) % images.length);
      } else if (e.key === "ArrowLeft") {
        setModalSelectedImage((prev) => (prev - 1 + images.length) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, modalSelectedImage, images.length]);

  return (
    <div ref={galleryRef} className="mb-8">
      <div className="relative w-full lg:max-h-[494px] rounded-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-[19px] lg:h-[494px]">
          <div
            ref={mainImageRef}
            className="relative w-full lg:flex-[1.65] min-w-0 h-[300px] sm:h-[400px] lg:h-[494px] cursor-pointer group"
            style={{ aspectRatio: "auto" }}
            onClick={handleOpenModal}
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget, {
                scale: 1.01,
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
              src={images[selectedImage] || images[0]}
              alt="Property main"
              fill
              className="object-cover rounded-t-2xl lg:rounded-l-2xl lg:rounded-t-none group-hover:opacity-90 transition-opacity"
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
                    <button
                      onClick={handleOpenModal}
                      className="flex items-center gap-2 text-black font-medium font-inter text-[16px] sm:text-sm bg-white px-2 sm:px-4 py-1 sm:py-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <GridsIcon />Show all {images.length}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && (
        <div
          ref={modalRef}
          className="fixed inset-0 z-50 bg-black bg-opacity-95 flex flex-col p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              handleCloseModal();
            }
          }}
        >
          <div className="flex justify-between items-center mb-4 mt-[80px]">
            <h2 className="text-white text-2xl font-semibold">
              All Photos ({images.length})
            </h2>
            <button
              onClick={handleCloseModal}
              className="text-white hover:text-gray-300 text-3xl font-light leading-none bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
              aria-label="Close modal"
            >
              ×
            </button>
          </div>

          {/* Large Selected Image at Top */}
          <div
            ref={modalMainImageRef}
            className="relative w-full h-[50vh] min-h-[400px] mb-6 rounded-lg overflow-hidden"
          >
            <Image
              src={images[modalSelectedImage]}
              alt={`Property image ${modalSelectedImage + 1}`}
              fill
              className="object-contain"
              priority
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-70 px-4 py-2 rounded-lg text-sm">
              {modalSelectedImage + 1} / {images.length}
            </div>
            {/* Navigation buttons */}
            {images.length > 1 && (
              <>
                <button
                  onClick={() => setModalSelectedImage((prev) => (prev - 1 + images.length) % images.length)}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center text-2xl hover:bg-opacity-70 transition-all"
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  onClick={() => setModalSelectedImage((prev) => (prev + 1) % images.length)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center text-2xl hover:bg-opacity-70 transition-all"
                  aria-label="Next image"
                >
                  ›
                </button>
              </>
            )}
          </div>

          {/* Scrollable Grid of All Images Below */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden max-h-[30vh]">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 pb-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`relative p-2 aspect-square cursor-pointer group overflow-hidden rounded-lg transition-all ${
                    modalSelectedImage === index
                      ? "scale-105"
                      : "opacity-70 hover:opacity-100"
                  }`}
                  onClick={() => handleImageInModalClick(index)}
                  onMouseEnter={(e) => {
                    if (modalSelectedImage !== index) {
                      gsap.to(e.currentTarget, {
                        scale: 1.05,
                        duration: 0.2,
                        ease: "power1.out",
                      });
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (modalSelectedImage !== index) {
                      gsap.to(e.currentTarget, {
                        scale: 1,
                        duration: 0.2,
                        ease: "power1.out",
                      });
                    }
                  }}
                >
                  <Image
                    src={image}
                    alt={`Property image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyGallery;

