import { FaRegEnvelopeOpen } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FiCode, FiCpu, FiServer } from "react-icons/fi";

const About = () => {
  const services = [
    {
      title: "Frontend Development",
      description:
        "Creating responsive and interactive user interfaces using React and Tailwind CSS.",
    },
    {
      title: "Backend Development",
      description: "Building scalable REST APIs using Node.js and Express.js.",
    },
    {
      title: "Database Management",
      description:
        "Designing efficient MongoDB schemas and handling data operations.",
    },
    {
      title: "DSA & Problem Solving",
      description:
        "Strong understanding of algorithms, data structures and coding challenges.",
    },
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* left */}
          <div className="border border-gray-500">
            <div>
              <h2 className="text-4xl font-bold">
                About <span className="text-violet-500 ">Me</span>
              </h2>
              <div className="border-2 rounded-lg mt-2 border-violet-500 w-10"></div>
            </div>

            <p className="text-gray-400 mt-6 max-w-lg">
              {" "}
              I'm a passionate MERN Stack Developer with a strong foundation in
              Data Structures and Algorithms. I enjoy building scalable web
              applications, solving real-world problems and continuously
              learning new technologies.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-4 ">
              <div className="flex border rounded-md gap-4 items-center justify-center border-gray-600/40 py-2 bg-gray-700/20 hover:bg-gray-950">
                <FaLocationDot />
                <div className="flex-col ">
                  <p className="text-gray-400">Location</p>
                  <p className="font-semibold">India</p>
                </div>
              </div>
              <div className="flex border rounded-md gap-4 items-center justify-center border-gray-600/40 py-2 bg-gray-700/20 hover:bg-gray-950">
                <FaRegEnvelopeOpen />
                <div className="flex-col ">
                  <p className="text-gray-400">Experience</p>
                  <p className="font-semibold">Fresher</p>
                </div>
              </div>
              <div className="flex border rounded-md gap-4 items-center justify-center border-gray-600/40 py-2 bg-gray-700/20 hover:bg-gray-950">
                🟢
                <div className="flex-col ">
                  <p className="text-gray-400">Availability</p>
                  <p className="font-semibold text-sm">Open To Work</p>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="border border-gray-600/40 bg-gray-700/20 p-5 rounded-lg shadow-lg shadow-violet-500/20 ">
            <h3 className="font-semibold text-xl">What I Do</h3>
            <div className="flex flex-col mt-4 gap-3 ">
              <div className="flex gap-4 items-center ">
                <div className="bg-gray-800 p-2 rounded-lg hover:bg-zinc-800 transition-all duration-300">
                  <FiCode />
                </div>
                <div>
                  <h4 className=" font-semibold">Web Development</h4>
                  <p className="text-gray-400 text-sm">
                    Building responsive and scalable web applications.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-center ">
                <div className="bg-gray-800 p-2 rounded-lg hover:bg-zinc-800 transition-all duration-300">
                  <FiServer />
                </div>
                <div>
                  <h4 className=" font-semibold">Backend Development</h4>
                  <p className="text-gray-400 text-sm">
                      Creating robust REST APIs and server side logic.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-center ">
                <div className="bg-gray-800 p-2 rounded-lg hover:bg-zinc-800 transition-all duration-300">
                  <FiCpu />
                </div>
                <div>
                  <h4 className=" font-semibold">AI Integeration</h4>
                  <p className="text-gray-400 text-sm">
                    Integrating AI Models automation to build web applications.
                  </p>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
