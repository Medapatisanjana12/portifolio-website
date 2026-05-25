import { motion } from "framer-motion";

function Projects() {

  const projects = [
    {
      title: "Movie Recommendation System",
      description:
        "Developed a Machine Learning-based Sentiment Analysis Model that takes user Movie reviews and classifies them into either positive or negative.",
      link: "https://movie-reviews-0dtt.onrender.com/",
      tech: ["Python", "Flask", "Machine Learning"],
    },

    {
      title: "LogPing",
      description:
        "Automated lab attendance tracking with real-time percentage calculation and alert notifications, reducing manual effort for faculty.",
      link: "https://app.powerbi.com/reportEmbed?reportId=a5067cf2-fdf9-4362-afd7-97c4ea17143d&autoAuth=true&ctid=7359f896-71e2-4dae-b8a3-15cdf97f2f10",
      tech: ["Power BI", "Automation", "Analytics"],
    },

    {
      title: "Livetech",
      description:
        "A tool where we can get every day AI news and updates in the form of a newsletter, which is sent to the users email every day.",
      link: "https://livetech-newsletter.onrender.com/",
      tech: ["React", "Node.js", "API"],
    },

    {
      title: "Student Progress Tracker",
      description:
        "A tool for tracking and managing student academic progress.",
      link: "https://app.powerbi.com/reportEmbed?reportId=example-report-id&autoAuth=true&ctid=7359f896-71e2-4dae-b8a3-15cdf97f2f10",
      tech: ["Power BI", "Dashboard", "Data Analysis"],
    },

    {
      title: "Chatbot for Student Queries",
      description:
        "Designed and deployed an interactive chatbot using Python, Flask, Pandas, and Scikit-learn that answers user queries based on a trained dataset using NLP techniques.",
      link: "https://chat-bot-lif1.onrender.com",
      tech: ["Python", "Flask", "NLP"],
    },

    {
      title: "Customer Feedback Analysis",
      description:
        "Built an interactive Dashboard for Customer Order data using effective visuals representing Sales trends, Category-wise sales, and Payment status.",
      link: "https://app.powerbi.com/reportEmbed?reportId=aadabb92-d727-4c1c-a285-6071764aaf55&autoAuth=true&ctid=7359f896-71e2-4dae-b8a3-15cdf97f2f10",
      tech: ["Power BI", "Visualization", "Analytics"],
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

            className="bg-blue-950 p-4 rounded-xl
            hover:bg-blue-900 hover:-translate-y-1
            transition-all duration-300"
          >

            <h3 className="text-2xl font-bold mb-4">
              {project.title}
            </h3>

            <p className="text-gray-300 mb-4">
              {project.description}
            </p>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 mb-6">

              {project.tech.map((item, i) => (

                <span
                  key={i}
                  className="px-3 py-1 text-sm rounded-full
                  bg-cyan-400/20 text-cyan-300 border border-cyan-400/30"
                >
                  {item}
                </span>

              ))}

            </div>

            {/* Button */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2
              bg-gradient-to-r from-cyan-400 to-blue-500
              hover:from-pink-500 hover:to-purple-600
              text-white font-bold rounded-lg
              transition duration-300"
            >
              View Project
            </a>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Projects;