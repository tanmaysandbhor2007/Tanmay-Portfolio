import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="text-center">
      <h3 className="text-xl font-bold mb-4">Contact Me</h3>
      <div className="flex justify-center gap-6 mb-4">
        <a href="https://github.com/yourusername" target="_blank"><FaGithub size={24} /></a>
        <a href="https://linkedin.com/in/yourusername" target="_blank"><FaLinkedin size={24} /></a>
        <a href="mailto:youremail@example.com"><FaEnvelope size={24} /></a>
      </div>
      <p className="text-gray-400">&copy; 2025 Tanmay Sandbhor. All rights reserved.</p>
    </div>
  );
}
