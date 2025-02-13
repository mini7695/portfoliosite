import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Navbar() {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 200,
      easing: "ease-in-out",
    });
  }, []);

  const name = "Minithasri Krishnan";

  return (
    <div className="relative px-20">
      <div className="relative flex flex-col items-center justify-center px-4">
        <div className="text-center">
          <ul className="space-y-5">
            <li
              className="text-xl sm:text-3xl md:text-4xl font-light text-gray-700 mb-2"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Hello... I'm
            </li>
            <li
              className={`text-sm sm:text-4xl md:text-5xl lg:text-6xl  font-extrabold mb-2 ${
                animate ? "text-pink-700" : "text-gray-700"
              }`}
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              {name.split("").map((char, index) => (
                <span
                  key={index}
                  className={`inline-block transition-shadow ${
                    animate ? "shadow-animation" : ""
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    marginRight: char === " " ? "1rem" : "0.1rem", // Add more space between words
                  }}
                >
                  {char}
                </span>
              ))}
            </li>
            <li
              className="text-sm sm:text-xl md:text-xl lg:text-2xl font-medium text-gray-700"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Frontend Developer / MERN Stack Developer
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
