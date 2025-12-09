"use client";
import { getStayById } from "@/constants/staysData";
import { notFound, useParams } from "next/navigation";
import PropertyHeader from "@/views/stays/PropertyHeader";
import PropertyGallery from "@/views/stays/PropertyGallery";
import PropertyBookingWidget from "@/views/stays/PropertyBookingWidget";
import PropertyHostInfo from "@/views/stays/PropertyHostInfo";
import PropertyAmenities from "@/views/stays/PropertyAmenities";
import PropertyReviews from "@/views/stays/PropertyReviews";
import PropertyMap from "@/views/stays/PropertyMap";
import { usePageTransition } from "@/hooks/usePageTransition";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function StayPage() {
  const params = useParams();
  const id = params?.id as string;
  const stay = getStayById(id);
  const contentRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement>(null);

  usePageTransition();

  useEffect(() => {
    if (!sectionsRef.current) return;

    // Clean up any existing ScrollTriggers
    ScrollTrigger.getAll().forEach((trigger) => {
      if (trigger.vars.trigger === sectionsRef.current) {
        trigger.kill();
      }
    });

    const sections = Array.from(sectionsRef.current.children) as HTMLElement[];
    
    // Optimize: Use will-change for better performance
    sections.forEach((section) => {
      section.style.willChange = "transform, opacity";
    });

    const animation = gsap.fromTo(
      sections,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionsRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );

    // Cleanup function
    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === sectionsRef.current) {
          trigger.kill();
        }
      });
      // Reset will-change
      sections.forEach((section) => {
        section.style.willChange = "auto";
      });
    };
  }, [id]);

  if (!stay) {
    notFound();
  }

  return (
    <div
      className="w-full min-h-screen bg-white overflow-x-hidden"
      data-section={`stay-${stay.id}`}
    >
      <div
        ref={contentRef}
        className="max-w-[1440px] mx-auto px-4 lg:px-[70px] w-full mt-[120px]"
      >
        <PropertyHeader stay={stay} />
        <PropertyGallery images={stay.images} />
        <div ref={sectionsRef} className="relative">
          <div className="flex flex-col lg:flex-row gap-16 py-6">
            <div className="flex-1 min-w-0">
              <PropertyHostInfo stay={stay} />
              <PropertyAmenities amenities={stay.amenities} />
              <PropertyReviews stay={stay} />
            </div>
            <div className="w-full lg:w-[400px] lg:sticky lg:top-24 lg:self-start lg:h-fit">
              <PropertyBookingWidget stay={stay} />
            </div>
          </div>
          <PropertyMap
            coordinates={stay.coordinates}
            location={stay.location}
            title={stay.title}
          />
        </div>
      </div>
    </div>
  );
}

