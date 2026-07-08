import React, { useEffect, useState } from "react";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import Logo from "../assets/name_logo_transparent.png";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "DSA", id: "dsa" },
    { name: "Contact", id: "contact" },
  ];

  // Navbar Background Change
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Active Section
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full h-20 z-50 transition-all duration-300 ${
          scroll
            ? "bg-black/70 backdrop-blur-md border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center md:gap-1 lg:gap-3">
            <img
              src={Logo}
              alt="KS Logo"
              className="w-14 h-14 object-contain"
            />

            <h1 className="font-space text-sm md:text-lg lg:text-2xl font-semibold">
              Kunal Sikarwar
            </h1>
          </a>

          {/* Navigation */}
          <div className="hidden md:flex items-center md:gap-6 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`relative text-sm font-medium transition-all duration-300 ${
                  activeSection === link.id
                    ? "text-white"
                    : "text-gray-400 hover:text-violet-400"
                }`}
              >
                {link.name}

                {activeSection === link.id && (
                  <span
                    className="
                    absolute
                    left-0
                    -bottom-2
                    w-full
                    h-[2px]
                    bg-violet-500
                    rounded-full
                  "
                  ></span>
                )}
              </a>
            ))}
          </div>

          {/* Resume Button */}
          <a
            href="/Kunal_Resume.pdf"
            download="Kunal_Sikarwar_Resume.pdf"
            className="
            hidden
            md:flex
            items-center
            gap-2
            lg:px-5
            lg:py-2.5
            md:px-2
            md:py-2
            rounded-lg
            border
            border-violet-500/50
            hover:bg-violet-500/10
            transition-all
            duration-300
            text-sm
            font-medium
          "
          >
            Download Resume
            <FiDownload size={16} />
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>
      <div
        onClick={() => setMenuOpen(false)}
        className={`
    fixed
    inset-0
    top-20
    bg-black/60
    backdrop-blur-sm
    transition-all
    duration-300
    md:hidden
    z-40
    ${menuOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"}
  `}
      ></div>
      <div
        className={`
    fixed
    top-20
    right-0
    h-screen
    w-72
    bg-[#09090B]
    border-l
    border-white/10
    z-50
    md:hidden
    transform
    transition-transform
    duration-500
    ease-in-out
    ${menuOpen ? "translate-x-0" : "translate-x-full"}
  `}
      >
        <div className="flex flex-col mt-8 px-6 gap-3">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-3 rounded-xl text-gray-300 hover:bg-white/5 hover:text-violet-400 hover:translate-x-2`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Resume Button */}

        <div className="px-6 mt-8">
          <a
            href="/Kunal_Resume.pdf"
            download="Kunal_Sikarwar_Resume.pdf"
            onClick={() => setMenuOpen(false)}
            className="
      flex
      items-center
      justify-center
      gap-2
      py-3
      rounded-xl
      bg-gradient-to-r
      from-indigo-500
      to-violet-500
      hover:scale-105
      transition-all
      duration-300
      shadow-lg
      hover:shadow-violet-500/30
    "
          >
            Download Resume
            <FiDownload />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
