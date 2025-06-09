import Card from "../Card/Card";
import "./Project.scss";
import cs from "../../../public/cs.jpg";
import tryg from "../../../public/tryg.png";
import pnc from "../../../public/pnc.png";
import apple from "../../../public/apple.png";

export default function Project() {
  const projects = [
    {
      title: "Credit Suisse",
      skill: "React",
      desc: "Credit Suisse specialized in investment banking and wealth management, serving customers worldwide.",
      img: cs,
    },
    {
      title: "Tryg",
      skill: "React",
      desc: "Tryg A/S is a Scandinavian non-life insurance company, a leading player in the Nordic region with operations in Denmark, Norway, and Sweden.",
      img: tryg,
    },
    {
      title: "PNC",
      skill: "React",
      desc: "PNC Bank is a major US banking institution operating as a subsidiary of The PNC Financial Services Group, Inc..",
      img: pnc,
    },
    {
      title: "Apple",
      skill: "React",
      desc: "Apple Inc. is an American multinational corporation and technology company headquartered in Cupertino, California, in Silicon Valley. It is best known for its consumer electronics, software, and services.",
      img: apple,
    },
  ];
  return (
    <section id="projects" className="project-section container">
      <h3 className="heading">Projects</h3>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {projects.map((project, index) => {
          return (
            <Card
              title={project.title}
              skill={project.skill}
              key={index}
              desc={project.desc}
              img={project.img}
            />
          );
        })}
      </div>
    </section>
  );
}
