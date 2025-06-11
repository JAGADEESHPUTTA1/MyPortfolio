import { motion } from "framer-motion";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import SecondaryButton from "../SecondaryButton/SecondaryButton";
import "./Hero.scss";
import heroImage from "/myImage.jpeg";

export default function Hero() {
  const skillsPrimary = [
    "ReactJs",
    "JavaScript",
    "Framer-motion",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Styled Components",
    "ApiTesting/postman",
    "Jest",
    "Redux",
  ];
  const skillsSecondary = ["Node JS", "MongoDB", "TypeScript"];

  return (
    <section id="hero" className="hero-section container">
      <div className="hero-wrapper">
        <div className="hero-content">
          <motion.h2
            className="hero-title"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hi, I'm a FrontEnd <br /> Developer
          </motion.h2>

          <motion.h4
            className="hero-subtitle"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            I build responsive and interactive web applications.
          </motion.h4>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            style={{ display: "flex", gap: "16px" }}
          >
            <PrimaryButton
              text="View my work"
              onClick={() =>
                window.open("https://github.com/JAGADEESHPUTTA1", "_blank")
              }
            />
            <SecondaryButton
              onClick={() => window.open("/JagadeeshPuttaResume.pdf")}
              text="My Resume"
            />
          </motion.div>

          <motion.h4
            className="skill-header"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            My primary skills include:
          </motion.h4>

          <motion.div
            className="capsule-container"
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {skillsPrimary.map((skill, index) => (
              <motion.div
                className="capsule"
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>

          <motion.h4
            className="skill-header"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.4 }}
          >
            My secondary skills include:
          </motion.h4>

          <motion.div
            className="capsule-container"
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {skillsSecondary.map((skill, index) => (
              <motion.div
                className="capsule"
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: -60 }}
          viewport={{ once: false }}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 1 }}
        >
          <img src={heroImage} alt="Hero" className="hero-image" />
        </motion.div>
      </div>
    </section>
  );
}
