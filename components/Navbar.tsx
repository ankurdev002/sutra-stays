"use client";
import Image from "next/image";
import Button from "./Button";
import navlinks from "@/constants/navlinks";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const languages = [
  { code: "en", label: "EN", name: "English" },
  { code: "hi", label: "HI", name: "हिंदी" },
  { code: "es", label: "ES", name: "Español" },
  { code: "fr", label: "FR", name: "Français" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const languageDropdownRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close language dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        languageDropdownRef.current &&
        !languageDropdownRef.current.contains(event.target as Node)
      ) {
        setIsLanguageDropdownOpen(false);
      }
    };

    if (isLanguageDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLanguageDropdownOpen]);

  // Handle click outside to close sidebar drawer
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest("[data-menu-button]")
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Smooth scroll handler for anchor links
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.substring(1); // Remove the # symbol
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        // Fallback: try to find element with data-section matching the id
        const sectionElement = document.querySelector(`[data-section="${id}"]`);
        if (sectionElement) {
          sectionElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
      // Close sidebar after navigation
      setIsMenuOpen(false);
    }
  };

  // Book Now handler - scrolls to stays section
  const handleBookNow = () => {
    const staysSection = document.getElementById("stays");
    if (staysSection) {
      staysSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      // Fallback: try to find element with data-section="stays"
      const staysElement = document.querySelector('[data-section="stays"]');
      if (staysElement) {
        staysElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
    // Close sidebar after navigation
    setIsMenuOpen(false);
  };

  // Language selection handler
  const handleLanguageSelect = (language: (typeof languages)[0]) => {
    setSelectedLanguage(language);
    setIsLanguageDropdownOpen(false);
    // Here you can add logic to change the app language
    // For example: router.push(router.pathname, router.asPath, { locale: language.code });
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-23 bg-[#00000066] flex justify-between items-center px-4 lg:px-10 drop-shadow-md">
      <Link href="/">
        <Image
          src="/assets/logo/nav-logo.svg"
          alt="logo"
          width={100}
          height={100}
          className="cursor-pointer"
        />
      </Link>
      <div className="lg:hidden">
        <Image
          src="/assets/icons/ham.svg"
          alt="menu"
          width={40}
          height={40}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="cursor-pointer"
          data-menu-button
        />
      </div>
      <div className="hidden lg:flex flex-1 gap-9.5 items-center justify-center">
        {navlinks.map((link) => (
          <Link
            href={link.href}
            key={link.label}
            onClick={(e) => handleSmoothScroll(e, link.href)}
            className="text-bone-white text-sm font-medium font-inter px-4 hover:text-deep-green transition-all duration-300"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="hidden lg:flex gap-2 items-center justify-center">
        <Button
          variant="off-white"
          className="rounded-full text-black border-0"
          label="Book Now"
          method={handleBookNow}
        />
        <div className="relative" ref={languageDropdownRef}>
          <Button
            variant="charcoal-black"
            className="rounded-full text-white border-[0.84px] border-white/40 bg-black!"
            label={selectedLanguage.label}
            method={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
            icon={
              <Image
                src="/assets/icons/down-arrow.svg"
                alt="language selector"
                width={16}
                height={16}
                className={`transition-transform duration-200 brightness-0 invert ${
                  isLanguageDropdownOpen ? "rotate-180" : ""
                }`}
              />
            }
          />
          {isLanguageDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-charcoal-black rounded-lg shadow-lg border border-deep-green/20 overflow-hidden animate-fade-in">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageSelect(language)}
                  className={`w-full px-4 py-3 text-left text-sm font-inter transition-colors duration-200 ${
                    selectedLanguage.code === language.code
                      ? "bg-deep-green text-bone-white"
                      : "text-bone-white hover:bg-deep-green/50"
                  }`}
                >
                  <div className="flex items-center justify-between ">
                    <span>{language.name}</span>
                    <span className="text-xs opacity-75">{language.label}</span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Sidebar Drawer Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 h-screen bg-black/50 z-999 lg:hidden transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Sidebar Drawer */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-screen w-80 bg-deep-green z-999 lg:hidden transform transition-transform duration-300 ease-in-out shadow-2xl ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header with close button */}
          <div className="flex justify-between items-center p-6 border-b border-deep-green/20">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <Image
                src="/assets/logo/nav-logo.svg"
                alt="logo"
                width={100}
                height={100}
                className="cursor-pointer"
              />
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-bone-white hover:text-white transition-colors duration-200 p-2"
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-6 py-8 space-y-4">
            {navlinks.map((link) => (
              <Link
                href={link.href}
                key={link.label}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="block text-bone-white text-base font-medium font-inter py-3 px-4 hover:text-white hover:bg-deep-green/10 rounded-lg transition-all duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Footer with Book Now and Language Selector */}
          <div className="p-6 border-t border-deep-green/20 space-y-4">
            <Button
              variant="off-white"
              className="rounded-full text-black border-0 w-full"
              label="Book Now"
              method={handleBookNow}
            />
            <div className="relative" ref={languageDropdownRef}>
              <Button
                variant="charcoal-black"
                className="rounded-full text-white border-[0.84px] border-white/40 bg-black! w-full"
                label={selectedLanguage.label}
                method={() =>
                  setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
                }
                icon={
                  <Image
                    src="/assets/icons/down-arrow.svg"
                    alt="language selector"
                    width={16}
                    height={16}
                    className={`transition-transform duration-200 brightness-0 invert ${
                      isLanguageDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                }
              />
              {isLanguageDropdownOpen && (
                <div className="absolute bottom-full left-0 right-0 mb-2 w-full bg-charcoal-black rounded-lg shadow-lg border border-deep-green/20 overflow-hidden animate-fade-in">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => handleLanguageSelect(language)}
                      className={`w-full px-4 py-3 text-left text-sm font-inter transition-colors duration-200 ${
                        selectedLanguage.code === language.code
                          ? "bg-deep-green text-bone-white"
                          : "text-bone-white hover:bg-deep-green/50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{language.name}</span>
                        <span className="text-xs opacity-75">
                          {language.label}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
