import React from 'react';

const projects = [
  { id: 1, title: "Web App", img: "https://via.placeholder.com/600x400?text=Web+App" },
  { id: 2, title: "AIML Project", img: "https://via.placeholder.com/600x400?text=AIML+Project" },
  { id: 3, title: "Embedded System", img: "https://via.placeholder.com/600x400?text=Embedded+System" },
  { id: 4, title: "master product", img: "https://via.placeholder.com/600x400?text=Portfolio+Site" },
];

export default function Projects() {
  return (
    <div className="max-w-6xl grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {projects.map((project) => (
        <div key={project.id} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
          <img src={project.img} alt={project.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
