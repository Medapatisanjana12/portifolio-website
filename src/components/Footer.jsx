import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../data/portfolio";

function Footer() {
  const links = [
    { label: "GitHub", href: profile.github, icon: FaGithub },
    { label: "LinkedIn", href: profile.linkedin, icon: FaLinkedin },
    { label: "Email", href: `mailto:${profile.email}`, icon: FaEnvelope },
  ];

  return (
    <footer className="border-t border-[var(--border)] bg-slate-950/40 px-6 py-10">
      <div className="section-inner flex flex-col items-center justify-between gap-6 text-center text-sm text-[var(--muted)] md:flex-row md:text-left">
        <div>
          <p className="font-extrabold text-[var(--text)] font-outfit text-base tracking-tight">Sanjana Medapati</p>
          <p className="mt-1 text-xs text-[var(--muted)]">AI/ML Engineer • Software Developer • Data Analyst</p>
        </div>

        <div className="flex items-center gap-2.5">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a 
                key={link.label} 
                href={link.href} 
                target={link.href.startsWith("http") ? "_blank" : undefined} 
                rel="noreferrer" 
                className="btn btn-secondary h-9 w-9 p-0 rounded-xl hover:border-[var(--accent)] hover:text-[var(--accent)]" 
                aria-label={link.label}
              >
                <Icon className="text-sm" />
              </a>
            );
          })}
        </div>

        <p className="mono text-[10px] text-[var(--faint)]">
          © {new Date().getFullYear()} • Crafted with React, Vite, Tailwind & Framer Motion
        </p>
      </div>
    </footer>
  );
}

export default Footer;
