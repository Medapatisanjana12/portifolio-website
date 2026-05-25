import { motion } from "framer-motion";

function Certifications() {
  return (
    <motion.section
      id="certifications"
      className="min-h-screen p-10"

      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      
      <h2 className="text-5xl text-blue-500 font-bold mb-12">
        Certifications
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

        {/* AWS */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}

          className="bg-slate-800 h-auto p-4 rounded-3xl text-center
          hover:bg-slate-700 hover:-translate-y-1
          transition-all duration-300 flex flex-col justify-center"
        >
          <p className="text-xl font-bold text-white mb-4">
            AWS AI Practitioner
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-5">
            <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm">
              AWS
            </span>

            <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm">
              Cloud
            </span>

            <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
              AI
            </span>
          </div>

          <a
            href="https://drive.google.com/file/d/1y_mmMDhnK6LhamrYIPd3scg8FTAW5tzf/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit mx-auto px-4 py-2 bg-yellow-500
            hover:bg-blue-400 text-white rounded-xl
            transition duration-300 text-sm font-semibold"
          >
            View Certificate
          </a>
        </motion.div>

        {/* Java */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}

          className="bg-slate-800 h-auto p-4 rounded-3xl text-center
          hover:bg-slate-700 hover:-translate-y-1
          transition-all duration-300 flex flex-col justify-center"
        >
          <p className="text-xl font-bold text-white mb-4">
            Oracle Java Associate Foundations
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-5">
            <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-sm">
              Java
            </span>

            <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
              OOP
            </span>

            <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">
              Oracle
            </span>
          </div>

          <a
            href="https://drive.google.com/file/d/1--3FNpMiyO2GKm31xBZbrbCymjx9Qiri/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit mx-auto px-4 py-2 bg-blue-500
            hover:bg-grey-100 text-white rounded-xl
            transition duration-300 text-sm font-semibold"
          >
            View Certificate
          </a>
        </motion.div>

        {/* DBMS */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}

          className="bg-slate-800 h-auto p-4 rounded-3xl text-center
          hover:bg-slate-700 hover:-translate-y-1
          transition-all duration-300 flex flex-col justify-center"
        >
          <p className="text-xl font-bold text-white mb-4">
            Oracle Database Associate Foundations
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-5">
            <span className="bg-violet-500/20 text-violet-300 px-3 py-1 rounded-full text-sm">
              SQL
            </span>

            <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm">
              DBMS
            </span>

            <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">
              Oracle
            </span>
          </div>

          <a
            href="https://drive.google.com/file/d/1_7tYT6BYrYMJQC-S8DsC3QDgV-OOl84B/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit mx-auto px-4 py-2 bg-violet-500
            hover:bg-blue-400 text-white rounded-xl
            transition duration-300 text-sm font-semibold"
          >
            View Certificate
          </a>
        </motion.div>

        {/* Snowflake */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}

          className="bg-slate-800 h-auto p-4 rounded-3xl text-center
          hover:bg-slate-700 hover:-translate-y-1
          transition-all duration-300 flex flex-col justify-center"
        >
          <p className="text-xl font-bold text-white mb-4">
            Snowflake Associate
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-5">
            <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm">
              Snowflake
            </span>

            <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
              Cloud
            </span>

            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
              Data
            </span>
          </div>

          <a
            href="https://drive.google.com/file/d/16edMqT4eNGpjj9REfmNoIQS7L1jcAPR_/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit mx-auto px-4 py-2 bg-purple-500
            hover:bg-blue-400 text-white rounded-xl
            transition duration-300 text-sm font-semibold"
          >
            View Certificate
          </a>
        </motion.div>

        {/* Python */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}

          className="bg-slate-800 h-auto p-4 rounded-3xl text-center
          hover:bg-slate-700 hover:-translate-y-1
          transition-all duration-300 flex flex-col justify-center"
        >
          <p className="text-xl font-bold text-white mb-4">
            Python Essentials
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-5">
            <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm">
              Python
            </span>

            <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm">
              Programming
            </span>

            <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm">
              Basics
            </span>
          </div>

          <a
            href="https://drive.google.com/file/d/16dSv4a5ms-g0eTdSRkdrcFsIa3l7IzrQ/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit mx-auto px-4 py-2 bg-orange-500
            hover:bg-blue-400 text-white rounded-xl
            transition duration-300 text-sm font-semibold"
          >
            View Certificate
          </a>
        </motion.div>

        {/* C++ */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}

          className="bg-slate-800 h-auto p-4 rounded-3xl text-center
          hover:bg-slate-700 hover:-translate-y-1
          transition-all duration-300 flex flex-col justify-center"
        >
          <p className="text-xl font-bold text-white mb-4">
            C++ Essentials
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-5">
            <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
              C++
            </span>

            <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">
              DSA
            </span>

            <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm">
              Coding
            </span>
          </div>

          <a
            href="https://drive.google.com/file/d/16dSv4a5ms-g0eTdSRkdrcFsIa3l7IzrQ/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit mx-auto px-4 py-2 bg-pink-500
            hover:bg-blue-400 text-white rounded-xl
            transition duration-300 text-sm font-semibold"
          >
            View Certificate
          </a>
        </motion.div>

        {/* HTML CSS */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          viewport={{ once: true }}

          className="bg-slate-800 h-auto p-4 rounded-3xl text-center
          hover:bg-slate-700 hover:-translate-y-1
          transition-all duration-300 flex flex-col justify-center"
        >
          <p className="text-xl font-bold text-white mb-4">
            IT Specialist HTML and CSS
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-5">
            <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm">
              HTML
            </span>

            <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
              CSS
            </span>

            <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">
              Web
            </span>
          </div>

          <a
            href="https://drive.google.com/file/d/1gunF7uifkMpXTtG_0vPQH2FydgDNyM_Q/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit mx-auto px-4 py-2 bg-green-500
            hover:bg-blue-400 text-white rounded-xl
            transition duration-300 text-sm font-semibold"
          >
            View Certificate
          </a>
        </motion.div>

        {/* OS */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}

          className="bg-slate-800 h-auto p-4 rounded-3xl text-center
          hover:bg-slate-700 hover:-translate-y-1
          transition-all duration-300 flex flex-col justify-center"
        >
          <p className="text-xl font-bold text-white mb-4">
            Operating Systems Essentials
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-5">
            <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-sm">
              OS
            </span>

            <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
              Linux
            </span>

            <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">
              Systems
            </span>
          </div>

          <a
            href="https://your-certificate-link.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit mx-auto px-4 py-2 bg-red-500
            hover:bg-blue-400 text-white rounded-xl
            transition duration-300 text-sm font-semibold"
          >
            View Certificate
          </a>
        </motion.div>

      </div>
    </motion.section>
  );
}

export default Certifications;