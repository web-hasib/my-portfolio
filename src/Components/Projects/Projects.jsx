import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import { motion } from "framer-motion";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Resolve the promise here
    fetch('/project.json')
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      });
  }, []);
// console.log(projects);
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div id='projects'>
       <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-blue-300 py-10 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>
      <ul>
        {projects.map((project, index) => (
            <div key={index} className='px-6'>

                <ProjectCard  project={project} ></ProjectCard>
            </div>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
