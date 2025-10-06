import React from 'react';

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold mb-4">Hi, I'm <span className="text-blue-500">Tanmay Sudhakar Sandbhor</span></h1>
      <p className="text-lg max-w-xl mx-auto">
        I'm a <span className="font-semibold text-blue-400">Computer & Electronics Engineering</span> student passionate about 
        <span className="font-semibold text-blue-400"> Web Development</span>, 
        <span className="font-semibold text-blue-400"> AIML</span>, 
        <span className="font-semibold text-blue-400"> Embedded Systems</span> and <span className="font-semibold text-blue-400">DSA in C++</span>.
      </p>
      <button className=' bg-blue-700 rounded-xl h-10 w-40   ' onClick={()=>{}} >
        Download Resume
      </button>
    </div>
  );
}
