import React from 'react';
import Hero from '../Components/Hero';
import AboutMe from '../Components/AboutMe';
import Education from '../Components/Education';
import Skills from '../Components/Skills';
import Projects from '../Components/Projects/Projects';
import Contact from '../Components/Contact';


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Education></Education>

            <Projects></Projects>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;