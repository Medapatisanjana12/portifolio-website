import { motion } from "framer-motion";
import { FaBrain, FaChartBar, FaCode, FaUserGraduate, FaCheckCircle, FaGraduationCap } from "react-icons/fa";
import { achievements, profile, education } from "../data/portfolio";

function About() {
  const focusAreas = [
    { 
      title: "AI Engineering", 
      icon: FaBrain, 
      color: "from-blue-500/10 to-blue-500/5 text-blue-400 border-blue-500/20",
      copy: "Building ML and NLP systems with clear data pipelines, prompt engineering, and rigorous model evaluation." 
    },
    { 
      title: "Software Development", 
      icon: FaCode, 
      color: "from-purple-500/10 to-purple-500/5 text-purple-400 border-purple-500/20",
      copy: "Creating responsive React apps, robust APIs, automated workflows, and clean developer interfaces." 
    },
    { 
      title: "Data Analytics", 
      icon: FaChartBar, 
      color: "from-sky-500/10 to-sky-500/5 text-sky-400 border-sky-500/20",
      copy: "Transforming raw datasets into actionable Power BI dashboards, KPI trends, and operational decisions." 
    },
    { 
      title: "Continuous Growth", 
      icon: FaUserGraduate, 
      color: "from-indigo-500/10 to-indigo-500/5 text-indigo-400 border-indigo-500/20",
      copy: "Strengthening DSA fundamentals, cloud architecture, and database design through verified certifications." 
    },
  ];

  return (
    <section id="about" className="section bg-slate-900/10">
      <div className="glow-blob bg-purple-500 w-[350px] h-[350px] top-[40%] right-[-10%]" />
      
      <div className="section-inner">
        <div className="max-w-3xl">
          <p className="eyebrow">About me</p>
          <h2 className="section-title">About Me</h2>
          <p className="section-copy">
            I am a B.Tech Artificial Intelligence and Machine Learning student at Aditya University. My work focuses on taking unstructured datasets, building robust algorithms, structuring analytics pipelines, and rendering them into seamless, modern web interfaces that drive business value.
          </p>
        </div>

        {/* Top Row: Image & Focus Areas side-by-side */}
        <div className="mt-10 grid gap-6 lg:grid-cols-[0.65fr_1.35fr] lg:items-center">
          
          {/* Profile Image card */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="panel p-3 bg-slate-900/30 hover:border-[var(--accent)] transition-all duration-300 max-w-[280px] mx-auto lg:mx-0 w-full"
          >
            <div className="relative group overflow-hidden rounded-xl border border-[var(--border)]">
              <img 
                src={profile.aboutImage} 
                alt={`${profile.name} profile`} 
                className="aspect-[4/5] w-full rounded-lg object-cover group-hover:scale-103 transition-transform duration-500 ease-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="mono text-[10px] font-bold text-blue-400 uppercase tracking-wider">Aditya University • AIML Major</p>
              </div>
            </div>
          </motion.div>

          {/* Focus Areas Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {focusAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.article
                  key={area.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  className={`card p-4.5 bg-gradient-to-br ${area.color} border hover:scale-101 hover:shadow-md`}
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-[var(--bg-soft)] text-lg border border-[var(--border)] shadow-inner">
                      <Icon />
                    </span>
                    <h3 className="text-sm font-bold text-[var(--text)] tracking-tight">{area.title}</h3>
                  </div>
                  <p className="mt-2 text-[11px] leading-relaxed text-[var(--muted)]">{area.copy}</p>
                </motion.article>
              );
            })}
          </div>

        </div>

        {/* Bottom Row: Achievements & Education horizontally side-by-side */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          
          {/* Achievements snap card */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="card p-5 bg-slate-900/20 hover:border-[var(--purple)] flex flex-col justify-between w-full"
          >
            <div>
              <p className="mono text-[10px] font-bold uppercase tracking-wider text-[var(--faint)] border-b border-[var(--border)] pb-2 mb-3">Achievements Snapshot</p>
              <div className="grid gap-2 text-[11px] leading-relaxed text-[var(--muted)]">
                {achievements.map((item) => (
                  <div key={item} className="flex gap-2 items-start hover:text-[var(--text)] transition-colors">
                    <FaCheckCircle className="text-blue-400 mt-0.5 shrink-0 text-xs" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="card p-5 bg-slate-900/20 hover:border-[var(--accent)] flex flex-col justify-between w-full"
          >
            <div>
              <p className="mono text-[10px] font-bold uppercase tracking-wider text-[var(--faint)] border-b border-[var(--border)] pb-2 mb-3">Education History</p>
              <div className="flex gap-3 items-start">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-blue-500/10 text-base text-[var(--accent)] border border-blue-500/20 shadow-inner">
                  <FaGraduationCap />
                </span>
                <div>
                  <h4 className="text-xs font-bold text-[var(--text)] font-outfit leading-tight">{education.degree}</h4>
                  <p className="text-[11px] font-semibold text-[var(--accent)] mt-0.5">{education.specialization}</p>
                  <p className="text-[10px] text-[var(--muted)] mt-0.5">{education.institute}</p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-1">
                {education.coursework.slice(0, 3).map((course) => (
                  <span key={course} className="badge bg-[var(--bg-soft)] text-[9px] border-[var(--border)] px-1.5 py-0.5 rounded">
                    {course}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-[var(--border)] flex items-center justify-between text-[10px] font-bold text-[var(--muted)]">
              <span>Grade: {education.grade}</span>
              <span className="mono text-[9px] text-[var(--faint)]">{education.duration}</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;
