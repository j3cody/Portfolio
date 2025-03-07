import React from 'react';

function Project() {
  return (
    <main  class="project" className=" text-white min-h-screen">
      <div>
        <h1 className="text-center font-bold text-3xl pt-20 text-red-400">Discover My Work</h1>
        <p className="text-center text-yellow-400">
        Dive into projects that reflect my creativity and expertise
        </p>
      </div>

      {/* Projects Container */}
      <div className="flex flex-wrap justify-center gap-8 px-10 pt-10">
        {/* Flappy Bird Project */}
        <div className="w-80 bg-gradient-to-b from-blue-800 via-blue-800 to-purple-800 text-black border-4
         rounded-lg hover:shadow-2xl hover:border-red-500 transition-all duration-700 transform hover:scale-105">
          <div className="p-6 flex flex-col items-center">
            <img
              className="w-20 h-20 rounded-lg shadow-md"
              src="/images/NicePng_flappy-bird-background-png_3520144.png"
              alt="Flappy Bird Game"
            />
            <h1 className="text-center font-extrabold text-yellow-400 text-2xl mt-2">Flappy Bird Game</h1>
            <p className="text-center text-sm text-white mt-2 leading-relaxed">
              A browser-based Flappy Bird game built using{' '}
              <span className="font-semibold text-red-400">HTML, CSS, and JavaScript.</span> It's an interactive game
              where the player controls a bird to avoid obstacles by "flapping."
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://github.com/j3cody/FlappyBirdGame"
                className="px-4 py-2 bg-black text-white border border-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300"
              >
                GitHub
              </a>
              <a
                href="https://j3cody.github.io/FlappyBirdGame/"
                className="px-4 py-2 bg-black text-white border border-green-400 rounded-lg hover:bg-green-400 hover:text-black transition-all duration-300"
              >
                Demo
              </a>
            </div>
          </div>
        </div>
        {/* Portfolio */}
        <div className="w-80 bg-gradient-to-b from-blue-800 via-blue-800 to-purple-800 text-black border-4 rounded-lg hover:shadow-2xl hover:border-red-500 transition-all duration-700 transform hover:scale-105">
          <div className="p-6 flex flex-col items-center">
            <img
              className="w-30 h-20 rounded-lg shadow-md"
              src="/images/Screenshot from 2024-12-30 19-44-17.png"
              alt="Portfolio"
            />
            <h1 className="text-center font-extrabold text-yellow-400 text-2xl mt-2">Portfolio</h1>
            <p className="text-center text-sm text-white mt-2 leading-relaxed">
              My personal portfolio built using{' '}
              <span className="font-semibold text-red-400">HTML, CSS,React.Js and JavaScript.</span> It showcases my projects,
              skills, and achievements with a visually appealing layout.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://github.com/j3cody/Portfolio"
                className="px-4 py-2 bg-black text-white border border-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300"
              >
                GitHub
              </a>
              <a
                href="/"
                className="px-4 py-2 bg-black text-white border border-green-400 rounded-lg hover:bg-green-400 hover:text-black transition-all duration-300"
              >
                Demo
              </a>
            </div>
          </div>
        </div>
        {/* Calculator Project */}
        <div className="w-80 bg-gradient-to-b from-blue-800 via-blue-800 to-purple-800 text-black border-4 rounded-lg hover:shadow-2xl hover:border-red-500 transition-all duration-700 transform hover:scale-105">
          <div className="p-6 flex flex-col items-center">
            <img
              className="w-20 h-20 rounded-lg shadow-md"
              src="/images/calculator.jpg"
              alt="Calculator Project"
            />
            <h1 className="text-center font-extrabold text-yellow-400 text-2xl mt-2">Calculator</h1>
            <p className="text-center text-sm text-white mt-2 leading-relaxed">
              A functional calculator built using{' '}
              <span className="font-semibold text-red-400">HTML, CSS, and JavaScript.</span> It supports basic
              arithmetic operations and features a clean, responsive design for both desktop and mobile.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://github.com/j3cody/Calculator"
                className="px-4 py-2 bg-black text-white border border-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300"
              >
                GitHub
              </a>
              <a
                href="https://j3cody.github.io/Calculator/"
                className="px-4 py-2 bg-black text-white border border-green-400 rounded-lg hover:bg-green-400 hover:text-black transition-all duration-300"
              >
                Demo
              </a>
            </div>
          </div>
        </div>

        {/* Normal Website */}
        <div className="w-80 bg-gradient-to-b from-blue-800 via-blue-800 to-purple-800 text-black border-4 rounded-lg hover:shadow-2xl hover:border-red-500 transition-all duration-700 transform hover:scale-105">
          <div className="p-6 flex flex-col items-center">
            <img
              className="w-20 h-20 rounded-lg shadow-md"
              src="/images/website.png"
              alt="Normal Website"
            />
            <h1 className="text-center font-extrabold text-yellow-400 text-2xl mt-2">Normal Website</h1>
            <p className="text-center text-sm text-white mt-2 leading-relaxed">
              A simple website designed using{' '}
              <span className="font-semibold text-red-400">HTML and CSS</span> for styling purposes. It showcases clean
              layout principles and basic web design concepts.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://github.com/j3cody/website-clone1"
                className="px-4 py-2 bg-black text-white border border-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300"
              >
                GitHub
              </a>
              <a
                href="https://j3cody.github.io/website-clone1/"
                className="px-4 py-2 bg-black text-white border border-green-400 rounded-lg hover:bg-green-400 hover:text-black transition-all duration-300"
              >
                Demo
              </a>
            </div>
          </div>
        </div>
        
      </div>
      <br />
    </main>
  );
}

export default Project;
