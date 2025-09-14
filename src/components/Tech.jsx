import React from "react";
import { SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";
import capcutLogo from "../assets/capcutLogo.jpg";

export default function Tech({ darkMode }) {
  // Array for tech stack
  const techStack = [
    {
      name: "Adobe Photoshop",
      icon: <SiAdobephotoshop size={60} className="text-[#31A8FF]" />,
      lightBg: "from-blue-100 to-blue-200",
      darkBg: "from-[#1E3A8A] to-[#1E40AF]",
    },
    {
      name: "Adobe Illustrator",
      icon: <SiAdobeillustrator size={60} className="text-[#FF9A00]" />,
      lightBg: "from-orange-100 to-orange-200",
      darkBg: "from-[#7C2D12] to-[#9A3412]",
    },
    {
      name: "CapCut",
      icon: (
        <img
          src={capcutLogo}
          alt="CapCut"
          className="w-14 h-14 object-contain rounded-md"
        />
      ),
      lightBg: "from-gray-100 to-gray-200",
      darkBg: "from-[#111827] to-[#1F2937]",
    },
  ];

  return (
    <section
      className={`w-[85%] sm:w-[75%] max-w-7xl mx-auto mt-20 text-center transition-colors duration-500`}
    >
      <h1
        className={`flex items-center text-3xl text-blue-600 border-b-1 border-gray-300 font-semibold pb-2 mb-8 gap-3 transition-colors duration-500`}
      >
        <h2 className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></h2>
        Tech Stack
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className={`flex flex-col items-center gap-4 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 
              bg-gradient-to-br ${
                darkMode ? tech.darkBg : tech.lightBg
              }`}
          >
            {tech.icon}
            <span className="font-semibold text-lg text-black">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
