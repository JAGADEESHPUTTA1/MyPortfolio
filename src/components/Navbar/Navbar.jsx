import { Link } from "react-scroll";
import { motion } from "framer-motion";
import "./Navbar.scss";

export default function Navbar() {
  const navElements = [
    { navName: "Home", id: "hero" },
    { navName: "About", id: "about" },
    { navName: "Projects", id: "projects" },
    { navName: "Contact", id: "contact" },
  ];

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Link to="hero" smooth duration={400} className="title">
        Jagadeesh Putta
      </Link>

      {/* <div className="nav-items">
        {navElements.map((navItem, index) => (
          <Link
            key={index}
            to={navItem.id}
            smooth
            duration={500}
            className="nav-link"
          >
            {navItem.navName}
          </Link>
        ))}
      </div> */}

      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="nav-items"
      >
        {navElements.map((navItem, index) => (
          <Link
            key={index}
            to={navItem.id}
            smooth
            duration={500}
            className="nav-link"
          >
            {navItem.navName}
          </Link>
        ))}
      </motion.div>
    </motion.nav>
  );
}
