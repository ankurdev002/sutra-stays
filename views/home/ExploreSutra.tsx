import Image from "next/image";

const ExploreSutra = () => {
  const exploreSutra = [
    {
      image: "/assets/handpicks/handpick-1.svg",
      title: "Monsoon Specials",
    },
    {
      image: "/assets/handpicks/handpick-2.svg",
      title: "Winter Warmth",
    },
    {
      image: "/assets/handpicks/handpick-3.svg",
      title: "Couple Getaways",
    },
    {
      image: "/assets/handpicks/handpick-4.svg",
      title: "Festive Getaways",
    },
    {
      image: "/assets/handpicks/handpick-5.svg",
      title: "Weekend Escapes",
    },
    {
      image: "/assets/handpicks/handpick-6.svg",
      title: "Work-from-Nature",
    },
  ];
  return (
    <div className="w-full min-h-dvh bg-white py-24 px-4 lg:px-12">
      <h1 className="lg:text-2xl font-inter font-extralight leading-4.5 tracking-0 text-charcoal-light-gray">
        05 — Explore Our Retreats
      </h1>
      <p className="pt-4.5 text-black text-2xl lg:text-5xl font-light font-inter">
        Explore Handpicked Stays
      </p>
      <div className="pt-8 lg:pt-13 grid grid-cols-2 lg:grid-cols-3 gap-2">
        {exploreSutra.map((item) => (
          <div key={item.title} className="flex flex-col gap-3">
            <Image src={item.image} alt={item.title} width={423} height={317} className="rounded-2xl overflow-hidden"/>
              <p className="flex flex-col gap-1 text-black text-xl font-light font-inter w-fit">
                <span className="text-sm lg:text-xl">{item.title}</span>
                <progress
                  value={50}
                  max={100}
                  className="h-0.5 rounded-full w-1/2"
                />
              </p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreSutra;
