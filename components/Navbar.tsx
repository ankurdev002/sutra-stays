import Image from "next/image";
import Button from "./Button";
import navlinks from "@/constants/navlinks";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-50 w-full h-23 bg-[#00000066] flex justify-between items-center px-10 drop-shadow-md">
      <div>
        <Image
          src="/assets/logo/nav-logo.svg"
          alt="logo"
          width={100}
          height={100}
        />
      </div>
      <div className="flex-1 flex gap-9.5 items-center justify-center">
        {
          navlinks.map((link) => (
            <Link href={link.href} key={link.label} className="text-bone-white text-sm font-medium font-inter px-4">
              <span className="text-bone-white text-sm font-medium font-inter hover:text-deep-green transition-all duration-300">
                {link.label}
              </span>
            </Link>
          ))
        }
      </div>
      <div className="flex gap-2 items-center justify-center">
        <Button variant="off-white" className="rounded-full text-black border-0" label="Book Now" />
        <Button variant="transparent" className="rounded-full" label="EN" icon={<Image src="/assets/icons/down-arrow.svg" alt="en" width={16} height={16} />} />
      </div>
    </div>
  );
};

export default Navbar;
