import React from "react";

function Details() {
  const educationData = [
    {
      degree: "Strength",
      description:
        "Self- Motivated Person , Decision Making Abilities , Problem Solving  and  Ability to work independently .",
    },
    {
      degree: "Personal Details",

      description:
        "Languages : Tamil-English. Marital Status : Unmarried. DOB: 05/06/2002. Gender : Female",
    },
  ];

  return (
    <div className="bg-transparent">
      <section className="px-4 sm:px-6 md:px-8 py-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-8 md:mb-12 text-pink-600">
          Additional Information
        </h2>
        <div className="grid gap-6 md:gap-12 lg:grid-cols-2 px-4 md:px-16 lg:px-24">
          {educationData.map((edu, index) => (
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              key={index}
              className="rounded-xl shadow-lg hover:shadow-orange-100 bg-pink-100 hover:shadow-2xl p-6 md:p-8 transition-transform transform hover:-translate-y-2"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-orange-700 mb-2 sm:mb-4">
                {edu.degree}
              </h3>

              <hr className="border-green-600 mb-2 sm:mb-4" />
              <p className="text-sm sm:text-md text-gray-600">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Details;
