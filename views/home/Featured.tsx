"use client";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Image from "next/image";
import { staysData } from "@/constants/staysData";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Featured = () => {
  const featuredStays = staysData;
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Animate header
    const headerAnimation = gsap.fromTo(
      headerRef.current,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );

    // Animate title
    const titleAnimation = gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );

    // Animate description
    const descriptionAnimation = gsap.fromTo(
      descriptionRef.current,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );

    // Animate cards
    let cardsAnimation: gsap.core.Tween | null = null;
    if (cardsRef.current) {
      const cards = cardsRef.current.children;
      cardsAnimation = gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    }

    // Cleanup function
    return () => {
      headerAnimation.kill();
      titleAnimation.kill();
      descriptionAnimation.kill();
      if (cardsAnimation) {
        cardsAnimation.kill();
      }
      // Clean up any remaining ScrollTriggers for this section
      const triggers = ScrollTrigger.getAll().filter(
        (trigger) =>
          trigger.vars.trigger === headerRef.current ||
          trigger.vars.trigger === titleRef.current ||
          trigger.vars.trigger === descriptionRef.current ||
          trigger.vars.trigger === cardsRef.current
      );
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className="w-full min-h-dvh bg-white py-24 px-4 lg:px-12 space-y-8">
      <h1
        ref={headerRef}
        className="lg:text-2xl font-inter font-extralight leading-4.5 tracking-0 text-charcoal-light-gray"
      >
        01 — Featured Stays
      </h1>

      <div className="flex items-center justify-center">
        <h1
          ref={titleRef}
          className="relative w-fit text-2xl lg:text-[100px] font-inter font-light lg:leading-30 uppercase text-black text-center"
        >
          Serene & Premium
          <Image
            src="/assets/images/leaf.svg"
            alt="wave"
            width={75}
            height={75}
            className="absolute -bottom-5 -rotate-90 lg:bottom-0 lg:rotate-0 -right-10"
          />
        </h1>
      </div>
      <p
        ref={descriptionRef}
        className="text-charcoal-light-gray-2 text-sm font-inter font-extralight lg:leading-7 -tracking-[.2px] text-center lg:px-10"
      >
        Our featured properties bring together nature, comfort, and mindful
        design. From curated interiors to personalized services, every Sutra
        stay offers a seamless balance of warmth, privacy, and tranquility.
      </p>
      <div className="flex justify-center">
        <div className="max-w-xs py-3 px-5 bg-charcoal-black-2 rounded-[20px] flex items-center gap-1.5">
          <Image
            src="/assets/icons/icon-feature.svg"
            alt="featured"
            width={53}
            height={48}
          />
          <Button
            variant="off-white-2"
            label="Leisur Stays"
            className="px-3.75! py-2.5! text-black rounded-full text-xs leading-7 font-inter font-weight-medium border border-[#4e4e4e]!"
          />
          <Button
            variant="transparent"
            label="Classic Stays"
            className="px-3.75! py-2.5! rounded-full text-xs leading-7 text-white font-inter font-weight-medium border border-[#4e4e4e]!"
          />
        </div>
      </div>
      <div
        ref={cardsRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center mx-auto"
      >
        {featuredStays.map((stay) => (
          <Card
            key={stay.id}
            id={stay.id}
            title={stay.title}
            location={stay.location}
            rating={stay.rating}
            reviews={stay.reviews}
            price={stay.price}
            image={stay.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Featured;
