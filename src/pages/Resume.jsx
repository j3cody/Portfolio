import React from 'react';
 
import { useState } from "react";

function Resume() {

       

          const [showPDF, setShowPDF] = useState(false);
        
          return (
            <div className="resume bg-gradient-to-r from-gray-800 via-gray-900 to-black flex flex-col items-center py-10 min-h-screen">
              
              
              <button className="text-lg font-bold px-6 py-3 bg-purple-700 text-white rounded hover:bg-purple-800 hover:text-red-600 transition duration-300 mb-8">
                <a href="jatinresume.pdf" download>Download CV</a>
              </button>
        
              
              <button
                className="text-lg font-bold px-6 py-3 bg-green-700 text-white rounded hover:bg-green-800 hover:text-red-600 transition duration-300 mb-8"
                onClick={() => setShowPDF(!showPDF)}
              >
                {showPDF ? "Hide CV" : "View CV"}
              </button>
        
              {showPDF && (
                <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden mt-8">
                  <iframe
                    src="jatinresume.pdf"
                    className="w-full h-[800px] border-0"
                    title="Resume CV"
                  ></iframe>
                </div>
              )}
            </div>
          );
       
        
        
    }
    


export default Resume;  