import React from "react";
import { FaGithub, FaLinkedin, FaLongArrowAltRight } from "react-icons/fa";
import { SiGmail, SiLeetcode } from "react-icons/si";
import Profile from "../assets/portfolio_profile_img.png";

const Home = () => {
  return (
    <section id="home" className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto lg:max-h-[calc(100vh-80px)] ">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* left section */}
          <div className="flex flex-col justify-center items-start order-1">
            <span className="text-violet-400 text-xl font-medium ">
              <span className="text-2xl">👋</span> Hello, I'm
            </span>
            <h1 className="font-space text-5xl lg:text-7xl mt-4">
              Kunal
              <br /> Sikarwar
            </h1>
            <h2 className="text-2xl font-semibold mt-4">
              <span className="text-violet-500">MERN</span> Stack Developer
            </h2>
            <p className="text-gray-400 mt-6 max-w-lg">
              I build modern, scalable and responsive web applications using
              MongoDB, Express.js, React.js and Node.js.
            </p>
            <div className="flex gap-4 mt-8 ">
              <a
                href="#projects"
                className="bg-linear-to-br from-indigo-500 to-violet-500 text-sm px-3 py-3 md:text-lg md:px-6 md:py-3 flex gap-1 items-center rounded-md font-medium hover:scale-105 shadow-lg hover:shadow-violet-500/20 transition-all duration-300  "
              >
                View Projects <FaLongArrowAltRight />
              </a>
              <a
                href="/Kunal_Resume.pdf"
                download="Kunal_Sikarwar_Resume.pdf"
                className="border border-violet-500/60 text-sm px-3 py-3 md:text-lg md:px-6 md:py-3 flex gap-1 items-center rounded-md hover:border-violet-500/30 hover:scale-105 hover:bg-violet-500/10 transition-all duration-300"
              >
                Download Resume <FaLongArrowAltRight />
              </a>
            </div>
            <div className="flex gap-6 mt-5  md:text-xl px-2">
              <a
                href="https://github.com/Kunal72004"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-violet-500 hover:scale-110 transition-all duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/kunal-sikarwar-057b67360"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-violet-500 hover:scale-110 transition-all duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://leetcode.com/u/Kunal072004/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-violet-500 hover:scale-110 transition-all duration-300"
              >
                <SiLeetcode />
              </a>

              <a
                href="mailto:kunal07sikarwar@gmail.com"
                target="_self"
                className="hover:text-violet-500 hover:scale-110 transition-all duration-300"
              >
                <SiGmail />
              </a>
            </div>
          </div>

          {/* right section */}
          <div className=" flex justify-center items-center order-2">
            <div className="overflow-hidden  w-75 md:w-95 lg:w-full ">
              <img
                className="w-full h-full object-contain"
                src={Profile}
                alt="profile img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
