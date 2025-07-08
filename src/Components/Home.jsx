import React from 'react'
import Navbar from './Navbar';

const Home = () => {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212] mx-auto px-12 py-4'>   
        <Navbar />

        <div className='h-100 w-full'>
            <div className='text-white text-3xl font-semibold'>
              My skills
            </div>
        </div>
    </main>
  )
}

export default Home