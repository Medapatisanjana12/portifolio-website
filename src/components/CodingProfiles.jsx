import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaTerminal } from "react-icons/fa";
import { SiLeetcode, SiCodechef, SiGeeksforgeeks } from "react-icons/si";
import { codingProfiles } from "../data/portfolio";

function CodingProfiles() {
  // Map platform strings to corresponding React icons
  const iconMap = {
    LeetCode: SiLeetcode,
    CodeChef: SiCodechef,
    GeeksforGeeks: SiGeeksforgeeks,
  };

  return (
    <section id="coding-profiles" className="section relative overflow-hidden bg-slate-900/5">
      {/* Background glow */}
      <div className="glow-blob bg-purple-500 w-[300px] h-[300px] top-[15%] right-[10%]" />
      <div className="glow-blob bg-blue-500 w-[250px] h-[250px] bottom-[15%] left-[5%]" />

      <div className="section-inner">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end mb-12">
          <div className="max-w-3xl">
            <p className="eyebrow">Problem Solving</p>
            <h2 className="section-title font-outfit">Coding Profiles</h2>
            <p className="section-copy">
              A record of algorithmic problem-solving across popular competitive coding platforms, showing rating milestones and solved counts.
            </p>
          </div>
          <div className="mono text-xs font-bold uppercase tracking-wider text-[var(--faint)] bg-[var(--accent-soft)] border border-teal-500/20 px-4 py-2 rounded-xl">
            🏆 1,100+ Problems Solved Combined
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {codingProfiles.map((profile, index) => {
            const Icon = iconMap[profile.platform] || FaTerminal;
            
            return (
              <motion.a
                key={profile.platform}
                href={profile.link}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`card p-6 group flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 bg-gradient-to-br ${profile.color} ${profile.hoverColor}`}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-3 border-b border-[var(--border)] pb-4">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-slate-950/40 text-xl border border-[var(--border)]">
                        <Icon className="group-hover:scale-110 transition-transform duration-200" />
                      </span>
                      <h3 className="text-lg font-bold text-[var(--text)] font-outfit tracking-tight">
                        {profile.platform}
                      </h3>
                    </div>
                    <FaExternalLinkAlt className="text-xs text-[var(--faint)] group-hover:text-[var(--text)] transition-colors" />
                  </div>

                  {/* Profile stats */}
                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold tracking-tight text-[var(--text)] font-outfit">
                      {profile.solved}
                    </span>
                    <span className="text-xs font-semibold text-[var(--muted)] uppercase tracking-wider mono">
                      Problems Solved
                    </span>
                  </div>

                  <p className="mt-3 text-xs font-semibold text-[var(--muted)]">
                    Username: <span className="mono text-[var(--text)]">{profile.username}</span>
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--border)] flex items-center justify-between">
                  <span className="badge bg-[var(--bg-soft)] text-xs font-bold border-[var(--border)]">
                    {profile.rating}
                  </span>
                  <span className="text-xs font-bold text-[var(--accent)] group-hover:underline flex items-center gap-1">
                    View Profile →
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CodingProfiles;
