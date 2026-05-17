import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      id="about"
      className="min-h-screen px-10 py-20 flex items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >

      <div className="flex flex-col md:flex-row items-center gap-16">

        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >

          <img
            src="/mine.png"
            alt="Sanjana"
            className="w-80 h-80 rounded-3xl object-cover
            border-4 border-blue-500 shadow-lg
            hover:scale-105 transition duration-300"
          />

        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl"
        >

          <h2 className="text-4xl text-blue-500 font-bold mb-6">
            About Me
          </h2>

          <p className="text-lg leading-8 text-gray-300">
            I’m a strong programmer with a deep interest in
            problem solving and competitive programming,
            actively working toward becoming a high-level
            competitive coder.

            Alongside this, I work as a data analyst with
            solid hands-on experience in Power BI,
            Power Apps, Power Automate, Excel,
            and SharePoint.

            I enjoy building data-driven dashboards
            and low-code applications that solve
            real business problems.
          </p>

        </motion.div>

      </div>

    </motion.section>
  );
}

export default About;