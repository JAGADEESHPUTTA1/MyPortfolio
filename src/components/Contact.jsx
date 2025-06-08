import "./Contact.scss";

export default function Contact() {
    return (
      <section id="contact" className="contact-section">
        <h2>Contact Me</h2>
        <form>
          <input type="text" placeholder="Your Name" /><br />
          <input type="email" placeholder="Your Email" /><br />
          <textarea placeholder="Your Message"></textarea><br />
          <button type="submit">Send</button>
        </form>
      </section>
    );
  }
  