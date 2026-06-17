import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiDownload } from "react-icons/fi";
import Logo from "../assets/name_logo_transparent.png";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "DSA",
    "Contact",
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-20 z-50 transition-all duration-300 ${
        scroll
          ? "bg-black/70 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={Logo}
            alt="KS Logo"
            className="w-14 h-14 object-contain"
          />

          <h1 className="font-space text-lg font-semibold">
            Kunal Sikarwar
          </h1>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={`/${link.toLowerCase()}`}
              className={`relative text-sm font-medium transition-all duration-300 hover:text-violet-400 ${
                link === "Home"
                  ? "text-white after:absolute after:left-0 after:-bottom-2 after:w-full after:h-[2px] after:bg-violet-500"
                  : "text-gray-300"
              }`}
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Resume Button */}
        <button
          className="
          flex items-center gap-2
          px-5 py-2.5
          rounded-lg
          border border-violet-500/50
          hover:bg-violet-500/10
          transition-all duration-300
          text-sm font-medium
          "
        >
          Download Resume
          <FiDownload size={16} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
