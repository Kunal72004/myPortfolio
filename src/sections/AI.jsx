import React from 'react'
import { FiSend } from 'react-icons/fi'
import { HiSparkles } from 'react-icons/hi'
import Robot from '../assets/robot.png'
const AI = () => {
  return (
    <section id='ai' className='pb-7'>
      <div className='max-w-7xl mx-auto bg-zinc-900/60 border border-white/10 rounded-lg p-3'>
        <div className='borde grid grid-cols-1 lg:grid-cols-12 gap-5'>
          {/* left */}
          <div className='border border-blue-600 lg:col-span-3'>
            <div className='flex flex-col gap-4 font-semibold'>
              <div className='flex text-xl items-center gap-2 '>
                <HiSparkles className='text-violet-500 ' />
                <h1>Ask My AI Assistant</h1>
              </div>
              <p className="text-gray-400 text-sm ">
                Ask anything about me,
                my projects,
                skills or experience.
              </p>
              
            </div>
          </div>
          {/* center */}
          <div className='border border-yellow-600 lg:col-span-7'>
           {/* Input */}

              <div className="flex">

                <input
                  type="text"
                  placeholder="Ask anything..."
                  className="
                  flex-1
                  bg-black/30
                  border border-white/10
                  rounded-l-xl
                  px-5
                  py-4
                  outline-none
                  "
                />

                <button
                  className="
                  px-6
                  bg-gradient-to-r
                  from-indigo-500
                  to-violet-500
                  rounded-r-xl
                  "
                >
                  <FiSend size={20} />
                </button>

              </div>

              {/* Buttons */}

              <div className="flex flex-wrap gap-4 mt-5">

                <button className="px-5 py-3 rounded-xl border border-white/10 hover:border-violet-500 transition">
                  Tell me about your projects
                </button>

                <button className="px-5 py-3 rounded-xl border border-white/10 hover:border-violet-500 transition">
                  What technologies do you use?
                </button>

                <button className="px-5 py-3 rounded-xl border border-white/10 hover:border-violet-500 transition">
                  Explain your backend experience
                </button>

              </div>

          </div>
          {/* right */}
          <div className='border border-green-600 lg:col-span-2'>
            <div className="lg:col-span-2 flex justify-center">

              <img
                src={Robot}
                alt=""
                className="w-40"
              />

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AI
