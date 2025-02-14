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
  const [resumeName, setResumeName] = useState("resume.pdf"); // Store filename

  // Load saved file from localStorage on mount
  useEffect(() => {
    const storedResume = localStorage.getItem("resume");
    const storedName = localStorage.getItem("resumeName");

    if (storedResume) {
      setPdfPreviewUrl(storedResume);
      setResumeName(storedName || "resume.pdf"); // Default filename if not stored
    }
  }, []);

  // Handle file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      const url = URL.createObjectURL(file);
      setResumeFile(file);
      setPdfPreviewUrl(url);
      setResumeName(file.name);

      // Save to localStorage
      localStorage.setItem("resume", url);
      localStorage.setItem("resumeName", file.name);
    } else {
      alert("Please upload a valid PDF file.");
      setResumeFile(null);
      setPdfPreviewUrl(null);
      localStorage.removeItem("resume");
      localStorage.removeItem("resumeName");
    }
  };

  // Download the stored file
  const downloadResume = () => {
    if (pdfPreviewUrl) {
      const a = document.createElement("a");
      a.href = pdfPreviewUrl;
      a.download = resumeName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <div
      id="Resume"
      className="px-4 md:px-10 lg:px-[15%] flex flex-col items-center bg-transparent bg-slate-50 py-10 pb-20"
    >
      <h1 className="text-lg md:text-3xl font-bold text-orange-800 mb-4">
        Upload Your Resume:
      </h1>

      {/* File Upload Input (Always Visible) */}
      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileUpload}
        className="mb-4 border p-2"
      />

      {/* Display PDF Preview if a file is uploaded */}
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
      {pdfPreviewUrl && (
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
