import Button from "@/components/Button";
import Card from "@/components/Card";
import Image from "next/image";

const Featured = () => {
  const featuredStays = [
    {
      title: "Sutra Stays® — The Silver Oaks Cottage",
      location: "Bhimtal, Uttarakhand",
      rating: 4.8,
      reviews: 100,
      price: 1000,
      image: "/assets/images/grid-img.svg",
    },
    {
      title: "Sutra Stays® — The Silver Oaks Cottage",
      location: "Bhimtal, Uttarakhand",
      rating: 4.8,
      reviews: 100,
      price: 1000,
      image: "/assets/images/grid-img.svg",
    },
    {
      title: "Sutra Stays® — The Silver Oaks Cottage",
      location: "Bhimtal, Uttarakhand",
      rating: 4.8,
      reviews: 100,
      price: 1000,
      image: "/assets/images/grid-img.svg",
    },
    {
      title: "Sutra Stays® — The Silver Oaks Cottage",
      location: "Bhimtal, Uttarakhand",
      rating: 4.8,
      reviews: 100,
      price: 1000,
      image: "/assets/images/grid-img.svg",
    },
    {
      title: "Sutra Stays® — The Silver Oaks Cottage",
      location: "Bhimtal, Uttarakhand",
      rating: 4.8,
      reviews: 100,
      price: 1000,
      image: "/assets/images/grid-img.svg",
    },
    {
      title: "Sutra Stays® — The Silver Oaks Cottage",
      location: "Bhimtal, Uttarakhand",
      rating: 4.8,
      reviews: 100,
      price: 1000,
      image: "/assets/images/grid-img.svg",
    },
  ];
  return (
    <div className="w-full min-h-dvh bg-white py-24 px-12 space-y-8">
      <h1 className="text-2xl font-inter font-extralight leading-4.5 tracking-0 text-charcoal-light-gray">
        01 — Featured Stays
      </h1>

      <div className="flex items-center justify-center">
        <h1 className="relative w-fit text-[100px] font-inter font-light leading-30 uppercase text-black text-center">
          Serene & Premium
          <Image
            src="/assets/images/leaf.svg"
            alt="wave"
            width={75}
            height={75}
            className="absolute bottom-0 -right-10"
          />
        </h1>
      </div>
      <p className="text-charcoal-light-gray-2 text-sm font-inter font-extralight leading-7 -tracking-[.2px] text-center px-10">
        Our featured properties bring together nature, comfort, and mindful
        design. From curated interiors to personalized services, every Sutra
        stay offers a seamless balance of warmth, privacy, and tranquility.
      </p>
      <div className="flex justify-center">
        <div className="max-w-xs py-3 px-5 bg-charcoal-black-2 rounded-[20px] flex items-center gap-1.5">
          <Image
            src="/assets/icons/icon-feature.svg"
            alt="featured"
            width={53}
            height={48}
          />
          <Button
            variant="off-white-2"
            label="Leisur Stays"
            className="px-3.75! py-2.5! text-black rounded-full text-xs leading-7 font-inter font-weight-medium"
          />
          <Button
            variant="transparent"
            label="Classic Stays"
            className="px-3.75! py-2.5! rounded-full text-xs leading-7 font-inter font-weight-medium"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center mx-auto">
        {featuredStays.map((stay, index) => (
          <Card
            key={index.toString()}
            title={stay.title}
            location={stay.location}
            rating={stay.rating}
            reviews={stay.reviews}
            price={stay.price}
            image={stay.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Featured;
