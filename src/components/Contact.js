import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Card } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_2rbe47i',      
      'template_w34gsll',     
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'Bassemmathlouthi05@gmail.com'
      },
      'GVnxtFq7L2THt4Y0o'      
    )
    .then(() => {
      setShowAlert(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setShowAlert(false), 5000);
    })
    .catch((error) => {
      console.error('Erreur en envoyant le mail:', error);
    });
  };

  return (
    <section id="contact" className="py-5">
      <Container>
        <Row className="mb-5">
          <Col>
            <h2 className="text-center fw-bold mb-4">Contactez-moi</h2>
          </Col>
        </Row>
        
        <Row>
          <Col lg={8} className="mx-auto">
            {showAlert && (
              <Alert variant="success" className="mb-4">
                Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.
              </Alert>
            )}
            
            <Card className="shadow">
              <Card.Body className="p-4">
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Nom</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Votre nom"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="votre@email.com"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Form.Group className="mb-4">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Votre message..."
                    />
                  </Form.Group>
                  
                  <div className="text-center">
                    <Button 
                      variant="primary" 
                      type="submit" 
                      size="lg"
                      className="px-5"
                    >
                      Envoyer le message
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
            
            <Row className="mt-5 text-center">
              <Col md={4} className="mb-3">
                <Card className="border-0 bg-light">
                  <Card.Body>
                    <i className="fas fa-envelope fa-2x text-primary mb-3"></i>
                    <h5>Email</h5>
                    <p className="text-muted">bassemmathlouthi05@gmail.com</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-3">
                <Card className="border-0 bg-light">
                  <Card.Body>
                    <i className="fas fa-phone fa-2x text-primary mb-3"></i>
                    <h5>Téléphone</h5>
                    <p className="text-muted">00 216 26 557 704</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-3">
                <Card className="border-0 bg-light">
                  <Card.Body>
                    <i className="fas fa-map-marker-alt fa-2x text-primary mb-3"></i>
                    <h5>Localisation</h5>
                    <p className="text-muted">Klebia, Tunis</p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;