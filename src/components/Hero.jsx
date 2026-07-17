import { motion } from "framer-motion";
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaChevronRight } from "react-icons/fa";
import { profile, quickFacts, resumeHighlights } from "../data/portfolio";

function Hero() {
  return (
    <section id="home" className="section flex min-h-screen items-center pt-36 overflow-hidden">
      {/* Background Glow Blobs */}
      <div className="glow-blob bg-blue-500 w-[400px] h-[400px] top-[10%] left-[-10%]" />
      <div className="glow-blob bg-purple-500 w-[300px] h-[300px] bottom-[20%] right-[-5%]" />

      <div className="section-inner grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        
        {/* Left column: Text & details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl relative z-10"
        >
          {/* Pulsing Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 font-mono text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Open to AI/ML & Software roles
          </div>

          <h1 className="text-[clamp(2.25rem,5.5vw,4.25rem)] font-extrabold leading-[1.05] text-[var(--text)] tracking-tight font-outfit">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] via-sky-400 to-[var(--purple)]">{profile.name}</span>
          </h1>
          <p className="mt-3.5 text-base font-bold text-[var(--accent)] sm:text-lg uppercase tracking-wider mono">{profile.headline}</p>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">{profile.intro}</p>

          {/* Social and CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={profile.resume} target="_blank" rel="noreferrer" className="btn btn-primary rounded-xl">
              <FaDownload className="text-sm" /> Download Resume
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn-secondary rounded-xl hover:border-blue-500/30">
              <FaLinkedin className="text-base text-blue-500" /> LinkedIn
            </a>
            <a href="#contact" className="btn btn-secondary rounded-xl hover:border-purple-500/30">
              <FaEnvelope className="text-base text-purple-400" /> Contact
            </a>
          </div>
        </motion.div>

        {/* Right column: Photo Card and Quick Facts */}
        <motion.aside
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative z-10 max-w-[350px] mx-auto lg:mr-0 w-full flex flex-col gap-4"
        >
          <div className="panel p-4.5 bg-slate-900/40 backdrop-blur-xl relative overflow-hidden group hover:border-[var(--purple)] transition-colors duration-300">
            {/* Soft decorative elements */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[var(--purple)] to-transparent opacity-10 rounded-full blur-xl" />
            
            <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-soft)] shadow-inner">
              <img
                src={profile.image}
                alt={profile.name}
                className="aspect-[4/4.5] w-full object-cover group-hover:scale-102 transition-transform duration-500 ease-out"
              />
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs font-bold text-[var(--muted)] uppercase tracking-wider mono bg-[var(--bg-soft)] px-3 py-2 rounded-lg border border-[var(--border)] w-fit">
              <FaMapMarkerAlt className="text-[var(--accent)] text-sm" />
              {profile.location}
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid gap-3 grid-cols-2">
            {quickFacts.map((fact, index) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 + index * 0.05 }}
                className="card p-4 group flex flex-col justify-between hover:border-[var(--accent)]"
              >
                <div>
                  <p className="mono text-[9px] font-bold uppercase tracking-wider text-[var(--faint)]">{fact.label}</p>
                  <p className="mt-1.5 text-lg font-black text-[var(--text)] tracking-tight group-hover:text-[var(--accent)] transition-colors">{fact.value}</p>
                </div>
                <p className="text-[10px] font-medium text-[var(--muted)] mt-1">{fact.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.aside>

      </div>
    </section>
  );
}

export default Hero;
