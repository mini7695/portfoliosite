// import React from "react";

// const educationData = [
//   {
//     degree: "Bachelor of Science in Computer Science",
//     institution: "University of Example",
//     duration: "2018 - 2022",
//     description:
//       "Focused on software development, data structures, algorithms, and web development. Developed multiple full-stack applications as part of coursework.",
//   },
//   {
//     degree: "High School Diploma",
//     institution: "Example High School",
//     duration: "2016 - 2018",
//     description:
//       "Completed coursework in mathematics, science, and computer science. Participated in extracurricular activities including coding clubs and hackathons.",
//   },
//   {
//     degree: "High School Diploma",
//     institution: "Example High School",
//     duration: "2016 - 2018",
//     description:
//       "Completed coursework in mathematics, science, and computer science. Participated in extracurricular activities including coding clubs and hackathons.",
//   },
// ];

// const Education = () => {
//   return (
//     <section className="bg-transparent" id="Education">
//       <h2 className="text-3xl font-bold text-center text-pink-800">
//         Education
//       </h2>
//       <div className="w-full grid gap-8 md:grid-cols-3 px-10">
//         {educationData.map((edu, index) => (
//           <div
//             data-aos="fade-up"
//             data-aos-duration="1000"
//             key={index}
//             className=" rounded-lg shadow-lg p-6"
//           >
//             <h3 className="text-xl font-semibold text-pink-800">
//               {edu.degree}
//             </h3>
//             <p className="text-gray-600 mt-2">{edu.institution}</p>
//             <p className="text-gray-500 mt-1">{edu.duration}</p>
//             <p className="text-gray-700 mt-4">{edu.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Education;
import React from "react";

const educationData = [
  {
    degree: "B.Tech - IT",
    institution: "PSV College of Engineering & Technology, Krishnagiri",
    duration: "2019 - 2023",
    description:
      "Focused on software development, data structures, algorithms, and web development.",
  },
  {
    degree: "HSC",
    institution: "Govt Girls Hr Sec School , Krishnagiri",
    duration: "2018 - 2019",
    description: "Completed coursework in mathematics, science, and Biology.",
  },
  {
    degree: " SSLC",
    institution: "Govt High School , Jangalapuram",
    duration: "2016 - 2017",
    description: "Tamil , English ,Mathematics, Science,Social Science.",
  },
];

const Education = () => {
  return (
    <section className="bg-transparent p-10 " id="Education">
      <h2 className="text-3xl font-bold text-center text-gray-800 py-10">
        Education
      </h2>
      <div className="w-full max-w-screen-2xl mx-auto px-4 md:px-8 mb-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {educationData.map((edu, index) => (
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              key={index}
              className="rounded-lg shadow-lg p-6 bg-slate-100"
            >
              <h3 className="text-xl font-bold mb-2 text-center text-pink-800">
                {edu.degree}
              </h3>
              {/* <hr className="text-pink-500 bg-pink-500" /> */}
              <hr className="h-[2px] bg-green-600 border-[1px]" />

              <p className="text-gray-600  mt-2">{edu.institution}</p>
              <p className="text-orange-500 mt-1">{edu.duration}</p>
              <p className="text-gray-700 mt-4">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
