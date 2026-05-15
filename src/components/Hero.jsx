import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center overflow-hidden px-10">
      
      <Parallax speed={-20}>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center md:text-left"
          >
            <h1 className="text-6xl font-bold mb-4">
              Hi, I'm Sanjana Medapati
            </h1>

            <p className="text-2xl text-pink-300 mb-6">
              Data Analyst | ML Enthusiast | Programmer
            </p>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <img
              src="/23A91A61G9.png"
              alt="Sanjana"
              className="w-80 h-80 rounded-full object-cover border-4 border-pink-500 shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

        </div>

      </Parallax>
    </section>
  );
}

export default Hero;