"use client";
import Image from "next/image";
import { Stay } from "@/constants/staysData";
import ShareIcon from "@/public/assets/icons/share";
import HeartIcon from "@/public/assets/icons/heart-icon";
import SuperhostFilledIcon from "@/public/assets/icons/superhost-filled-icon";
import RatingStars from "@/public/assets/icons/rating-stars";

interface PropertyHeaderProps {
  stay: Stay;
}

const PropertyHeader = ({ stay }: PropertyHeaderProps) => {
  return (
    <div className="sticky top-0 z-40 bg-white py-4 mb-[48px]">
      <div className="max-w-[1440px] mx-auto w-full flex flex-col justify-between gap-4">
        {/* Top section: Title, description, reviews */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col gap-3">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold font-inter text-black wrap-break-word">
              {stay.title}
            </h1>
        
          </div>
        </div>
        {/* Bottom section: Action buttons */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0 w-full justify-between">
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
          <button className="px-3 py-2 hover:bg-gray-100 rounded-full transition-colors flex items-center gap-2 text-[#264935] fill-[#264935]">
          <ShareIcon />
            <span className="text-[16px] font-medium font-inter underline underline-offset-4 ">share</span>
          </button>
          <button className="px-3 py-2 hover:bg-gray-100 rounded-full transition-colors flex items-center gap-2 text-[#264935] fill-[#264935]">
            <HeartIcon />
            <span className="text-[16px] font-medium font-inter underline underline-offset-4 text-charcoal-500">Save</span>
          </button>
        </div>  
        </div>
      </div>
    </div>
  );
};

export default PropertyHeader;

