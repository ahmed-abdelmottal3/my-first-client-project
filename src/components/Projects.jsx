import React from "react";
import { NavLink } from "react-router-dom";
import rest from "../assets/cover.webp";
import elec from "../assets/cover2.webp";
import teach from "../assets/cover3.webp";

export default function Projects() {
  const projectsData = [
    {
      id: 1,
      title: "Restaurant Ads Designs",
      description: "A collection of eye-catching restaurant advertisement designs.",
      image: rest,
      link: "https://www.behance.net/gallery/225373717/Restaurant-ads-Social-Media",
    },
    {
      id: 2,
      title: "Electrical Appliances",
      description: "A series of designs for promoting electrical appliances.",
      image: elec,
      link: "https://www.behance.net/gallery/222518961/Electrical-Appliances-Vol-1",
    },
    {
      id: 3,
      title: "Education Posters",
      description: "Creative poster designs for educational purposes.",
      image: teach,
      link: "https://www.behance.net/gallery/218969803/Social-Media-Educational-Posters",
    },
  ];

  return (
    <section id="design" className="w-[85%] sm:w-[75%] max-w-6xl mx-auto mt-20">
      <h1 className="flex items-center text-3xl font-semibold text-blue-600 border-b-2 border-gray-300 pb-2 mb-10 gap-3">
        <span className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></span>
        Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 bg-opacity-60 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-5 z-10">
              <h2 className="text-xl font-bold text-white mb-2">{project.title}</h2>
              <p className="text-sm text-white">{project.description}</p>
              <div className="flex gap-4 mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black font-medium bg-white rounded-lg px-6 py-2 hover:bg-transparent hover:text-white hover:border hover:border-white transition-all duration-300"
                >
                  Live
                </a>
                <NavLink
                  to={`/projects_details/${project.id}`}
                  className="text-black font-medium bg-white rounded-lg px-6 py-2 hover:bg-transparent hover:text-white hover:border hover:border-white transition-all duration-300"
                >
                  Details
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
