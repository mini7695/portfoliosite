import React from "react";
import {
  FaGraduationCap,
  FaProjectDiagram,
  FaFileAlt,
  FaBriefcase,
} from "react-icons/fa";

function About() {
  return (
    <div className="flex flex-col items-center py-10 px-4">
      <div className="flex flex-wrap justify-center gap-6 md:gap-10">
        <a href="#Education">
          <button className="bg-gradient-to-r from-pink-300 via-pink-200 to-pink-300 p-4 md:p-5 px-8 md:px-10 rounded-xl text-md md:text-lg font-semibold text-blue-950 shadow-md shadow-pink-300/50 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg flex items-center space-x-2">
            <FaGraduationCap className="text-xl md:text-2xl" />
            <span>Education</span>
          </button>
        </a>

        <a href="#Project">
          <button className="bg-gradient-to-r from-orange-300 via-orange-200 to-orange-300 p-4 md:p-5 px-8 md:px-10 rounded-xl text-md md:text-lg font-semibold text-blue-950 shadow-md shadow-orange-300/50 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg flex items-center space-x-2">
            <FaProjectDiagram className="text-xl md:text-2xl" />
            <span>Projects</span>
          </button>
        </a>

        <a href="#Resume">
          <button className="bg-gradient-to-r from-green-300 via-green-200 to-green-300 p-4 md:p-5 px-8 md:px-10 rounded-xl text-md md:text-lg font-semibold text-blue-950 shadow-md shadow-green-300/50 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg flex items-center space-x-2">
            <FaFileAlt className="text-xl md:text-2xl" />
            <span>Resume</span>
          </button>
        </a>

        <a href="#Intern">
          <button className="bg-gradient-to-r from-fuchsia-300 via-fuchsia-200 to-fuchsia-300 p-4 md:p-5 px-8 md:px-10 rounded-xl text-md md:text-lg font-semibold text-blue-950 shadow-md shadow-fuchsia-300/50 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg flex items-center space-x-2">
            <FaBriefcase className="text-xl md:text-2xl" />
            <span>Internships</span>
          </button>
        </a>
      </div>
    </div>
  );
}

export default About;
