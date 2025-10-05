import React from 'react'

const About = () => {
  return (
    <div className=' size-auto '>
       
       
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 w-400 h-400 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
        <h1 className="font-extrabold text-4xl font-serif p-8  text-white">About Me</h1>
        {/* Profile Image */}
        <img
          src="https://via.placeholder.com/120"
          alt="Profile"
          className="w-28 h-28 mx-auto rounded-full border-4 border-white/30 mb-4"
        />

        {/* Title */}
        <h2 className="text-2xl font-semibold text-white mb-2">Hi, I'm Tanmay 👋</h2>
        <p className="text-gray-300 mb-4">
          I’m a passionate <span className="text-blue-400 font-medium">Electronics & Computer Engineering</span> student
          who loves exploring web development, AI tools, and creative coding projects.
        </p>
        </div>
        

        
    </div>
  )
}

export default About