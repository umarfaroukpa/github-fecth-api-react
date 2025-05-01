import React from 'react';

function Footer() {
  return (
    <footer className="bg-purple-800 text-white p-4 text-center">
      <p>Umar Farouk Ilyas &copy; {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;