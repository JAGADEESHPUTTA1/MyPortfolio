import "./Project.scss";

export default function Project() {
  const projects = [{title:'', skill:'', }]
    return (
      <section id="projects" className="project-section container">
        <h3 className="heading">Projects</h3>
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
  