// import React, { useState } from "react";

// function Resume() {
//   const [resumeFile, setResumeFile] = useState(null);
//   const [pdfPreviewUrl, setPdfPreviewUrl] = useState(null);

//   // Handle file upload
//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file && file.type === "application/pdf") {
//       setResumeFile(file);

//       // Generate URL for PDF preview
//       const url = URL.createObjectURL(file);
//       setPdfPreviewUrl(url);
//     } else {
//       alert("Please upload a valid PDF file.");
//       setResumeFile(null);
//       setPdfPreviewUrl(null);
//     }
//   };

//   // Download the uploaded file
//   const downloadResume = () => {
//     if (resumeFile) {
//       const url = URL.createObjectURL(resumeFile);
//       const a = document.createElement("a");
//       a.href = url;
//       a.download = resumeFile.name;
//       a.click();
//       URL.revokeObjectURL(url); // Clean up the URL object
//     }
//   };

//   return (
//     <div
//       id="Resume"
//       className="px-4 md:px-10 lg:px-[15%] flex flex-col items-center bg-transparent bg-slate-50 py-10 pb-20"
//     >
//       <h1 className="text-lg md:text-3xl font-bold text-orange-800 mb-4">
//         Resume:
//       </h1>

//       {/* File Upload Input */}
//       <div className="flex flex-col items-center space-y-4">
//         <input
//           type="file"
//           accept=".pdf"
//           onChange={handleFileChange}
//           className="text-base md:text-xl p-2 rounded-md border border-orange-800"
//         />

//         {/* Display PDF Preview if a file is selected */}
//         {pdfPreviewUrl && (
//           <div className="w-full flex justify-center items-center mt-6">
//             <iframe
//               src={pdfPreviewUrl}
//               title="PDF Preview"
//               className="border border-gray-300 shadow-lg"
//               style={{
//                 width: "100%",
//                 maxWidth: "600px",
//                 height: "80vh",
//               }}
//             ></iframe>
//           </div>
//         )}

//         {/* Download Button */}
//         {resumeFile && (
//           <button
//             onClick={downloadResume}
//             className="bg-orange-800 text-white font-semibold px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300 mt-4"
//           >
//             Download Resume
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Resume;

import React, { useState, useEffect } from "react";

function Resume() {
  const [resumeFile, setResumeFile] = useState(null);
  const [pdfPreviewUrl, setPdfPreviewUrl] = useState(null);

  // Handle file upload programmatically
  const handleFileUpload = (file) => {
    if (file && file.type === "application/pdf") {
      setResumeFile(file);

      // Generate URL for PDF preview
      const url = URL.createObjectURL(file);
      setPdfPreviewUrl(url);
    } else {
      alert("Please upload a valid PDF file.");
      setResumeFile(null);
      setPdfPreviewUrl(null);
    }
  };

  // Download the uploaded file
  const downloadResume = () => {
    if (resumeFile) {
      const url = URL.createObjectURL(resumeFile);
      const a = document.createElement("a");
      a.href = url;
      a.download = resumeFile.name;
      a.click();
      URL.revokeObjectURL(url); // Clean up the URL object
    }
  };

  // Example file for demonstration
  useEffect(() => {
    // Simulate file upload
    const simulateFileUpload = () => {
      fetch("/Minithasri Krishnan.pdf") // Ensure the file path is correct
        .then((response) => {
          if (!response.ok) throw new Error("File not found");
          return response.blob();
        })
        .then((blob) => handleFileUpload(blob))
        .catch((error) => console.error("Error fetching the file:", error));
    };

    simulateFileUpload();
  }, []);

  return (
    <div
      id="Resume"
      className="px-4 md:px-10 lg:px-[15%] flex flex-col items-center bg-transparent bg-slate-50 py-10 pb-20"
    >
      <h1 className="text-lg md:text-3xl font-bold text-orange-800 mb-4">
        Resume:
      </h1>

      {/* Display PDF Preview if a file is selected */}
      {pdfPreviewUrl && (
        <div className="w-full flex justify-center items-center mt-6">
          <iframe
            src={pdfPreviewUrl}
            title="PDF Preview"
            className="border border-gray-300 shadow-lg"
            style={{
              width: "100%",
              maxWidth: "600px",
              height: "80vh",
            }}
          ></iframe>
        </div>
      )}

      {/* Download Button */}
      {resumeFile && (
        <button
          onClick={downloadResume}
          className="bg-orange-800 text-white font-semibold px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300 mt-4"
        >
          Download Resume
        </button>
      )}
    </div>
  );
}

export default Resume;
