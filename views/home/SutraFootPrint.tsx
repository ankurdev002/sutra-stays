import Image from "next/image";

const SutraFootPrint = () => {
  const sutraFootprints = [
    {
      number: 2,
      title: "Sutra Delhi",
      desc: "Sutra Spaces",
    },
    {
      number: 2,
      title: "Sutra Mumbai",
      desc: "Sutra Spaces",
    },
  ];
  return (
    <div className="w-full min-h-dvh bg-white py-24 px-12">
      <h1 className="text-2xl font-inter font-extralight leading-4.5 tracking-0 text-charcoal-light-gray">
        03 — A Trail of Thoughtful Stays
      </h1>
      <p className="pt-4.5 text-black text-5xl font-light font-inter">
        The Sutra Footprint
      </p>
      <div className="flex items-start justify-between w-full pt-10">
        <div className="w-2/5 flex flex-col justify-start gap-11">
          <p className="text-black text-lg font-semibold font-inter leading-7 tracking-[-0.2px]">
            <span className="font-semibold!">Our featured properties</span>{" "}
            bring together nature, comfort, and mindful design. From curated
            interiors to personalized services, every Sutra stay offers a
            seamless balance of warmth, privacy, and tranquility.
          </p>
          <div className="flex flex-col gap-5 w-full">
            <p className="text-charcoal-light-gray-4 text-sm font-semibold font-inter leading-4">
              Some Number About Us
            </p>

            <div className="grid grid-cols-2 gap-3.5">
              {sutraFootprints.map((item) => (
                <div key={item.title} className="flex flex-col gap-3.5">
                  <div className="rounded-xl overflow-hidden bg-off-white-3 w-fit">
                    <p className="text-black font-medium leading-5 -tracking-[0.48px] font-inter py-4 px-5.5">
                      {item.desc}
                    </p>
                  </div>
                  <div className="rounded-3xl overflow-hidden bg-off-white-3 max-w-[246px] h-fit py-3.5 pl-5.5 pr-2">
                    <div>
                      <p className="text-black text-[40px] leading-10 font-bold font-plus-jakarta-sans">
                        {item.number}+
                      </p>
                      <p className="text-charcoal-light-gray-5 text-xs font-light font-inter leading-4 pt-2">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-2/5">
          <Image
            src="/assets/images/section-map.svg"
            alt="why-sutra"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default SutraFootPrint;
