import React from 'react';

function About() {

    return (

        <main className='min-h-screen'>

            {/* about */}

            <div className='flex   items-center justify-between flex-wrap px-20'>
                <div className=''>
                    <h1 className='mt-20 px-20 text-3xl text-red-600' >About me</h1>
                    <p className="mt-5 text-yellow-300">
                        Hi Everyone, I am Jatin Patidar from Bhopal, India. 
                        <br />
                        <br />
                        I am currently pursuing my B.Tech in Computer Science
                        <br /> from MANIT, Bhopal (2023-2027).
                        <br />
                        <br /> 
                        
                        With a passion for 
                        web development, competitive programming,
                        <br /> and technology, 
                        <br />
                        <br />
                        I am focused on building efficient and innovative solutions 
                        <br />through clean code and problem-solving.
                    </p>
                    
                </div>
                <div className=' w-80 mt-20 border-2 rounded border-blue-800 shadow-md 
                                 hover:shadow-2xl hover:border-blue-500 transition-all duration-700'>
                    <img src="/images/Screenshot from 2024-12-30 21-54-06.png" alt="" />

                </div>
            </div>
{/* skilss */}
            <div>
                <h1 className='text-3xl text-red-600 mt-20 px-20 text-center'>Professional Skills</h1>
                <div>
                    <div className='  flex flex-wrap justify-center items-center mt-10 gap-10'>
                        <div className='h-35 w-40 border-2 rounded border-blue-800 shadow-md 
                                 hover:shadow-2xl hover:border-blue-500 transition-all duration-700
                                 transform hover:scale-110 transition-all duration-300'> 
                            <img className='mt-2 ml-10 h-15 w-20 ' src="/images/c-.png" alt="" />
                            <p className='text-center text-yellow-300 mt-2'>C++</p>
                        </div>
                     
                        <div className='h-35 w-40 border-2 rounded border-blue-800 shadow-md 
                                 hover:shadow-2xl hover:border-blue-500 transition-all duration-700
                                 transform hover:scale-110 transition-all duration-300'> 
                            <img className='mt-2 ml-10 h-15 w-20 ' src="/images/html-5.png" alt="" />
                            <p className='text-center text-yellow-300 mt-2'>HTML</p>
                        </div>
                       
                        <div className='h-35 w-40 border-2 rounded border-blue-800 shadow-md 
                                 hover:shadow-2xl hover:border-blue-500 transition-all duration-700
                                 transform hover:scale-110 transition-all duration-300'> 
                            <img className='mt-2 ml-10 h-15 w-20 ' src="/images/css-3.png" alt="" />
                            <p className='text-center text-yellow-300 mt-2'>CSS</p>
                        </div>
                        
 
                    </div>
                    <div  className='  flex flex-wrap justify-center items-center mt-10 gap-10  mb'>

                        <div className='h-35 w-40 border-2 rounded border-blue-800 shadow-md 
                                 hover:shadow-2xl hover:border-blue-500 transition-all duration-700
                                 transform hover:scale-110 transition-all duration-300'> 
                            <img  className='mt-2 ml-10 h-15 w-20 ' src="/images/java-script.png" alt="" />
                            <p className='text-center text-yellow-300 mt-2'>JavaScript</p>
                        </div>
                      

                        <div className='h-35 w-40 border-2 rounded border-blue-800 shadow-md 
                                 hover:shadow-2xl hover:border-blue-500 transition-all duration-700
                                 transform hover:scale-110 transition-all duration-300'> 
                            <img  className='mt-2 ml-10 h-15 w-20 ' src="/images/Screenshot from 2024-12-30 22-26-07.png" alt="" />
                            <p className='text-center text-yellow-300 mt-2'>REACT.JS</p>
                        </div>

                        <div className='h-35 w-40 border-2 rounded border-blue-800 shadow-md 
                                 hover:shadow-2xl hover:border-blue-500 transition-all duration-700
                                 transform hover:scale-110 transition-all duration-300'> 
                            <img  className='mt-2 ml-10 h-15 w-20 ' src="/images/github.png" alt="" />
                            <p className='text-center text-yellow-300 mt-2'>GitHub</p>
                        </div>

                    </div>

                    {/* soft skills */}

                    <div >
                         
                            <h1 className='text-3xl text-red-600 mt-20 px-20 text-center'>Soft Skills</h1>
                      <div>
                      <div className='  flex flex-wrap justify-center items-center mt-10 gap-10'>
                        <div className='h-35 w-40 border-2 rounded border-blue-800 shadow-md 
                                 hover:shadow-2xl hover:border-blue-500 transition-all duration-700
                                 transform hover:scale-110 transition-all duration-300'> 
                            <img className='mt-2 ml-10 h-15 w-20 ' src="/images/meeting.png" alt="" />
                            <p className='text-center text-yellow-300 mt-2'>TEAM WORK</p>
                        </div>
                     
                        <div className='h-35 w-40 border-2 rounded border-blue-800 shadow-md 
                                 hover:shadow-2xl hover:border-blue-500 transition-all duration-700
                                 transform hover:scale-110 transition-all duration-300'> 
                            <img className='mt-2 ml-10 h-15 w-20 ' src="/images/leadership.png" alt="" />
                            <p className='text-center text-yellow-300 mt-2'>LEADERSHIP</p>
                        </div>
                       
                        <div className='h-35 w-40 border-2 rounded border-blue-800 shadow-md 
                                 hover:shadow-2xl hover:border-blue-500 transition-all duration-700
                                 transform hover:scale-110 transition-all duration-300'> 
                            <img className='mt-2 ml-10 h-15 w-20 ' src="/images/consulting.png" alt="" />
                            <p className='text-center text-yellow-300 mt-2'>COMMUNICATION</p>
                        </div>
                        
 
                      </div>
                      </div>
                    </div>


                    {/* sports */}
                    <div className='pb-10'>
                         
                            <h1 className='text-3xl text-red-600 mt-20 px-20 text-center'>Other Skills</h1>
                      <div>
                      <div className='  flex flex-wrap justify-center items-center mt-10 gap-10'>
                        <div className='h-35 w-40 border-2 rounded border-blue-800 shadow-md 
                                 hover:shadow-2xl hover:border-blue-500 transition-all duration-700
                                 transform hover:scale-110 transition-all duration-300'> 
                            <img className='mt-2 ml-10 h-15 w-20 ' src="/images/table-tennis.png" alt="" />
                            <p className='text-center text-yellow-300 mt-2'>TABLE TENNIS</p>
                        </div>
                     
                        <div className='h-35 w-40 border-2 rounded border-blue-800 shadow-md 
                                 hover:shadow-2xl hover:border-blue-500 transition-all duration-700
                                 transform hover:scale-110 transition-all duration-300'> 
                            <img className='mt-2 ml-10 h-15 w-20 ' src="/images/chessboard.png" alt="" />
                            <p className='text-center text-yellow-300 mt-2'>CHESS</p>
                        </div>
                       
                        <div className='h-35 w-40 border-2 rounded border-blue-800 shadow-md 
                                 hover:shadow-2xl hover:border-blue-500 transition-all duration-700
                                 transform hover:scale-110 transition-all duration-300'> 
                            <img className='mt-2 ml-10 h-15 w-20 ' src="/images/cricket.png" alt="" />
                            <p className='text-center text-yellow-300 mt-2'>CRICKET</p>
                        </div>
                        
 
                      </div>
                      </div>
                    </div>
                </div>
            </div>

        </main>
    )
    
}

export default About;