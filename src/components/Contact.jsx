import { useState } from "react";
import { FaCheck, FaCopy, FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt, FaPaperPlane, FaDownload } from "react-icons/fa";
import { profile } from "../data/portfolio";

function Contact() {
  const [copied, setCopied] = useState("");

  const copyValue = async (label, value) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(label);
      window.setTimeout(() => setCopied(""), 1800);
    } catch (err) {
      console.error("Clipboard copy failed: ", err);
    }
  };

  const contactCards = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: FaEnvelope },
    { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}`, icon: FaPhoneAlt },
    { label: "LinkedIn", value: "sanjana-medapati", href: profile.linkedin, icon: FaLinkedin },
    { label: "GitHub", value: profile.githubUser, href: profile.github, icon: FaGithub },
  ];

  return (
    <section id="contact" className="section relative overflow-hidden">
      {/* Background Glow Blobs */}
      <div className="glow-blob bg-blue-500 w-[300px] h-[300px] top-[10%] left-[-10%]" />

      <div className="section-inner">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          
          {/* Contact Copy */}
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="section-title font-outfit">Contact</h2>
            <p className="section-copy">
              I am actively looking for AI/ML engineering, software development, data analyst, and internship roles. Reach out directly for collaboration, opportunities, or a quick technical chat.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${profile.email}`} className="btn btn-primary rounded-xl">
                <FaPaperPlane className="text-xs" /> Email Me
              </a>
              <a href={profile.resume} download className="btn btn-secondary rounded-xl hover:border-[var(--accent)]">
                <FaDownload className="text-xs" /> Download Resume
              </a>
            </div>
          </div>

          {/* Contact Details Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {contactCards.map((card) => {
              const Icon = card.icon;
              const isCopied = copied === card.label;
              return (
                <article key={card.label} className="card p-5 flex flex-col justify-between hover:border-[var(--accent)] bg-slate-900/10">
                  <div className="flex items-center justify-between gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-teal-500/10 text-lg text-[var(--accent)] border border-teal-500/20 shadow-inner">
                      <Icon />
                    </span>
                    <button
                      type="button"
                      onClick={() => copyValue(card.label, card.label === "LinkedIn" || card.label === "GitHub" ? card.href : card.value)}
                      className={`btn btn-secondary h-8 w-8 p-0 rounded-lg flex items-center justify-center transition-all ${
                        isCopied ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" : "hover:border-[var(--accent)]"
                      }`}
                      aria-label={`Copy ${card.label}`}
                      title={isCopied ? "Copied!" : `Copy ${card.label}`}
                    >
                      {isCopied ? <FaCheck className="text-xs" /> : <FaCopy className="text-xs text-[var(--muted)] hover:text-[var(--text)]" />}
                    </button>
                  </div>
                  <div className="mt-5">
                    <p className="mono text-[10px] font-bold uppercase tracking-wider text-[var(--faint)]">{card.label}</p>
                    <a 
                      href={card.href} 
                      target={card.href.startsWith("http") ? "_blank" : undefined} 
                      rel="noreferrer" 
                      className="mt-2 block break-words text-base font-bold text-[var(--text)] hover:text-[var(--accent)] transition-colors font-outfit"
                    >
                      {card.value}
                    </a>
                  </div>
                </article>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
