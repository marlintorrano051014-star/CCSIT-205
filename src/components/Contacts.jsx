import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contacts.css";

export default function Contacts() {
  const form = useRef(null);

  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (sending) return;

    setSending(true);
    setStatus("Sending your message...");
    setSuccess(false);

    try {
      await emailjs.sendForm(
        "service_qtcmu6y",
        "template_cqlzv1g",
        form.current,
        {
          publicKey: "bLAeH3QKQnzYSjGz0",
        }
      );

      setStatus("Your message has been sent successfully! 💌");
      setSuccess(true);
      form.current.reset();

    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("Failed to send your message. Please try again.");
      setSuccess(false);

    } finally {
      setSending(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-info">
          <span className="contact-label">GET IN TOUCH</span>

          <h1>
            Contact <span>Me</span>
          </h1>

          <p className="contact-description">
            Have a question, suggestion, or just want to say hello?
            Send us a message and we'll get back to you as soon as possible.
          </p>

          <div className="contact-details">

            <div className="contact-item">
              <div className="contact-icon">✉</div>
              <div>
                <h3>Email Address</h3>
                <p>your@email.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">☎</div>
              <div>
                <h3>Phone Number</h3>
                <p>+63 912 345 6789</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">⌖</div>
              <div>
                <h3>Location</h3>
                <p>Philippines</p>
              </div>
            </div>

          </div>

          <div className="contact-note">
            <span>✦</span>
            <p>We would love to hear from you!</p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-form-box">

          <div className="form-heading">
            <span className="form-label">SEND A MESSAGE</span>
            <h2>Let's Talk <span>💌</span></h2>
            <p>Fill out the form below to get in touch with us.</p>
          </div>

          <form ref={form} onSubmit={sendEmail}>

            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your full name"
                autoComplete="name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                autoComplete="email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="title">Subject</label>
              <input
                id="title"
                type="text"
                name="title"
                placeholder="What is this about?"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message here..."
                required
              />
            </div>

            <button
              type="submit"
              className="send-button"
              disabled={sending}
            >
              {sending ? "Sending..." : "Send Message ✈"}
            </button>

            {status && (
              <div
                className={`status-message ${success ? "success" : "error"}`}
                role="status"
                aria-live="polite"
              >
                {status}
              </div>
            )}

          </form>
        </div>

      </div>
    </div>
  );
}