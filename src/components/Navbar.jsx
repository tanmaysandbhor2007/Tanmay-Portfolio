import React from 'react'

function Navbar() {
  return (
   <nav className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-md border-b border-white/10 z-50">
  <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
    <h1 className="text-2xl font-bold text-cyan-400">Tanmay Sandbhor</h1>
    <ul className="flex space-x-6 text-white">
      <li><a href="#home" className="hover:text-cyan-400 transition">Home</a></li>
      <li><a href="#about" className="hover:text-cyan-400 transition">About</a></li>
      <li><a href="#projects" className="hover:text-cyan-400 transition">Projects</a></li>
      <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
    </ul>
  </div>
</nav>

  )
}

export default Navbar