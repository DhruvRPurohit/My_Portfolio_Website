import React from 'react'
import Navbar from './Navbar'
import './Home.css' // ⬅️ Import the CSS file here

const Home = () => {
  const skills = [
    "HTML", "CSS", "JavaScript", "React.js", "Node.js",
    "Express.js", "MongoDB", "Git & GitHub", "REST API",
    "Bootstrap", "Tailwind CSS", "Redux"
  ];

  return (
    <main className='flex min-h-screen flex-col bg-[#121212] mx-auto px-10 py-4'>   
      <Navbar />

      <div className='h-100 w-full py-5 px-4'>
        <div className='w-full text-white font-semibold flex-col justify-start items-center'>
          <div className='flex justify-start items-center mb-4'>
            <h1 className='text-white font-semibold text-4xl'>
              My Skills
            </h1>
          </div>

          {/* Scrolling Skills Section */}
          <div className="scroll-container my-6 flex justify-center align-center">
            <div className="scroll-left">
              {[...skills, ...skills].map((skill, index) => (
                <span key={index} className="skill-badge">
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
