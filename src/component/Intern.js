import React from "react";
import { motion } from "framer-motion";

function Intern() {
  return (
    <div
      className="p-8 bg-transparent min-h-screen flex flex-col items-center justify-center"
      id="Intern"
    >
      <h2 className="text-4xl font-bold mb-12 text-center">
        Internship Experiences
      </h2>
      <p className="px-20">
        <strong>Course Duration:</strong> Six months (October 2023 to March
        2024).
        
        {/* <a
          href="https://certificate.whytap.in/fsd/minithasri/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-500 hover:underline"
        >
          https://certificate.whytap.in/fsd/minithasri/
        </a> */}
        <br />I completed my <strong>MERN Full Stack Development Course</strong>
        at Why Tap. During my internship, I worked on hands-on projects and
        collaborated with senior developers, gaining practical experience. I
        developed a webpage using <strong>React.js</strong>, which enhanced my
        skills in front-end development. 
      </p>

      <div className="relative w-full max-w-4xl py-10">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-400"></div>
        <div className="space-y-12">
          {internships.map((internship, index) => (
            <motion.div
              key={index}
              className={`relative flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              } items-center w-full`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.3, duration: 0.6 }}
            >
              <div className="w-6 h-6 bg-pink-500 lg:block md:block sm:hidden hidden  rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
              <div
                className={`p-6 bg-orange-50 rounded-lg shadow-lg w-96 ${
                  index % 2 === 0 ? "ml-12" : "mr-12"
                }`}
              >
                <h3 className="text-xl font-semibold mb-2">
                  {internship.title}
                </h3>
                <p className="text-green-700">{internship.company}</p>
                <p className="text-gray-500 mt-4">{internship.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

const internships = [
  {
    title: "Full Stack Intern",
    company: "Why Global Service Pvt ltd",
    description:
      "Completed Full Stack Development training at Why Tap, where I collaborated with senior developers on hands-on projects and gained practical experience.During the internship, I developed a webpage using MERN stack technologies (ReactJs, ExpressJs, NodeJs, MongoDB),",
  },
  {
    title: "Frontend Technologies",
    company: "Why Global Service Pvt ltd",
    description:
      "Assisted in building scalable web applications during an internship using the ReactJs & TailwindCss, with a focus on front-end technologies including HTML, CSS, and JavaScript.",
  },
  {
    title: "Figma ,Canva",
    company: "Why Global Service Pvt ltd",
    description:
      "During an internship, to choose colors based on the logo and client requirements for a perfect design before developing",
  },
];

export default Intern;
