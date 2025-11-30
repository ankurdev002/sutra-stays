"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import { Stay } from "@/constants/staysData";
import RatingStars from "@/public/assets/icons/rating-stars";

interface PropertyBookingWidgetProps {
  stay: Stay;
}

const PropertyBookingWidget = ({ stay }: PropertyBookingWidgetProps) => {
  const [guests, setGuests] = useState(4);
  const [nights, setNights] = useState(1);
  const [isGuestsDropdownOpen, setIsGuestsDropdownOpen] = useState(false);
  const guestsDropdownRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close guests dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        guestsDropdownRef.current &&
        !guestsDropdownRef.current.contains(event.target as Node)
      ) {
        setIsGuestsDropdownOpen(false);
      }
    };

    if (isGuestsDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isGuestsDropdownOpen]);

  // Generate guest options
  const guestOptions = Array.from(
    { length: stay.property.guests },
    (_, i) => i + 1
  );

  // Handle guest selection
  const handleGuestSelect = (num: number) => {
    setGuests(num);
    setIsGuestsDropdownOpen(false);
  };

  const totalPrice = stay.price * nights;
  const taxes = totalPrice * 0.075; // 7.5% tax
  const totalBeforeTaxes = totalPrice + taxes;

  return (
    <div className="rounded-2xl p-4 sm:p-6 bg-white shadow-lg lg:sticky lg:top-24">
      <div className="flex items-center justify-between mb-4">
        <div className="w-full">
          <div className="flex items-center gap-2 mb-1 justify-between w-full ">
            <div className="flex items-center gap-2 justify-between">
            <span className="text-2xl font-semibold font-inter text-[#264935]">
              ₹{stay.price.toLocaleString()}
            </span>
            <span className="text-semibold text-[16px] font-inter text-[#264935]">night</span>
            </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <RatingStars />
              <span className="text-sm font-medium font-inter text-black/60">
                {stay.rating}
              </span>
            </div>
            <span className="text-sm font-inter text-gray-600 underline underline-offset-4">
              {stay.reviews.toLocaleString()} reviews
            </span>
          </div>
          </div>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div className="border border-gray-300 rounded-lg p-4">
          <label className="block text-xs font-semibold font-inter text-black mb-2 uppercase">
            Guests
          </label>
          <div className="relative" ref={guestsDropdownRef}>
            <button
              onClick={() => setIsGuestsDropdownOpen(!isGuestsDropdownOpen)}
              className="w-full flex items-center justify-between text-base font-inter text-black bg-transparent border-0 focus:outline-none cursor-pointer py-1"
            >
              <span>{guests} {guests === 1 ? "guest" : "guests"}</span>
              <Image
                src="/assets/icons/down-arrow.svg"
                alt="guests selector"
                width={16}
                height={16}
                className={`transition-transform duration-200 shrink-0 brightness-0 ${
                  isGuestsDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isGuestsDropdownOpen && (
              <div className="absolute left-0 right-0 mt-2 bg-charcoal-black rounded-lg shadow-lg border border-deep-green/20 overflow-hidden animate-fade-in z-10">
                {guestOptions.map((num) => (
                  <button
                    key={num}
                    onClick={() => handleGuestSelect(num)}
                    className={`w-full px-4 py-3 text-left text-sm font-inter transition-colors duration-200 ${
                      guests === num
                        ? "bg-deep-green text-bone-white"
                        : "text-bone-white hover:bg-deep-green/50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{num} {num === 1 ? "guest" : "guests"}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Button
        variant="deep-green"
        label="Reserve"
        className="w-full py-4 text-base font-semibold font-inter rounded-full mb-4"
      />

      <p className="text-center text-sm font-inter text-gray-600 mb-4  pb-4">
        You won't be charged yet
      </p>

      <div className="space-y-3 ">
        <div className="flex justify-between text-sm font-inter border-b border-gray-200 pb-4">
          <span className="text-gray-600">
            ₹{stay.price.toLocaleString()} x {nights} {nights === 1 ? "night" : "nights"}
          </span>
          <span className="text-black font-medium">
            ₹{totalPrice.toLocaleString()}
          </span>
        </div>
        <div className="flex justify-between text-sm font-inter">
          <span className="text-gray-600">Total before taxes</span>
          <span className="text-black font-medium">
            ₹{totalBeforeTaxes.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PropertyBookingWidget;

