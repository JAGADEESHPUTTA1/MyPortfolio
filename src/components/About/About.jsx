import { motion } from "framer-motion";
import "./About.scss";

export default function About() {
  return (
    <section id="about" className="about-section">
      <motion.h3
        className="heading"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h3>

      <div className="about-content">
        <motion.p
          className="about-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Hi! I'm <strong>Jagadeesh Putta</strong>, a frontend developer with{" "}
          <strong>4 years</strong> of professional experience crafting
          responsive, user-focused web interfaces using{" "}
          <strong>React.js</strong>, <strong>JavaScript</strong>,{" "}
          <strong>Bootstrap</strong>, and <strong>Styled Components</strong>.
          <br />
          <br />
          I specialize in turning designs into clean, maintainable, and
          interactive web experiences. From simple landing pages to complex user
          dashboards, I bring performance and polish to every project.
          <br />
          <br />
          🔧 <strong>What I Work With:</strong>
          <br />
          React.js (Functional Components, Hooks), JavaScript (ES6+), HTML5,
          CSS3, Bootstrap 5, Redux, Styled Components, responsive mobile-first
          design, API integration, Git & GitHub.
          <br />
          <br />I currently work full-time in a corporate role and take on
          freelance projects in my evenings and weekends. I'm committed to clear
          communication, timely delivery, and writing high-quality code. Let's
          connect and bring your frontend vision to life!
        </motion.p>
      </div>
    </section>
  );
}
