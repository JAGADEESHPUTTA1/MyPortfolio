import "./Project.scss";

export default function Project() {
    return (
      <section id="projects" className="project-section">
        <h2>Projects</h2>
        <div className="project">
          <h3>To-Do App</h3>
          <p>A React app with add/edit/delete tasks and persistent data.</p>
        </div>
        <div className="project">
          <h3>Weather App</h3>
          <p>Uses OpenWeather API and styled with Styled Components.</p>
        </div>
      </section>
    );
  }
  