import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FiCopy } from "react-icons/fi";

const ChatBubble = ({ message }) => {
  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div
      className={`flex ${
        message.type === "user" ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[95%]
sm:max-w-[90%]
lg:max-w-[80%]
wrap-break-word
overflow-hidden rounded-2xl px-5 py-4 text-sm md:text-base shadow-lg ${
          message.type === "user"
            ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white"
            : "bg-zinc-800 border border-white/10 text-gray-100"
        }`}
      >
        {message.type === "user" ? (
          <p className="leading-7 whitespace-pre-wrap">{message.text}</p>
        ) : (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ children }) => (
                <h1 className="text-2xl md:text-3xl font-bold mt-4 mb-3 text-white">
                  {children}
                </h1>
              ),

              h2: ({ children }) => (
                <h2 className="text-xl md:text-2xl font-semibold mt-4 mb-2 text-white">
                  {children}
                </h2>
              ),

              h3: ({ children }) => (
                <h3 className="text-lg md:text-xl font-semibold mt-3 mb-2 text-white">
                  {children}
                </h3>
              ),

              p: ({ children }) => (
                <p className="leading-7 mb-3 text-gray-200">{children}</p>
              ),

              ul: ({ children }) => (
                <ul className="list-disc ml-6 mb-3 space-y-2">{children}</ul>
              ),

              ol: ({ children }) => (
                <ol className="list-decimal ml-6 mb-3 space-y-2">{children}</ol>
              ),

              li: ({ children }) => <li className="leading-7">{children}</li>,

              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-violet-400 pl-4 italic my-3 text-gray-300">
                  {children}
                </blockquote>
              ),

              a: ({ href, children }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-violet-400 hover:text-violet-300 underline break-all"
                >
                  {children}
                </a>
              ),

              hr: () => <hr className="my-5 border-gray-700" />,

              table: ({ children }) => (
                <div className="overflow-x-auto my-4">
                  <table className="w-full border-collapse border border-gray-700 text-sm">
                    {children}
                  </table>
                </div>
              ),

              thead: ({ children }) => (
                <thead className="bg-zinc-700">{children}</thead>
              ),

              th: ({ children }) => (
                <th className="border border-gray-700 px-3 py-2 text-left font-semibold">
                  {children}
                </th>
              ),

              td: ({ children }) => (
                <td className="border border-gray-700 px-3 py-2">{children}</td>
              ),

              code({ inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                const codeString = String(children).replace(/\n$/, "");

                if (!inline && match) {
                  return (
                    <div className="relative my-4 rounded-xl overflow-hidden border border-gray-700">
                      <div className="flex items-center justify-between bg-zinc-900 px-4 py-2 text-xs text-gray-400">
                        <span className="uppercase">{match[1]}</span>
                        <button
                          onClick={() => copyCode(codeString)}
                          className="flex items-center gap-1 hover:text-white transition"
                        >
                          <FiCopy size={14} />
                          Copy
                        </button>
                      </div>

                      <SyntaxHighlighter
                        style={oneDark}
                        language={match[1]}
                        PreTag="div"
                        customStyle={{
                          margin: 0,
                          padding: "1rem",
                          background: "#111827",
                          fontSize: "0.9rem",
                        }}
                        {...props}
                      >
                        {codeString}
                      </SyntaxHighlighter>
                    </div>
                  );
                }

                return (
                  <code className="bg-zinc-700 px-1.5 py-0.5 rounded text-violet-300 text-sm">
                    {children}
                  </code>
                );
              },
            }}
          >
            {message.text}
          </ReactMarkdown>
        )}
      </div>
    </div>
  );
};

export default ChatBubble;
