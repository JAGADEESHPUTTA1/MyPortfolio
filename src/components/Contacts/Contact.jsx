import "./Contact.scss";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import Modal from "../Modal/Modal.jsx";
import Spinner from "../Spinner/Spinner.jsx";

export default function Contact() {
  const form = useRef();
  const [isMailSent, setIsMailSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
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
            setIsMailSent(true);
            setIsSending(false);
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

  const body = (
    <>
      <div>
        Your message has been successfully sent. I appreciate you taking the
        time to get in touch, and I'll get back to you as soon as possible. If
        your message is urgent, feel free to connect with me directly via email
        or LinkedIn.
        <br />
        <br />
      </div>

      <button className="close-btn" onClick={() => setIsMailSent(false)}>
        close
      </button>
    </>
  );

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
        <input type="text" name="from_name" placeholder="Your Name" required />
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
        <div className="social-links">
          <a
            href="https://linkedin.com/in/jagadeesh-putta"
            target="_blank"
            rel="noopener"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a
            href="https://twitter.com/sunny_jaggu"
            target="_blank"
            rel="noopener"
          >
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a
            href="https://instagram.com/sunny_jaggu013"
            target="_blank"
            rel="noopener"
          >
            <i className="fab fa-instagram fa-2x"></i>
          </a>
        </div>
      </motion.form>

      {isMailSent && (
        <Modal
          title="Email Sent"
          body={body}
          onClose={() => setIsMailSent(false)}
        />
      )}
      {isSending && <Modal body={<Spinner />} />}
    </section>
  );
}
