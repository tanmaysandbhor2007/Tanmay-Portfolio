import React from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Footer from './components/Footer.jsx';
import { FaArrowDown } from "react-icons/fa";

export default function App() {
  return (
    <div className="relative bg-black text-white">

      {/* 🌟 Stars */}
      <div className="stars">
        </div>
    <div class="shooting-star"></div>
   <div class="shooting-star"></div>
   <div class="shooting-star"></div>
   <div class="shooting-star"></div>
   <div class="shooting-star"></div>
   <div class="shooting-star"></div>
  <div class="shooting-star"></div>
   <div class="shooting-star"></div>
   <div class="shooting-star"></div>
  <div class="shooting-star"></div>  

      
      
      <div className="relative h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-800   ">
      
      {/* 🧭 Navbar */}
      <Navbar />
      

      {/* 🏠 Home Section */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center px-6 py-12 relative">
        <Home />
        <a href="#about" className="absolute bottom-10 text-white text-3xl animate-bounce">
          <FaArrowDown />
        </a>
      </section>

      {/* 👤 About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 py-12">
        <About />
         
      </section>

      {/* 💻 Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-12">
        <Projects />
      </section>

      {/* 📝 Footer Section */}
      <footer id="footer" className="bg-gray-900 text-gray-300 py-8 px-6">
        <Footer />
      </footer>
      </div>
    </div>
  );
}
