import Image from "next/image";

const WhySutra = () => {
  const whySutra = [
    {
      number: 2,
      title: "Cities & Growing",
      image: "/assets/images/volchek-color.mp4.svg",
    },
    {
      number: 12,
      title: "Experts Behind the Scenes Designers, hosts",
      image: "/assets/images/pruzina-color.mp4.svg",
    },
    {
      number: 120,
      title: "Days Since We Began",
      image: "/assets/images/time-color.mp4.svg",
    },
    {
      number: 1000,
      title: "Happy Guests Hosted",
      image: "/assets/images/ball-color.mp4.svg",
    },
  ];
  return (
    <div className="w-full min-h-dvh bg-deep-green-dark py-24 px-18">
      <h1 className="text-2xl font-inter font-extralight leading-4.5 tracking-0 text-charcoal-light-gray">
        02 — Why Sutra Stays?
      </h1>
      <p className="pt-4.5 text-white text-5xl font-light font-inter">
        Where comfort meets reliability.
      </p>
      <div className="border-[0.5px] border-b-0 p-1.5 mt-6"></div>
      <div className="flex items-center justify-between w-full pt-10">
        <div className="w-2/5 flex flex-col justify-start gap-11">
          <p className="pt-10 text-white text-lg font-normal font-inter leading-7 tracking-[-0.2px]">
            <span className="font-semibold!">Our featured properties</span>{" "}
            bring together nature, comfort, and mindful design. From curated
            interiors to personalized services, every Sutra stay offers a
            seamless balance of warmth, privacy, and tranquility.
          </p>
          <div className="flex flex-col gap-5 w-full">
            <p className="text-charcoal-light-gray-4 text-sm font-semibold font-inter leading-4">
              Some Number About Us
            </p>

            <div className="grid grid-cols-2 gap-2">
              {whySutra.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl overflow-hidden bg-off-white-3 relative max-w-[246px] min-h-[153px] max-h-[153px]"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={115}
                    height={115}
                    className="absolute bottom-0 right-0"
                  />
                  <div className="py-2.5 px-4 relative">
                  <p className="text-black text-[40px] leading-10 font-bold font-plus-jakarta-sans">
                    {item.number}{item.number > 10 ? "+" : ""}
                  </p>
                  <p className="text-charcoal-light-gray-5 text-xs font-light font-inter leading-4 pt-2">
                    {item.title}
                  </p>
                  </div>ß
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-2/5">
          <Image
            src="/assets/images/section-why-rm.svg"
            alt="why-sutra"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default WhySutra;
