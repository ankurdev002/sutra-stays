"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const SutraClients = () => {
  const clients = [
    {
      name: "Anjali Mehta",
      location: "Udaipur, Rajasthan",
      review:
        "My stay at Sutra Stays felt incredibly calming. The space was beautifully designed, quiet, and very thoughtfully maintained. I loved how personal and warm everything felt—it genuinely gave me the comfort of a home away from home.",
      image: "/assets/images/female.png",
      video: "/assets/reviews/r1.mp4",
    },
  
    {
      name: "Smita Kulkarni",
      location: "Pune, Maharashtra",
      review:
        "Sutra Stays exceeded my expectations. The ambiance is peaceful, the interiors are elegant, and every small detail feels intentional. It’s the kind of place where you instantly relax and feel taken care of.",
      image: "/assets/images/female.png",
      video: "/assets/reviews/r2.mp4",
    },
  
    {
      name: "Riya & Friends",
      location: "Delhi NCR",
      review:
        "We stayed at Sutra Stays with friends and absolutely loved the experience. The rooms were spacious, the atmosphere was serene, and it felt perfect for spending quality time together. It’s stylish yet very comfortable.",
      image: "/assets/images/female.png",
      video: "/assets/reviews/r3.mp4",
    },
  
    {
      name: "Rajiv Malhotra",
      location: "Bengaluru, Karnataka",
      review:
        "Sutra Stays offers a perfect balance of comfort and elegance. The calm environment helped me unwind after long workdays, and the attention to detail truly stood out. I would definitely choose this place again.",
      image: "/assets/images/male.png",
      video: "/assets/reviews/r4.mp4",
    },
  
    {
      name: "The Verma Family",
      location: "Gurugram, Haryana",
      review:
        "Our family had a wonderful stay at Sutra Stays. The space felt safe, warm, and welcoming for both adults and children. Everything was well-organized, peaceful, and designed to make families feel comfortable.",
      image: "/assets/images/family.png",
      video: "/assets/reviews/r5.mp4",
    },
  
    {
      name: "Neha Saxena",
      location: "Indore, Madhya Pradesh",
      review:
        "Staying at Sutra Stays was a delightful experience. The serene setting, tasteful decor, and homely vibe made my trip very special. You can truly feel the care and thought behind the place.",
      image: "/assets/images/female.png",
      video: "/assets/reviews/r6.mp4",
    },
  ];
  

  const [currentIndex, setCurrentIndex] = useState(0);

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current && videoRef?.current?.paused) {
      videoRef?.current?.play();
      setIsPlaying(true);
    } else {
      videoRef?.current?.pause();
      setIsPlaying(false);
    }
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? clients.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === clients.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentClient = clients[currentIndex];

  return (
    <div className="w-full min-h-dvh bg-off-white py-24 px-4 lg:px-20">
      <h1 className="lg:text-2xl font-inter font-extralight leading-4.5 tracking-0 text-charcoal-light-gray">
        04 — What Our Clients Say
      </h1>
      <p className="pt-4.5 text-black text-2xl lg:text-5xl font-light font-inter">
        In Their Words
      </p>
      <div className="flex flex-col lg:flex-row items-start justify-center pt-8">
        <div className="flex flex-col lg:flex-row justify-start gap-10 items-center">
          <div className="relative w-fit">
            <video
              ref={videoRef}
              key={currentIndex}
              className="rounded-3xl overflow-hidden w-[320px] h-[220px] object-cover lg:w-[400px] lg:h-[560px] lg:object-fill"
              // style={{ width: "400px", height: "560px", objectFit: "fill" }}
              // muted
            >
              <source src={currentClient.video} type="video/mp4" />
              <track
                src={currentClient.video}
                kind="subtitles"
                srcLang="en"
                label="English subtitles"
              />
            </video>
            {/* Custom Play/Pause Button */}
            <button
              onClick={togglePlay}
              className="absolute top-1/2 left-1/2 w-25 h-25 rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 bg-white text-black text-4xl"
            >
              {isPlaying ? (
                "❚❚"
              ) : (
                <Image
                  src="/assets/icons/play.svg"
                  alt="play"
                  width={25}
                  height={25}
                />
              )}{" "}
              {/* Play icon (►) or Pause icon (❚❚) */}
            </button>
          </div>
          {/* carosuel */}
          <div className="w-full lg:w-2/4 flex flex-col justify-start gap-16 relative">
            <div className="flex items-start gap-9">
              <Image
                src="/assets/images/quote.svg"
                alt={currentClient.name}
                width={42}
                height={38}
                className="hidden lg:block"
              />
              <div className="flex flex-col gap-4 lg:gap-16 flex-1">
                <div className="overflow-hidden">
                  <div
                    key={currentIndex}
                    className="transition-all duration-500 ease-in-out animate-fade-in"
                  >
                    <p className="text-black/60 text-base lg:text-2xl font-semibold font-plus-jakarta-sans lg:leading-7">
                      {currentClient.review}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4 overflow-hidden">
                    <div
                      key={`${currentIndex}-info`}
                      className="flex items-center gap-4 transition-all duration-500 ease-in-out animate-fade-in"
                    >
                      <Image
                        src={currentClient.image}
                        alt={currentClient.name}
                        width={54}
                        height={54}
                        className="w-14 h-14 object-cover rounded-full"
                      />
                      <div className="flex flex-col">
                        <p className="text-black text-lg font-semibold font-inter leading-7 -tracking-[-0.4px]">
                          {currentClient.name}
                        </p>
                        <p className="text-charcoal-light-gray-5 text-sm font-light font-inter leading-3 -tracking-[-0.3px]">
                          {currentClient.location}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-10">
                      <button
                        onClick={goToPrevious}
                        className="cursor-pointer hover:opacity-70 transition-opacity"
                        aria-label="Previous review"
                      >
                        <Image
                          src="/assets/icons/arrow-right.svg"
                          alt="arrow-left"
                          width={22}
                          height={15}
                          className="rotate-180"
                        />
                      </button>
                      <button
                        onClick={goToNext}
                        className="cursor-pointer hover:opacity-70 transition-opacity"
                        aria-label="Next review"
                      >
                        <Image
                          src="/assets/icons/arrow-right.svg"
                          alt="arrow-right"
                          width={22}
                          height={15}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SutraClients;
