import React, { useState } from "react";

function Resume() {
  const [showPDF, setShowPDF] = useState(false);

  return (
    <div className="resume bg-gradient-to-r from-gray-800 via-gray-900 to-black flex flex-col items-center py-10 min-h-screen">
      <button className="text-lg font-bold px-6 py-3 bg-purple-700 text-white rounded hover:bg-purple-800 hover:text-red-600 transition duration-300 mb-8">
        <a href="Jatin_Resume-3.pdf" download>
          Download CV
        </a>
      </button>
            {/* New Contact Me button */}
      <button className="text-lg font-bold px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 hover:text-red-600 transition duration-300 mb-8">
        <a href="/Contact">Contact Me</a>
      </button>


      <button
        className="text-lg font-bold px-6 py-3 bg-green-700 text-white rounded hover:bg-green-800 hover:text-red-500 transition duration-300 mb-8"
        onClick={() => setShowPDF(!showPDF)}
      >
        {showPDF ? "Hide CV" : "View CV"}
      </button>


      {showPDF && (
        <div className="w-full max-w-4xl rounded-lg shadow-lg overflow-hidden mt-8 border border-gray-700">
          <object
            data="Jatin_Resume-3.pdf"
            type="application/pdf"
            className="w-full h-[600px] md:h-[800px] border-0 opacity-95"
          >
            <p className="p-4 text-center text-red-500">
              It appears your device
              <br /> doesn't support inline 
              <br />
              PDF viewing.Please 
              <br />
              <a href="Jatin_Resume-3.pdf" download className="text-blue-500 underline">download the PDF</a>
               <br />to view it.
            </p>
          </object>
        </div>
      )}
    </div>
  );
}

export default Resume;
