import React from "react";

function Experience() {
  return (
    <div className="mx-20 p-6 text-start">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">My Experience</h2>
      <p className="text-gray-600 mb-6">
        I developed a single-page portfolio website using React.js, focusing on
        a highly responsive design with Tailwind CSS. This project enhanced my
        skills in JavaScript, including DOM manipulation and API integration. I
        also built a Weather App that fetches real-time data using an API, which
        strengthened my understanding of JavaScript and API handling. My
        technical expertise includes HTML, CSS, JavaScript, React.js, Tailwind
        CSS, Node.js, Express.js, and MongoDB. I have experience with CRUD
        operations, API integrations, full-stack development (frontend &
        backend), and deployment using Vercel and Netlify. I am proficient in
        connecting frontend to backend APIs and performing database operations
        with MongoDB, ensuring smooth application functionality.
      </p>

      <div className="grid grid-cols-3 gap-8">
        <div className="text-start">
          <a
            href="https://myportfoliowebsitereactjs.netlify.app/"
            className="text-orange-600 font-bold text-md hover:underline"
          >
            https://myportfoliowebsitereactjs.netlify.app/
          </a>
          <p className="text-green-600">Website Portfolio</p>
        </div>
        <div className="text-start">
          <a
            href="https://resumejspractice.netlify.app/"
            className="text-orange-600 font-bold text-md hover:underline"
          >
            https://resumejspractice.netlify.app/
          </a>
          <p className="text-green-600">Resume</p>
        </div>
        <div className="text-start">
          <a
            href="https://smallweathersite.netlify.app/"
            className="text-orange-600 font-bold text-md hover:underline"
          >
            https://smallweathersite.netlify.app/
          </a>
          <p className="text-green-600">Weather App</p>
        </div>
        <div className="text-start">
          <a
            href="https://portfoliosite.vercel.app/"
            className="text-orange-600 font-bold text-md hover:underline"
          >
            https://portfoliosite.vercel.app/
          </a>
          <p className="text-green-600">Portfolio</p>
        </div>
        <div className="text-start">
          <a
            href="https://familyfrontend.vercel.app/"
            className="text-orange-600 font-bold text-md hover:underline"
          >
            https://familyfrontend.vercel.app/
          </a>
          <p className="text-green-600">Family Project</p>
        </div>
        <div className="text-start">
          <a
            href="https://blisswebsite.vercel.app/"
            className="text-orange-600 font-bold text-md hover:underline"
          >
            https://blisswebsite.vercel.app/
          </a>
          <p className="text-green-600">Website</p>
        </div>
        <div className="text-start">
          <a
            href="https://site-bliss.vercel.app/"
            className="text-orange-600 font-bold text-md hover:underline"
          >
            https://site-bliss.vercel.app/
          </a>
          <p className="text-green-600">Website</p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
