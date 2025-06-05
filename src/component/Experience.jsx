import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 py-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="mb-20 text-center text-6xl"
      >
        Experience
      </motion.h2>
      <div className="space-y-16">
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="flex flex-wrap items-start">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/4 mb-4 lg:mb-0"
            >
              <p className="text-2xl text-neutral-500">{experience.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-3/4"
            >
              <h3 className="mb-2 text-3xl font-semibold text-purple-400">
                {experience.role}
              </h3>
              <h4 className="mb-4 text-2xl text-neutral-400">
                {experience.company}
              </h4>
              <p className="mb-4 text-xl leading-relaxed text-neutral-300">
                {experience.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="rounded bg-neutral-800/50 px-4 py-2 text-lg font-medium text-purple-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
