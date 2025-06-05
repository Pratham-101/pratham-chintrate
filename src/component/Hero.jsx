import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/img.jpeg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: delay, duration: 0.5 },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap items-center">
        {/* Text Content - Left Side */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-8 text-5xl md:text-6xl lg:text-7xl font-thin tracking-tight lg:mt-16"
            >
              Pratham
            </motion.h1>
            <motion.span 
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl md:text-3xl tracking-tight text-transparent mb-6"
            >
              Full Stack Developer
            </motion.span>
            <motion.div
              variants={container(1)}
              initial="hidden"
              animate="visible" 
              className="max-w-xl text-lg md:text-xl leading-relaxed tracking-tight"
            >
              {HERO_CONTENT.split('\n\n').map((paragraph, i) => (
                <p key={i} className="mb-4 last:mb-0">{paragraph}</p>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Image - Right Side - Unchanged from original */}
        <div className="w-full lg:w-1/2 lg:p-8 rounded-2xl overflow-hidden">
          <div className="flex justify-center">
            <motion.img 
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic} 
              alt="Pratham"
              className="rounded-2xl shadow-lg border-4 border-purple-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;