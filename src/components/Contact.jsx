import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.section
      id="contact"
      className="min-h-screen p-10"

      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >

      <h2 className="text-4xl text-blue-500 font-bold mb-10">
        Contact
      </h2>

      <div className="space-y-6">

        {/* Email */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}

          className="flex items-center gap-4
          bg-slate-800 p-5 rounded-xl
          hover:bg-slate-700 transition duration-300"
        >
          <FaEnvelope
            size={28}
            className="text-red-400"
          />

          <p className="text-lg text-white">
            medapatisanjana0212@gmail.com
          </p>
        </motion.div>

        {/* GitHub */}
        <motion.a
          href="https://github.com/Medapatisanjana12"
          target="_blank"
          rel="noopener noreferrer"

          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}

          className="flex items-center gap-4
          bg-slate-800 p-5 rounded-xl
          hover:bg-slate-700 transition duration-300"
        >
          <FaGithub
            size={28}
            className="text-white"
          />

          <p className="text-lg text-white">
            GitHub
          </p>
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          href="https://www.linkedin.com/in/sanjana-medapati-65744b2b4/"
          target="_blank"
          rel="noopener noreferrer"

          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}

          className="flex items-center gap-4
          bg-slate-800 p-5 rounded-xl
          hover:bg-slate-700 transition duration-300"
        >
          <FaLinkedin
            size={28}
            className="text-blue-400"
          />

          <p className="text-lg text-white">
            LinkedIn
          </p>
        </motion.a>

        {/* Mobile Number */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}

          className="flex items-center gap-4
          bg-slate-800 p-5 rounded-xl
          hover:bg-slate-700 transition duration-300"
        >
          <FaPhoneAlt
            size={24}
            className="text-green-400"
          />

          <p className="text-lg text-white">
            +91 966633****
          </p>
        </motion.div>

      </div>

    </motion.section>
  );
}

export default Contact;