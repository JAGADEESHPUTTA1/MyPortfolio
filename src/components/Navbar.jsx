import { Link } from "react-scroll";
import './Navbar.scss'

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="title">Jagadeesh Putta</h1>
      <section className="nav-items">
        <Link to="hero" smooth duration={500}>
          Home
        </Link>
        <Link to="about" smooth duration={500}>
          About
        </Link>
        <Link to="projects" smooth duration={500}>
          Projects
        </Link>
        <Link to="contact" smooth duration={500}>
          Contact
        </Link>
      </section>
    </nav>
  );
}
