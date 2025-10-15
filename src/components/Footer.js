import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={6}>
            <p className="mb-0">
              &copy; 2025 Mathlouthi Bassem. Tous droits réservés.
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <div className="social-links">
              <a href="https://github.com/bassem669" className="text-light me-3">
                <i className="fab fa-github fa-lg"></i>
              </a>
              <a href="www.linkedin.com/in/bassem-mathlouthi-3abab6362" className="text-light me-3">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
              <a href="https://www.facebook.com/bassam.mathlouthi.1" className="text-light">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;