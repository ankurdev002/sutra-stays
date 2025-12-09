"use client";
import Image from "next/image";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface CardProps {
  id: string;
  title: string;
  location: string;
  rating: number;
  reviews: number;
  price: number;
  image: string;
}

const Card = ({
  id,
  title,
  location,
  rating,
  reviews,
  price,
  image,
}: CardProps) => {
  const router = useRouter();
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current || !imageRef.current) return;

    const card = cardRef.current;
    const imageElement = imageRef.current;

    // Initial reveal animation
    const animation = gsap.fromTo(
      card,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );

    // Hover animations
    const handleMouseEnter = () => {
      gsap.to(card, {
        y: -8,
        duration: 0.4,
        ease: "power2.out",
      });
      gsap.to(imageElement, {
        scale: 1.1,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        y: 0,
        duration: 0.4,
        ease: "power2.out",
      });
      gsap.to(imageElement, {
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      animation.kill();
      const triggers = ScrollTrigger.getAll().filter(
        (trigger) => trigger.vars.trigger === card
      );
      triggers.forEach((trigger) => trigger.kill());
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleViewProperty = () => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        scale: 0.95,
        opacity: 0.8,
        duration: 0.2,
        ease: "power2.out",
        onComplete: () => {
          router.push(`/stays/${id}`);
        },
      });
    } else {
      router.push(`/stays/${id}`);
    }
  };

  return (
    <div
      ref={cardRef}
      className="relative max-h-162.5 min-w-82.5 w-full bg-white rounded-[14px] border border-charcoal-black flex flex-col overflow-hidden space-y-7.5 cursor-pointer"
      data-reveal-item
    >
      <div className="absolute top-4 left-3 rounded-full bg-off-white p-1 w-fit flex items-center gap-1.5">
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
          {rating}
        </p>
      </div>
      <div ref={imageRef} className="overflow-hidden rounded-lg">
        <Image
          src={image}
          alt="card"
          width={439}
          height={329}
          className="rounded-lg w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-between px-7.5 gap-y-3 lg:gap-y-5">
        <p className="text-start font-inter text-[22px] text-charcoal-light-gray-3 font-semibold leading-6.5">
          {title}
        </p>
        <div className="flex items-center gap-2">
          <div className="bg-deep-green rounded-full min-h-5.75 min-w-5.75 flex items-center justify-center p-1">
            <Image
              src="/assets/icons/loc-icon.svg"
              alt="location"
              width={11}
              height={15}
            />
          </div>
          <div className="flex flex-col">
            <p className="font-inter font-semibold leading-4 text-sm text-charcoal-light-gray-3">
              {location}
            </p>
            <div className="w-1/2 leading-0">
              <progress
                value={50}
                max={100}
                className="w-full h-0.5 rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="py-3 lg:py-7.5">
          <p className="flex justify-between">
            <span className="flex items-center gap-3">
              <span className="text-black text-xs font-light font-inter-tight">
                For
              </span>
              <span className="text-black font-semibold leading-4.5 font-inter-tight">
                Per Night + Taxes
              </span>
            </span>
            <span className="flex items-center gap-3">
              <span className="flex items-center gap-1.5">
                <sup className="text-black text-xs font-semibold leading-3.5 font-inter-tight">
                  from
                </sup>
                <span className="text-black font-semibold text-3xl font-inter-tight">
                  {price.toLocaleString()}
                </span>
              </span>
              <sup className="text-black text-xs font-light font-inter-tight">
                ₹
              </sup>
            </span>
          </p>
        </div>
        <div className="py-3 lg:py-9">
          <Button
            variant="transparent"
            label="View Property"
            className="rounded-0 border-0 px-0! flex justify-between! w-full text-black"
            method={handleViewProperty}
            icon={
              <Image
                src="/assets/icons/arrow-right.svg"
                alt="arrow-right"
                width={16}
                height={16}
              />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
