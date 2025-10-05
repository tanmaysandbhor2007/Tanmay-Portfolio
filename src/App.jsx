import React, { useState } from 'react'
import AnimatedModal from './components/AnimatedModal.jsx'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Footer from './components/Footer.jsx'
import About from './components/About.jsx'
import { FaArrowDown } from "react-icons/fa";

export default function App() {


  


  return ( <div className='relative h-screen '>
  
    <div class="stars"></div>
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


<div className='h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth'>

  {/* 🧭 Navbar */}
      <Navbar />

      {/* 🏠 Home Section */}
      <section
        id="home"
        className=" snap-start h-screen flex flex-col items-center justify-center relative"
      >
        <Home />

        {/* 👇 Scroll-down arrow
        <a
          href="#about"
          className="absolute bottom-10 text-white text-3xl animate-bounce"
        >
          <FaArrowDown />
        </a> */}
      </section>

      {/* 👤 About Section */}
      <section
        id="about"
        className=" snap-start  h-screen flex items-center justify-center"
      >
        <About />
      </section>

      {/* ⚙️ Footer */}
      {/* <Footer />  */}
      </div>
  </div>
  






  )
}
