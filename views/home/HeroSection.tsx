import Button from "@/components/Button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div
      className="w-full min-h-dvh bg-cover bg-center bg-no-repeat py-24 flex items-end px-12"
      style={{ backgroundImage: "url('/assets/backgrounds/main-bg.svg')" }}
    >
      <div className=" realtive w-full h-full flex items-end justify-between">
        {/* left */}
        <div className="space-y-8 w-3/5">
          <h1 className="text-white text-8xl font-medium font-lostar leading-28 uppercase text-start w-2/3">
            Stay. Belong. Be
          </h1>
          <div className="flex items-center gap-8">
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
            <p className="text-white text-4xl font-medium font-inter leading-10 capitalize">
              Every stay is a Sutra a story of peace, presence, and pure nature.
            </p>
          </div>
          <hr className="w-3/4" />
          <div className="flex items-center gap-3.5">
            <div className="rounded-full bg-off-white p-1.5 w-fit flex items-center gap-1.5">
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
            <div className="flex items-center gap-3.5">
              <p className="text-[#FFFFFFB2] text-sm font-medium font-inter leading-3 uppercase -tracking-[.2px]">
                Gold verified
              </p>
              <p className="text-WHITE text-sm font-medium font-inter leading-3">Our Customers love to work with us, 40 Reviews</p>
            </div>
          </div>
        </div>
        {/* right */}
        <div>
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
