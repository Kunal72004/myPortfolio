import React from "react";
import { FaHeart, FaArrowUp } from "react-icons/fa";
import Logo from "../assets/name_logo_transparent.png";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-6">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-5">

          {/* Left */}

          <div className="flex items-center gap-3">

            <img
              src={Logo}
              alt="logo"
              className="w-12"
            />

            <h2 className="font-semibold text-lg">
              Kunal Sikarwar
            </h2>

          </div>

          {/* Center */}

          <div className="text-gray-400 text-sm text-center">
            © 2026 Kunal Sikarwar. All rights reserved.
          </div>

          {/* Right */}

          <div className="flex items-center gap-2 text-sm text-gray-400">

            Built with

            <FaHeart className="text-red-500" />

            using React.js & Tailwind CSS

          </div>

          {/* Scroll Top */}

          <a
            href="#home"
            className="
            w-10
            h-10
            rounded-lg
            bg-violet-500/20
            flex
            items-center
            justify-center
            hover:bg-violet-500
            transition
            "
          >
            <FaArrowUp />
          </a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;