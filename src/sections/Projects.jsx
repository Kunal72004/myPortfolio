import React from "react";
import ProjectCard from "../components/ProjectCard";
import { FaLongArrowAltRight } from "react-icons/fa";
import Project1 from "../assets/Project_image/project1.png";
import Project2 from "../assets/Project_image/project2.png";
import Project3 from "../assets/Project_image/project3.png";

const Projects = () => {
  const projects = [
    {
      image: Project1,
      title: "Education Point – Full Stack EdTech Platform",
      description: "Developed a full-stack educational platform.",
      tech: [
        "React",
        "Tailwind",
        "JavaScript",
        "Redux",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Email",
        "OTP",
        "Razorpay",
        "Authentication",
        "Authorization",
        "JWT",
        "REST APIs",
      ],
      github: "https://github.com/Kunal72004/education_point",
      demo: "https://education-point-ten.vercel.app/",
    },

    {
      image: Project2,
      title: "Movie Explorer",
      description:
        "Developed a movie search application with rating-based filtering using React",
      tech: ["React", "Tailwind", "Redux","Javascript"],
      github: "https://github.com/Kunal72004/movie-explorer",
    },

    {
      image: Project3,
      title: "AI-Vocabulary-Builder",
      description:
        "Built an AI-based vocabulary tool using JavaScript and external APIs.",
      tech: ["HTML", "CSS", "Javascript"],
      github: "https://github.com/Kunal72004/Ai-vocabulary-builder-app",
    },
  ];
  return (
    <section id="projects" className="py-18 ">
      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-between items-center gap-5">
          <h1 className="font-bold text-2xl md:text-4xl sm:wrap-normal">
            Featured <span className="text-violet-500">Projects</span>
          </h1>
          <a target="_blank" href="https://github.com/Kunal72004" className="text-violet-500 flex items-center sm:gap-1  md:gap-2 text-sm hover:text-violet-400 hover:scale-105 transition-all duration-300">
            <span>View All Projects</span> <FaLongArrowAltRight />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-5 md:mt-7 mt-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              tech={project.tech}
              github={project.github}
              demo={project.demo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
