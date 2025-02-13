import React, { useEffect, useState } from "react";
import laptop from "../image/pngfind.com-ideas-png-1439026.png";

function Home() {
  const [Change, setChange] = useState("Developer...");

  const aboutDetails = [
    "“A full-stack developer is the architect and the builder of the digital realm.”",
  ];

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      setChange(aboutDetails[current]);
      current = (current + 1) % aboutDetails.length;
    }, 4000);
    return () => clearInterval(interval);
  }, [aboutDetails]); // Dependency array added to avoid unnecessary re-renders

  return (
    <div>
      <h1 className="text-lg text-center sm:text-2xl p-5 md:text-3xl text-orange-900 font-semibold">
        {Change}
      </h1>
    </div>
  );
}

export default Home;
