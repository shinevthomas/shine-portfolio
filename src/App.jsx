import "./App.css";

import {
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

function App() {
  return (
    <div className="portfolio">

      {/* =========================================================
          NAVBAR
      ========================================================= */}
      <nav className="navbar">
        <div className="nav-container">

          <a href="#home" className="logo">
            ST<span>.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="nav-links">

            <a href="#about">About</a>

            <a href="#skills">Skills</a>

            <a href="#experience">Experience</a>

            <a href="#projects">Projects</a>

            <a href="#education">Education</a>

            <a href="#certifications">Certifications</a>

            <a
              href="/Shine-V-Thomas-Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume ↗
            </a>

            <a href="#contact">Contact</a>

          </div>

          {/* Desktop CTA */}
          <a href="#contact" className="nav-button">
            Let's Connect
          </a>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-button"
            onClick={(event) => {
              const menu = document.querySelector(".mobile-menu");

              const isOpen =
                menu?.classList.toggle("mobile-menu-open");

              event.currentTarget.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
              );
            }}
            aria-label="Toggle navigation menu"
            aria-expanded="false"
            type="button"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Mobile Navigation */}
          <div className="mobile-menu">

            <a href="#about">About</a>

            <a href="#skills">Skills</a>

            <a href="#experience">Experience</a>

            <a href="#projects">Projects</a>

            <a href="#education">Education</a>

            <a href="#certifications">Certifications</a>

            <a
              href="/Shine-V-Thomas-Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume ↗
            </a>

            <a href="#contact">Contact</a>

          </div>

        </div>
      </nav>


      <main>

        {/* =========================================================
            HERO
        ========================================================= */}
        <section id="home" className="hero">

          <div className="hero-container">

            <div className="hero-content">

              <p className="hero-label">
                IT PROFESSIONAL • INFRASTRUCTURE • TECHNOLOGY
              </p>

              <h1>
                Shine V Thomas
              </h1>

              <h2>
                Building, securing & supporting
                <span> modern technology systems.</span>
              </h2>

              <p className="hero-description">
                IT professional with hands-on experience across system
                administration, networking, cloud infrastructure,
                cybersecurity, and full-stack software development.
              </p>

              <div className="hero-actions">

                <a
                  href="#projects"
                  className="primary-button"
                >
                  View My Work
                </a>

                <a
                  href="/Shine-V-Thomas-Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-button"
                >
                  View Resume ↗
                </a>

                <a
                  href="https://github.com/shinevthomas"
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-button"
                >
                  GitHub ↗
                </a>

              </div>

              <div className="hero-tech">

                <span>IT Infrastructure</span>

                <span>Networking</span>

                <span>Cloud</span>

                <span>Cybersecurity</span>

                <span>Software Development</span>

              </div>

            </div>


            <div className="hero-card">

              <div className="status">

                <span className="status-dot"></span>

                Open to opportunities

              </div>

              <div className="card-line"></div>

              <p className="card-title">
                Technical Focus
              </p>

              <div className="focus-item">

                <strong>
                  IT Infrastructure
                </strong>

                <span>
                  Systems & Administration
                </span>

              </div>

              <div className="focus-item">

                <strong>
                  Networking
                </strong>

                <span>
                  Infrastructure & Troubleshooting
                </span>

              </div>

              <div className="focus-item">

                <strong>
                  Cloud
                </strong>

                <span>
                  Infrastructure & Deployment
                </span>

              </div>

              <div className="focus-item">

                <strong>
                  Cybersecurity
                </strong>

                <span>
                  Endpoint Security & Monitoring
                </span>

              </div>

              <div className="focus-item">

                <strong>
                  Software
                </strong>

                <span>
                  Full-Stack Web Applications
                </span>

              </div>

            </div>

          </div>

        </section>


        {/* =========================================================
            ABOUT
        ========================================================= */}
        <section
          id="about"
          className="section about-section"
        >

          <div className="section-container">

            <div className="section-heading">

              <span>01</span>

              <h2>
                About Me
              </h2>

            </div>


            <div className="about-grid">

              <div className="about-intro">

                <h3>
                  Technology isn't just about writing code.
                  It's about understanding the whole system.
                </h3>

              </div>


              <div className="about-content">

                <p>
                  I am an IT professional with a broad technical
                  foundation across software development, networking,
                  cloud infrastructure, Linux systems, Windows support,
                  and cybersecurity.
                </p>

                <p>
                  My experience includes working with IT systems,
                  endpoint management, security monitoring, asset
                  management, cloud infrastructure, and modern web
                  application development.
                </p>

                <p>
                  I enjoy understanding how technology works
                  end-to-end — from systems and networks to
                  applications, databases, cloud services, and security.
                </p>

                <p>
                  My approach is practical and hands-on. I learn by
                  building, troubleshooting, deploying, and working
                  with real technologies and real-world problems.
                </p>


                {/* Social Icons */}
                <div className="about-socials">

                  <a
                    href="https://www.linkedin.com/in/shinevthomas123"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>

                  <a
                    href="https://github.com/shinevthomas"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    title="GitHub"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href="mailto:shineofficial79@gmail.com"
                    aria-label="Email"
                    title="Email"
                  >
                    <FaEnvelope />
                  </a>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =========================================================
            TECHNICAL SKILLS
        ========================================================= */}
        <section
          id="skills"
          className="section skills-section"
        >

          <div className="section-container">

            <div className="section-heading">

              <span>02</span>

              <h2>
                Technical Skills
              </h2>

            </div>


            <div className="skills-intro">

              <p>
                A broad technical foundation spanning IT systems,
                networking, cloud infrastructure, cybersecurity,
                asset management, and software development.
              </p>

            </div>


            <div className="skills-grid">

              {/* IT & SYSTEMS */}
              <article className="skill-card">

                <div className="skill-number">
                  01
                </div>

                <h3>
                  IT & Systems
                </h3>

                <p>
                  Hands-on experience with operating systems,
                  system setup, configuration, troubleshooting,
                  and day-to-day IT operations.
                </p>

                <div className="skill-tags">

                  <span>Linux</span>

                  <span>Windows</span>

                  <span>System Administration</span>

                  <span>System Setup</span>

                  <span>Troubleshooting</span>

                  <span>IT Support</span>

                </div>

              </article>


              {/* NETWORKING */}
              <article className="skill-card">

                <div className="skill-number">
                  02
                </div>

                <h3>
                  Networking
                </h3>

                <p>
                  Practical understanding of networking
                  fundamentals and troubleshooting connectivity
                  and infrastructure-related issues.
                </p>

                <div className="skill-tags">

                  <span>TCP/IP</span>

                  <span>DNS</span>

                  <span>DHCP</span>

                  <span>Nmap</span>

                  <span>Network Troubleshooting</span>

                </div>

              </article>


              {/* CLOUD */}
              <article className="skill-card">

                <div className="skill-number">
                  03
                </div>

                <h3>
                  Cloud & Deployment
                </h3>

                <p>
                  Experience with cloud-based application
                  deployment, production environments, source
                  control, and infrastructure-related workflows.
                </p>

                <div className="skill-tags">

                  <span>Cloud Infrastructure</span>

                  <span>Deployment</span>

                  <span>Vercel</span>

                  <span>Render</span>

                  <span>MongoDB Atlas</span>

                  <span>Git</span>

                  <span>GitHub</span>

                </div>

              </article>


              {/* CYBERSECURITY */}
              <article className="skill-card">

                <div className="skill-number">
                  04
                </div>

                <h3>
                  Cybersecurity
                </h3>

                <p>
                  Practical exposure to endpoint monitoring,
                  security visibility, system hardening, and
                  endpoint security operations.
                </p>

                <div className="skill-tags">

                  <span>Wazuh</span>

                  <span>Endpoint Security</span>

                  <span>Security Monitoring</span>

                  <span>System Hardening</span>

                </div>

              </article>


              {/* ASSET MANAGEMENT */}
              <article className="skill-card">

                <div className="skill-number">
                  05
                </div>

                <h3>
                  IT Asset Management
                </h3>

                <p>
                  Experience working with asset inventory and
                  endpoint management systems to maintain
                  visibility across organizational resources.
                </p>

                <div className="skill-tags">

                  <span>Snipe-IT</span>

                  <span>Asset Management</span>

                  <span>Endpoint Inventory</span>

                  <span>Hardware Tracking</span>

                </div>

              </article>


              {/* SOFTWARE */}
              <article className="skill-card">

                <div className="skill-number">
                  06
                </div>

                <h3>
                  Software Development
                </h3>

                <p>
                  Full-stack web development experience building
                  practical applications, APIs, databases,
                  authentication, and production deployments.
                </p>

                <div className="skill-tags">

                  <span>JavaScript</span>

                  <span>React</span>

                  <span>Node.js</span>

                  <span>Express</span>

                  <span>MongoDB</span>

                  <span>REST APIs</span>

                  <span>JWT</span>

                  <span>Axios</span>

                </div>

              </article>

            </div>

          </div>

        </section>


        {/* =========================================================
            EXPERIENCE
        ========================================================= */}
        <section
          id="experience"
          className="section experience-section"
        >

          <div className="section-container">

            <div className="section-heading">

              <span>03</span>

              <h2>
                Experience
              </h2>

            </div>


            <article className="experience-card">

              <div className="experience-header">

                <div>

                  <p className="experience-company">
                    ATI Robotics
                  </p>

                  <h3>
                    IT Intern — System Administration & Infrastructure
                  </h3>

                </div>

                <span className="experience-type">
                  Internship
                </span>

              </div>


              <div className="experience-content">

                <p>
                  Gained hands-on experience supporting IT
                  infrastructure, endpoint environments, system
                  administration, and security operations within
                  a professional technology environment.
                </p>


                <ul>

                  <li>
                    Performed Linux system setup, configuration,
                    maintenance, and troubleshooting.
                  </li>

                  <li>
                    Supported Windows systems and assisted with
                    day-to-day IT troubleshooting and technical support.
                  </li>

                  <li>
                    Worked with cloud infrastructure and deployment
                    environments as part of IT operations.
                  </li>

                  <li>
                    Worked with Wazuh for endpoint monitoring,
                    security visibility, and agent-related investigation.
                  </li>

                  <li>
                    Used Snipe-IT for IT asset management, endpoint
                    inventory, and hardware tracking.
                  </li>

                  <li>
                    Assisted with endpoint security activities and
                    investigated system and endpoint-related issues.
                  </li>

                  <li>
                    Applied networking and system troubleshooting
                    techniques to identify and resolve infrastructure issues.
                  </li>

                </ul>

              </div>


              <div className="experience-tech">

                <span>Linux</span>

                <span>Windows</span>

                <span>System Administration</span>

                <span>Networking</span>

                <span>Wazuh</span>

                <span>Snipe-IT</span>

                <span>Endpoint Security</span>

                <span>Cloud Infrastructure</span>

                <span>Troubleshooting</span>

              </div>

            </article>

          </div>

        </section>


        {/* =========================================================
            PROJECTS
        ========================================================= */}
        <section
          id="projects"
          className="section projects-section"
        >

          <div className="section-container">

            <div className="section-heading">

              <span>04</span>

              <h2>
                Featured Project
              </h2>

            </div>


            <article className="project-card">

              <div className="project-header">

                <div>

                  <p className="project-label">
                    FULL-STACK APPLICATION
                  </p>

                  <h3>
                    SmartBiz ERP
                  </h3>

                </div>


                <div className="project-links">

                  <a
                    href="https://github.com/shinevthomas/Smartbiz-erp"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub ↗
                  </a>

                  <a
                    href="https://smartbiz-erp-eight.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Application ↗
                  </a>

                </div>

              </div>


              <div className="project-main">

                <div className="project-description">

                  <h4>
                    A full-stack enterprise resource planning
                    application designed to manage core business
                    operations from a centralized platform.
                  </h4>

                  <p>
                    SmartBiz ERP was developed as a production-style
                    web application with a React frontend, Node.js
                    and Express backend, and MongoDB database. The
                    system provides structured workflows for managing
                    products, sales, customers, invoices, reports,
                    and user authentication.
                  </p>

                  <p>
                    The project involved designing the frontend,
                    developing REST APIs, implementing database
                    models, authentication and authorization,
                    connecting frontend and backend services,
                    and deploying the application to the cloud.
                  </p>


                  <div className="project-features">

                    <div>

                      <strong>
                        Inventory Management
                      </strong>

                      <span>
                        Product, stock, category and supplier management
                      </span>

                    </div>


                    <div>

                      <strong>
                        Sales Management
                      </strong>

                      <span>
                        Sales workflows and transaction management
                      </span>

                    </div>


                    <div>

                      <strong>
                        Customer Management
                      </strong>

                      <span>
                        Centralized customer information and records
                      </span>

                    </div>


                    <div>

                      <strong>
                        Invoice Management
                      </strong>

                      <span>
                        Invoice creation and business documentation
                      </span>

                    </div>


                    <div>

                      <strong>
                        Reports & Dashboard
                      </strong>

                      <span>
                        Business insights and operational overview
                      </span>

                    </div>


                    <div>

                      <strong>
                        Authentication
                      </strong>

                      <span>
                        JWT-based authentication and protected routes
                      </span>

                    </div>

                  </div>

                </div>


                <aside className="project-stack">

                  <p>
                    TECHNOLOGY STACK
                  </p>

                  <div className="project-tags">

                    <span>React</span>

                    <span>JavaScript</span>

                    <span>Node.js</span>

                    <span>Express</span>

                    <span>MongoDB</span>

                    <span>Mongoose</span>

                    <span>REST API</span>

                    <span>JWT</span>

                    <span>Axios</span>

                    <span>Git</span>

                    <span>GitHub</span>

                    <span>Vercel</span>

                    <span>Render</span>

                  </div>

                </aside>

              </div>


              <div className="project-images">

                <div className="project-image">

                  <img
                    src="/screenshots/dashboard.png"
                    alt="SmartBiz ERP dashboard"
                  />

                  <p>
                    ERP Dashboard
                  </p>

                </div>


                <div className="project-image">

                  <img
                    src="/screenshots/inventory.png"
                    alt="SmartBiz ERP inventory management"
                  />

                  <p>
                    Inventory Management
                  </p>

                </div>

              </div>

            </article>

          </div>

        </section>


        {/* =========================================================
            EDUCATION
        ========================================================= */}
        <section
          id="education"
          className="section education-section"
        >

          <div className="section-container">

            <div className="section-heading">

              <span>05</span>

              <h2>
                Education
              </h2>

            </div>


            <div className="education-list">

              {/* MCA */}
              <article className="education-card">

                <div className="education-year">
                  2026 — PRESENT
                </div>


                <div className="education-content">

                  <p className="education-label">
                    POSTGRADUATE
                  </p>

                  <h3>
                    Master of Computer Applications
                  </h3>

                  <h4>
                    Cybersecurity & Artificial Intelligence
                  </h4>

                  <p className="education-institution">
                    Currently Pursuing
                  </p>

                  <p className="education-status">
                    Focused on cybersecurity, artificial intelligence,
                    computing systems, and advanced technology.
                  </p>

                </div>

              </article>


              {/* BCA */}
              <article className="education-card">

                <div className="education-year">
                  2026
                </div>


                <div className="education-content">

                  <p className="education-label">
                    UNDERGRADUATE
                  </p>

                  <h3>
                    Bachelor of Computer Applications
                  </h3>

                  <h4>
                    Artificial Intelligence
                  </h4>

                  <p className="education-institution">
                    St Aloysius (Deemed to be University)
                  </p>

                  <p className="education-status">
                    Graduated in 2026
                  </p>

                </div>

              </article>

            </div>

          </div>

        </section>


        {/* =========================================================
            CERTIFICATIONS
        ========================================================= */}
        <section
          id="certifications"
          className="section certifications-section"
        >

          <div className="section-container">

            <div className="section-heading">

              <span>06</span>

              <h2>
                Certifications & Learning
              </h2>

            </div>


            <div className="certifications-grid">

              {/* Certification 01 */}
              <article className="certification-card">

                <div className="certification-number">
                  01
                </div>

                <div className="certification-content">

                  <p className="certification-type">
                    CERTIFICATE
                  </p>

                  <h3>
                    Reasoning & Quantitative Technology
                  </h3>

                  <p>
                    Certification focused on logical reasoning,
                    quantitative thinking, and technology-oriented
                    problem solving.
                  </p>

                </div>

              </article>


              {/* Certification 02 */}
              <article className="certification-card">

                <div className="certification-number">
                  02
                </div>

                <div className="certification-content">

                  <p className="certification-type">
                    CERTIFICATE
                  </p>

                  <h3>
                    Revolutionizing Industries
                  </h3>

                  <p>
                    Learning experience covering technology-driven
                    transformation and the impact of emerging
                    technologies across industries.
                  </p>

                </div>

              </article>


              {/* Certification 03 */}
              <article className="certification-card">

                <div className="certification-number">
                  03
                </div>

                <div className="certification-content">

                  <p className="certification-type">
                    CERTIFICATE
                  </p>

                  <h3>
                    Event Management
                  </h3>

                  <p>
                    Certification demonstrating exposure to event
                    planning, organization, coordination, and execution.
                  </p>

                </div>

              </article>


              {/* Certification 04 */}
              <article className="certification-card">

                <div className="certification-number">
                  04
                </div>

                <div className="certification-content">

                  <p className="certification-type">
                    ONLINE COURSE
                  </p>

                  <h3>
                    Artificial Intelligence & Machine Learning
                  </h3>

                  <p>
                    Online learning focused on artificial intelligence
                    and machine learning concepts and applications.
                  </p>

                  <span className="certification-status">
                    CERTIFICATE PENDING
                  </span>

                </div>

              </article>

            </div>

          </div>

        </section>


        {/* =========================================================
            CONTACT
        ========================================================= */}
        <section
          id="contact"
          className="section contact-section"
        >

          <div className="section-container">

            <div className="section-heading">

              <span>07</span>

              <h2>
                Contact
              </h2>

            </div>


            <div className="contact-grid">

              <div className="contact-intro">

                <p className="contact-label">
                  LET'S CONNECT
                </p>

                <h3>
                  Open to opportunities,
                  <br />
                  collaboration & technology.
                </h3>

                <p>
                  I'm interested in opportunities across IT
                  infrastructure, system administration, networking,
                  cloud, cybersecurity, and software development.
                </p>

              </div>


              <div className="contact-details">

                {/* Email */}
                <a
                  href="mailto:shineofficial79@gmail.com"
                  className="contact-item"
                >

                  <span className="contact-item-label">
                    EMAIL
                  </span>

                  <span className="contact-item-value">
                    shineofficial79@gmail.com
                  </span>

                </a>


                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/shinevthomas123"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-item"
                >

                  <span className="contact-item-label">
                    LINKEDIN
                  </span>

                  <span className="contact-item-value">
                    linkedin.com/in/shinevthomas123
                  </span>

                </a>


                {/* GitHub */}
                <a
                  href="https://github.com/shinevthomas"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-item"
                >

                  <span className="contact-item-label">
                    GITHUB
                  </span>

                  <span className="contact-item-value">
                    github.com/shinevthomas
                  </span>

                </a>


                {/* Resume */}
                <a
                  href="/Shine-V-Thomas-Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-item"
                >

                  <span className="contact-item-label">
                    RESUME
                  </span>

                  <span className="contact-item-value">
                    View Resume ↗
                  </span>

                </a>

              </div>

            </div>

          </div>

        </section>

      </main>


      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="footer">

        <div className="footer-container">

          <div>

            <strong>
              Shine V Thomas
            </strong>

            <p>
              IT Professional • Networking • Cloud •
              Cybersecurity • Software
            </p>

          </div>


          <p>
            © {new Date().getFullYear()} Shine V Thomas.
            All rights reserved.
          </p>

        </div>

      </footer>

    </div>
  );
}

export default App;