import { motion } from "framer-motion";
import "./SecondaryButton.scss";

export default function SecondaryButton({ text = "Button", onClick }) {
  return (
    <motion.button
      className="btn-secondary"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      onClick={onClick}
    >
      {text}
    </motion.button>
  );
}
