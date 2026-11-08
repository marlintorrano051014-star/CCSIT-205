import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import youtube from "../assets/youtube.svg";
import google from "../assets/google.svg";
import github from "../assets/github.svg";
import meta from "../assets/meta.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";

export default function Navigation() {
  return (
    <Navbar
      expand="lg"
      bg="dark"
      variant="dark"
      sticky="top"
      style={{ opacity: 0.6 }}
    >
      <Container>

        <Navbar.Brand href="/">
          <img
            src={meta}
            width="30"
            height="30"
            alt="Logo"
            className="d-inline-block align-top me-2"
          />
          React-Bootstrap-BSIT3A
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/gallery">Gallery</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav>

          <Nav>

            <Nav.Item className="ms-2">
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={youtube}
                  alt="YouTube"
                  width="20"
                  height="20"
                />
              </a>
            </Nav.Item>

            <Nav.Item className="ms-2">
              <a
                href="https://www.google.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={google}
                  alt="Google"
                  width="20"
                  height="20"
                />
              </a>
            </Nav.Item>

            <Nav.Item className="ms-2">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={github}
                  alt="GitHub"
                  width="20"
                  height="20"
                />
              </a>
            </Nav.Item>

            <Nav.Item className="ms-2">
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={twitter}
                  alt="Twitter"
                  width="20"
                  height="20"
                />
              </a>
            </Nav.Item>

            <Nav.Item className="ms-2">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linkedin}
                  alt="LinkedIn"
                  width="20"
                  height="20"
                />
              </a>
            </Nav.Item>

          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

