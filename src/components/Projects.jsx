import { motion } from "framer-motion";

function Projects() {

  const projects = [
    {
      title: "Movie Recommendation System",
      description:
        "A system that recommends movies based on user preferences and viewing history.",
    },
    {
      title: "LogPing",
      description:
        "A real-time logging and monitoring tool for lab entry.",
    },
    {
      title: "Livetech",
      description:
        "A live tech support tool for real-time assistance.",
    },
    {
      title: "Student Progress Tracker",
      description:
        "A tool for tracking and managing student academic progress.",
    },
    {
      title: "Chatbot for Student Queries",
      description:
        "A chatbot designed to assist students with academic questions and concerns.",
    },
    {
      title: "Customer Feedback Analysis",
      description:
        "A system for analyzing customer feedback and improving products/services.",
    },
  ];

  return (
    <section id="projects" className="min-h-screen p-10">

      <h2 className="text-4xl text-blue-500 font-bold mb-10">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {projects.map((project, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}

            className="bg-blue-950 p-6 rounded-xl
            hover:bg-blue-900 hover:-translate-y-1
            transition-all duration-300"
          >

            <h3 className="text-2xl font-bold mb-4">
              {project.title}
            </h3>

            <p className="text-gray-300 mb-6">
              {project.description}
            </p>

            {/* Button */}
            <button
              className="px-4 py-2 bg-gradient-to-r from-cyan-400 hover:to-blue-500 text-white
              hover:from-pink-500 hover:to-purple-600 text-black font-bold
              rounded-lg transition duration-300
              font-semibold"
            >
                
              View Project
            </button>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Projects;