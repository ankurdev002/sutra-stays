"use client";
import Image from "next/image";
import { Stay } from "@/constants/staysData";
import ShareIcon from "@/public/assets/icons/share";
import HeartIcon from "@/public/assets/icons/heart-icon";
import SuperhostFilledIcon from "@/public/assets/icons/superhost-filled-icon";
import RatingStars from "@/public/assets/icons/rating-stars";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface PropertyHeaderProps {
  stay: Stay;
}

const PropertyHeader = ({ stay }: PropertyHeaderProps) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headerRef.current || !titleRef.current || !actionsRef.current) return;

    // Optimize: Use will-change
    if (titleRef.current) {
      titleRef.current.style.willChange = "transform, opacity";
    }
    Array.from(actionsRef.current.children).forEach((child) => {
      (child as HTMLElement).style.willChange = "transform, opacity";
    });

    const tl = gsap.timeline({ delay: 0.1 });

    tl.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      }
    ).fromTo(
      actionsRef.current.children,
      {
        opacity: 0,
        y: 15,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.08,
        ease: "power2.out",
      },
      "-=0.3"
    );

    // Cleanup
    return () => {
      tl.kill();
      if (titleRef.current) {
        titleRef.current.style.willChange = "auto";
      }
      if (actionsRef.current) {
        Array.from(actionsRef.current.children).forEach((child) => {
          (child as HTMLElement).style.willChange = "auto";
        });
      }
    };
  }, []);

  return (
    <div ref={headerRef} className="sticky top-0 z-40 bg-white py-4 mb-[48px]">
      <div className="max-w-[1440px] mx-auto w-full flex flex-col justify-between gap-4">
        {/* Top section: Title, description, reviews */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col gap-3">
            <h1
              ref={titleRef}
              className="text-xl sm:text-2xl lg:text-3xl font-semibold font-inter text-black wrap-break-word"
            >
              {stay.title}
            </h1>
          </div>
        </div>
        {/* Bottom section: Action buttons */}
        <div
          ref={actionsRef}
          className="flex items-center gap-2 sm:gap-4 shrink-0 w-full justify-between"
        >
        <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 ">
                <RatingStars />
                  <span className="text-sm font-medium font-inter text-black">
                    {stay.rating}
                  </span>
                </div>
                <span className="text-sm font-inter text-gray-600 underline underline-offset-4">
                  {stay.reviews.toLocaleString()} reviews
                </span>
              </div>
              {stay.host.isSuperhost && (
                <span className="flex items-center gap-1 text-[16px] font-medium font-inter text-black/60 px-2 py-1 rounded">
                 <SuperhostFilledIcon /> Superhost
                </span>
              )}
              <div className="flex items-center gap-1 text-sm font-inter text-gray-600">
                <span className="text-[16px] font-medium font-inter text-[#264935] underline underline-offset-4">{stay.location}</span>
              </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
          <button
            className="px-3 py-2 hover:bg-gray-100 rounded-full transition-all duration-300 flex items-center gap-2 text-[#264935] fill-[#264935] group"
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget, {
                scale: 1.05,
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
            <ShareIcon />
            <span className="text-[16px] font-medium font-inter underline underline-offset-4">
              share
            </span>
          </button>
          <button
            className="px-3 py-2 hover:bg-gray-100 rounded-full transition-all duration-300 flex items-center gap-2 text-[#264935] fill-[#264935] group"
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget, {
                scale: 1.05,
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
            <HeartIcon />
            <span className="text-[16px] font-medium font-inter underline underline-offset-4 text-charcoal-500">
              Save
            </span>
          </button>
        </div>  
        </div>
      </div>
    </div>
  );
};

export default PropertyHeader;

