import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <p className="text-sm m-0">
        &copy; {new Date().getFullYear()} Jatin Patidar. All rights reserved. Made with <span className="text-red-500">❤️</span>
      </p>
    </footer>
  );
}

export default Footer;
