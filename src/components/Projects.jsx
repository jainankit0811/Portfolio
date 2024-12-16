import { motion } from "framer-motion";
import { PROJECTS } from "../constants";

const Projects = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl">Projects</h1>
            <div>
                {PROJECTS.map((project, index) => (
                    <motion.div
                        key={index}
                        className="mb-8 flex flex-wrap lg:justify-center"
                        initial={{ opacity: 0, y: 50 }} // Initial state: hidden and slightly below
                        whileInView={{ opacity: 1, y: 0 }} // When in view, move to normal position and fade in
                        viewport={{ once: true, amount: 0.3 }} // Trigger animation once the component is 30% in view
                        transition={{ delay: 0.2 * index, type: "spring", stiffness: 100 }}
                    >
                        <div className="w-full lg:w-1/4">
                            <motion.img
                                src={project.image}
                                width={150}
                                height={150}
                                alt={project.title}
                                className="mb-6 rounded"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.3 * index, duration: 0.5 }}
                            />
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold">{project.title}</h6>
                            <p className="mb-4 text-neutral-400">{project.description}</p>
                            <div>
                                {project.technologies.map((tech, techIndex) => (
                                    <motion.span
                                        key={techIndex}
                                        className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: 0.2 * techIndex, duration: 0.3 }}
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
