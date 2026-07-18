import React, { useEffect, useRef, useState } from "react";
import { FiSend } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi";
import Robot from "../assets/robot.png";
import { motion } from "framer-motion";
import { askAI } from "../services/ai";
import ChatBubble from "../components/ChatBubble";


const AI = () => {
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const chatRef = useRef(null);

  const [messages, setMessages] = useState([
    {
      type: "ai",
      text: "Hi 👋 I'm Kunal's AI Assistant. Ask me anything about Kunal's skills, projects, experience or resume.",
    },
  ]);

  useEffect(() => {
    if (!chatRef.current) return;
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, typing]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const question = input;
    setMessages((prev) => [
      ...prev,
      {
        type: "user",
        text: question,
      },
    ]);
    setInput("");
    setTyping(true);

    const aiReply = await askAI(question);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          type: "ai",
          text: aiReply,
        },
      ]);
      setTyping(false);
    }, 3000);
  };
  return (
    <section id="ai" className="pb-7">
      <div className=" lg:col-span-3">
        <div className="flex flex-col gap-4 font-semibold">
          <div className="flex text-xl items-center gap-2 ">
            <HiSparkles className="text-violet-500 " />
            <h1>Ask My AI Assistant</h1>
          </div>
          <p className="text-gray-400 text-sm ">
            Ask anything about me, my projects, skills or experience.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto bg-zinc-900/60 border border-white/10 rounded-lg p-3 mt-3 ">
        <div className="borde grid grid-cols-1 lg:grid-cols-12 gap-5 items-center ">
          <div className="lg:col-span-9">
            {/* Input */}

            <div className="flex">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSend();
                  }
                }}
                type="text"
                placeholder="Ask anything..."
                className="
    md:flex-1
    flex-2
    bg-black/30
    border
    border-white/10
    rounded-l-xl
    px-3
    py-2
    md:px-5
    md:py-4
    outline-none
    focus:border-violet-500
    "
              />

              <button
                onClick={handleSend}
                className="
                px-3
    md:px-6
    bg-gradient-to-r
    from-indigo-500
    to-violet-500
    rounded-r-xl
    hover:opacity-90
    transition
    "
              >
                <FiSend className="text-lg" />
              </button>
            </div>

            {/* Buttons */}

            <div className="hidden md:flex flex-wrap gap-4 mt-5">
              <button
                onClick={() => setInput("Tell me about your projects")}
                className="px-5 py-3 rounded-xl border border-white/10 hover:border-violet-500 transition"
              >
                🚀 Projects
              </button>

              <button
                onClick={() => setInput("Tell me about your skills")}
                className="px-5 py-3 rounded-xl border border-white/10 hover:border-violet-500 transition"
              >
                💻 Skills
              </button>

              <button
                onClick={() => setInput("Tell me about your resume")}
                className="px-5 py-3 rounded-xl border border-white/10 hover:border-violet-500 transition"
              >
                📄 Resume
              </button>
              <button
                onClick={() => setInput("Tell me about your education")}
                className="px-5 py-3 rounded-xl border border-white/10 hover:border-violet-500 transition"
              >
                🎓 Education
              </button>
              <button
                onClick={() => setInput("Tell me about your DSA journey")}
                className="px-5 py-3 rounded-xl border border-white/10 hover:border-violet-500 transition"
              >
                📈 DSA
              </button>
              <button
                onClick={() => setInput("How can I contact you?")}
                className="px-5 py-3 rounded-xl border border-white/10 hover:border-violet-500 transition"
              >
                📞 Contact
              </button>
            </div>
            <div
              ref={chatRef}
              className="bg-black/20 border border-white/10 p-5 mt-8 rounded-xl h-72 overflow-x-hidden
space-y-6
scrollbar-thumb-zinc-800 "
            >
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{
                    opacity: 0,
                    x: msg.type === "user" ? 60 : -60,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 20,
                  }}
                >
                  <ChatBubble message={msg} />
                </motion.div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="bg-zinc-800 border border-white/10 px-5 py-4 rounded-xl flex gap-2">
                    {[0, 1, 2].map((dot) => (
                      <motion.span
                        key={dot}
                        className="w-2.5 h-2.5 rounded-full bg-violet-400"
                        animate={{
                          y: [0, -5, 0],
                          opacity: [0.4, 1, 0.4],
                        }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          delay: dot * 0.2,
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* right */}
          <div className=" lg:col-span-3">
            <div className="lg:col-span-2 flex justify-center">
              <motion.img
                src={Robot}
                alt="robot"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="w-40 md:w-64 md:h-64 object-fill"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI;
``;
