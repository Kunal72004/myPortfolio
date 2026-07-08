import { div, h1 } from "framer-motion/client";
import React from "react";
import { FaDatabase, FaLaptopCode, FaServer, FaTools } from "react-icons/fa";

const Skills = () => {
  const skillsData = [
    {
      title: "Frontend",
      icon: <FaLaptopCode />,
      skills: ["React", "Next.js", "JavaScript", "Tailwind CSS", "Redux"],
    },
    {
      title: "Backend",
      icon: <FaServer />,
      skills: ["Node.js", "Express.js", "REST API", "JWT", "Socket.io"],
    },
    {
      title: "Database",
      icon: <FaDatabase />,
      skills: ["MongoDB", "MySQL", "Firebase"],
    },
    {
      title: "Tools",
      icon: <FaTools />,
      skills: ["Git & GitHub", "Docker", "Postman", "VS Code"],
    },
  ];

  return (
    <section id="skills" className=" py-10">
      <div className="max-7xl max-auto">
        <div className="border border-gray-600/40 bg-gray-700/20 rounded-md p-8 backdrop-blur-sm">
          <h2 className="text-4xl font-bold mb-8">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
             {skillsData.map((category, index) => (
              <div
                key={index}
                className={`
                  px-4
                  ${index !== skillsData.length - 1
                    ? "xl:border-r xl:border-white/10"
                    : ""} pb-5
                `}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-violet-400 text-lg">
                    {category.icon}
                  </span>

                  <h3 className="font-semibold text-lg">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center"
                    >
                      <span className="text-gray-300">
                        {skill}
                      </span>

                      {/* Dots */}
                      <div className="flex gap-1 justify-between">
                        {[1, 2, 3, 4, 5].map((dot) => (
                          <div
                            key={dot}
                            className={`
                              w-2.5
                              h-2.5
                              rounded-full
                              ${
                                dot <= 4
                                  ? "bg-violet-500"
                                  : "bg-zinc-700"
                              }
                            `}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
