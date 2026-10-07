import { motion } from "framer-motion";
import "./App.css";

function App() {
  const handleSubmit = (e) => {
  e.preventDefault();

  alert("Thank you! Your inquiry has been received.");
  e.target.reset();
};

  return (
    <div className="app">
      {/* NAVIGATION */}
      <nav className="navbar">
        <a href="/" className="logo">
          AURELIA
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-cta">
          Start a Project
        </a>
      </nav>

      <main>
        {/* HERO */}
        <section className="hero">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="eyebrow">ARCHITECTURE & INTERIOR DESIGN</p>

            <h1>
              Spaces designed
              <br />
              to feel like <em>HOME.</em>
            </h1>

            <p className="hero-description">
              We create thoughtful spaces where architecture, material, and everyday life come together. From the first idea to the smallest detail, we design environments that feel considered, comfortable, and distinctly connected to the people who inhabit them.
            </p>

            <a href="#projects" className="hero-button">
              Explore Projects
            </a>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85"
              alt="Modern architectural interior"
            />
          </motion.div>
        </section>

        {/* ABOUT / THE STUDIO */}
        <section className="intro" id="about">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="eyebrow">THE STUDIO</p>

            <h2>
              Architecture with
              <br />
              <em>intention.</em>
            </h2>

            <p className="intro-text">
              Aurelia Studio is an independent architecture and interior design practice focused on creating refined, functional, and deeply personal spaces. We believe good design is not simply about how a space looks, but how it feels, moves, and lives over time.

Our approach brings together thoughtful planning, natural materials, proportion, light, and carefully considered details to create spaces that feel timeless rather than temporary. Every project begins with understanding the people, context, and everyday rituals that make a place truly feel like home.
            </p>
          </motion.div>
        </section>

        {/* SERVICES */}
        <section className="services" id="services">
          <div className="services-heading">
            <p className="eyebrow">WHAT WE DO</p>

            <h2>
              Spaces shaped
              <br />
              with <em>purpose.</em>
            </h2>
          </div>

          <div className="services-grid">
            <motion.div
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span>01</span>

              <h3>Architecture</h3>

              <p>
                From private residences to carefully considered extensions, we develop architectural concepts that balance form, function, and context. Every decision is shaped around how the space will be experienced, from its overall structure to the relationship between light, movement, and material.
              </p>
            </motion.div>

            <motion.div
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span>02</span>

              <h3>Interior Design</h3>

              <p>
                We create interiors with a quiet sense of character, combining materials, textures, furnishings, and natural light to build spaces that feel cohesive and personal. Our designs are refined without being overly formal, allowing each interior to evolve naturally with the people who use it.
              </p>
            </motion.div>

            <motion.div
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span>03</span>

              <h3>Project Planning</h3>

              <p>
              A strong project begins with clarity. We help shape ideas into considered plans, coordinating the design direction, priorities, and details needed to move a project forward with confidence. From early concepts to final decisions, we keep the process purposeful and connected.
              </p>
            </motion.div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="projects" id="projects">
          <div className="projects-header">
            <div>
              <p className="eyebrow">SELECTED WORK</p>

              <h2>
                Spaces that
                <br />
                <em>speak.</em>
              </h2>
            </div>

            <p className="projects-intro">
              A selection of residential and interior projects exploring the relationship between architecture, material, light, and everyday life. Each project has its own character, but all are guided by the same belief: the most meaningful spaces are those designed around the people who live in them.
            </p>
          </div>

          <div className="projects-grid">

  {/* PROJECT 01 */}
  <motion.article
    className="project-card project-large"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
  >
    <div className="project-image">
      <img
        src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85"
        alt="Modern residential interior"
      />
    </div>

    <div className="project-info">
      <div>
        <h3>Casa Aurelia</h3>
        <p>Residential Architecture</p>
        <p className="project-description">
          A contemporary family residence shaped around natural
          light, open circulation, and a calm connection between
          interior and exterior spaces.
        </p>
      </div>
      <span>2026</span>
    </div>
  </motion.article>


  {/* PROJECT 02 */}
  <motion.article
    className="project-card"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay: 0.1 }}
  >
    <div className="project-image">
      <img
        src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85"
        alt="Elegant interior space"
      />
    </div>

    <div className="project-info">
      <div>
        <h3>Atelier No. 08</h3>
        <p>Interior Design</p>
        <p className="project-description">
          A refined interior exploring warm materials, soft
          textures, and carefully framed moments of light.
        </p>
      </div>
      <span>2026</span>
    </div>
  </motion.article>


  {/* PROJECT 03 */}
  <motion.article
    className="project-card"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay: 0.2 }}
  >
    <div className="project-image">
      <img
        src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
        alt="Contemporary living space"
      />
    </div>

    <div className="project-info">
      <div>
        <h3>Villa Nira</h3>
        <p>Residential Interior</p>
        <p className="project-description">
          A contemporary living environment built around
          simplicity, proportion, and natural materials.
        </p>
      </div>
      <span>2026</span>
    </div>
  </motion.article>


  {/* PROJECT 04 */}
  <motion.article
    className="project-card"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay: 0.1 }}
  >
    <div className="project-image">
      <img
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
        alt="Contemporary residential architecture"
      />
    </div>

    <div className="project-info">
      <div>
        <h3>Casa Verde</h3>
        <p>Residential Architecture</p>
        <p className="project-description">
          A warm contemporary residence designed around
          courtyards, natural light, and outdoor living.
        </p>
      </div>
      <span>2026</span>
    </div>
  </motion.article>


  {/* PROJECT 05 */}
  <motion.article
    className="project-card"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay: 0.2 }}
  >
    <div className="project-image">
      <img
        src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1200&q=85"
        alt="Minimal contemporary home interior"
      />
    </div>

    <div className="project-info">
      <div>
        <h3>House No. 17</h3>
        <p>Interior Architecture</p>
        <p className="project-description">
          A restrained interior built around natural stone,
          warm timber, and carefully framed views.
        </p>
      </div>
      <span>2025</span>
    </div>
  </motion.article>


  {/* PROJECT 06 */}
  <motion.article
    className="project-card project-large"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay: 0.1 }}
  >
    <div className="project-image">
      <img
        src="https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=1600&q=85"
        alt="Elegant modern living interior"
      />
    </div>

    <div className="project-info">
      <div>
        <h3>Maison Aria</h3>
        <p>Interior Design</p>
        <p className="project-description">
          An understated living space where soft textures,
          sculptural furniture, and natural light create
          an atmosphere designed for everyday life.
        </p>
      </div>
      <span>2025</span>
    </div>
  </motion.article>


  {/* PROJECT 07 */}
  <motion.article
    className="project-card"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay: 0.1 }}
  >
    <div className="project-image">
      <img
        src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85"
        alt="Modern villa exterior"
      />
    </div>

    <div className="project-info">
      <div>
        <h3>Villa Sol</h3>
        <p>Residential Architecture</p>
        <p className="project-description">
          A light-filled residence designed around open
          spaces, strong geometry, and a quiet material palette.
        </p>
      </div>
      <span>2025</span>
    </div>
  </motion.article>


  {/* PROJECT 08 */}
  <motion.article
    className="project-card"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay: 0.2 }}
  >
    <div className="project-image">
      <img
        src="https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1200&q=85"
        alt="Warm modern interior"
      />
    </div>

    <div className="project-info">
      <div>
        <h3>Oak Residence</h3>
        <p>Interior Design</p>
        <p className="project-description">
          A warm residential interior balancing timber,
          stone, natural fabrics, and understated furnishings.
        </p>
      </div>
      <span>2024</span>
    </div>
  </motion.article>


  {/* PROJECT 09 */}
  <motion.article
    className="project-card"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay: 0.3 }}
  >
    <div className="project-image">
      <img
        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
        alt="Refined contemporary interior"
      />
    </div>

    <div className="project-info">
      <div>
        <h3>Linea House</h3>
        <p>Residential Interior</p>
        <p className="project-description">
          A calm, contemporary home where proportion,
          daylight, and carefully selected materials shape
          the everyday experience.
        </p>
      </div>
      <span>2024</span>
    </div>
  </motion.article>

</div>
        </section>

        {/* CONTACT */}
<section className="contact" id="contact">
  <div className="contact-heading">
    <p className="eyebrow">START A PROJECT</p>

    <h2>
      Let's create something
      <br />
      <em>meaningful.</em>
    </h2>

    <p>
      Have a project in mind? We'd love to hear about it.
      Get in touch and tell us a little about what you're planning.
    </p>
  </div>

  <div className="contact-details">
    <span className="contact-label">CONNECT WITH US</span>

    <a href="mailto:hello@aureliastudio.com">
      hello@aureliastudio.com
    </a>

    <a href="tel:+442079460182">
      +44 20 7946 0182
    </a>

    <p>London, United Kingdom</p>
  </div>
</section>
        {/* FOOTER */}
<footer className="footer">
  <div className="footer-top">
    <div className="footer-brand">
      <h2>AURELIA</h2>
      <p>
        Thoughtful architecture and interiors,
        <br />
        designed around everyday life.
      </p>
    </div>

    <div className="footer-links">
      <div>
        <span>Explore</span>
        <a href="#about">The Studio</a>
        <a href="#services">Services</a>
        <a href="#projects">Selected Work</a>
      </div>

      <div>
        <span>Contact</span>
        <a href="#contact">Start a Project</a>
        <a href="mailto:tekodex.co@gmail.com">
          tekodex.co@gmail.com
        </a>
      </div>
    </div>
  </div>

  <div className="footer-bottom">
    <span>©️ 2026 Aurelia Studio</span>
    <span>Architecture & Interior Design</span>
  </div>
</footer>
      </main>
    </div>
  );
}

export default App;