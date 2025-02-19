// import React from "react";
// import { PiInstagramLogoFill } from "react-icons/pi";
// import { FaLinkedin } from "react-icons/fa6";
// import { FaTwitter } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import { FaEnvelope } from "react-icons/fa"; // Import mail icon
// import { motion } from "framer-motion";

// function Footer() {
//   return (
//     <div className="w-full bg-orange-100 py-10">
//       <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-12">
//         {/* Navigation Links */}
//         <motion.div
//           className="flex flex-col md:flex-row justify-center items-center mb-6 md:mb-0"
//           initial={{ opacity: 0, x: -100 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//         >
//           <ul className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-10 text-base font-semibold text-pink-600">
//             {["Education", "Project", "Resume", "Internship"].map((item) => (
//               <motion.li
//                 key={item}
//                 whileHover={{ scale: 1.1, color: "#d24c68" }}
//                 transition={{ type: "spring", stiffness: 300 }}
//                 className="hover:text-pink-800 transition duration-300"
//               >
//                 <a
//                   href={`#${item.toLowerCase()}`}
//                   className="focus:outline-none focus:text-pink-800"
//                 >
//                   {item}
//                 </a>
//               </motion.li>
//             ))}
//           </ul>
//         </motion.div>

//         {/* Social Icons and Contact Information */}
//         <div className="flex flex-col items-center mt-20 space-y-4 md:space-y-6">
//           {/* Social Icons */}
//           <motion.div
//             className="flex justify-center md:justify-end space-x-6 md:space-x-8 text-2xl text-pink-600"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
//           >
//             {[
//               {
//                 href: "https://www.instagram.com/minithasrikrishnan/",
//                 icon: <PiInstagramLogoFill />,
//                 label: "Instagram",
//               },
//               {
//                 href: "https://www.linkedin.com/in/minithasri-k-099963248/",
//                 icon: <FaLinkedin />,
//                 label: "LinkedIn",
//               },
//               {
//                 href: "https://github.com/mini7695",
//                 icon: <FaGithub />,
//                 label: "GitHub",
//               },
//               {
//                 href: "https://twitter.com/minithasri_k",
//                 icon: <FaTwitter />,
//                 label: "Twitter",
//               },
//             ].map((social, index) => (
//               <motion.a
//                 key={index}
//                 href={social.href}
//                 className="hover:text-pink-800 transition duration-300"
//                 aria-label={social.label}
//                 whileHover={{ scale: 1.2, rotate: 5 }}
//                 transition={{ type: "spring", stiffness: 200 }}
//               >
//                 {social.icon}
//               </motion.a>
//             ))}
//           </motion.div>

//           {/* Contact Information */}
//           <div className="flex flex-col items-center text-pink-600">
//             <h1 className="font-bold mb-2 text-center">Get in Touch With Me</h1>
//             <a
//               href="mailto:minithasrik5622@gmail.com"
//               className="hover:text-pink-800 transition duration-300 flex items-center space-x-2"
//             >
//               <FaEnvelope className="text-xl" /> {/* Mail icon */}
//               <span>minithasrik5622@gmail.com</span>
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Footer Note */}
//       <motion.div
//         className="text-center text-gray-800 text-sm md:text-base font-medium mt-6"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
//       >
//         <p>&copy; 2024 Portfolio | All Rights Reserved</p>
//       </motion.div>
//     </div>
//   );
// }

// export default Footer;





import React from "react";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa"; // Import mail icon
import { motion } from "framer-motion";

function Footer() {
  return (
    <div className="w-full bg-gradient-to-r from-green-100 via-orange-100 to-pink-100 py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-12">
        {/* Navigation Links */}
        <motion.div
          className="flex flex-col md:flex-row justify-center items-center mb-8 md:mb-0"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <ul className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-10 text-base font-semibold text-pink-600">
            {["Education", "Project", "Resume", "Internship"].map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.1, color: "#ff7f50" }} // Hover color change
                transition={{ type: "spring", stiffness: 300 }}
                className="hover:text-green-700 transition duration-300"
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className="focus:outline-none focus:text-green-700"
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Social Icons and Contact Information */}
        <div className="flex flex-col items-center md:items-end space-y-6">
          {/* Social Icons */}
          <motion.div
            className="flex justify-center md:justify-end space-x-6 md:space-x-8 text-2xl text-pink-600"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {[
              {
                href: "https://www.instagram.com/minithasrikrishnan/",
                icon: <PiInstagramLogoFill />,
                label: "Instagram",
              },
              {
                href: "https://www.linkedin.com/in/minithasri-krishnan/",
                icon: <FaLinkedin />,
                label: "LinkedIn",
              },
              {
                href: "https://github.com/mini7695",
                icon: <FaGithub />,
                label: "GitHub",
              },
              {
                href: "https://twitter.com/minithasri_k",
                icon: <FaTwitter />,
                label: "Twitter",
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="hover:text-green-700 transition duration-300"
                aria-label={social.label}
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Information */}
          <div className="flex flex-col items-center md:items-end text-pink-600">
            <h1 className="font-bold mb-2 text-center md:text-right">
              Get in Touch With Me
            </h1>
            <a
              href="mailto:minithasrik5622@gmail.com"
              className="hover:text-green-700 transition duration-300 flex items-center space-x-2"
            >
              <FaEnvelope className="text-xl" /> {/* Mail icon */}
              <span>minithasrik5622@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <motion.div
        className="text-center text-gray-800 text-sm md:text-base font-medium mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
      >
        <p>&copy; 2024 Portfolio | All Rights Reserved</p>
      </motion.div>
    </div>
  );
}

export default Footer;
