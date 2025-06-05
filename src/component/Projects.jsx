import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-6xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((Project, index) => (
          <div key={index} className="mb-16 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={Project.image}
                width={150}
                height={150}
                alt={Project.title}
                className="mb-6 round"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-4 text-3xl font-semibold text-purple-400">{Project.title}</h6>
              <p className="mb-6 text-xl text-neutral-300">{Project.description}</p>
              <div className="flex flex-wrap gap-2">
                {Project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 rounded bg-neutral-800/50 px-4 py-2 text-lg font-medium text-purple-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {/* <a
                href={Project.link} // Assuming each project has a link property
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2 text-blue-500 hover:underline"
              >
                Learn More
              </a> */}
            </motion.div>
          </div>
        ))}
        <div />
      </div>
    </div>
  );
};

export default Projects;
