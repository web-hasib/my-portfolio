import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";

const Education = () => {
  return (
      
      <div id="education" className=" bg-black text-white flex flex-col items-center justify-center px-6 pb-10">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-blue-300 py-10 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Education
      </motion.h2>
        <Fade direction="left" triggerOnce cascade damping={1}>

      <motion.div
        className="max-w-7xl text-base leading-relaxed text-start space-y-6 px-5 py-10 md:py-16 rounded-2xl bg-gradient-to-l from-blue-900/20 to-green-950/20 roboto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <p>
          Hey there! I’m currently pursuing my Bachelor’s degree (Honors) at <span className="text-blue-300 font-semibold">Bhawal Badre Alam Government College, Gazipur</span>. I’m majoring in <span className="text-blue-300 font-semibold">Management</span>, and to be honest, this field has taught me a lot about leadership, teamwork, and strategic thinking.
        </p>

        <p>
          Although my academic journey is focused on Management, my heart beats for programming and technology. It’s been quite an exciting ride balancing both worlds — one minute I’m studying business theories and the next I’m building web applications. I truly enjoy this unique mix because I believe having management knowledge alongside technical skills will help me solve real-world problems more efficiently in the future.
        </p>

        <p>
          Being a student here has given me opportunities to grow not just academically, but personally too. It’s where I’ve learned how to manage my time, stay committed, and constantly push myself to improve. I’m grateful for this phase of life and super excited about what’s coming next, both in my studies and in my tech journey.
        </p>
      </motion.div>
    </Fade>
    </div>
  );
};

export default Education;