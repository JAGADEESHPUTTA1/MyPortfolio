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
          Hi! I'm <strong>Jagadeesh Putta</strong>, a results-driven{" "}
          <strong>Frontend Developer</strong> with over <strong>4 years</strong>{" "}
          of experience designing and building modern, responsive web
          applications. Currently, I’m working at{" "}
          <strong>Tata Consultancy Services (TCS)</strong>, where I’ve
          contributed to large-scale enterprise projects across diverse business
          domains.
          <br /> <br />
          My expertise lies in building scalable, maintainable, and
          user-friendly interfaces using <strong>React.js</strong>,{" "}
          <strong>JavaScript (ES6+)</strong>, <strong>Redux</strong>,{" "}
          <strong>Bootstrap 5</strong>, and <strong>Styled Components</strong>
          . I excel at turning complex design requirements into clean,
          performant code with a strong emphasis on usability and cross-browser
          compatibility.
          <br /> <br />
          I have a deep understanding of component-driven development, modern
          state management, and frontend architecture best practices. I'm
          experienced in consuming RESTful APIs, managing version control with
          Git, and working in fast-paced agile environments with
          cross-functional teams.
          <br /> <br />
          <strong>Tech Stack & Tools:</strong>
          <br /> <br />
          React.js (Hooks & Functional Components), TypeScript, JavaScript
          (ES6+), HTML5, CSS3, SCSS, Bootstrap 5, Styled Components, Redux,
          React Hook Form, Axios, Context API, D3.js, Highcharts, Git & GitHub,
          Postman, Jest.
          <br /> <br />
          I’m currently seeking new opportunities where I can leverage my
          frontend expertise to help build impactful, high-quality digital
          products while continuing to grow as a developer.
          <br /> <br />
          Let’s connect and explore how I can add value to your team!
        </motion.p>
      </div>
    </section>
  );
}
