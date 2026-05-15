function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">
        {/* <h1 className="text-2xl font-bold">Sanjana Medapati</h1> */}
 <div className="flex items-center gap-3">
  
  {/* Logo */}
  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white flex items-center justify-center font-bold">
  SM
</div>

  {/* Name */}
  <h1 className="text-2xl font-bold">
    Sanjana Medapati
  </h1>

</div>
        <div className="flex gap-10">
        <a
            href="#about"
            className="relative group hover:text-blue-500 transition-all duration-300"
        >
        About

        <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </a>
          <a href="#skills"
          className="relative group hover:text-blue-500 transition-all duration-300"
          >Skills
          <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </a>
          <a href="#certifications"
          className="relative group hover:text-blue-500 transition-all duration-300"
          >
          Certifications
          <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </a>
          <a href="#projects"
          className="relative group hover:text-blue-500 transition-all duration-300"
          >
          Projects
          <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </a>
          <a href="#contact"
          className="relative group hover:text-blue-500 transition-all duration-300"
          >
          Contact
          <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;