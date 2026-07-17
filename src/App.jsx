import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import CodingProfiles from "./components/CodingProfiles";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="app-shell min-h-screen antialiased selection:bg-cyan-500/25 selection:text-cyan-950">
      <Navbar theme={theme} setTheme={setTheme} />
      
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <CodingProfiles />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
