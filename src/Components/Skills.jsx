import React from 'react';
import { motion } from 'framer-motion';

// Array of your skills with placeholder image URLs
// Replace 'https://placehold.co/100x100?text=' with actual logo URLs
const skills = [
  { name: 'HTML', imageUrl: 'https://i.ibb.co/1Yn25Hgn/HTML5-logo-and-wordmark-svg.png' }, 
  { name: 'CSS', imageUrl: 'https://i.ibb.co/8g1Bd3X6/Official-CSS-Logo-svg.png' },    
  { name: 'JavaScript', imageUrl: 'https://i.ibb.co/jZBTV4ZN/Java-Script-logo.png' }, 
  { name: 'Tailwind CSS', imageUrl: 'https://i.ibb.co/TMH2m9pg/download.png' }, 
  { name: 'DaisyUI', imageUrl: 'https://i.ibb.co/MynfYJ2d/images.jpg' }, 
  { name: 'Bootstrap', imageUrl: 'https://i.ibb.co/VczCYDRJ/Bootstrap-logo-svg.png' }, 
  { name: 'React', imageUrl: 'https://i.ibb.co/hJ4XB7hQ/images.png' },   
  { name: 'Git', imageUrl: 'https://i.ibb.co/7xq7TXtv/Git-icon-svg.png' },       
  { name: 'GitHub', imageUrl: 'https://i.ibb.co/qFp07sHw/download.png' },  
  { name: 'Firebase', imageUrl: 'https://i.ibb.co/Rk3ftDR3/touchicon-180.png' },   
  { name: 'Stripe', imageUrl: 'https://i.ibb.co/NgBLMNBp/download.png' },   
  { name: 'JWT', imageUrl: 'https://i.ibb.co/cKYGqYhP/jwt-flower.webp' },     
  { name: 'Express.js', imageUrl: 'https://i.ibb.co/fddvRN9s/1646733543.webp' }, 
  { name: 'MongoDB', imageUrl: 'https://i.ibb.co/TxzfB4Cq/Microsoft-Visual-Studio-Services-Icons.png' }, 
  { name: 'Node.js', imageUrl: 'https://i.ibb.co/fdJjb2Fx/e42a7be2-890a-4bd2-accf-306e53ccebbd.png' },   
  { name: 'Postman', imageUrl: 'https://i.ibb.co/0pTHWDyY/channels4-profile.jpg' }, 
  { name: 'Vercel', imageUrl: 'https://i.ibb.co/m5c18RpD/orig.png' }, 
  { name: 'Surge', imageUrl: 'https://i.ibb.co/XfSmvB3n/images.jpg' }, 
  { name: 'Netlify', imageUrl: 'https://i.ibb.co/0VsWssZh/images.png' }, 
  { name: 'Thunder Client', imageUrl: 'https://i.ibb.co/ksMWxsFL/164544218.png' }, 
  { name: 'Mongoose', imageUrl: 'https://i.ibb.co/rG98Fdw5/png-transparent-mongoose-hd-logo.png' },  
];

const Skills = () => {
  // To create an infinite scroll, we duplicate the skills array
  const duplicatedSkills = [...skills, ...skills];

  return (
    <div id="skills" className=" bg-black text-white flex flex-col items-center justify-center px-6 py-16">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-blue-300 py-10 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Skills
      </motion.h2>

      <motion.div
        className="w-full max-w-7xl px-5 py-10 md:py-16 rounded-2xl bg-gradient-to-r from-blue-900/20 to-green-950/20 shadow-lg overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {/*
          This style block defines the keyframes for the infinite scroll animation.
          It's embedded here for self-containment, but in a larger app, you might
          put this in a dedicated CSS file.
        */}
        <style>
          {`
          @keyframes scroll-x {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%); /* Move half the width of the duplicated content */
            }
          }

          .marquee-content {
            display: flex;
            width: fit-content; /* Allow content to dictate width */
            animation: scroll-x 20s linear infinite; /* Adjust duration for speed */
          }

          /* Responsive sizing for skill cards within the marquee */
          .skill-card {
            min-width: 150px; /* Minimum width for each card */
            margin: 0 10px; /* Space between cards */
            flex-shrink: 0; /* Prevent cards from shrinking */
          }

          @media (min-width: 640px) { /* sm */
            .skill-card {
              min-width: 180px;
              margin: 0 15px;
            }
          }

          @media (min-width: 768px) { /* md */
            .skill-card {
              min-width: 200px;
              margin: 0 15px;
            }
          }

          @media (min-width: 1024px) { /* lg */
            .skill-card {
              min-width: 220px;
              margin: 0 15px;
            }
          }

          @media (min-width: 1280px) { /* xl */
            .skill-card {
              min-width: 250px; /* Adjust as needed for 6 cards */
              margin: 0 30px;
            }
          }
          `}
        </style>

        <div className="marquee-content">
          {duplicatedSkills.map((skill, index) => (
            <div
              key={index} // Using index as key is acceptable here since items are static and duplicated
              className="skill-card flex flex-col items-center justify-center p-5  hover:scale-110 transition-transform duration-300 ease-in-out"
            >
              <img
                src={skill.imageUrl}
                alt={skill.name}
                className="w-24 h-24 object-contain rounded-full border-2 border-blue-500 p-2 bg-white/10"
                onError={(e) => { e.target.src = 'https://placehold.co/100x100?text=Error'; }}
              />
              <p className="mt-4 text-sm font-semibold text-blue-200">{skill.name}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
