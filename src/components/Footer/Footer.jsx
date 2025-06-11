import { motion } from "framer-motion";
import "./Footer.scss";

export default function Footer() {
  return (
    <motion.footer
      className="footer-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <p className="footer-text">© 2025 Jagadeesh Putta | Built with React</p>
    </motion.footer>
  );
}
