import React from "react";
import { FaGithub, FaLinkedin, FaLongArrowAltRight } from "react-icons/fa";
import { SiGmail, SiLeetcode } from "react-icons/si";
import Profile from '../assets/portfolio_profile_img.png'

const Home = () => {
  return (
    <section id="home" className="pt-20 max-h-screen">
      <div className="max-w-7xl mx-auto h-[calc(100vh-80px)] border border-amber-300">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full ">
          {/* left section */}
          <div className="border border-blue-700 flex flex-col justify-center">
            <span className="text-violet-400 text-xl font-medium ">
              <span className="text-2xl">👋</span> Hello, I'm
            </span>
            <h1 className="font-space text-6xl mt-4">
              Kunal
              <br /> Sikarwar
            </h1>
            <h2 className="text-2xl font-medium mt-4">
              <span className="text-violet-500">MERN</span> Stack Developer
            </h2>
            <p className="text-gray-400 mt-6 max-w-md">
              I build modern, scalable and responsive web applications using
              MongoDB, Express.js, React.js and Node.js.
            </p>
            <div className="flex gap-4 mt-8 ">
              <button className="bg-linear-to-br from-indigo-500 to-violet-500 px-6 py-3 flex gap-1 items-center rounded-md font-medium hover:scale-105 transition-all duration-300">
                View Projects <FaLongArrowAltRight />
              </button>
              <button className="border border-violet-500/60 px-6 py-3 flex gap-1 items-center rounded-md hover:border-violet-500/30 hover:scale-105 transition-all duration-300">
                Download Resume <FaLongArrowAltRight />
              </button>
            </div>
            <div className="flex gap-6 mt-5 text-xl px-2">
              <a href="https://github.com/Kunal72004">
                <FaGithub />
              </a>
              <a href="www.linkedin.com/in/kunal-sikarwar-057b67360">
                <FaLinkedin />
              </a>
              <a href="https://leetcode.com/u/Kunal072004/">
                <SiLeetcode />
              </a>
              <a href="">
                <SiGmail />
              </a>
            </div>
          </div>
          {/* right section */}
          <div className="border border-red-700 flex justify-center items-center">
            <div className="overflow-hidden border border-rose-700">
              <img className="w-full h-full object-contain" src={Profile} alt="profile img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

{
  /* <div className="p-4 flex flex-col gap-2 mt-10 font-light max-w-fit">
        <div className="text-xl text-violet-500">Hi, I'm</div>
        <div className="text-4xl font-bold font-space">Kunal Sikarwar</div>
        <div className="text-xl"> <span className="text-violet-500 ">MERN</span> Stack Developer</div>
        <div className="text-xs">
          Third-year B.Tech Computer Science Engineering student with strong
          interest in software development and core Computer Science. Skilled in
          Java, DSA, and Web Development (MERN) , seeking real-world
          opportunities.
        </div>
        <div className="flex gap-4">
          <button>View My Projects</button>
          <button>Contact Me</button>
        </div>

        <div>social icons</div>
      </div>
      <div className="bg-yellow-700 ">kunal</div> */
}
