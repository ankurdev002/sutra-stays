"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface RevealOptions {
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
  stagger?: number;
  once?: boolean;
}

export const useRevealAnimation = (options: RevealOptions = {}) => {
  const ref = useRef<HTMLElement>(null);
  const {
    delay = 0,
    duration = 0.8,
    direction = "up",
    stagger = 0.1,
    once = true,
  } = options;

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const children = element.querySelectorAll("[data-reveal-item]");

    let fromProps: gsap.TweenVars = {};
    let toProps: gsap.TweenVars = {
      opacity: 1,
      duration,
      ease: "power3.out",
    };

    switch (direction) {
      case "up":
        fromProps = { opacity: 0, y: 60 };
        toProps = { ...toProps, y: 0 };
        break;
      case "down":
        fromProps = { opacity: 0, y: -60 };
        toProps = { ...toProps, y: 0 };
        break;
      case "left":
        fromProps = { opacity: 0, x: 60 };
        toProps = { ...toProps, x: 0 };
        break;
      case "right":
        fromProps = { opacity: 0, x: -60 };
        toProps = { ...toProps, x: 0 };
        break;
      case "fade":
        fromProps = { opacity: 0 };
        break;
    }

    if (children.length > 0) {
      gsap.set(children, fromProps);
      gsap.to(children, {
        ...toProps,
        stagger,
        delay,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: once ? "play none none none" : "play none none reverse",
        },
      });
    } else {
      gsap.set(element, fromProps);
      gsap.to(element, {
        ...toProps,
        delay,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: once ? "play none none none" : "play none none reverse",
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [delay, duration, direction, stagger, once]);

  return ref;
};

