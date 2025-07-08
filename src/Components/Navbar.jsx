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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At non rem quod voluptatem. Deleniti, officiis iusto. Molestias unde illum vero aperiam officiis, dolor commodi laudantium! Dolores dignissimos delectus excepturi quas repellat illum, odit eaque. Omnis vel numquam impedit quod ipsam, ratione ea totam odio debitis illum porro rem, labore atque.
            </p>
        </div>

        {/* Right Div photo section */}
        <div className='relative h-auto w-[50%]  flex justify-center items-center'>
            <div className='absolute  w-104 h-104 bg-white rounded-full shadow-inner z-o' />
            <div className='absolute w-92 h-92 bg-neutral-200 rounded-b-full shadow-md z-[-1] ' />
            <img src={mypic} alt="not working"  className='relative h-80 w-80 object-cover rounded-full border-4 border-neutral-100 shadow-lg '/>
        </div>  
    </nav>
  )
}

export default Navbar