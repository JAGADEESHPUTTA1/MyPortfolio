import PrimaryButton from "../PrimaryButton/PrimaryButton";
import "./Hero.scss";
export default function Hero() {
  const skillsPrimary = [
    "ReactJs",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Styled Components",'ApiTesting/postman','Jest'
  ];
  const skillsSecondary = [
    "Node JS",
    "MongoDB",
    "TypeScript",
  ];
  return (
    <section id="hero" className="hero-section container">
      <h2 style={{ fontSize: "48px", fontWeight: "700", color: "#ffffff" }}>
        Hi, I'm a FrontEnd<br/> Developer
      </h2>
      <h4 style={{ fontSize: "20px", fontWeight: "400", color: "#b0b0b0" }}>
        I build responsive and interactive web applications.
      </h4>
      <PrimaryButton text="View my work" onClick={()=>{window.open('https://github.com/JAGADEESHPUTTA1')}}/>

      <h4 style={{ fontSize: "24px", fontWeight: "700", color: "#ffffff",marginBottom:'0px' }}>
        My primary skills include:
      </h4>
      <div style={{ display: "flex" }}>
        {skillsPrimary.map((skill) => {
          return <div className="capsule">{skill}</div>;
        })}
      </div>

      <h4 style={{ fontSize: "24px", fontWeight: "700", color: "#ffffff",marginBottom:'0px' }}>
        My secondary skills include:
      </h4>
      <div style={{ display: "flex" }}>
        {skillsSecondary.map((skill) => {
          return <div className="capsule">{skill}</div>;
        })}
      </div>
    </section>
  );
}
