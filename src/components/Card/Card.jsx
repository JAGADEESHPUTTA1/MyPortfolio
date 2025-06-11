import { motion } from "framer-motion";
import "./Card.scss";

export default function Card({
  title = "Project1",
  skill = "JavaScript",
  desc,
  img,
}) {
  return (
    <motion.div
      className="card"
      whileHover={{ scale: 1.07 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.1, ease: "easeOut" }}
    >
      <img className="card-poster" src={img} alt={title} />
      <div className="card-content">
        <h4 className="card-title">{title}</h4>
        <div className="card-skill">{skill}</div>
        <p className="card-desc">{desc}</p>
      </div>
    </motion.div>
  );
}
