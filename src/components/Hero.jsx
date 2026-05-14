import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

function Hero() {
  return (
    <section className="h-screen flex items-center justify-center text-center overflow-hidden">
      <Parallax speed={-20}>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl font-bold mb-4">
            Hi, I'm Sanjana
          </h1>

          <p className="text-2xl text-gray-300 mb-6">
            Full Stack Developer
          </p>
        </motion.div>
      </Parallax>
    </section>
  );
}

export default Hero;