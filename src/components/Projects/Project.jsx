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
      roles: [
        "Frontend development using React.js",
        "Built reusable UI components",
        "Integrated APIs and managed state with Redux",
      ],
    },
    {
      title: "Tryg",
      skill: "React",
      desc: "Tryg A/S is a leading Nordic insurance company operating in Denmark, Norway, and Sweden.",
      img: tryg,
      roles: [
        "Led UI revamp for claims management",
        "Optimized performance for mobile users",
        "Collaborated with Nordic QA teams",
      ],
    },
    {
      title: "PNC",
      skill: "React",
      desc: "PNC Bank is a top US financial institution and part of The PNC Financial Services Group.",
      img: pnc,
      roles: [
        "Built account management dashboard",
        "Integrated secure authentication flow",
        "Worked with backend teams on API contract",
      ],
    },
    {
      title: "Apple",
      skill: "React",
      desc: "Apple Inc. is a global tech giant known for innovative devices, software, and digital services.",
      img: apple,
      roles: [
        "Created UI components for internal admin tools",
        "Worked with design systems team",
        "Conducted unit testing and accessibility audits",
        "Conducted unit testing and accessibility audits",
        "Conducted unit testing and accessibility audits",
        "Conducted unit testing and accessibility audits",
        "Conducted unit testing and accessibility audits",
        "Conducted unit testing and accessibility audits",
        "Conducted unit testing and accessibility audits",
        "Conducted unit testing and accessibility audits",
        "Conducted unit testing and accessibility audits",
        "Conducted unit testing and accessibility audits",
        "Conducted unit testing and accessibility audits",
      ],
    },
  ];

  useEffect(() => {
    setIsMobileView(isMobile());
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (selectedProject) {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
      body.style.position = "fixed";
      body.style.width = "100%";
    } else {
      html.style.overflow = "";
      body.style.overflow = "";
      body.style.position = "";
      body.style.width = "";
    }

    return () => {
      html.style.overflow = "";
      body.style.overflow = "";
      body.style.position = "";
      body.style.width = "";
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
      <img
        src={selectedProject?.img}
        alt={selectedProject?.title}
        className="modal-img"
      />
      <p>{selectedProject?.desc}</p>
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
