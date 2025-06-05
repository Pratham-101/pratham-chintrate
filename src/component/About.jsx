import aboutImg from "../assets/anime.jpg";
import { ABOUT_TEXT } from '../constants';
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 py-20 px-4 lg:px-0">
      <h1 className="mb-16 text-center text-5xl md:text-6xl font-bold">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          About
        </span>{" "}
        <span className="text-neutral-400">Me</span>
      </h1>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
        {/* Image Container */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-[55%] flex justify-center"
        >
          <div className="relative w-full max-w-3xl overflow-hidden rounded-3xl shadow-2xl border-2 border-neutral-700">
            <img
              className="w-full h-full object-cover"
              src={aboutImg}
              alt="about"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-3xl"></div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-[55%] flex justify-center"
        >
          <div className="rounded-3xl shadow-2xl border border-neutral-700 bg-neutral-900/70 backdrop-blur-lg p-8 w-full max-w-3xl">
            {ABOUT_TEXT.split('\n\n').map((paragraph, index) => {
              if (paragraph.includes('Check out my resume')) {
                return (
                  <div key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
                );
              }
              return (
                <p key={index} className="text-neutral-300 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
