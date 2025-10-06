import React from 'react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black bg-opacity-80 backdrop-blur-md px-6 py-4 flex justify-between items-center text-white">
      <h1 className="text-2xl font-bold text-blue-500">Tanmay Sandbhor</h1>
      <div className="flex gap-6">
        <a href="#home" className="hover:text-blue-400 transition">Home</a>
        <a href="#about" className="hover:text-blue-400 transition">About</a>
        <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
        <a href="#footer" className="hover:text-blue-400 transition">Contact</a>
      </div>
    </nav>
  );
}
