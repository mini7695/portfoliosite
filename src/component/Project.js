import React from "react";

const experience = [
  {
    company: "Bliss Technologies",
    role: "MERN Stack Developer",
    duration: "Oct 2024 - Jan 2024",
    location: "Individual - Remote, (Gujarat)",
    projects: [
      {
        name: "Family Connect",
        description:
          "Led the development of the Family Connect platform, implementing robust CRUD operations with Node.js and Express.js. Engineered secure user authentication and authorization using JWT, and integrated Nodemailer for automated email notifications. Designed and built comprehensive Admin Panel and User Panel interfaces.",
      },
      {
        name: "Farmer App",
        description:
          "Contributed to the creation of a Farmer Web Application, focusing on the development and optimization of the Admin Panel UI to enable efficient data management for farmers.",
      },
      {
        name: "Deployment Hosting",
        description:
          "Deployed complete frontend and backend solutions for the projects on Vercel. Utilized AWS S3 for hosting static frontend assets, with domain management handled via GoDaddy.",
      },
      {
        name: "Company Website",
        description:
          "Developed a fully responsive company website using React.js, ensuring a modern and user-friendly interface. Implemented dynamic content rendering, optimized performance, and deployed the application on Vercel for seamless accessibility. Integrated SEO best practices to enhance visibility and search rankings.",
      },
    ],
  },
  {
    company: "Why Global Service",
    role: "MERN Stack Developer",
    duration: "May 2024 - Sep 2024",
    location: "With Team - (Chennai)",
    projects: [
      {
        name: "Web Development Projects (Front End)",
        description:
          "Designed and deployed the company’s official website, combining a modern frontend UI with seamless backend integration. Oversaw version control and repository management using GitHub.",
      },
      {
        name: "Websites and Web Applications (Front End)",
        description:
          "Developed interactive menu sections and pages (Home, Blog, News, Contact Us, Dashboard, Footer, Navbar) using React.js and Tailwind CSS, ensuring seamless user experiences across devices. Collaborated with senior developers to resolve technical challenges and enhance responsive UI components.",
      },
      {
        name: "Web Applications (Backend)",
        description:
          "Built dynamic platforms like Job Portal, Snap News, Whytap, and Himadri Ayurvedic, integrating Node.js, Express.js, and MongoDB for backend functionality. Created APIs for user authentication and implemented dynamic dashboards and news sections.",
      },
    ],
  },
  {
    company: "Self Projects",
    role: "Individual - During Learning",
    projects: [
      {
        name: "Task Manager, Resume, Portfolio",
        description:
          "Completed multiple projects utilizing HTML, CSS, JavaScript, ReactJs, NodeJs, and ExpressJs. These projects feature fully implemented CRUD operations and responsive designs, ensuring seamless functionality across devices, including mobile, desktop, and iPad.",
      },
    ],
  },
];

function Project() {
  return (
    <div
      className="container mx-auto px-4 sm:px-6 lg:px-24 py-12 bg-gray-50"
      id="Project"
    >
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-700 mb-10">
        Experience & Projects
      </h2>
      {experience.map((exp, index) => (
        <div key={index} className="mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-center text-blue-600 mb-2">
            {exp.company}
          </h3>
          <p className="text-lg text-center text-gray-600 italic mb-2">
            {exp.role} | <span className="text-orange-500">{exp.duration}</span>
          </p>
          <p className="text-lg text-center text-pink-600 italic mb-6">
            {exp.location}
          </p>

          <div className="space-y-8">
            {exp.projects.map((project, idx) => (
              <div
                key={idx}
                className={`${
                  exp.company === "Self Projects"
                    ? "flex flex-col items-center text-center"
                    : "flex flex-col md:flex-row items-center gap-8 " +
                      (idx % 2 === 0 ? "md:flex-row-reverse" : "")
                }`}
              >
                <div className="md:w-1/2 p-6 bg-purple-50 shadow-lg rounded-lg border-l-4 border-orange-500">
                  <h4 className="text-lg font-semibold text-orange-600 underline mb-2">
                    {project.name}
                  </h4>
                  <p className="text-gray-700 text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
