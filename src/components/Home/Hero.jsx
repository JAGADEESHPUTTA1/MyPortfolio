import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import SecondaryButton from "../SecondaryButton/SecondaryButton";
import "./Hero.scss";
import heroImage from "/myImage.jpeg";
import { isMobile } from "../helper";

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
    "Axios",
  ];
  const skillsSecondary = ["Node JS", "MongoDB", "TypeScript"];

  const typingWords = ["Jagadeesh Putta", "a Frontend Developer"];
  const [text, setText] = useState("");
  const [isMobileView, setIsMobileView] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setIsMobileView(isMobile());
  }, []);
  useEffect(() => {
    const currentWord = typingWords[wordIndex];
    let typeSpeed = isDeleting ? 70 : 120;

    const timer = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? currentWord.substring(0, charIndex - 1)
          : currentWord.substring(0, charIndex + 1)
      );
      setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1));

      if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % typingWords.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex]);

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
            Hi, I'm{isMobileView && <br />}
            <span style={{ color: "#3b82f6", zIndex: "1000" }}>
              {" " + text}
            </span>
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
            My skills:
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
                title={`Learn more about ${skill}`}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
          {/* 
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
                title={`Learn more about ${skill}`}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div> */}
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
