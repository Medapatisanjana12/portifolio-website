import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      id="about"
      className="min-h-screen p-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold mb-6">About Me</h2>

      <p className="text-lg leading-8 text-gray-300">
        I am a passionate developer interested in web development,
        machine learning, automation workflows, and cloud technologies.
      </p>
    </motion.section>
  );
}

export default About;