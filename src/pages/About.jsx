import React from 'react';

function About() {
  return (
    <main className="min-h-screen">
      {/* About Section */}
      <div className="flex flex-col md:flex-row items-center justify-between flex-wrap px-4 md:px-20 mt-16">
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl text-red-600">About me</h1>
          <p className="mt-4 text-yellow-300">
            Hi Everyone, I am Jatin Patidar from Bhopal, India.
            <br /><br />
            I am currently pursuing my B.Tech in Computer Science
            <br /> from MANIT, Bhopal (2023-2027).
            <br /><br />
            With a passion for web development, competitive programming,
            <br /> and technology,
            <br /><br />
            I am focused on building efficient and innovative solutions
            <br /> through clean code and problem-solving.
          </p>
        </div>
        <div className="w-full md:w-80 mt-8 md:mt-0 border-2 rounded border-blue-800 shadow-md hover:shadow-2xl hover:border-blue-500 transition-all duration-700">
          <img 
            src="/images/Screenshot from 2024-12-30 21-54-06.png" 
            alt="" 
            className="w-full h-auto object-contain" 
          />
        </div>
      </div>

      {/* Professional Skills */}
      <div className="mt-10 px-4 md:px-20">
        <h1 className="text-3xl text-red-600 text-center">Professional Skills</h1>
        <div className="mt-6">
          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="h-35 w-40 border-2 rounded border-blue-800 shadow-md hover:shadow-2xl hover:border-blue-500 transition-all duration-700 transform hover:scale-110">
              <img className="mt-2 ml-10 h-15 w-20" src="/images/c-.png" alt="C++" />
              <p className="text-center text-yellow-300 mt-2">C++</p>
            </div>
            <div className="h-35 w-40 border-2 rounded border-blue-800 shadow-md hover:shadow-2xl hover:border-blue-500 transition-all duration-700 transform hover:scale-110">
              <img className="mt-2 ml-10 h-15 w-20" src="/images/html-5.png" alt="HTML" />
              <p className="text-center text-yellow-300 mt-2">HTML</p>
            </div>
            <div className="h-35 w-40 border-2 rounded border-blue-800 shadow-md hover:shadow-2xl hover:border-blue-500 transition-all duration-700 transform hover:scale-110">
              <img className="mt-2 ml-10 h-15 w-20" src="/images/css-3.png" alt="CSS" />
              <p className="text-center text-yellow-300 mt-2">CSS</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 mt-6">
            <div className="h-35 w-40 border-2 rounded border-blue-800 shadow-md hover:shadow-2xl hover:border-blue-500 transition-all duration-700 transform hover:scale-110">
              <img className="mt-2 ml-10 h-15 w-20" src="/images/java-script.png" alt="JavaScript" />
              <p className="text-center text-yellow-300 mt-2">JavaScript</p>
            </div>
            <div className="h-35 w-40 border-2 rounded border-blue-800 shadow-md hover:shadow-2xl hover:border-blue-500 transition-all duration-700 transform hover:scale-110">
              <img className="mt-2 ml-10 h-15 w-20" src="/images/Screenshot from 2024-12-30 22-26-07.png" alt="React.js" />
              <p className="text-center text-yellow-300 mt-2">REACT.JS</p>
            </div>
            <div className="h-35 w-40 border-2 rounded border-blue-800 shadow-md hover:shadow-2xl hover:border-blue-500 transition-all duration-700 transform hover:scale-110">
              <img className="mt-2 ml-10 h-15 w-20" src="/images/github.png" alt="GitHub" />
              <p className="text-center text-yellow-300 mt-2">GitHub</p>
            </div>
          </div>
        </div>
      </div>

      {/* Soft Skills */}
      <div className="mt-10 px-4 md:px-20">
        <h1 className="text-3xl text-red-600 text-center">Soft Skills</h1>
        <div className="mt-6">
          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="h-35 w-40 border-2 rounded border-blue-800 shadow-md hover:shadow-2xl hover:border-blue-500 transition-all duration-700 transform hover:scale-110">
              <img className="mt-2 ml-10 h-15 w-20" src="/images/meeting.png" alt="Team Work" />
              <p className="text-center text-yellow-300 mt-2">TEAM WORK</p>
            </div>
            <div className="h-35 w-40 border-2 rounded border-blue-800 shadow-md hover:shadow-2xl hover:border-blue-500 transition-all duration-700 transform hover:scale-110">
              <img className="mt-2 ml-10 h-15 w-20" src="/images/leadership.png" alt="Leadership" />
              <p className="text-center text-yellow-300 mt-2">LEADERSHIP</p>
            </div>
            <div className="h-35 w-40 border-2 rounded border-blue-800 shadow-md hover:shadow-2xl hover:border-blue-500 transition-all duration-700 transform hover:scale-110">
              <img className="mt-2 ml-10 h-15 w-20" src="/images/consulting.png" alt="Communication" />
              <p className="text-center text-yellow-300 mt-2">COMMUNICATION</p>
            </div>
          </div>
        </div>
      </div>

      {/* Other Skills */}
      <div className="mt-10 px-4 md:px-20 pb-10">
        <h1 className="text-3xl text-red-600 text-center">Other Skills</h1>
        <div className="mt-6">
          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="h-35 w-40 border-2 rounded border-blue-800 shadow-md hover:shadow-2xl hover:border-blue-500 transition-all duration-700 transform hover:scale-110">
              <img className="mt-2 ml-10 h-15 w-20" src="/images/table-tennis.png" alt="Table Tennis" />
              <p className="text-center text-yellow-300 mt-2">TABLE TENNIS</p>
            </div>
            <div className="h-35 w-40 border-2 rounded border-blue-800 shadow-md hover:shadow-2xl hover:border-blue-500 transition-all duration-700 transform hover:scale-110">
              <img className="mt-2 ml-10 h-15 w-20" src="/images/chessboard.png" alt="Chess" />
              <p className="text-center text-yellow-300 mt-2">CHESS</p>
            </div>
            <div className="h-35 w-40 border-2 rounded border-blue-800 shadow-md hover:shadow-2xl hover:border-blue-500 transition-all duration-700 transform hover:scale-110">
              <img className="mt-2 ml-10 h-15 w-20" src="/images/cricket.png" alt="Cricket" />
              <p className="text-center text-yellow-300 mt-2">CRICKET</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
