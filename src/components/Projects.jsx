import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaCode, FaRocket } from "react-icons/fa";
import { projects, profile } from "../data/portfolio";

function Projects() {
  return (
    <section id="projects" className="section relative overflow-hidden">
      {/* Background glow */}
      <div className="glow-blob bg-blue-500 w-[350px] h-[350px] top-[20%] right-[-10%]" />
      <div className="glow-blob bg-purple-500 w-[350px] h-[350px] bottom-[20%] left-[-10%]" />

      <div className="section-inner">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="eyebrow">Featured projects</p>
            <h2 className="section-title font-outfit">Featured Projects</h2>
            <p className="section-copy">
              A list of selected projects built around practical engineering problems, model configurations, dashboard architecture, and deployment pipelines.
            </p>
          </div>
          <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-secondary shrink-0 rounded-xl hover:border-[var(--accent)]">
            <FaGithub /> More on GitHub
          </a>
        </div>

        <div className="mt-10 grid gap-5 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              viewport={{ once: true }}
              className="card p-4 sm:p-5.5 hover:border-[var(--accent)] group flex flex-col justify-between"
            >
              <div>
                {/* Card Header metadata */}
                <div className="flex items-center justify-between gap-3 border-b border-[var(--border)] pb-3">
                  <span className="badge badge-active text-[9px] uppercase font-bold tracking-wider py-0.5 px-2">
                    {project.category}
                  </span>
                  <span className="mono text-[10px] font-bold uppercase tracking-wider text-[var(--faint)]">
                    Project {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
 
                {/* Card Title & Copy */}
                <h3 className="text-lg font-bold tracking-tight text-[var(--text)] font-outfit mt-3 group-hover:text-[var(--accent)] transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">
                  {project.description}
                </p>
 
                {/* Impact Tag (Recruiter magnet) */}
                <div className="mt-4 rounded-lg border border-blue-500/10 bg-blue-500/5 p-3 flex gap-2.5 items-start">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-blue-500/10 text-blue-400 text-xs border border-blue-500/20">
                    <FaRocket />
                  </span>
                  <div>
                    <p className="mono text-[9px] font-bold uppercase tracking-wider text-blue-400">Project Impact & Outcome</p>
                    <p className="mt-0.5 text-[11px] font-semibold leading-relaxed text-[var(--text)]">{project.impact}</p>
                  </div>
                </div>
              </div>
 
              {/* Tech stack & Action row */}
              <div className="mt-5 pt-4 border-t border-[var(--border)] flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="mono text-[9px] font-bold uppercase tracking-wider text-[var(--faint)] mb-1.5">Tech stack</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech) => (
                      <span key={tech} className="badge bg-[var(--bg-soft)] text-[10px] border-[var(--border)] font-semibold text-[var(--muted)] py-0.5 px-2">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
 
                <div className="flex flex-wrap gap-2 mt-3 sm:mt-0">
                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-secondary py-1.5 px-3 text-[11px] font-bold rounded-xl min-h-[2.25rem] flex-grow sm:flex-grow-0">
                      <FaCode /> View Code
                    </a>
                  ) : (
                    <span className="btn btn-secondary cursor-default py-1.5 px-3 text-[11px] font-semibold rounded-xl text-[var(--faint)] bg-slate-900/10 border-[var(--border)] min-h-[2.25rem] flex-grow sm:flex-grow-0" title="Enterprise or client proprietary code">
                      Private source
                    </span>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-primary py-1.5 px-3 text-[11px] font-bold rounded-xl min-h-[2.25rem] flex-grow sm:flex-grow-0">
                      <FaExternalLinkAlt className="text-[9px]" /> Live Demo
                    </a>
                  )}
                </div>
              </div>

            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
