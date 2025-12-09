"use client";
import Button from "@/components/Button";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current || !titleRef.current || !contentRef.current || !imageRef.current) return;

    const tl = gsap.timeline({ delay: 0.3 });

    // Animate title
    tl.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    )
      // Animate content
      .fromTo(
        contentRef.current.children,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        },
        "-=0.5"
      )
      // Animate image
      .fromTo(
        imageRef.current,
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4"
      );
  }, []);

  return (
    <div
      ref={heroRef}
      className="w-full min-h-dvh bg-cover bg-center bg-no-repeat py-24 flex items-end px-4 lg:px-12"
      style={{ backgroundImage: "url('/assets/backgrounds/main-bg.svg')" }}
    >
      <div className="relative w-full h-full flex flex-col lg:flex-row items-end justify-between gap-8">
        {/* left */}
        <div ref={contentRef} className="space-y-4 lg:space-y-8 w-full lg:w-3/5">
          <h1
            ref={titleRef}
            className="text-white text-6xl lg:text-8xl font-medium font-lostar lg:leading-28 uppercase text-center lg:text-start lg:w-2/3"
          >
            Stay.<br /> Belong. Be
          </h1>
          <div className="flex items-center gap-8 justify-center lg:justify-start">
            <Button
              variant="off-white"
              className="rounded-full min-h-19 min-w-19 text-black border-0"
              icon={
                <Image
                  src="/assets/icons/arrow-lg-down.svg"
                  alt="play"
                  width={24}
                  height={24}
                />
              }
            />
            <p className="text-white lg:text-4xl font-medium font-inter lg:leading-10 capitalize">
              Every stay is a Sutra a story of peace, presence, and pure nature.
            </p>
          </div>
          <hr className="lg:w-3/4 border-white" />
          <div className="flex flex-col lg:flex-row items-center gap-3.5">
            <div className="rounded-full bg-off-white p-1.5 lg:w-fit flex items-center gap-1.5">
              <Image
                src="/assets/icons/g-sign.svg"
                alt="hero"
                width={14}
                height={14}
              />
              <div className="flex items-center gap-0.25">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Image
                    key={index}
                    src="/assets/icons/star.svg"
                    alt="hero"
                    width={10}
                    height={10}
                  />
                ))}
              </div>
              <p className="text-black text-[10px] font-medium font-inter leading-3">
                4.8
              </p>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-3.5">
              <p className="text-[#FFFFFFB2] text-sm font-medium font-inter leading-3 uppercase -tracking-[.2px]">
                Gold verified
              </p>
              <p className="text-white text-sm font-medium font-inter leading-3">Our Customers love to work with us, 40 Reviews</p>
            </div>
          </div>
        </div>
        {/* right */}
        <div ref={imageRef}>
          <Image
            src="/assets/images/section-rb.svg"
            alt="hero"
            width={380}
            height={215}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
