
import React from 'react';


function Navbar1(){

    return(
       
        <div  className="py-4 gap-5 px-10 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white
         flex flex-wrap items-center justify-between shadow-md 
         hover:bg-gradient-to-br from-[#2a1a2e] via-[#26213e] to-[#1f3460] transition-all duration-300 sticky top-0 transition-all duration-300">
        <h2>
          <a className="text-2xl font-bold hover:text-red-800 transition duration-300" href="/">
            Jatin Patidar
          </a>
        </h2>
        <div className="flex gap-6">
          
            
            
            <a className="text-lg flex gap-2  font-medium hover:text-red-800 transition duration-300"
              href="/">
              <img className='h-5 w-5 mt-1' src="/images/home.png" alt="" />
              Home
            </a>

          
          
          <a
            className="text-lg flex gap-2 font-medium hover:text-red-800 transition duration-300"
            href="/About">
              <img className='h-5 w-5 mt-1' src="/images/accepted.png" alt="" />
            About
            
          </a>
          <a
            className="text-lg flex   gap-2  font-medium hover:text-red-800 transition duration-300"
            href="/Resume">
              <img className='h-5 w-5   mt-1' src="/images/resume(1).png" alt="" />
            Resume
          </a>
          <a
            className="text-lg font-medium flex gap-2 hover:text-red-400 transition duration-300"
            href="/Project">
              <img className='h-5 w-5 mt-1' src="/images/idea.png" alt="" />
            Project
          </a>
        </div>
      </div>
      
        
    )



}

export default Navbar1;