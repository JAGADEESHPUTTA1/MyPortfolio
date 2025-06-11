import Card from "../Card/Card";
import "./Project.scss";
import { motion } from "framer-motion";
import cs from "/cs.jpg";
import tryg from "/tryg.png";
import pnc from "/pnc.png";
import apple from "/apple.png";

export default function Project() {
  const projects = [
    {
      title: "Credit Suisse",
      skill: "React",
      desc: "Credit Suisse specializes in investment banking and wealth management, serving clients worldwide.",
      img: cs,
    },
    {
      title: "Tryg",
      skill: "React",
      desc: "Tryg A/S is a leading Nordic insurance company operating in Denmark, Norway, and Sweden.",
      img: tryg,
    },
    {
      title: "PNC",
      skill: "React",
      desc: "PNC Bank is a top US financial institution and part of The PNC Financial Services Group.",
      img: pnc,
    },
    {
      title: "Apple",
      skill: "React",
      desc: "Apple Inc. is a global tech giant known for innovative devices, software, and digital services.",
      img: apple,
    },
  ];

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
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            skill={project.skill}
            desc={project.desc}
            img={project.img}
          />
        ))}
      </motion.div>
    </section>
  );
}
