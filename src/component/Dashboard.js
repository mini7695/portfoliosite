import React from "react";
import About from "./About";
import Home from "./Home";
import Resume from "./Resume";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Education from "./Education";
import Project from "./Project";
import Intern from "./Intern";
import Details from "./Details";
import Experience from "./Experience";
function Dashboard() {
  return (
    <div className="relative !scroll-smooth">
      <div className="absolute inset-0 -z-10 mt-10 flex items-center justify-center  overflow-hidden">
        <div className="rounded-full w-20 h-20 bg-pink-600 animate-bounce absolute  top-10 left-8 md:left-20 opacity-20"></div>
        <div className="rounded-full w-10 h-10 bg-pink-600 opacity-25  hidden md:block animate-bounce absolute top-40 right-20 md:right-60"></div>
        <div className="rounded-full w-20 h-20 bg-pink-600 opacity-60  hidden md:block animate-bounce absolute top-36 right-40 md:right-80"></div>

        <div className="rounded-full w-44 h-44 hidden bg-pink-500  md:block  absolute bottom-52 right-10 md:-right-32 opacity-20"></div>
        <div className="rounded-full w-60 h-60 hidden bg-pink-500  md:block  absolute bottom-64 [700px] right-10 md:-left-[150px] opacity-20"></div>

        <div className="relative rounded-full   hidden md:block w-60 h-60 md:w-80 md:h-80 top-60 right-10 md:-right-[800px] bg-orange-100"></div>
      </div>

      <div className="mt-32">
        <Navbar />
      </div>
      <div className="mt-20">
        <Home />
      </div>

      <div className="mt-20">
        <About />
      </div>
      <div className="">
        <Education />
      </div>

      <div className="">
        <Project />
      </div>
      <div className="">
        <Experience />
      </div>
      <div className="mt-32">
        <Details />
      </div>
      <div className="mt-32">
        <Intern />
      </div>

      <div className="mt-32">
        <Resume />
      </div>

      <Footer />
    </div>
  );
}

export default Dashboard;
