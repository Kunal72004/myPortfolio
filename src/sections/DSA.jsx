import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { SiCodeforces, SiLeetcode } from 'react-icons/si';
import Leetcode from '../assets/Coding_image/leet.png'
import GitHub from '../assets/Coding_image/github.png'

const DSA = () => {
  const stats = [
    {
      title: "LeetCode Chart",
      icon: <SiLeetcode />,
      value: "250+",
      line: "Problems Solved",
    },
    {
      title: "LeetCode Activity",
      image:Leetcode,
      id:1,
    },
    {
      title: "GitHub",
      icon: <FaGithub />,
      value: "30+",
      line: "Public Repositories",
      
    },
    {
      title:"GitHub Contributions",
      image:GitHub,
      id:2
    }
  ];

  return (
    <section id='dsa' className='py-15'>
      <div className='max-w-7xl mx-auto border border-amber-700 flex flex-col'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>DSA <span className='text-violet-500'>&</span> <span>Coding Stats</span></h1>
        <div className='border border-red-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8  md:gap-5 mt-5'>
          {stats.map((stat,idx)=>(
            <div key={idx} className='rounded-lg border border-white/10 bg-gray-700/20 px-5 py-10 '>
              {!stat.image ? 
              <div className='flex flex-col '>
                <div className='flex gap-3 items-center text-xl font-semibold'>
                  <h3 className=''>{stat.title}</h3>
                  {stat.icon}
                </div>
                <div className='mt-4 text-xl md:text-2xl lg:text-3xl font-bold'>{stat.value}</div>
                <div className='mt-2 text-gray-300'>{stat.line}</div>
              </div> : 
              <div className='flex flex-col '>
                <h3 className='text-xl font-semibold mb-5'>{stat.title}</h3>
                <a href={stat.id == 1? "https://leetcode.com/u/Kunal072004/": "https://github.com/Kunal72004"}>
                <img className='lg:h-22  hover:scale-105 transition-all duration-500' src={stat.image} alt="leetcode Profile" />
                </a>

              </div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
   
}

export default DSA
