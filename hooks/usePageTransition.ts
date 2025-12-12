"use client";
import { useEffect } from "react";
import { gsap } from "gsap";

export const usePageTransition = () => {
  useEffect(() => {
    const pageContent = document.querySelector("[data-page-content]");
    if (!pageContent) return;

    gsap.fromTo(
      pageContent,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      }
    );
  }, []);
};


