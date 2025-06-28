import React from "react";
// import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Button from "./Shared/Button";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";


const Hero = () => {
  const socialLinks = [
    {
      id: 1,
      icon: <FaGithub />,
      url: "https://github.com/web-hasib",
      hoverColor: "hover:text-red-500",
    },
    {
      id: 2,
      icon: <FaFacebook />,
      url: "https://www.facebook.com/web.hasibul/",
      hoverColor: "hover:text-blue-500",
    },
    {
      id: 3,
      icon: <FaTwitter />,
      url: "https://x.com/Hasibul9285",
      hoverColor: "hover:text-sky-400",
    },
    {
      id: 4,
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/-hasibul-islam-/",
      hoverColor: "hover:text-blue-400",
    },
  ];

  return (
    <div className="hero pt-5 bg-gradient-to-t md:bg-gradient-to-r from-black/90 to-black ">
      <div className="hero-content flex flex-col gap-20 md:gap-10 lg:gap-20 md:flex-row-reverse md:justify-between">
        <img
          src="/hasib.jpg"
          className=" md:max-w-2/5 rounded-full md:rounded-sm  shadow-2xl -mr-5 -mb-5"
        />
        <div className="md:max-w-3/5  text-center md:text-start md:p-4 ">
          {/* Scrolling Name */}
          {/* Animated Hero Title */}
          <motion.h1
            className="text-xl md:text-2xl lg:text-3xl font-extrabold bg-gradient-to-r from-blue-300 via-white to-blue-300 bg-clip-text text-transparent mb-4 drop-shadow-[0_0_10px_rgba(59,130,246,0.7)]"
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hey, I am Hasibul Islam
          </motion.h1>

          {/* Animated Title with Typewriter */}
          <motion.h1
            className="text-[15px] lg:text-lg font-extrabold text-gray-100/40 mb-2"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            I am a{" "}
            <span className="text-[17px] lg:text-xl text-blue-200/40">
              <Typewriter
                words={[
                  "MERN Stack Developer",
                  "Frontend Specialist",
                  "React Enthusiast",
                  "Full Stack Explorer",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={40}
                deleteSpeed={40}
                delaySpeed={2000}
              />
            </span>
          </motion.h1>

          {/* Animated Description */}
          <motion.p
            className="mx-6 md:mx-0 py-2 pb-4 text-xs md:text-[10px] lg:text-xs text-gray-500 italic"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            I am passionate about creating fast, interactive, and highly
            scalable web applications that deliver seamless user experiences and
            solve real-world problems efficiently.
          </motion.p>
          <motion.div
            className="flex justify-center md:justify-start space-x-4 text-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-transform duration-300 ${link.hoverColor}`}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Animated Button */}
     <a href="https://github.com/web-hasib" target="_blank">

            <Button className="mt-5" text="Resume"></Button>
     </a>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
