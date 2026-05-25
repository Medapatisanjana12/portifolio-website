import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      className="bg-slate-900 py-12 mt-10 border-t border-slate-700"

      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >

      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div
          className="grid md:grid-cols-2 gap-10 items-start"
        >

          {/* Left Side */}
          <motion.div

            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >

            <h2 className="text-3xl font-bold text-white mb-4">
              Let’s Connect
            </h2>

            <p className="text-gray-400 leading-7">
              Thank you for visiting my portfolio.
              Feel free to connect with me through
              GitHub, LinkedIn, or email.
            </p>

          </motion.div>

          {/* Suggestion Box */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}

            className="bg-slate-800 p-6 rounded-2xl"
          >

            <h3 className="text-2xl font-semibold mb-5">
              Suggestions
            </h3>

            {/* Name */}
            <input
              type="text"
              placeholder="Your Name"
              className="w-full mb-4 p-3 rounded-xl
              bg-slate-700 text-white
              outline-none"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Your Email"
              className="w-full mb-4 p-3 rounded-xl
              bg-slate-700 text-white
              outline-none"
            />

            {/* Suggestion */}
            <textarea
              placeholder="Write your suggestion..."
              rows="4"
              className="w-full mb-4 p-3 rounded-xl
              bg-slate-700 text-white
              outline-none resize-none"
            ></textarea>

            {/* Button */}
            <button
              className="px-5 py-2 rounded-xl
              bg-gradient-to-r from-cyan-500 to-blue-500
              hover:from-pink-500 hover:to-purple-600
              transition duration-300 font-semibold"
            >
              Send Suggestion
            </button>

          </motion.div>

        </div>

        {/* Bottom Line */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}

          className="border-t border-slate-700 mt-10 pt-6
          flex flex-col md:flex-row
          items-center justify-between gap-4"
        >

          <p className="text-gray-400 text-sm">
            © 2026 Sanjana Medapati. All rights reserved.
          </p>

          <p
            className="text-blue-400 font-semibold"
          >
            @Sanjana Medapati
          </p>

        </motion.div>

      </div>

    </motion.footer>
  );
}

export default Footer;