import React from 'react'
import { WordRotate } from './magicui/word-rotate'
import mypic from '../assets/images/profile.webp'

const Navbar = () => {
  return (
    <nav className='flex justify-center  items-center w-full h-auto  py-5 px-4'>
        {/* Left div part */}
        <div className='h-auto w-[50%] flex flex-col justify-center items-start'>
            <div className='my-5'>
              <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>Hello I'm Dhruv</h1>
              <WordRotate className='text-4xl font-bold text-white dark:text-white' 
               words={["Mern Stack Devloper", "React js Devloper","Node js Devloper"]}/>
            </div>
            <p className='text-[#ADB7BE] text-xl lg:text-2xl'> 
                I’m Dhruv Purohit, a dedicated MERN Stack Developer with a BCA from MK Bhavnagar University. I’ve completed a full-stack development course at TOPS Technologies, Ahmedabad, where I worked on real-time projects using MongoDB, Express.js, React.js, and Node.js. I’m passionate about building responsive web applications and writing clean, scalable code. I'm now looking for opportunities to grow and contribute to dynamic development teams.
            </p>
        </div>

        {/* Right Div photo section */}
        <div className='relative h-auto w-[50%]  flex justify-center items-center mt-5'>
            <div className='absolute  w-96 h-96 bg-white rounded-full shadow-inner z-o' />
            <div className='absolute w-84 h-84 bg-neutral-200 rounded-b-full shadow-md z-[-1] ' />
            <img src={mypic} alt="not working"  className='relative h-72 w-72 object-cover rounded-full border-4 border-neutral-100 shadow-lg '/>
        </div>  
    </nav>
  )
}

export default Navbar