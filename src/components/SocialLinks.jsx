
// SocialLinks.jsx
import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex space-x-4 mt-4">
      <a
        href="https://instagram.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-500 hover:text-pink-700 text-2xl"
      >
        <FaInstagram />
      </a>
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-800 hover:text-black text-2xl"
      >
        <FaGithub />
      </a>
      <a
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 text-2xl"
      >
        <FaLinkedin />
      </a>
    </div>
  );
};

export default SocialLinks;
