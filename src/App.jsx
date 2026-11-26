import { useState, useEffect } from "react";
import "./App.css";

import {
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaMoon,
  FaSun,
  FaCopy,
  FaCheck,
  FaArrowUp,
  FaTimes,
} from "react-icons/fa";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      return localStorage.getItem("portfolio-theme") === "dark";
    } catch {
      return false;
    }
  });
  const [projectFilter, setProjectFilter] = useState("all");
  const [lightbox, setLightbox] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem("portfolio-theme", darkMode ? "dark" : "light");
    } catch {
      // ignore storage errors
    }
  }, [darkMode]);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      setScrollProgress(total > 0 ? Math.min(100, (window.scrollY / total) * 100) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText("shineofficial79@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const showCategory = (cat) => projectFilter === "all" || projectFilter === cat;

  return (
    <div className={`portfolio ${darkMode ? "theme-dark" : ""}`}>
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />

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

          <div className="nav-right-actions">
            <button
              type="button"
              className="theme-toggle-btn"
              onClick={() => setDarkMode((prev) => !prev)}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              title={darkMode ? "Light mode" : "Dark mode"}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

            <a href="#contact" className="nav-button">
              Let's Connect
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen ? "true" : "false"}
            type="button"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Mobile Navigation */}
          <div className={`mobile-menu ${mobileOpen ? "mobile-menu-open" : ""}`}>

            <a href="#about" onClick={() => setMobileOpen(false)}>About</a>

            <a href="#skills" onClick={() => setMobileOpen(false)}>Skills</a>

            <a href="#experience" onClick={() => setMobileOpen(false)}>Experience</a>

            <a href="#projects" onClick={() => setMobileOpen(false)}>Projects</a>

            <a href="#education" onClick={() => setMobileOpen(false)}>Education</a>

            <a href="#certifications" onClick={() => setMobileOpen(false)}>Certifications</a>

            <a
              href="/Shine-V-Thomas-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileOpen(false)}
            >
              Resume ↗
            </a>

            <a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a>

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
                FULL-STACK ENGINEER • CYBERSECURITY & DEVSECOPS • SAAS ARCHITECT
              </p>

              <h1>
                Shine V Thomas
              </h1>

              <h2>
                Architecting secure SaaS platforms
                <span> & enterprise security systems.</span>
              </h2>

              <p className="hero-description">
                Full-Stack Software Engineer & Cybersecurity Specialist (MCA in Cybersecurity & AI)
                building multi-tenant SaaS platforms, Application Security Posture Management (ASPM),
                and multi-vendor endpoint reconciliation pipelines.
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
            IMPACT METRICS STRIP
        ========================================================= */}
        <section className="impact-strip" aria-label="Key Engineering Highlights">
          <div className="impact-container">
            <div className="impact-item">
              <strong>5+</strong>
              <span>Production Systems Built & Deployed</span>
            </div>
            <div className="impact-item">
              <strong>18 Schemas</strong>
              <span>Multi-Tenant PostgreSQL SaaS Architecture</span>
            </div>
            <div className="impact-item">
              <strong>SARIF 2.1.0</strong>
              <span>Automated ASPM & CI/CD Security Gates</span>
            </div>
            <div className="impact-item">
              <strong>80%+</strong>
              <span>Audit Overhead Reduced at ATI Robotics</span>
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
                Featured Projects
              </h2>

            </div>

            <div className="project-filters" role="tablist" aria-label="Filter projects by category">
              <button
                type="button"
                className={`filter-tab ${projectFilter === "all" ? "active" : ""}`}
                onClick={() => setProjectFilter("all")}
              >
                All Projects (5)
              </button>
              <button
                type="button"
                className={`filter-tab ${projectFilter === "security" ? "active" : ""}`}
                onClick={() => setProjectFilter("security")}
              >
                Security & DevSecOps (2)
              </button>
              <button
                type="button"
                className={`filter-tab ${projectFilter === "saas" ? "active" : ""}`}
                onClick={() => setProjectFilter("saas")}
              >
                Enterprise SaaS (2)
              </button>
              <button
                type="button"
                className={`filter-tab ${projectFilter === "web" ? "active" : ""}`}
                onClick={() => setProjectFilter("web")}
              >
                Frontend & SEO (1)
              </button>
            </div>


            <article className={`project-card ${showCategory("saas") ? "" : "project-card-hidden"}`}>

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

                <div
                  className="project-image project-image-clickable"
                  onClick={() => setLightbox({ src: "/screenshots/dashboard.png", caption: "SmartBiz ERP — ERP Dashboard" })}
                >

                  <img
                    src="/screenshots/dashboard.png"
                    alt="SmartBiz ERP dashboard"
                  />

                  <p>
                    ERP Dashboard
                  </p>

                </div>


                <div
                  className="project-image project-image-clickable"
                  onClick={() => setLightbox({ src: "/screenshots/inventory.png", caption: "SmartBiz ERP — Inventory Management" })}
                >

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


            {/* AegisSec — Enterprise ASPM Platform */}
            <article className={`project-card ${showCategory("security") ? "" : "project-card-hidden"}`}>

              <div className="project-header">

                <div>
                  <p className="project-label">
                    CYBERSECURITY · DEVSECOPS · ASPM
                  </p>

                  <h3>
                    AegisSec — Enterprise Security Platform
                  </h3>

                </div>

                <div className="project-links">

                  <a
                    href="https://github.com/shinevthomas/aegis-sec"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub ↗
                  </a>

                  <a
                    href="https://aegis-sec.onrender.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo ↗
                  </a>

                </div>

              </div>


              <div className="project-main">

                <div className="project-description">

                  <h4>
                    An enterprise-grade Application Security Posture Management (ASPM)
                    platform that automates multi-vector vulnerability scanning, enforces
                    CI/CD quality gates, and exports industry-standard OASIS SARIF 2.1.0 reports.
                  </h4>

                  <p>
                    AegisSec orchestrates three security engines: a Gitleaks-style secret scanner
                    detecting exposed API keys and credentials, a Semgrep-style SAST engine
                    flagging SQL Injection (CWE-89) with inline parameterized query diffs,
                    and a Trivy-style SCA engine cross-referencing CVE advisories against
                    third-party dependencies.
                  </p>

                  <p>
                    The platform enforces automated GitHub Actions CI/CD quality gates,
                    exports OASIS SARIF 2.1.0 reports natively ingested by GitHub Advanced
                    Security, and deploys as a containerized Docker service with a dark-mode
                    web control room providing real-time posture scoring (0–100).
                  </p>


                  <div className="project-features">

                    <div>
                      <strong>Secret Detection</strong>
                      <span>AWS IAM keys, Stripe tokens, private keys — masked in logs</span>
                    </div>

                    <div>
                      <strong>SAST Code Analysis</strong>
                      <span>SQL Injection (CWE-89) detection with remediation diffs</span>
                    </div>

                    <div>
                      <strong>SCA Dependency Audit</strong>
                      <span>CVE advisory matching for outdated third-party packages</span>
                    </div>

                    <div>
                      <strong>CI/CD Quality Gate</strong>
                      <span>GitHub Actions workflow blocking high-risk pull requests</span>
                    </div>

                    <div>
                      <strong>OASIS SARIF 2.1.0</strong>
                      <span>Industry-standard output for GitHub Code Scanning & Azure DevOps</span>
                    </div>

                    <div>
                      <strong>Posture Score (0–100)</strong>
                      <span>Real-time A–F security grading with Docker web dashboard</span>
                    </div>

                  </div>

                </div>


                <aside className="project-stack">

                  <p>
                    TECHNOLOGY STACK
                  </p>

                  <div className="project-tags">

                    <span>Python</span>
                    <span>OASIS SARIF 2.1.0</span>
                    <span>Docker</span>
                    <span>GitHub Actions</span>
                    <span>REST API</span>
                    <span>HTML5 / CSS3</span>
                    <span>OWASP Top 10</span>
                    <span>CWE-89</span>
                    <span>CVE / SCA</span>
                    <span>DevSecOps</span>
                    <span>Git</span>

                  </div>

                </aside>

              </div>

              <div className="project-images">

                <div
                  className="project-image project-image-clickable"
                  onClick={() => setLightbox({ src: "/screenshots/aegis-sec.png", caption: "AegisSec — Enterprise ASPM Control Center" })}
                >

                  <img
                    src="/screenshots/aegis-sec.png"
                    alt="AegisSec Enterprise ASPM Control Center"
                  />

                  <p>
                    Enterprise ASPM Control Center
                  </p>

                </div>

              </div>

            </article>


            {/* HRAstra — Enterprise Cloud HRMS & Payroll */}
            <article className={`project-card ${showCategory("saas") ? "" : "project-card-hidden"}`}>

              <div className="project-header">

                <div>
                  <p className="project-label">
                    ENTERPRISE SAAS · FULL-STACK · HRMS & PAYROLL
                  </p>

                  <h3>
                    HRAstra — Enterprise Cloud HRMS & Payroll
                  </h3>
                </div>

                <div className="project-links">

                  <a
                    href="https://github.com/shinevthomas/hrastra"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub ↗
                  </a>

                  <a
                    href="https://hrastra-demo.vercel.app"
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
                    A production-grade, multi-tenant Human Capital Management (HCM) & Statutory
                    Payroll platform engineered for Indian enterprises with automated compliance
                    (EPF/ESIC/PT/TDS), shift rosters, Form 12BB tax regime comparator, SOC2 audit trail,
                    and offboarding FnF clearances.
                  </h4>

                  <p>
                    HRAstra provides strict enterprise multi-tenant data isolation using PostgreSQL UUID
                    scoping across 18 relational models. The platform features an automated Indian statutory
                    payroll engine computing Employees' Provident Fund (12% EPF employee + employer), ESIC,
                    State Professional Tax (₹200), and TDS withholding, alongside official printable
                    payslip vouchers with Indian numbering and numbers-to-words currency conversion.
                  </p>

                  <p>
                    Includes an interactive Form 12BB Income Tax regime comparator (Old vs New Regime under Budget 2024),
                    multi-shift roster scheduling, biometric IoT webhook simulation, atomic leave deductions
                    with FOR UPDATE ACID row-locks, 4-way separation clearances (IT, Finance, HR, Admin),
                    SOC2/ISO 27001 audit logging, and full Employee 360° profile inspection.
                  </p>


                  <div className="project-features">

                    <div>
                      <strong>Multi-Tenant Architecture</strong>
                      <span>Strict UUID tenant scoping across all 18 PostgreSQL relational tables</span>
                    </div>

                    <div>
                      <strong>Form 12BB Tax Comparator</strong>
                      <span>Interactive Old vs New Regime simulation (Budget 2024 ₹75k std deduction & slabs)</span>
                    </div>

                    <div>
                      <strong>Shift & Roster Management</strong>
                      <span>Multi-shift rotation (Morning, General, US Night), grace tracking & weekly matrix</span>
                    </div>

                    <div>
                      <strong>Separation & FnF Clearance</strong>
                      <span>Notice period countdown, 4-way clearance (IT/Finance/HR/Admin) & FnF settlement</span>
                    </div>

                    <div>
                      <strong>SOC2 & ISO 27001 Audit Trail</strong>
                      <span>Immutable chronological compliance event log with client IP and category tagging</span>
                    </div>

                    <div>
                      <strong>Indian Statutory Payroll</strong>
                      <span>EPF (12%), ESIC (0.75%), State PT (₹200), TDS & auto payslip voucher generation</span>
                    </div>

                    <div>
                      <strong>Web & Biometric Punch</strong>
                      <span>Browser punch clock + IoT hardware webhook for physical attendance terminals</span>
                    </div>

                    <div>
                      <strong>Atomic Leave Engine</strong>
                      <span>Casual, Sick, Privilege quotas with ACID transaction deductions on manager approval</span>
                    </div>

                    <div>
                      <strong>Recursive Org Tree</strong>
                      <span>Visual company hierarchy resolving dynamic manager-to-report chains</span>
                    </div>

                    <div>
                      <strong>KYC Document Vault</strong>
                      <span>Encrypted Aadhaar, PAN, Offer Letter & academic degree compliance repository</span>
                    </div>

                  </div>

                </div>


                <aside className="project-stack">

                  <p>
                    TECHNOLOGY STACK
                  </p>

                  <div className="project-tags">

                    <span>Node.js</span>
                    <span>Express</span>
                    <span>PostgreSQL 16</span>
                    <span>React</span>
                    <span>Multi-Tenancy</span>
                    <span>JWT Auth</span>
                    <span>ACID Transactions</span>
                    <span>Indian Payroll (EPF/ESI)</span>
                    <span>IoT Webhooks</span>
                    <span>REST APIs</span>
                    <span>Tailwind CSS</span>
                    <span>Git</span>

                  </div>

                </aside>

              </div>

              <div className="project-images">

                <div
                  className="project-image project-image-clickable"
                  onClick={() => setLightbox({ src: "/screenshots/hrastra.png", caption: "HRAstra — Cloud HRMS & Payroll" })}
                >

                  <img
                    src="/screenshots/hrastra.png"
                    alt="HRAstra Enterprise Cloud HRMS & Payroll"
                  />

                  <p>
                    HRAstra Cloud HRMS & Payroll
                  </p>

                </div>

              </div>

            </article>


            {/* Endpoint Reconciliation Platform */}
            <article className={`project-card ${showCategory("security") ? "" : "project-card-hidden"}`}>

              <div className="project-header">

                <div>
                  <p className="project-label">
                    IT OPERATIONS & ENDPOINT SECURITY · ATI ROBOTICS
                  </p>

                  <h3>
                    Endpoint Reconciliation Platform
                  </h3>
                </div>

              </div>

              <div className="project-main">

                <div className="project-description">

                  <h4>
                    An internal enterprise platform built for ATI Robotics to reconcile IT asset
                    inventory with endpoint security records.
                  </h4>

                  <p>
                    The platform brings together asset inventory and
                    endpoint security information to help identify
                    missing records, hostname mismatches, and endpoint
                    coverage gaps.
                  </p>

                  <p>
                    It uses a React frontend, Python FastAPI backend,
                    and PostgreSQL database. Integrations include
                    Snipe-IT, Wazuh, and Trend Micro Vision One.
                  </p>

                  <div className="project-features">

                    <div>
                      <strong>Asset Reconciliation</strong>
                      <span>
                        Compare inventory records with endpoint data
                      </span>
                    </div>

                    <div>
                      <strong>Endpoint Coverage</strong>
                      <span>
                        Identify potentially missing security records
                      </span>
                    </div>

                    <div>
                      <strong>Mismatch Detection</strong>
                      <span>
                        Highlight hostname differences and discrepancies
                      </span>
                    </div>

                    <div>
                      <strong>Centralized Dashboard</strong>
                      <span>
                        Review consolidated reconciliation results
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
                    <span>Python</span>
                    <span>FastAPI</span>
                    <span>PostgreSQL</span>
                    <span>REST APIs</span>
                    <span>Snipe-IT</span>
                    <span>Wazuh</span>
                    <span>Trend Micro Vision One</span>
                  </div>

                </aside>

              </div>

            </article>


            {/* BoomBaangh Website */}
            <article className={`project-card ${showCategory("web") ? "" : "project-card-hidden"}`}>

              <div className="project-header">

                <div>
                  <p className="project-label">
                    FRONTEND · WEB DESIGN · SEO
                  </p>

                  <h3>
                    BoomBaangh Website
                  </h3>
                </div>

                <div className="project-links">

                  <a
                    href="https://github.com/shinevthomas/boombangh-website"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub ↗
                  </a>

                  <a
                    href="https://boombangh-website.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Site ↗
                  </a>

                </div>

              </div>

              <div className="project-main">

                <div className="project-description">

                  <h4>
                    A responsive brand and product showcase web application built with React and Vite,
                    featuring structured SEO metadata, Open Graph integration, and automated Vercel deployment.
                  </h4>

                  <p>
                    Engineered with clean component architecture, fast Vite bundling, schema.org JSON-LD
                    structured data, sitemap, and robots.txt for search engine indexing.
                  </p>

                </div>

                <aside className="project-stack">

                  <p>
                    TECHNOLOGY STACK
                  </p>

                  <div className="project-tags">
                    <span>React</span>
                    <span>Vite</span>
                    <span>JavaScript</span>
                    <span>HTML5 / CSS3</span>
                    <span>SEO / JSON-LD</span>
                    <span>Vercel</span>
                  </div>

                </aside>

              </div>

              <div className="project-images">

                <div
                  className="project-image project-image-clickable"
                  onClick={() => setLightbox({ src: "/screenshots/boombangh.png", caption: "BoomBaangh — Brand & Product Showcase" })}
                >

                  <img
                    src="/screenshots/boombangh.png"
                    alt="BoomBaangh Brand & Product Showcase"
                  />

                  <p>
                    BoomBaangh Brand & Product Showcase
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
                <div className="contact-item contact-item-row">
                  <a
                    href="mailto:shineofficial79@gmail.com"
                    className="contact-item-link"
                  >
                    <span className="contact-item-label">
                      EMAIL
                    </span>

                    <span className="contact-item-value">
                      shineofficial79@gmail.com
                    </span>
                  </a>
                  <button
                    type="button"
                    className="copy-email-btn"
                    onClick={handleCopyEmail}
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? <><FaCheck /> Copied</> : <><FaCopy /> Copy</>}
                  </button>
                </div>


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


          <div className="footer-right">
            <p>
              © {new Date().getFullYear()} Shine V Thomas.
              All rights reserved.
            </p>
            <a href="#home" className="back-to-top" aria-label="Back to top">
              <FaArrowUp /> Top
            </a>
          </div>

        </div>

      </footer>

      {lightbox && (
        <div
          className="lightbox-backdrop"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.caption}
        >
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setLightbox(null)}
              aria-label="Close preview"
            >
              <FaTimes />
            </button>
            <img src={lightbox.src} alt={lightbox.caption} />
            <p className="lightbox-caption">{lightbox.caption}</p>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;