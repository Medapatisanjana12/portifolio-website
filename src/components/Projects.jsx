import { motion } from "framer-motion";

function Projects() {

  const projects = [
    {
      title: "Project 1",
      description: "Description"
    },
    {
      title: "Project 2",
      description: "Description"
    },
    {
      title: "Project 3",
      description: "Description"
    }
  ];

  return (
    <section id="projects" className="min-h-screen p-10">
      <h2 className="text-4xl font-bold mb-10">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-slate-800 p-6 rounded-xl"
          >
            <h3 className="text-2xl font-bold mb-4">
              {project.title}
            </h3>

            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;