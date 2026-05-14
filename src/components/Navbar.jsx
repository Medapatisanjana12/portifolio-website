function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-900 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">
        <h1 className="text-2xl font-bold">Sanjana</h1>

        <div className="flex gap-6">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;