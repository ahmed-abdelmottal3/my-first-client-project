import React, { useState } from "react";
import { useParams } from "react-router-dom";
import rest from "../assets/cover.webp";
import elec from "../assets/cover2.webp";
import teach from "../assets/cover3.webp";

import brg1 from "../assets/2.webp";
import brg2 from "../assets/5.webp";
import brg3 from "../assets/6.webp";
import brg4 from "../assets/45.webp";

import elec1 from "../assets/1.webp";
import elec2 from "../assets/4.webp";
import elec3 from "../assets/8.webp";
import elec4 from "../assets/15.webp";
import elec5 from "../assets/16.webp";
import elec6 from "../assets/26.webp";
import elec7 from "../assets/28.webp";
import elec8 from "../assets/33.webp";
import elec9 from "../assets/35.webp";
import elec10 from "../assets/36.webp";
import elec11 from "../assets/37.webp";

import edu1 from "../assets/edu1.webp";
import edu2 from "../assets/edu2.webp";
import edu3 from "../assets/edu3.webp";
import edu4 from "../assets/edu4.webp";

const projectsData = [
  {
    id: 1,
    title: "Restaurant Ads Designs",
    description:
      "A collection of eye-catching restaurant advertisement designs.",
    image: rest,
    link: "https://www.behance.net/gallery/225373717/Restaurant-ads-Social-Media",
    subimg: [brg1, brg2,brg3, brg4],
  },
  {
    id: 2,
    title: "Electrical Appliances",
    description: "A series of designs for promoting electrical appliances.",
    image: elec,
    link: "https://www.behance.net/gallery/222518961/Electrical-Appliances-Vol-1",
    subimg: [
      elec1,
      elec2,
      elec3,
      elec4,
      elec5,
      elec6,
      elec7,
      elec8,
      elec9,
      elec10,
      elec11,
    ],
  },
  {
    id: 3,
    title: "Education Posters",
    description: "Creative poster designs for educational purposes.",
    image: teach,
    link: "https://www.behance.net/gallery/218969803/Social-Media-Educational-Posters",
    subimg: [edu1, edu2, edu3, edu4],
  },
];

export default function Projects_details() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === parseInt(id));
  const [img, setImage] = useState(project?.image || "");
  const [fade, setFade] = useState(true);

  if (!project)
    return (
      <div className="text-center mt-20 text-red-500">Project not found!</div>
    );

  const changeImage = (src) => {
    setFade(false);
    setTimeout(() => {
      setImage(src);
      setFade(true);
    }, 400);
  };

  return (
<section className="flex flex-col justify-center items-center w-[95%] sm:w-[85%] mx-auto mt-5">
  <h1 className="text-2xl sm:text-3xl pt-10 text-center font-extrabold text-blue-600 mb-6">
    {project.title}
  </h1>

  <div className="flex flex-col items-center justify-center rounded-4xl">
    {/* Left: Main Image */}
    <div className="flex flex-col items-center w-fit rounded-2xl">
      <div className="w-fit h-64 sm:h-80 md:h-96 lg:h-[500px]  flex justify-center items-center rounded-4xl overflow-hidden">
        <img
          key={img}
          src={img}
          alt={project.title}
          className={`w-full max-h-full object-contain transition-opacity rounded-4xl duration-500 ease-in-out ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* Thumbnails */}
      <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mt-4 pb-2 w-full">
        {project.subimg.map((imgsrc, i) => (
          <div
            key={i}
            onMouseOver={() => changeImage(imgsrc || project.image)}
            onMouseLeave={() => changeImage(project.image)}
            className={`flex-shrink-0 cursor-pointer rounded-xl overflow-hidden border-2 transition-all duration-500 ${
              img === imgsrc ? "border-blue-600" : "border-transparent"
            }`}
          >
            <img
              src={imgsrc}
              alt={`sub ${i}`}
              className="w-28 h-20 sm:w-32 sm:h-24 md:w-40 md:h-28 lg:w-64 lg:h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>

    {/* Right: Description */}
    <div className="flex flex-col justify-center items-center text-center my-5 w-full lg:w-auto">
      <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
        {project.description}
      </p>

      {project.link && (
        <div className="flex justify-center lg:justify-start">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-3 rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
          >
            View All on Behance
          </a>
        </div>
      )}
    </div>
  </div>
</section>
  );
}
