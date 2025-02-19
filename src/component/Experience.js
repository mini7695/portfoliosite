import React from "react";

function Experience() {
  return (
    <div className="px-4 sm:px-8 md:px-20 py-6 text-start">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
        My Experience
      </h2>
      <p className="text-gray-600 text-sm sm:text-lg mb-6">
        I developed a single-page portfolio website using React.js, focusing on
        a highly responsive design with Tailwind CSS. This project enhanced my
        skills in JavaScript, including DOM manipulation and API integration. I
        also built a Weather App that fetches real-time data using an API, which
        strengthened my understanding of JavaScript and API handling. My
        technical expertise includes HTML, CSS, JavaScript, React.js, Tailwind
        CSS, Node.js, Express.js, and MongoDB. I have experience with CRUD
        operations, API integrations, full-stack development (frontend &
        backend), and deployment using Vercel and Netlify.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {[
          {
            url: "https://myportfoliowebsitereactjs.netlify.app/",
            name: "Website Portfolio",
          },
          {
            url: "https://resumejspractice.netlify.app/",
            name: "Resume",
          },
          {
            url: "https://smallweathersite.netlify.app/",
            name: "Weather App",
          },
          {
            url: "https://portfoliosite.vercel.app/",
            name: "Portfolio",
          },
          {
            url: "https://familyfrontend.vercel.app/",
            name: "Family Project",
          },
          {
            url: "https://blisswebsite.vercel.app/",
            name: "Website",
          },
          {
            url: "https://site-bliss.vercel.app/",
            name: "Website",
          },
        ].map((project, index) => (
          <div key={index} className="text-start">
            <a
              href={project.url}
              className="text-orange-600 font-bold text-sm sm:text-md hover:underline break-words"
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.url}
            </a>
            <p className="text-green-600 text-sm">{project.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
