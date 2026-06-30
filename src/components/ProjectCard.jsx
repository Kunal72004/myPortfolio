import { div } from "framer-motion/client";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ image, title, description, tech, github, demo }) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-gray-700/20 p-4">
      <div className=" flex flex-col gap-2">
        {/* img */}
        <div className="overflow-hidden">
          <img
            className="w-full lg:h-40 object-cover hover:scale-105 transition-all duration-500"
            src={image}
            alt={title}
          />
        </div>
        {/* content */}
        <h3 className=" md:text-xl font-semibold">{title}</h3>
        <p className="  text-gray-400 leading-5 md:leading-7 ">{description}</p>
        {/* tags */}
        <div className="flex gap-3 mt-2">
          {tech.map((item, idx) => (
            <div key={idx} className="border border-gray-600/40 px-2 py-1 text-xs rounded-md rou bg-gray-700/20 hover:bg-gray-950">
              {item}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between mt-3 text-violet-500 ">
          <a className="flex items-center gap-2" href={demo}>
            Live Demo
            <FiExternalLink />
          </a>
          <a className="flex items-center gap-2" href={github}>
            GitHub
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
