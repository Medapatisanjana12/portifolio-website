import { FaHtml5, FaCss3Alt, FaReact, FaGithub } from "react-icons/fa";

function Skills() {
  return (
    <section id="skills" className="min-h-screen p-10">
      <h2 className="text-4xl font-bold mb-10">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="bg-slate-800 p-6 rounded-xl text-center">
          <FaHtml5 size={50} className="mx-auto" />
          <p className="mt-4">HTML</p>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl text-center">
          <FaCss3Alt size={50} className="mx-auto" />
          <p className="mt-4">CSS</p>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl text-center">
          <FaReact size={50} className="mx-auto" />
          <p className="mt-4">React</p>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl text-center">
          <FaGithub size={50} className="mx-auto" />
          <p className="mt-4">GitHub</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;