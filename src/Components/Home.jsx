import React from 'react'
import Navbar from './Navbar';

const Home = () => {

  const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git & GitHub",
  "REST API",
  "Bootstrap",
  "Tailwind CSS",
  "Redux",
];

  return (
    <main className='flex min-h-screen flex-col bg-[#121212] mx-auto px-10 py-4'>   
        <Navbar />

        <div className='h-100 w-full py-5 px-4'>
            <div className='w-full text-white font-semibold flex-col justify-start items-center'>
                <div className='flex justify-start items-center'>
                  <h1 className='text-white font-semibold  text-4xl'>
                    My Skills
                  </h1>
                </div>
                <div className="overflow-hidden bg-gray-100 py-4 relative group">
                  <div className="flex gap-4 animate-scroll-right group-hover:[animation-play-state:paused]">
                    {skills.concat(skills).map((skill, index) => (
                      <span
                        key={index}
                        className="inline-block bg-gray-800 text-white text-sm md:text-base font-semibold px-4 py-2 rounded-full whitespace-nowrap"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Home