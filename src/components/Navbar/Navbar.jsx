import { Link } from "react-scroll";
import "./Navbar.scss";

export default function Navbar() {
  const navElements = [
    { navName: "Home", id: "hero" },
    { navName: "Projects", id: "projects" },
    { navName: "About", id: "about" },
    { navName: "Contact", id: "contact" },
  ];
  return (
    <nav className="navbar">
      <Link to='hero' smooth duration={400} className="title">Jagadeesh Putta</Link>
      <section className="nav-items">
        {navElements.map((navItem, index) => {
          return (
            <Link key={index} to={navItem.id} smooth duration={500}>
              {navItem.navName}
            </Link>
          );
        })}
        
      </section>
    </nav>
  );
}
