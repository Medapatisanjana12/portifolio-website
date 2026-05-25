import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPython,
  FaJava,
  FaSnowflake,
  FaJs,
  FaAws,
} from "react-icons/fa";

import { motion } from "framer-motion";

function Skills() {
  return (
    <motion.section
      id="skills"
      className="min-h-screen p-10"

      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >

      <h2 className="text-4xl text-blue-500 font-bold mb-10">
        Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

        {/* HTML */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}

          className="bg-slate-800 p-6 rounded-xl text-center
          hover:bg-slate-700 hover:scale-105
          transition-all duration-300"
        >
          <FaHtml5
            size={50}
            className="mx-auto text-orange-500
            hover:rotate-12 transition-transform duration-300"
          />

          <p className="mt-4 text-white font-semibold">
            HTML
          </p>
        </motion.div>

        {/* CSS */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}

          className="bg-slate-800 p-6 rounded-xl text-center
          hover:bg-slate-700 hover:scale-105
          transition-all duration-300"
        >
          <FaCss3Alt
            size={50}
            className="mx-auto text-blue-500
            hover:rotate-12 transition-transform duration-300"
          />

          <p className="mt-4 text-white font-semibold">
            CSS
          </p>
        </motion.div>

        {/* Python */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}

          className="bg-slate-800 p-6 rounded-xl text-center
          hover:bg-slate-700 hover:scale-105
          transition-all duration-300"
        >
          <FaPython
            size={50}
            className="mx-auto text-yellow-400
            hover:rotate-12 transition-transform duration-300"
          />

          <p className="mt-4 text-white font-semibold">
            PYTHON
          </p>
        </motion.div>

        {/* Java */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}

          className="bg-slate-800 p-6 rounded-xl text-center
          hover:bg-slate-700 hover:scale-105
          transition-all duration-300"
        >
          <FaJava
            size={50}
            className="mx-auto text-red-500
            hover:rotate-12 transition-transform duration-300"
          />

          <p className="mt-4 text-white font-semibold">
            JAVA
          </p>
        </motion.div>

        {/* React */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}

          className="bg-slate-800 p-6 rounded-xl text-center
          hover:bg-slate-700 hover:scale-105
          transition-all duration-300"
        >
          <FaReact
            size={50}
            className="mx-auto text-cyan-400
            hover:rotate-12 transition-transform duration-300"
          />

          <p className="mt-4 text-white font-semibold">
            REACT
          </p>
        </motion.div>

        {/* JavaScript */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}

          className="bg-slate-800 p-6 rounded-xl text-center
          hover:bg-slate-700 hover:scale-105
          transition-all duration-300"
        >
          <FaJs
            size={50}
            className="mx-auto text-yellow-400
            hover:rotate-12 transition-transform duration-300"
          />

          <p className="mt-4 text-white font-semibold">
            JAVASCRIPT
          </p>
        </motion.div>

        {/* Snowflake */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          viewport={{ once: true }}

          className="bg-slate-800 p-6 rounded-xl text-center
          hover:bg-slate-700 hover:scale-105
          transition-all duration-300"
        >
          <FaSnowflake
            size={50}
            className="mx-auto text-blue-400
            hover:rotate-12 transition-transform duration-300"
          />

          <p className="mt-4 text-white font-semibold">
            SNOWFLAKE
          </p>
        </motion.div>

        {/* AWS */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}

          className="bg-slate-800 p-6 rounded-xl text-center
          hover:bg-slate-700 hover:scale-105
          transition-all duration-300"
        >
          <FaAws
            size={50}
            className="mx-auto text-orange-400
            hover:rotate-12 transition-transform duration-300"
          />

          <p className="mt-4 text-white font-semibold">
            AWS
          </p>
        </motion.div>

      </div>
    </motion.section>
  );
}

export default Skills;