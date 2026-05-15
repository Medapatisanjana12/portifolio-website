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
      <h2 className="text-4xl text-blue-500 font-bold mb-6">About Me</h2>

      <p className="text-lg leading-8 text-gray-300">
        I’m a strong programmer with a deep interest in problem solving
         and competitive programming, actively working toward becoming a high-level competitive coder.
         Alongside this, I work as a data analyst with solid hands-on experience in Power BI, 
         Power Apps, Power Automate, Excel, and SharePoint. I enjoy building data-driven dashboards and low-code applications that solve real business problems.
      </p>
    </motion.section>
  );
}

export default About;