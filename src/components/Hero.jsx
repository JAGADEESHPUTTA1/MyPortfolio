import "./Hero.scss";
export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <h2 style={{ fontSize: "48px", fontWeight: "700", color: "#ffffff" }}>
        Hi, I'm a FrontEnd
        <br /> Developer
      </h2>
      <h4 style={{ fontSize: "20px", fontWeight: "400", color: "#b0b0b0" }}>
        I build responsive and interactive web applications.
      </h4>
      <button className="btn-primary">View My Work</button>
    </section>
  );
}
