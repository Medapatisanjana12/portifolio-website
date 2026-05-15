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

function Skills() {
  return (
    <section id="skills" className="min-h-screen p-10">

      <h2 className="text-4xl text-blue-500 font-bold mb-10">
        Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

        {/* HTML */}
        <div
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
        </div>

        {/* CSS */}
        <div
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
        </div>

        {/* Python */}
        <div
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
        </div>

        {/* Java */}
        <div
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
        </div>

        {/* React */}
        <div
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
        </div>

        {/* JavaScript */}
        <div
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
        </div>

        {/* Snowflake */}
        <div
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
        </div>

        {/* AWS */}
        <div
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
        </div>

      </div>
    </section>
  );
}

export default Skills;