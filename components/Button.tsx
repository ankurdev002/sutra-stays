"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

type ButtonVariant =
  | "deep-green"
  | "charcoal-black"
  | "heritage-gold"
  | "bone-white"
  | "off-white"
  | "transparent"
  | "off-white-2";

interface ButtonProps {
  variant: ButtonVariant;
  label?: string;
  className?: string;
  method?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  label,
  className = "",
  method,
  type = "button",
  disabled = false,
  icon,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!buttonRef.current) return;

    const button = buttonRef.current;

    const handleMouseEnter = () => {
      gsap.to(button, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
      });
      if (iconRef.current) {
        gsap.to(iconRef.current, {
          x: 5,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
      if (iconRef.current) {
        gsap.to(iconRef.current, {
          x: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const handleClick = () => {
      gsap.to(button, {
        scale: 0.95,
        duration: 0.1,
        ease: "power2.out",
        yoyo: true,
        repeat: 1,
      });
    };

    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);
    button.addEventListener("click", handleClick);

    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
      button.removeEventListener("click", handleClick);
    };
  }, []);

  // Define variant styles
  const variantStyles: Record<ButtonVariant, string> = {
    "deep-green":
      "bg-deep-green hover:bg-deep-green/90 active:bg-deep-green/80",
    "charcoal-black":
      "bg-charcoal-black hover:bg-charcoal-black/90 active:bg-charcoal-black/80",
    "heritage-gold":
      "bg-heritage-gold hover:bg-heritage-gold/90 active:bg-heritage-gold/80",
    "bone-white":
      "bg-bone-white hover:bg-bone-white/90 active:bg-bone-white/80 border border-deep-green",
    "off-white":
      "bg-off-white hover:bg-off-white/90 active:bg-off-white/80 border border-deep-green",
    transparent:
      "bg-transparent hover:bg-transparent/90 active:bg-transparent/80 border border-white",
    "off-white-2":
      "bg-off-white-2 hover:bg-off-white-2/90 active:bg-off-white-2/80 border border-deep-green",
  };

  const baseStyles =
    "px-6 py-3 font-medium transition-colors duration-200 focus:outline-none focus:ring-0 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed w-auto flex items-center justify-center gap-2 cursor-pointer";

  const combinedClassName =
    `${baseStyles} ${variantStyles[variant]} ${className}`.trim();

  const handleClick = () => {
    if (method) {
      method();
    }
  };

  return (
    <button
      ref={buttonRef}
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={combinedClassName}
    >
      {label && (
        <span className="font-medium font-inter">
          {label}
        </span>
      )}
      {icon && (
        <span ref={iconRef} className="flex items-center justify-center">
          {icon}
        </span>
      )}
    </button>
  );
};

export default Button;
