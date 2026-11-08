import github from "../assets/github.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About */}
        <div className="footer-column">
          <h3>Ilocos Sur</h3>
          <p>📞 +912345689</p>
          <p>📍 Abour Narvacan, Ilocos Sur</p>
          <p>Discover the beauty and culture of Ilocos Sur.</p>
        </div>

        {/* Section */}
        <div className="footer-column">
          <h3>SECTION</h3>
          <a href="/">Home</a>
          <a href="/contact">Contact</a>
          <a href="/">About</a>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3>CONTACT US</h3>

          <div className="footer-icons">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="GitHub" />
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={twitter} alt="Twitter" />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="LinkedIn" />
            </a>
          </div>

          <p>Email: marlintorrano@gmail.com</p>
          <p>Available Monday - Friday</p>
        </div>

      </div>

      <hr />

      <div className="copyright">
        <p>© 2026 M.E. TORRANO</p>
        <p>All rights reserved | Terms Of Service | Privacy</p>
      </div>
    </footer>
  );
}

export default Footer;
