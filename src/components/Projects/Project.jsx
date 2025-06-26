import Card from "../Card/Card";
import "./Project.scss";
import { motion } from "framer-motion";
import cs from "/cs.jpg";
import tryg from "/tryg.png";
import pnc from "/pnc.png";
import apple from "/apple.png";
import { useEffect, useState } from "react";
import { isMobile } from "../helper";
import Modal from "../Modal/Modal";

export default function Project() {
  const [isMobileView, setIsMobileView] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Credit Suisse",
      skill: "React",
      desc: "Credit Suisse specializes in investment banking and wealth management, serving clients worldwide.",
      img: cs,

      Technologies: "React, Redux, D3.js, Highcharts, Bootstrap, Axios, AgGrid",
      roles: [
        "	Enhanced data visualization and trading dashboards for banking operations.",
        "	Implemented dynamic forms, modals, and tables using React, Redux, and AgGrid with optimized state management.",
        "	Migrated widgets from Angular to React, improving performance and modernizing the tech stack.",
        "	Implemented AgGrid-based dynamic tables with filters, sorting, and pagination.",
        "	Utilized Redux middleware for side-effects and async data handling.",
        "	Challenge: Chart lags with large data.",
        "	Solution: Used debouncing and virtualization for smooth rendering.",
      ],
    },
    {
      title: "Tryg",
      skill: "React",
      desc: "Tryg A/S is a leading Nordic insurance company operating in Denmark, Norway, and Sweden.",
      img: tryg,
      Technologies: " React, TypeScript, Context API, React Router, Axios",
      roles: [
        "	Led migration from legacy AngularJS to React, enhancing performance and code maintainability.",
        "	Built interactive claim management modules and integrated secure APIs.",
        "	Migrated widgets using Agile sprints and ensured cross-browser compatibility.",
        "	Implemented dark/light theme toggle and responsive grid layouts for mobile/tablet devices.",
        "	Wrote modular SCSS and implemented lazy loading for heavy components.",
        "	Challenge: Type errors during legacy migration.",
        "	Solution: Created custom hooks, shared types, and reusable interfaces.",
      ],
    },
    {
      title: "PNC",
      skill: "React",
      desc: "PNC Bank is a top US financial institution and part of The PNC Financial Services Group.",
      img: pnc,
      Technologies: "React, Redux, SCSS, Hooks, Axios, Postman,",
      roles: [
        "	Optimized frontend logic for financial dashboards with focus on rendering speed and user experience.",
        "	Collaborated closely with backend engineers and UX designers to deliver responsive, accessible, and pixel-perfect UIs.",
        "	Developed reusable UI components and integrated RESTful APIs using Axios.",
        "	Built unit and integration test suites using Jest to ensure code quality and reduce regression bugs.",
        "	Refactored legacy codebase to improve load times by 35%",
      ],
    },
    {
      title: "Apple",
      skill: "React",
      desc: "Apple Inc. is a global tech giant known for innovative devices, software, and digital services.",
      img: apple,
      Technologies:
        "React, Redux, SCSS, Styled Components, React Router, Hooks, Axios, Postman, AWS S3.",
      roles: [
        "Developed a responsive factory web app for vendors to document and share machine workflows via iPads.",
        "Built pixel-perfect, modular UIs aligned with Apple’s design standards.",
        "Handled custom integrations and responsive design enhancements for customer-facing applications.",
        "Integrated AWS S3 for uploading large 3D/media files using pre-signed URLs and progress indicators.",
        "Introduced performance monitoring tools to track real-time UI lag and memory issues.",
        "Mentored junior developers and contributed to improving coding standards and knowledge sharing across teams.",
        "Contributed to design sprints for feasibility checks and early feedback.",
        "Challenge: Real-time data caused UI lags.",
        "Solution: Used React.memo, lazy loading, and performance tools to boost speed.",
        "Challenge: Uploading large 3D and other media files.",
        "Solution: Implemented AWS S3 uploads using pre-signed URLs with progress handling.",
      ],
    },
  ];

  useEffect(() => {
    setIsMobileView(isMobile());
  }, []);

  // Prevent page scroll and modal position adjustment when modal is open
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (selectedProject) {
      html.style.overflow = "hidden"; // Prevents page scroll
      body.style.overflow = "hidden"; // Prevents page scroll
    } else {
      html.style.overflow = "";
      body.style.overflow = "";
    }

    return () => {
      html.style.overflow = ""; // Reset to default
      body.style.overflow = ""; // Reset to default
    };
  }, [selectedProject]);

  const projectView = (title) => {
    const match = projects.find((project) => project.title === title);
    if (match) {
      setSelectedProject(match);
    }
  };

  const body = (
    <>
      {/* <img
        src={selectedProject?.img}
        alt={selectedProject?.title}
        className="modal-img"
      /> */}
      <h4>Technologies</h4>
      <p>{selectedProject?.Technologies}</p>
      <h4>Roles & Responsibilities</h4>
      <ul>
        {selectedProject?.roles.map((role, i) => (
          <li key={i}>{role}</li>
        ))}
      </ul>
      <button className="close-btn" onClick={() => setSelectedProject(null)}>
        Close
      </button>
    </>
  );

  return (
    <section id="projects" className="project-section container">
      <motion.h3
        className="heading"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        Projects
      </motion.h3>

      <motion.div
        className="project-grid"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
        viewport={{ once: false }}
      >
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              style={{ cursor: "pointer" }}
              key={index}
              initial={{ opacity: 0, x: isEven ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: false }}
            >
              <Card
                onClick={projectView}
                title={project.title}
                skill={project.skill}
                desc={project.desc}
                img={project.img}
              />
            </motion.div>
          );
        })}
      </motion.div>

      {selectedProject && (
        <Modal
          title={selectedProject.title}
          onClose={() => setSelectedProject(null)}
          body={body}
        />
      )}
    </section>
  );
}
