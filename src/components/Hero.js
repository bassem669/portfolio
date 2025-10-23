import React from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-vh-100 d-flex align-items-center" 
      style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        paddingTop: '80px'
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="pe-lg-5">
            <Badge bg="light" text="dark" className="mb-3 p-2">
              <i className="fas fa-rocket me-2"></i>
            Etudiant 3eme spécialité en développement des Systémes Informatiques
            </Badge>
            
            <h1 className="display-4 fw-bold mb-4">
              Bonjour, je suis <span className="text-warning">Mathlouthi Bassem</span>
            </h1>
            
            <p className="lead mb-4 fs-5">
              Passionné par la création d'applications web modernes et performantes. 
            </p>
            
            <div className="mb-4">
              <h5 className="mb-3">Spécialisations :</h5>
              <div className="d-flex flex-wrap gap-2">
                <Badge bg="outline-light" text="light" className="px-3 py-2">
                  <i className="fab fa-react me-1"></i> React.js
                </Badge>
                <Badge bg="outline-light" text="light" className="px-3 py-2">
                  <i className="fab fa-node-js me-1"></i> Django
                </Badge>
                <Badge bg="outline-light" text="light" className="px-3 py-2">
                  <i className="fas fa-database me-1"></i> MySql
                </Badge>
                <Badge bg="outline-light" text="light" className="px-3 py-2">
                  <i className="fab fa-aws me-1"></i> JWT
                </Badge>
              </div>
            </div>
            
            <div className="d-flex flex-wrap gap-3 mt-4">
              <Button 
                variant="warning" 
                size="lg" 
                href="#projects"
                className="px-4 py-2 fw-bold"
              >
                <i className="fas fa-eye me-2"></i>
                Voir mes projets
              </Button>
              <Button 
                variant="outline-light" 
                size="lg" 
                href="#contact"
                className="px-4 py-2 fw-bold"
              >
                <i className="fas fa-paper-plane me-2"></i>
                Me contacter
              </Button>
              <Button 
                variant="outline-light" 
                size="lg" 
                href="/portfolio/CVBassemMathlouthi.pdf"
                target="_blank"
                className="px-4 py-2 fw-bold"
              >
                <i className="fas fa-download me-2"></i>
                Télécharger CV
              </Button>
            </div>
            
            <div className="mt-4 d-flex gap-3">
              <a href="https://github.com/bassem669" className="text-light fs-4">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/bassem-mathlouthi-3abab6362/" className="text-light fs-4">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.facebook.com/bassam.mathlouthi.1" className="text-light fs-4">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </Col>
          
          <Col lg={6} className="text-center mt-5 mt-lg-0">
            <div className="position-relative">
              {/* Votre image de profil */}
              <div 
                className="rounded-circle overflow-hidden mx-auto shadow-lg border border-4 border-warning"
                style={{ 
                  width: '350px', 
                  height: '350px', 
                  background: 'linear-gradient(45deg, #ffd700, #ffed4e)'
                }}
              >
                {/* Remplacez cette div par votre image */}
                <img 
                  src='/portfolio/assets/IMG20240829165954.jpg'
                  alt="Mathlouthi Bassem - Développeur Web"
                  className="w-100 h-100 object-fit-cover"
                  style={{ objectFit: 'cover' }}
                  onError={(e) => {
                    // Fallback si l'image n'est pas trouvée
                    e.target.style.display = 'none';
                  }}
                />
                
                {/* Fallback graphique si pas d'image */}
                <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                  <i className="fas fa-user fa-8x text-dark"></i>
                </div>
              </div>
              
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;