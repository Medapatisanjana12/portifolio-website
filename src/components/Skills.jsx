import { motion } from "framer-motion";
import { skills } from "../data/portfolio";

function Skills() {
  // Map index to a custom gradient theme for categories
  const themes = [
    "hover:border-blue-500/30 group-hover:text-blue-400 bg-blue-500/5",
    "hover:border-purple-500/30 group-hover:text-purple-400 bg-purple-500/5",
    "hover:border-sky-500/30 group-hover:text-sky-400 bg-sky-500/5",
    "hover:border-indigo-500/30 group-hover:text-indigo-400 bg-indigo-500/5",
    "hover:border-emerald-500/30 group-hover:text-emerald-400 bg-emerald-500/5",
  ];

  return (
    <section id="skills" className="section relative overflow-hidden">
      {/* Background glow */}
      <div className="glow-blob bg-blue-500 w-[300px] h-[300px] top-[15%] left-[20%]" />

      <div className="section-inner">
        <div className="max-w-3xl">
          <p className="eyebrow">Technical toolkit</p>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-copy">
            A comprehensive developer stack covering programming core, machine learning, data engineering, full-stack, and deployment automation tools.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((category, index) => {
            const CategoryIcon = category.icon;
            const themeClass = themes[index % themes.length];
            
            return (
              <motion.article
                key={category.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`card p-6 flex flex-col justify-between group transition-all duration-300 ${themeClass.split(" ")[0]}`}
              >
                <div>
                  <div className="flex items-center gap-3.5 pb-5 border-b border-[var(--border)]">
                    <span className={`grid h-10 w-10 place-items-center rounded-xl text-lg border border-[var(--border)] shadow-inner transition-colors duration-300 ${themeClass.split(" ").slice(1).join(" ")}`}>
                      <CategoryIcon />
                    </span>
                    <h3 className="text-lg font-bold text-[var(--text)] tracking-tight font-outfit">{category.title}</h3>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {category.items.map((skill) => {
                      const SkillIcon = skill.icon;
                      return (
                        <span 
                          key={skill.name} 
                          className="badge text-xs flex items-center gap-1.5 py-1.5 px-3 rounded-lg bg-[var(--bg-soft)] border border-[var(--border)] hover:bg-[var(--surface-strong)] hover:border-[var(--accent)] hover:-translate-y-0.5 hover:shadow-sm"
                        >
                          <SkillIcon className="text-[var(--accent)] text-sm" />
                          {skill.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
