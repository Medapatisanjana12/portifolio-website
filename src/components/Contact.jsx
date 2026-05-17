import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen p-10"
    >

      <h2 className="text-4xl text-blue-500 font-bold mb-10">
        Contact
      </h2>

      <div className="space-y-6">

        {/* Email */}
        <div
          className="flex items-center gap-4
          bg-slate-800 p-5 rounded-xl
          hover:bg-slate-700 transition duration-300"
        >
          <FaEnvelope
            size={28}
            className="text-red-400"
          />

          <p className="text-lg text-white">
            medapatisanjana0212@gmail.com
          </p>
        </div>

        {/* GitHub */}
        <a
          href="https://github.com/Medapatisanjana12"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4
          bg-slate-800 p-5 rounded-xl
          hover:bg-slate-700 transition duration-300"
        >
          <FaGithub
            size={28}
            className="text-white"
          />

          <p className="text-lg text-white">
            GitHub
          </p>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/sanjana-medapati-65744b2b4/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4
          bg-slate-800 p-5 rounded-xl
          hover:bg-slate-700 transition duration-300"
        >
          <FaLinkedin
            size={28}
            className="text-blue-400"
          />

          <p className="text-lg text-white">
            LinkedIn
          </p>
        </a>
        {/* Mobile Number */}
<div
  className="flex items-center gap-4
  bg-slate-800 p-5 rounded-xl
  hover:bg-slate-700 transition duration-300"
>
  <FaPhoneAlt
    size={24}
    className="text-green-400"
  />

  <p className="text-lg text-white">
    +91 966633****
  </p>
</div>

      </div>

    </section>
  );
}

export default Contact;