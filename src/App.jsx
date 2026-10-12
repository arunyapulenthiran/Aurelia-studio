import { motion } from "framer-motion";
import "./App.css";

const projects = [
  {
    title: "Casa Aurelia",
    category: "Residential Architecture",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
    alt: "Contemporary residential architecture",
    large: true,
  },
  {
    title: "Atelier No. 08",
    category: "Interior Design",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
    alt: "Refined contemporary interior",
  },
  {
    title: "Villa Nira",
    category: "Residential Interior",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
    alt: "Warm residential interior",
  },
  {
    title: "Casa Verde",
    category: "Residential Architecture",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    alt: "Modern residential exterior",
  },
  {
    title: "House No. 17",
    category: "Interior Architecture",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1200&q=85",
    alt: "Carefully detailed interior",
  },
  {
    title: "Maison Aria",
    category: "Interior Design",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=1600&q=85",
    alt: "Elegant contemporary living space",
    large: true,
  },
  {
    title: "Villa Sol",
    category: "Residential Architecture",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85",
    alt: "Contemporary home exterior",
  },
  {
    title: "Oak Residence",
    category: "Interior Design",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1200&q=85",
    alt: "Natural contemporary interior",
  },
  {
    title: "Linea House",
    category: "Residential Interior",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    alt: "Calm modern residential space",
  },
];

const siteConfig = {
  name: "AURELIA",
  heroLine1: "Spaces designed",
  heroLine2: "to feel like",
  heroEmphasis: "HOME.",
  heroDescription:
    "Thoughtful architecture and interiors shaped around the way you live. We create timeless spaces that feel personal, purposeful, and beautifully considered.",
  email: "hello@example.com",
  phone: "+10000000000",
  instagram: "https://instagram.com/",
};

function App() {
  return (
    <div className="app">
      {/* NAVIGATION */}
      <nav className="navbar">
        <a href="#home" className="logo">
          {siteConfig.name}
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
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">
              ARCHITECTURE &amp; INTERIOR DESIGN
            </p>
            
<h1>
  {siteConfig.heroLine1}
  <br />
  {siteConfig.heroLine2} <em>{siteConfig.heroEmphasis}</em>
</h1>

            <p className="hero-description">
              {siteConfig.heroDescription}
            </p>
            <a href="#projects" className="hero-cta">
              Explore Projects
            </a>
          </div>
          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85"
              alt="Warm contemporary home with natural materials"
            />
          </div>
        </section>
        {/* ABOUT */}
        <section className="intro" id="about">
          <div className="intro-top">
            <p className="eyebrow">A MORE THOUGHTFUL APPROACH</p>
          </div>
          <div className="intro-content">
            <h2>
              Architecture
              <br />
              with <em>intention.</em>
            </h2>
            <div className="intro-description">
              <p>
                At Aurelia Studio, we believe the spaces around us
                shape the way we live, feel, and connect. Every
                project begins with listening, understanding your
                needs, and discovering the potential of a space.
              </p>
              <p>
                From the first sketch to the final detail, we bring
                architecture and interior design together to create
                environments that balance beauty, functionality,
                and a lasting sense of belonging.
              </p>
              <a href="#services" className="text-link">
                Discover our approach
              </a>
            </div>
          </div>
        </section>
        {/* SERVICES */}
        <section className="services" id="services">
          <div className="section-heading">
            <div>
              <p className="eyebrow">WHAT WE DO</p>
              <h2>
                Considered design.
                <br />
                <em>Meaningful spaces.</em>
              </h2>
            </div>
            <p className="section-description">
              A thoughtful process that brings every part of your
              project together, from the initial concept to the
              details that make a space feel complete.
            </p>
          </div>
          <div className="services-grid">
            <motion.article
              className="service-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="service-number">01</span>
              <h3>Architecture</h3>
              <p>
                We design considered buildings that respond to
                their surroundings, make the most of natural light,
                and reflect the people who inhabit them.
              </p>
              <a href="#contact" className="text-link">
                Discuss a project
              </a>
            </motion.article>
            <motion.article
              className="service-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <span className="service-number">02</span>
              <h3>Interior Design</h3>
              <p>
                We create welcoming interiors through carefully
                selected materials, balanced proportions, layered
                textures, and details that make everyday life
                feel special.
              </p>
              <a href="#contact" className="text-link">
                Discuss a project
              </a>
            </motion.article>
            <motion.article
              className="service-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="service-number">03</span>
              <h3>Project Planning</h3>
              <p>
                We help bring clarity to the process with thoughtful
                planning, coordinated design decisions, and a
                considered approach to the practical details of
                your project.
              </p>
              <a href="#contact" className="text-link">
                Discuss a project
              </a>
            </motion.article>
          </div>
        </section>
        
        {/* PROJECTS */}
        <section className="projects" id="projects">
          <div className="section-heading projects-heading">
            <div>
              <p className="eyebrow">SELECTED WORK</p>
              <h2>
                Spaces with
                <br />
                <em>a story to tell.</em>
              </h2>
            </div>
            <p className="section-description">
              A collection of residential spaces exploring
              materiality, natural light, thoughtful layouts, and
              the relationship between architecture and everyday
              living.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.article
                className={`project-card${project.large ? " project-large" : ""}`}
                key={project.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: project.large ? 0 : 0.1 + (index % 3) * 0.05,
                }}
              >
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                  />
                </div>

                <div className="project-info">
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.category}</p>
                  </div>
                  <span>{project.year}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact" id="contact">
          <div className="contact-heading">
            <p className="eyebrow">GET IN TOUCH</p>
            <h2>
              Let's create something
              <br />
              <em>meaningful.</em>
            </h2>
            <p>
              Have a project in mind? We'd love to hear from you.
              Get in touch to discuss your next project.
            </p>
          </div>
          <div className="contact-form-wrapper">
            <div className="contact-details">
              <span className="contact-label">
                CONNECT WITH US
              </span>
              {/* TEMPLATE: Replace with your business email */}
              <a href={`mailto:${siteConfig.email}`}>
                hello@example.com
              </a>
              {/* TEMPLATE: Replace with your business phone */}
              <a href={`tel:${siteConfig.phone}`}>
                +1 (000) 000-0000
              </a>
              {/* TEMPLATE: Replace with your business location */}
              <p>Your City, Your Country</p>
              
{/* TEMPLATE: Replace with your Instagram URL */}
<a
  href={siteConfig.instagram}
  target="_blank"
  rel="noreferrer"
>
  Instagram
</a>

            </div>
          </div>
        </section>
      </main>
      {/* FOOTER */}
<footer className="footer">
  <div className="footer-main">
    <div className="footer-brand">
      <a href="#home" className="logo">
        {siteConfig.name}
      </a>
      <p>
        Spaces shaped with intention.
        <br />
        Designed to feel like home.
      </p>
    </div>
    <div className="footer-column">
      <span className="footer-label">EXPLORE</span>
      <a href="#about">Our Studio</a>
      <a href="#services">What We Do</a>
      <a href="#projects">Selected Work</a>
    </div>
    <div className="footer-column">
      <span className="footer-label">GET IN TOUCH</span>
      <a href={`mailto:${siteConfig.email}`}>
        hello@example.com
      </a>
      <a
  href={siteConfig.instagram}
  target="_blank"
  rel="noreferrer"
>
  Instagram
</a>
      <a href="#contact">Start a Project</a>
    </div>
    <a href="#home" className="footer-back-top">
      BACK TO TOP ↑
    </a>
  </div>
  <div className="footer-bottom">
    <span>©️ 2026 Aurelia Studio</span>
    <span>Architecture &amp; Interior Design</span>
    <span>Designed with intention.</span>
  </div>
</footer>
</div>);
}

export default App;