import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [dark, setDark] = useState(false);
  const [menu, setMenu] = useState(false);

  // Dark mode toggle
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  // Fade-in animation
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-white dark:bg-gray-800 shadow-md z-10">
        <div className="nav-container">
          <h1 className="logo">Ahrar Ahmad</h1>

          <button className="mobile-btn" onClick={() => setMenu(!menu)}>
            ☰
          </button>

          <div className="nav-links">
            {["home","about","skills","experience","projects","education","contact"].map(link => (
              <a key={link} href={`#${link}`}>{link}</a>
            ))}
            <button onClick={() => setDark(!dark)} className="theme-btn">
              {dark ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {menu && (
        <div className="mobile-menu active">
          {["home","about","skills","experience","projects","education","contact"].map(link => (
            <a key={link} href={`#${link}`} onClick={() => setMenu(false)}>
              {link}
            </a>
          ))}
        </div>
      )}

      {/* HOME */}
      <section id="home" className="home">
        <div className="fade-in">
          <h1>Ahrar Ahmad</h1>
          <p>B.Tech CSE | Software Engineer | DevOps Enthusiast</p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p className="fade-in">
          Driven Computer Science Engineering student with experience in
          DevOps, Web Development, Blockchain and Project Management.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section gray">
        <h2>Skills</h2>
        <div className="grid fade-in">
          <div>Java, Python, JavaScript</div>
          <div>React, Node, Tailwind</div>
          <div>AWS, CI/CD, GitHub</div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section">
        <h2>Experience</h2>
        <p className="fade-in">
          Platform Engineer @ Namifyx (Startup)
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section gray">
        <h2>Projects</h2>
        <div className="grid">
          <div className="card fade-in">Crypto Exchange MVP</div>
          <div className="card fade-in">Portfolio Website</div>
          <div className="card fade-in">Library Management System</div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="section">
        <h2>Education</h2>
        <p className="fade-in">B.Tech CSE – IILM University</p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section gray">
        <h2>Contact</h2>
        <form className="contact-form fade-in">
          <input placeholder="Name" />
          <input placeholder="Email" />
          <textarea placeholder="Message" />
          <button>Send</button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © 2025 Ahrar Ahmad
      </footer>
    </div>
  );
}

export default App;
