import React from 'react'

const Skills = () => {
  return (
    <section id='skill' className='border border-red-400 py-10'>
      <div className='max-7xl max-auto'>
        <h1 className='text-4xl font-blod'>Skills</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 border border-gray-600/40 bg-gray-700/20 rounded-lg shadow-lg shadow-violet-500/20'>
          <div className='border border-violet-600 '>frontend</div>
          <div className='border border-green-700'>backend</div>
          <div className='border border-yellow-700'>database</div>
          <div className='border border-blue-700'>tools</div>
        </div>
      </div>
    </section>
  )
}

export default Skills
