/**
 * Professional Portfolio App - Soni Kumari
 * Structure: Hero → About → Skills → Credibility → Projects → Contact
 * Responsive, full-width, modern glassmorphism design
 * Update: links, photo (hero.png), resume PDF href
 */

import heroImg from './assets/images (7).jpg';
import './App.css';

function App() {
  return (
    <div className="portfolio-app">
      {/* ===== HERO SECTION ===== 
        Purpose: First impression - Name, Role, Tagline, CTAs
        Dimensions: 100vh height, centered content
      */}
      <section className="hero-section" aria-label="Hero Section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-visual">
              <img src={heroImg} className="hero-image" alt="Soni Kumari - Full Stack Developer" loading="lazy" />
            </div>
            <div className="hero-text"  style={{ marginTop: '-70px' }}>
              <h1>Nitesh Kumar Pandit</h1>
              <h2>Full Stack Developer</h2>
              <p>I build scalable web applications using MERN stack that solve real-world problems</p>
              <div className="hero-buttons">
                <a href="#projects" className="btn btn-primary" aria-label="View Projects">
                  View Projects
                </a>
                <a 
                    href="/Resume.pdf" 
                    download="Nitesh_Kumar_Pandit_Resume.pdf"
                    className="btn btn-secondary"
                  >
                    Download Resume
                  </a>
                <a href="#contact" className="btn btn-secondary" aria-label="Contact Soni">
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== 
        Purpose: Short professional bio (3 lines max)
        Dimensions: Padding 8rem top/bottom, centered max 800px text
      */}
      <section className="about-section" id="about" aria-label="About Soni Kumari">
        <div className="container" style={{marginTop:"50px"}}>
          <h2 style={{ color: 'white' }}>About Me</h2>
          <div className="about-content">
            <p>I am a full-stack developer specializing in React, Node.js, and MongoDB.</p>
            <p>I enjoy building real-world applications with authentication, APIs, and deployment.</p>
            <p>Currently looking for internship or junior developer roles.</p>
          </div>
        </div>
      </section>

      {/* ===== SKILLS SECTION ===== 
        Purpose: Demonstrate technical skills in categories
        Dimensions: Cards min 300px wide, grid auto-fit
      */}
      <section className="skills-section" id="skills" aria-label="Technical Skills">
        <div className="container">
          <h2 style={{color:"white"}}>Skills</h2>
          <div className="skills-grid">
            {/* Frontend Skills Card */}
            <div className="skill-category" role="group" aria-label="Frontend Skills">
              <h3>💻 Frontend</h3>
              <ul>
                <li>React.js</li>
                <li>HTML5, CSS3, JavaScript ES6+</li>
              </ul>
            </div>
            {/* Backend Skills Card */}
            <div className="skill-category" role="group" aria-label="Backend Skills">
              <h3>⚙️ Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
              </ul>
            </div>
            {/* Database Skills Card */}
            <div className="skill-category" role="group" aria-label="Database Skills">
              <h3>🗄️ Database</h3>
              <ul>
                <li>MongoDB</li>
              </ul>
            </div>
            {/* Tools Skills Card */}
            <div className="skill-category" role="group" aria-label="Tools and Concepts">
              <h3>🔐 Tools & Concepts</h3>
              <ul>
                <li>JWT Authentication</li>
                <li>REST APIs</li>
                <li>Git & GitHub</li>
                <li>Deployment (Vercel + Render)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CREDIBILITY SECTION ===== 
        Purpose: Highlight main achievement
        Dimensions: Full-width subtle accent bg
      */}
      <section className="credibility-section" aria-label="Key Achievement">
        <div className="container">
          <h2>🚀 What I Built</h2>
          <p>Built a full-stack freelancer platform with authentication, real-time chat, and deployment. Complete MERN app solving real hiring marketplace problems for clients and freelancers.</p>
        </div>
      </section>

      {/* ===== PROJECTS SECTION ===== 
        Purpose: Showcase work (Freelancer main project first)
        Dimensions: Featured spans full, cards 400px+ , screenshot 220px height
      */}
      <section className="projects-section" id="projects" aria-label="Featured Projects">
        <div className="container">
          <h2 style={{color:"white"}}>Projects</h2>
          <div className="projects-grid">
            {/* Freelancer Marketplace - Featured Project */}
            <article className="project-card featured" role="article" aria-labelledby="freelancer-title">
              <div className="project-screenshot-placeholder" aria-hidden="true"></div>
              <header>
                <h3 id="freelancer-title">Freelancer Marketplace</h3>
              </header>
              <p><strong>Problem:</strong> Clients struggle to find and hire freelancers efficiently with secure payments and communication.</p>
              <p>A full-stack web application where clients can hire freelancers, manage orders, chat in real-time, and provide ratings.</p>
              <div className="features">
                <strong>Features:</strong>
                <ul>
                  <li>Authentication (JWT + bcrypt)</li>
                  <li>Role-based system (client/freelancer/admin)</li>
                  <li>Order management & payments</li>
                  <li>Real-time chat system (Socket.io)</li>
                  <li>Rating & review system</li>
                </ul>
              </div>
              <div className="tech-stack">
                React | Node.js | MongoDB | Express | Socket.io
              </div>
              <div className="project-links">
                <a href="https://freelancer-marketplace-sandy.vercel.app/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
                <a href="https://github.com/Nitesh-Pandit/Freelancer-Marketplace" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                  GitHub Code
                </a>
              </div>
            </article>
<h2 style={{color:"white",fontSize:'50px'}}>Other Project</h2>
<div  className="project-row">
{/* Todo App Project */}
            <article className="project-card" role="article" aria-labelledby="todo-title">
            <div className='image2'>

              <div className="project-screenshot-placeholder" aria-hidden="true"></div>
            </div>
              <h3 id="todo-title">iNotebook with Auth</h3>
              <p>iNotebook is a web-based online notes management system that allows users to create, store, manage, and share notes securely over the internet</p>
              <div className="tech-stack">Advanced Java | JSP |Servlet | MongoDB | JDBC</div>
              <div className="project-links">
                <a href="https://github.com/Nitesh-Pandit/iNotebook" className="btn btn-primary" target="_blank" rel="noopener noreferrer">GitHub</a>
                {/* <a href="#" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">GitHub</a> */}
              </div>
            </article>

            {/* Blog Platform Project */}
            <article className="project-card" role="article" aria-labelledby="blog-title">
            <div className='image1'>
              <div className="project-screenshot-placeholder" aria-hidden="true"></div>
            </div>
              <h3 id="blog-title">Crome Extension</h3>
              <p>Responsive A powerful Chrome extension that tracks your browsing time and provides detailed productivity analytics with AI-powered recommendations..</p>
              <div className="tech-stack">HTML | CSS | JavaScript | BootsTrap</div>
              <div className="project-links">
                <a href="https://github.com/Nitesh-Pandit/TIME-TRACKING" className="btn btn-primary" target="_blank" rel="noopener noreferrer">GitHub</a>
                {/* <a href="#" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">GitHub</a> */}
              </div>
            </article>
</div>
            
          </div>
          <div id="resume" tabIndex="-1"></div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== 
        Purpose: Simple contact info
        Dimensions: Extra padding bottom, large hover cards
      */}
      <section className="contact-section" id="contact" aria-label="Contact Information" style={{marginTop:'-60px'}}>
        <div className="container">
          <h2 style={{color:'white',fontSize:'40px'}}>Contact</h2>
          <p>I'm actively looking for opportunities. Let's connect!</p>
          <div className="contact-links">
            <a href="mailto:niteshpandit013@gmail.com" className="contact-link" aria-label="Email Nitesh Pandit">
              niteshpandit013@gmail.com
            </a>
            <a href="https://github.com/Nitesh-Pandit" className="contact-link" target="_blank" rel="noopener noreferrer" aria-label="Nitesh Pandit GitHub">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/nitesh-kumar-pandit-4971ab266/" className="contact-link" target="_blank" rel="noopener noreferrer" aria-label="Nitesh Pandit LinkedIn">
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

