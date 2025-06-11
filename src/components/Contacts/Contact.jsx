import "./Contact.scss";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const name = formData.get("from_name");
    const email = formData.get("from_email");
    const message = formData.get("message");

    if (name && email && message) {
      emailjs
        .send(
          "service_24na3dg",
          "template_7jggids",
          {
            from_name: name,
            from_email: email,
            message: message,
          },
          "SGdsY5x7mr0GafE8R"
        )
        .then(
          (result) => {
            console.log("Email sent:", result.text);
            alert("Message sent!");
          },
          (error) => {
            console.error("Email failed:", error.text);
            alert("Failed to send.");
          }
        )
        .finally(() => {
          form.current.reset();
        });
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <motion.h2
        className="heading"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>

      <motion.form
        ref={form}
        className="contact-us"
        onSubmit={sendEmail}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="text-field"
          required
        ></textarea>
        <PrimaryButton text="Send" />
      </motion.form>
    </section>
  );
}
