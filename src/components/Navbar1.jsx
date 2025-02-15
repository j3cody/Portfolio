import React, { useState } from 'react';

function Navbar1() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="flex items-center justify-between py-4 px-4 md:px-10">
        <h2>
          <a className="text-2xl font-bold hover:text-red-800 transition duration-300" href="/">
            Jatin Patidar
          </a>
        </h2>
        {/* Hamburger Icon for mobile */}
        <button className="md:hidden" onClick={toggleNav}>
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <a className="text-lg flex gap-2 font-medium hover:text-red-800 transition duration-300" href="/">
            <img className="h-5 w-5 mt-1" src="/images/home.png" alt="Home" />
            Home
          </a>
          <a className="text-lg flex gap-2 font-medium hover:text-red-800 transition duration-300" href="/About">
            <img className="h-5 w-5 mt-1" src="/images/accepted.png" alt="About" />
            About
          </a>
          <a className="text-lg flex gap-2 font-medium hover:text-red-800 transition duration-300" href="/Resume">
            <img className="h-5 w-5 mt-1" src="/images/resume(1).png" alt="Resume" />
            Resume
          </a>
          <a className="text-lg flex gap-2 font-medium hover:text-red-400 transition duration-300" href="/Project">
            <img className="h-5 w-5 mt-1" src="/images/idea.png" alt="Project" />
            Project
          </a>
        </div>
      </div>
      {/* Mobile Menu */}
      {navOpen && (
        <div className="flex flex-col gap-2 px-4 pb-4 md:hidden">
          <a
            className="text-lg flex gap-2 font-medium hover:text-red-800 transition duration-300"
            href="/"
            onClick={() => setNavOpen(false)}
          >
            <img className="h-5 w-5 mt-1" src="/images/home.png" alt="Home" />
            Home
          </a>
          <a
            className="text-lg flex gap-2 font-medium hover:text-red-800 transition duration-300"
            href="/About"
            onClick={() => setNavOpen(false)}
          >
            <img className="h-5 w-5 mt-1" src="/images/accepted.png" alt="About" />
            About
          </a>
          <a
            className="text-lg flex gap-2 font-medium hover:text-red-800 transition duration-300"
            href="/Resume"
            onClick={() => setNavOpen(false)}
          >
            <img className="h-5 w-5 mt-1" src="/images/resume(1).png" alt="Resume" />
            Resume
          </a>
          <a
            className="text-lg flex gap-2 font-medium hover:text-red-400 transition duration-300"
            href="/Project"
            onClick={() => setNavOpen(false)}
          >
            <img className="h-5 w-5 mt-1" src="/images/idea.png" alt="Project" />
            Project
          </a>
        </div>
      )}
    </div>
  );
}

export default Navbar1;
