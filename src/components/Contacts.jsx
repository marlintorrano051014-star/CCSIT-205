import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contacts.css";

export default function Contacts() {
  const form = useRef();

  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_ccmkj99",
        "template_qdf1r0f",
        form.current,
        {
          publicKey: "pgwgYSOrScm6csooI",
        }
      )
      .then(
        () => {
          setStatus("Message sent successfully! 💌");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="contact-page">
      <div className="contact-container">

        <div className="contact-info">
          <h1>Contact Me</h1>

          <p>
            Have a question, suggestion, or just want to say hello?
            Send us a message and we'll get back to you.
          </p>

          <div className="contact-item">
            <span>📧</span>
            <div>
              <h3>Email</h3>
              <p>your@email.com</p>
            </div>
          </div>

          <div className="contact-item">
            <span>📱</span>
            <div>
              <h3>Phone</h3>
              <p>+63 912 345 6789</p>
            </div>
          </div>

          <div className="contact-item">
            <span>📍</span>
            <div>
              <h3>Location</h3>
              <p>Philippines</p>
            </div>
          </div>
        </div>

        <div className="contact-form-box">

          <h2>Send Us a Message 💌</h2>

          <form ref={form} onSubmit={sendEmail}>

            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                name="title"
                placeholder="Enter subject"
                required
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                rows="6"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>

            <button type="submit">
              Send Message ✈️
            </button>

            {status && (
              <p className="status-message">
                {status}
              </p>
            )}

          </form>

        </div>

      </div>
    </div>
  );
}