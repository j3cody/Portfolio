import React from 'react';

import Typewriter from 'typewriter-effect';



function HeaderHome() {
    return(
       
         <section className="flex   items-center justify-between  px-20">
            <div className="container flex  flex-wrap  justify-between gap-5">
                <h1 className='text-4xl text-red-500 font-bold  '>
                    
                    
                    <span className="text-4xl font-bold text-yellow-400 pt-20 flex py-2 gap-5">
                         <img className="h-13 w-12" src="/images/wave.png" />...Hi,</span>
                    
                     I'm Jatin Patidar
                     <br />
                   
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 75,
                            deleteSpeed: 50,
                        }}
                        onInit={(typewriter) => {
                            typewriter
                                .typeString('<span class="text-blue-400 text-4xl font-bold">Frontend Developer</span>')
                                .pauseFor(2000)
                                .deleteAll()
                                .typeString('<span class="text-blue-400 text-4xl font-bold">Competitive Programmer</span>')
                                .pauseFor(2000)
                                .start();
                        }}
                    />


                  
                   
                    
                    <br />

                </h1>
                <div >
                        <img  className="h-80  pt-10 " src="/images/rb_17639.png" alt="" />

                </div>
              
              
            </div>
            
         </section>
     
    );
    
    
}
export default HeaderHome;