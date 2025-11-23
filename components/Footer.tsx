import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const footerLinks = [
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Services",
      href: "#stays",
    },
    {
      label: "Terms & Conditions",
      href: "#terms-and-conditions",
    },
    {
      label: "Privacy Policy",
      href: "#privacy-policy",
    },
  ];
  return (
    <div className="w-full h-[300px] bg-deep-green-dark px-15 py-19 grid grid-cols-3 items-center">
      <div className="space-y-2.5">
        <Image
          src="/assets/logo/footer-logo.svg"
          alt="logo"
          width={135}
          height={70}
        />
        <p className="text-bone-white text-sm font-medium font-inter leading-6 tracking-[2px]">
          Sutra Stays 2025. All rights reserved
        </p>
        <p className="text-bone-white text-sm font-medium font-inter leading-5 tracking-[2px]">
          Prefer a personal touch? Just write to us.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        {footerLinks.map((link) => (
          <Link
            href={link.href}
            key={link.label}
            className="text-bone-white text-sm font-medium font-inter leading-6 tracking-[2px]"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-bone-white text-sm font-medium font-inter leading-6 tracking-[2px]">
          CONTACT
        </p>
        <p className="text-bone-white text-sm font-medium font-inter leading-6 tracking-[2px]">
          +91 XXXXXXXXXX
        </p>
        <p className="text-bone-white text-sm font-medium font-inter leading-6 tracking-[2px]">
          E: Reservations.sutrastays@gmail.com
        </p>
        <Image
          src="/assets/icons/insta.svg"
          alt="instagram"
          width={30}
          height={30}
        />
      </div>
    </div>
  );
};

export default Footer;
