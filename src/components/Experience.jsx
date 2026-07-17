import { motion } from "framer-motion";
import { FaBuilding, FaCalendarAlt, FaCheckCircle, FaBriefcase } from "react-icons/fa";
import { experiences } from "../data/portfolio";

function Experience() {
  return (
    <section id="experience" className="section bg-slate-900/5">
      {/* Background Glow Blobs */}
      <div className="glow-blob bg-purple-500 w-[300px] h-[300px] bottom-[10%] left-[-5%]" />

      <div className="section-inner">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start mb-12">
          <div>
            <p className="eyebrow">Experience</p>
            <h2 className="section-title">Work Experience</h2>
          </div>
          <p className="section-copy lg:mt-6">
            Hands-on technical internships focused on building enterprise automations, scripting exploratory analytics dashboards, preparing databases, and presenting insights to leadership teams.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="timeline mt-10 max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.article
              key={`${experience.company}-${experience.role}`}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="timeline-item pb-7 last:pb-0 group"
            >
              {/* Chronological Node indicator */}
              <span className="timeline-node" />

              {/* Main Card */}
              <div className="card p-4 sm:p-5.5 hover:border-[var(--purple)]">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between border-b border-[var(--border)] pb-3.5">
                  <div className="flex items-start gap-3.5">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-purple-500/10 text-lg text-[var(--purple)] border border-purple-500/20 shadow-inner">
                      <FaBriefcase />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-[var(--text)] tracking-tight font-outfit group-hover:text-[var(--purple)] transition-colors duration-200">
                        {experience.role}
                      </h3>
                      <p className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-[var(--muted)]">
                        <FaBuilding className="text-[10px] text-[var(--accent)]" />
                        {experience.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 sm:flex-col sm:items-end">
                    <span className="badge badge-active text-[10px] py-0.5 px-2">
                      {experience.type}
                    </span>
                    <span className="badge text-[10px] font-semibold tracking-wide flex items-center gap-1 bg-transparent border-[var(--border)] py-0.5 px-2">
                      <FaCalendarAlt className="text-[var(--faint)] text-[10px]" />
                      {experience.duration}
                    </span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mt-4 grid gap-2.5">
                  {experience.highlights.map((highlight) => (
                    <div 
                      key={highlight} 
                      className="flex items-start gap-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface-strong)]/50 p-3 text-[12px] leading-relaxed text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--text)] transition-all duration-200"
                    >
                      <FaCheckCircle className="text-blue-400 mt-0.5 shrink-0 text-xs" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
