import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaPalette,
  FaEnvelope,
} from "react-icons/fa";
import logo from "../assets/logo.png";
import { useState, useEffect } from "react";
import React from "react";
import Darkmodecomp from "./Darkmode";
import { Link } from "react-scroll";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  const links = [
    { name: "Home", to: "home", icon: <FaHome size={20} /> },
    { name: "About", to: "about", icon: <FaUser size={20} /> },
    { name: "Designs", to: "design", icon: <FaPalette size={20} /> },
    { name: "Contact", to: "contact", icon: <FaEnvelope size={20} /> },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed z-50 flex justify-between items-center p-4 shadow-md transition-all duration-700
          md:hidden bg-blue-500
          ${
            isScrolled
              ? "bg-blue-500/90 w-[90%] top-10 left-1/2 transform -translate-x-1/2 rounded-full px-8 py-3"
              : "top-0 left-0 w-full"
          }
        `}
      >
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Logo"
            className="w-8 transition-all duration-700"
          />
        </div>
        <div className="flex items-center justify-center gap-6.5">
          {links.map((link) =>
            link.name === "Home" ? (
              <NavLink
                key={link.name}
                to="/"
                className="flex justify-center transition-all hover:bg-white hover:p-3 hover:rounded-full cursor-pointer duration-300 text-white"
              >
                {React.cloneElement(link.icon, {
                  className:
                    "text-gray-100 hover:text-blue-500 transition-all duration-300",
                })}
              </NavLink>
            ) : (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                className="flex justify-center transition-all cursor-pointer hover:bg-white hover:p-3 hover:rounded-full hover:text-blue-600 duration-300 text-white"
              >
                {React.cloneElement(link.icon, {
                  className:
                    "text-gray-100 hover:text-blue-600 group-hover:text-white transition-all duration-300",
                })}
              </Link>
            )
          )}

          <Darkmodecomp />
        </div>
      </div>

      <div className="hidden md:flex fixed top-1/2 right-2 transform -translate-y-1/2 w-20 bg-blue-600 rounded-full shadow-lg flex-col items-center gap-15 py-8 ">
        <div className="mb-8">
          <img src={logo} alt="Logo" className="w-10" />
        </div>

        {links.map((link) =>
          link.name === "Home" ? (
            <NavLink
              key={link.name}
              to="/"
              className="flex justify-center transition-all hover:bg-white hover:p-3 hover:rounded-full cursor-pointer duration-300 text-white"
            >
              {React.cloneElement(link.icon, {
                className:
                  "text-gray-100 hover:text-blue-600  group-hover:text-white transition-all duration-300 ",
              })}
            </NavLink>
          ) : (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              className="flex justify-center transition-all hover:bg-white hover:p-3 hover:rounded-full cursor-pointer duration-300 text-white "
            >
              {React.cloneElement(link.icon, {
                className:
                  "text-gray-100 hover:text-blue-600  group-hover:text-white transition-colors duration-300 cursour-pointer",
              })}
            </Link>
          )
        )}

        <Darkmodecomp />
      </div>
    </>
  );
}
