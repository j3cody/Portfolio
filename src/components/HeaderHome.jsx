import React from 'react';
import Typewriter from 'typewriter-effect';

function HeaderHome() {
  return (
    <section className="px-4 md:px-20 py-4">
      <div className="container flex flex-col md:flex-row items-center md:items-start justify-between gap-5">
        <div>
          <h1 className="text-3xl md:text-4xl text-red-500 font-bold">
            <span className="flex items-center text-3xl md:text-4xl font-bold text-yellow-400 pt-10 md:pt-20 gap-2">
              <img className="h-10 w-10 md:h-13 md:w-12" src="/images/wave.png" alt="wave" />
              ...Hi,
            </span>
            I'm Jatin Patidar
            <br />
            {/* Fixed height container for the Typewriter */}
            <div className="h-16 md:h-20 flex items-center">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString('<span class="text-blue-400 text-3xl md:text-4xl font-bold">Frontend Developer</span>')
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString('<span class="text-blue-400 text-3xl md:text-4xl font-bold">Competitive Programmer</span>')
                    .pauseFor(2000)
                    .start();
                }}
              />
            </div>
          </h1>
        </div>
        <div className="flex-shrink-0">
          <img className="h-60 md:h-80 pt-5 md:pt-10" src="/images/rb.png" alt="Jatin Patidar" />
        </div>
      </div>
    </section>
  );
}

export default HeaderHome;
