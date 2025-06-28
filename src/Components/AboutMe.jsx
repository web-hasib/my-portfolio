import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";

const AboutMe = () => {

  
  return (
    <div id="about-me" className=" bg-black text-white flex flex-col items-center justify-center px-6 py-16">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-blue-300 py-10 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>
      <Fade direction="left" triggerOnce cascade damping={1}>

      <motion.div
        className="max-w-7xl text-sm leading-relaxed text-start space-y-6 px-5 py-10 md:py-16  rounded-2xl bg-gradient-to-l from-blue-900/20 to-green-950/20 roboto "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <p>
          Hey there! I’m <span className="text-blue-300 font-semibold">Hasibul Islam</span>. and I am a MERN stack developer and ( Frontend Specialist ) My
          programming journey kicked off in 2024, and let me tell you — it was a wild ride from day
          one. When I first started learning HTML and CSS, I seriously felt like I had unlocked the
          universe. I thought, “Wow, I must be some kind of NASA scientist now!” That’s how pumped I
          was. Even though I was just building simple web pages, in my head, I was creating
          groundbreaking, world-changing projects.
        </p>

        <p>
          But then came JavaScript. Oh boy, that hit me hard. I wasn’t from an IT background, so it
          felt like I was suddenly reading alien code. I was stuck, frustrated, and honestly, I
          thought about giving up more times than I can count. But deep down, I knew I didn’t start
          this journey just to walk away when things got tough. I kept going — step by step, bug by
          bug.
        </p>

        <p>
          Fast forward to now, I can proudly say I build <span className="text-blue-300 font-semibold">React</span> applications with
          confidence and joy. I’ve learned a lot: <span className="text-blue-300">HTML, CSS, Tailwind CSS, JavaScript, React, React Router, Firebase, Node.js, MongoDB, Express.js</span> and
          many other essential tools and libraries that make modern web development super exciting.
        </p>

        <p>
          You know what’s the best part? I still have that same energy from day one. Every new thing
          I learn feels like another NASA mission unlocked 🚀. I enjoy figuring things out, building
          cool stuff, and getting a little bit better every day. Whether it’s creating stylish user
          interfaces, solving backend problems, or connecting everything together — I’m always up
          for the challenge.
        </p>

        <p>
          I believe the journey is just as fun as the destination, and I’m super excited to keep
          exploring and growing in this amazing world of web development. Thanks for stopping by and
          getting to know me a bit! 😊
        </p>
      </motion.div>
      </Fade>
    </div>
  );
};

export default AboutMe;
