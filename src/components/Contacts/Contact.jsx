import "./Contact.scss";
import PrimarButton from "../PrimaryButton/PrimaryButton";
import { useRef } from "react";
import emailjs from "emailjs-com";

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
          window.location.reload();
        });
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="heading">Contact Me</h2>
      <section>
        <form ref={form} className="contact-us">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
          />
          <br />
          <br />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
          />
          <br />
          <br />
          <textarea
            name="message"
            placeholder="Your Message"
            className="text-field"
            required
          ></textarea>
          <br />
          <br />
          <PrimarButton onClick={sendEmail} text="Send" />
        </form>
      </section>
    </section>
  );
}
