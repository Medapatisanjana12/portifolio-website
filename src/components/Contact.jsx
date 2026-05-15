function Contact() {
  return (
    <section id="contact" className="min-h-screen p-10">
      <h2 className="text-4xl font-bold mb-8">Contact</h2>

      <div className="space-y-4">
        <p>Email: sanjana@example.com</p>

        <a
          href="https://github.com/"
          target="_blank"
          className="block"
        > 
          GitHub
        </a>

        <a
          href="https://linkedin.com/"
          target="_blank"
          className="block"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contact;