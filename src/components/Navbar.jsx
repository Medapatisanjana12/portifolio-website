import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Coding", href: "#coding-profiles" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

function Navbar({ theme, setTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      let current = "";
      for (let index = navItems.length - 1; index >= 0; index -= 1) {
        const section = document.querySelector(navItems[index].href);
        if (section && window.scrollY + 160 >= section.offsetTop) {
          current = navItems[index].href;
          break;
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled ? "py-3" : "py-6"}`}>
      <nav className={`mx-auto flex items-center justify-between px-6 transition-all duration-300 ${isScrolled ? "panel py-3 max-w-[1140px] mx-4 sm:mx-auto" : "max-w-[1200px]"}`}>
        <a href="#home" className="flex items-center gap-1 font-outfit text-xl font-bold tracking-tight text-[var(--text)] group" aria-label="Sanjana Medapati home">
          Sanjana<span className="text-[var(--accent)] font-black text-2xl leading-none transition-transform duration-300 group-hover:scale-125 inline-block">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link text-[13px] font-semibold tracking-wide uppercase ${activeSection === item.href ? "active" : ""}`}
            >
              {item.label}
              {activeSection === item.href && (
                <motion.span
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-2 right-2 h-0.5 bg-[var(--accent)] rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Premium Sliding Pill Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative h-8 w-14 rounded-full bg-[var(--bg-soft)] border border-[var(--border)] p-1 transition-colors duration-300 focus:outline-none flex items-center justify-between cursor-pointer"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            type="button"
          >
            <FaMoon className="text-[10px] text-blue-500 ml-1.5" />
            <FaSun className="text-[10px] text-amber-500 mr-1.5" />
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 500, damping: 25 }}
              className="absolute left-1 h-5.5 w-5.5 rounded-full flex items-center justify-center shadow-md"
              style={theme === "light" ? { x: 22, backgroundColor: "#f59e0b" } : { x: 0, backgroundColor: "#3b82f6" }}
            >
              {theme === "dark" ? (
                <FaMoon className="text-[10px] text-white" />
              ) : (
                <FaSun className="text-[10px] text-white" />
              )}
            </motion.div>
          </button>

          <a href="#contact" className="btn btn-primary hidden sm:inline-flex rounded-xl py-2 px-4 text-sm font-bold min-h-[2.5rem]">
            Hire Me
          </a>
          <button
            type="button"
            className="btn btn-secondary h-10 w-10 p-0 lg:hidden rounded-xl"
            onClick={() => setIsOpen((value) => !value)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="mx-4 mt-3 lg:hidden"
          >
            <div className="panel p-5">
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`nav-link block rounded-xl px-4 py-3 text-sm font-semibold tracking-wide uppercase transition-all ${
                      activeSection === item.href ? "active bg-[var(--accent-soft)]" : "hover:bg-[var(--border)]"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="btn btn-primary w-full mt-3 rounded-xl py-3 text-center text-sm font-bold"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
