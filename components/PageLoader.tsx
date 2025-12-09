"use client";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate loader
    tl.to(".loader-content", {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: "power2.out",
    })
      .to(
        ".loader-spinner",
        {
          rotation: 360,
          duration: 1.2,
          ease: "none",
          repeat: -1,
        },
        "-=0.3"
      )
      .to(
        ".loader-content",
        {
          opacity: 0,
          scale: 0.8,
          duration: 0.5,
          ease: "power2.in",
          delay: 0.5,
        },
        "+=0.5"
      )
      .to(
        ".loader-overlay",
        {
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          onComplete: () => setIsLoading(false),
        },
        "-=0.3"
      );
  }, []);

  if (!isLoading) return null;

  return (
    <div className="loader-overlay fixed inset-0 z-[9999] bg-off-white flex items-center justify-center">
      <div className="loader-content opacity-0 scale-90 flex flex-col items-center gap-6">
        <div className="loader-spinner relative w-16 h-16">
          {/* Spinner matching dropdown colors - charcoal-black background with deep-green accent */}
          <div className="absolute inset-0 border-4 border-charcoal-black/30 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-deep-green rounded-full animate-spin" style={{ animationDuration: "1.2s" }}></div>
          <div className="absolute inset-2 border-4 border-charcoal-black/20 rounded-full"></div>
          <div className="absolute inset-2 border-4 border-transparent border-t-deep-green/70 rounded-full animate-spin" style={{ animationDuration: "0.9s", animationDirection: "reverse" }}></div>
        </div>
        <p className="text-charcoal-black text-sm font-inter font-medium">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default PageLoader;

