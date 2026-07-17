import { motion } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt, FaTrophy, FaChevronRight } from "react-icons/fa";
import { achievements, certifications } from "../data/portfolio";

function Certifications() {
  return (
    <section id="certifications" className="section relative overflow-hidden">
      {/* Background Glow Blobs */}
      <div className="glow-blob bg-blue-500 w-[300px] h-[300px] top-[30%] left-[-10%]" />
      
      <div className="section-inner">
        <div className="max-w-3xl mb-12">
          <p className="eyebrow">Certifications and achievements</p>
          <h2 className="section-title font-outfit">Certifications</h2>
          <p className="section-copy">
            Rigorous certifications across cloud architecture, data warehouse modeling, enterprise solutions, and programming.
          </p>
        </div>

        {/* Certifications Grid - Spans Full Width */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-10">
          {certifications.map((cert, index) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              viewport={{ once: true }}
              className="card p-5 group flex flex-col justify-between hover:border-[var(--accent)] hover:shadow-md"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-blue-500/10 text-lg text-[var(--accent)] border border-blue-500/20 shadow-inner group-hover:scale-105 transition-transform">
                    <FaCertificate />
                  </span>
                  <FaExternalLinkAlt className="text-xs text-[var(--faint)] group-hover:text-[var(--accent)] transition-colors" />
                </div>
                <p className="mt-4 mono text-[10px] font-bold uppercase tracking-wider text-[var(--faint)]">{cert.provider}</p>
                <h3 className="mt-2 text-sm font-bold leading-snug text-[var(--text)] font-outfit group-hover:text-[var(--accent)] transition-colors duration-200">
                  {cert.title}
                </h3>
              </div>

              <div className="mt-5 flex flex-wrap gap-1.5 pt-3 border-t border-[var(--border)]">
                {cert.tags.map((tag) => (
                  <span key={tag} className="badge bg-transparent text-[10px] font-semibold py-0.5 px-2 border-[var(--border)] text-[var(--muted)]">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

        {/* Competitive Coding Horizontal Module - Spans Full Width */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card mt-8 p-5 bg-slate-900/10 hover:border-[var(--purple)]"
        >
          <div className="flex items-center gap-3 pb-4 border-b border-[var(--border)] mb-5">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-purple-500/10 text-base text-[var(--purple)] border border-purple-500/20 shadow-inner">
              <FaTrophy />
            </span>
            <h3 className="text-base font-bold text-[var(--text)] font-outfit tracking-tight">Competitive Coding Highlights</h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((achievement, idx) => (
              <div 
                key={idx} 
                className="flex gap-3 items-start border-l-2 border-purple-500/30 pl-3 py-1 text-xs leading-relaxed text-[var(--muted)] hover:border-purple-500 hover:text-[var(--text)] transition-all duration-200"
              >
                <FaChevronRight className="text-purple-400 mt-0.5 shrink-0 text-[9px]" />
                <span>{achievement}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Certifications;
