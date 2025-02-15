import React from 'react';
import HeaderHome from '../components/HeaderHome';

function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <HeaderHome />

      {/* Describe */}
      <main className="min-h-screen flex flex-col">
        <div className="flex flex-col md:flex-row items-center justify-between min-h-screen px-4 md:px-20">
          <div className="mb-8 md:mb-0">
            <img className="h-60 md:h-80" src="/images/avatar.png" alt="Avatar" />
          </div>
          <div>
            <h1 className="text-4xl text-red-500 font-bold">Welcome to my Portfolio</h1>
            <p className="pt-3 text-yellow-300">
              Let Me Introduce Myself
              <br /><br />
              I discovered a passion for coding early on, and every
              <br />
              day since has been a journey of learning and growth. 🖥️✨
              <br /><br />
              I have strong expertise in foundational technologies like 
              <br />
              C++, HTML, JavaScript, CSS, and React.js.
              <br /><br />
              I’m particularly drawn to crafting innovative web 
              <br />
              applications and exploring the endless possibilities
              <br />
              of modern algorithms and web technologies.
              <br /><br />
            </p>
          </div>
        </div>

        <div className="px-4 md:px-20 pb-10">
          <h1 className="text-4xl text-red-500 font-bold text-center">Coding Profile</h1>
          <div className="flex justify-center pt-5 gap-5">
            <a href="https://leetcode.com/u/j3_cody/" target="_blank" rel="noopener noreferrer">
              <button className="bg-transparent border-none p-0">
                <img src="/images/Screenshot from 2024-12-31 16-43-18.png" alt="Leetcode" className="w-12 h-12 rounded" />
              </button>
            </a>
            <a href="https://codeforces.com/profile/j3Devil" target="_blank" rel="noopener noreferrer">
              <button className="bg-transparent border-none p-0">
                <img src="/images/Screenshot from 2024-12-31 16-45-15.png" alt="Codeforces" className="w-12 h-12 rounded" />
              </button>
            </a>
            <a href="https://www.codechef.com/users/j3_cody" target="_blank" rel="noopener noreferrer">
              <button className="bg-transparent border-none p-0">
                <img src="/images/Screenshot from 2024-12-31 16-46-42.png" alt="Codechef" className="w-12 h-12 rounded" />
              </button>
            </a>
          </div>
        </div>

        <div className="px-4 md:px-20 pb-10">
          <h1 className="text-4xl text-red-500 font-bold text-center">Connect Me</h1>
          <div className="flex justify-center pt-5 gap-5">
            <a href="https://www.linkedin.com/in/jatin-patidar-114917283/" target="_blank" rel="noopener noreferrer">
              <button className="bg-transparent border-none p-0">
                <img src="/images/linkedin.png" alt="LinkedIn" className="w-10 h-10" />
              </button>
            </a>
            <a href="https://github.com/j3cody" target="_blank" rel="noopener noreferrer">
              <button className="bg-transparent border-none p-0">
                <img src="/images/git.png" alt="Git" className="w-10 h-10" />
              </button>
            </a>
            <a href="/Contact" target="_blank" rel="noopener noreferrer">
              <button className="bg-transparent border-none p-0">
                <img src="/images/Screenshot from 2024-12-31 16-48-11.png" alt="Contact Me" className="w-10 h-10 rounded" />
              </button>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
