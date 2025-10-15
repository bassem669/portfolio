import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
// Import de Fancybox
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const projects = [
  {
    id: 1,
    title: 'Application E-commerce',
    description: 'Plateforme de vente en ligne des voitures avec panier et gestion administrateur',
    technologies: ['Angular', 'JsonServer'],
    images: [
      "/portfolio/assets/Projet 1/screencapture-localhost-4200-cars-2025-10-08-19_01_34.png", 
      "/portfolio/assets/Projet 1/screencapture-localhost-4200-2025-10-08-19_01_13.png", 
      "/portfolio/assets/Projet 1/screencapture-localhost-4200-panier-2025-10-08-19_05_39.png", 
      "/portfolio/assets/Projet 1/screencapture-localhost-4200-cars-C002-2025-10-08-19_05_13.png", 
      "/portfolio/assets/Projet 1/screencapture-localhost-4200-profil-2025-10-08-19_04_49.png", 
      "/portfolio/assets/Projet 1/screencapture-localhost-4200-Dashbord-2025-10-08-19_04_33.png"
    ],
    github: 'https://github.com/bassem669/site-de-vente-Voitures'
  },
  {
    id: 2,
    title: 'Gestion des etudiants',
    description: 'Plateforme de gestion des etudiants, avec dashbord admin. (En cours de développement)',
    technologies: ['React', 'Django', 'MySql'],
    images: [
      "/portfolio/assets/Projet 2/Capture d'écran 2025-10-15 220119.png",
      "/portfolio/assets/Projet 2/Capture d'écran 2025-10-15 220137.png",
      "/portfolio/assets/Projet 2/Capture d'écran 2025-10-15 220920.png",
      "/portfolio/assets/Projet 2/Capture d'écran 2025-10-15 220940.png",
      "/portfolio/assets/Projet 2/Capture d'écran 2025-10-15 221012.png",
      "/portfolio/assets/Projet 2/Capture d'écran 2025-10-15 221024.png",
      "/portfolio/assets/Projet 2/Capture d'écran 2025-10-15 221035.png",
      "/portfolio/assets/Projet 2/Capture d'écran 2025-10-15 221111.png",
      "/portfolio/assets/Projet 2/Capture d'écran 2025-10-15 221129.png",
      "/portfolio/assets/Projet 2/Capture d'écran 2025-10-15 221141.png",
      "/portfolio/assets/Projet 2/Capture d'écran 2025-10-15 221153.png"
    ],
    github: 'https://github.com/bassem669/site_Gestion_des_etudiants'
  },
  {
    id: 3,
    title: 'Application web de location et vente des maisons',
    description: 'Application de location et vente des maisons, avec Dashboard admin et espace entreprise et un model de Machine Learning pour estimer le prix de bien Immobilier',
    technologies: ['React', 'Django', 'MySql'],
    images: [
      "/portfolio/assets/Projet 3/screencapture-localhost-3000-2025-09-28-20_57_25.png", 
      "/portfolio/assets/Projet 3/screencapture-localhost-3000-register-2025-09-18-11_20_59.png", 
      "/portfolio/assets/Projet 3/screencapture-localhost-3000-dashboard-2025-09-17-17_06_54.png", 
      "/portfolio/assets/Projet 3/screencapture-localhost-3000-entreprise-manager-2025-09-17-16_33_49.png", 
      "/portfolio/assets/Projet 3/screencapture-localhost-3000-annonce-34-2025-09-18-12_09_16.png", 
      "/portfolio/assets/Projet 3/Capture d'écran 2025-09-28 214025.png"
    ],
    github: 'https://github.com/bassem669/Application-web-de-location-et-vente-des-maisons'
  }
];

const Projects = () => {
  // Initialiser Fancybox après le rendu du composant
  React.useEffect(() => {
    Fancybox.bind("[data-fancybox]", {
      // Options de configuration Fancybox
      Thumbs: {
        autoStart: true,
      },
      Toolbar: {
        display: {
          left: ["infobar"],
          middle: [],
          right: ["close"],
        },
      },
    });

    // Nettoyer Fancybox lors du démontage du composant
    return () => {
      Fancybox.destroy();
    };
  }, []);

  return (
    <section id="projects" className="py-5 bg-light">
      <Container>
        <Row className="mb-5">
          <Col>
            <h2 className="text-center fw-bold mb-4">Mes Projets</h2>
          </Col>
        </Row>
        
        <Row>
          {projects.map(project => (
            <Col key={project.id} lg={4} md={6} className="mb-4">
              <Card className="h-100 shadow-sm">
                {/* Image principale avec lien Fancybox */}
                <a
                  href={project.images && project.images.length > 0 ? project.images[0] : '/api/placeholder/400/250'}
                  data-fancybox={`gallery-${project.id}`}
                  data-caption={project.title}
                >
  
                  <Card.Img
                    variant="top"
                    src={project.images && project.images.length > 0 ? project.images[0] : '/api/placeholder/400/250'}
                    alt={project.title}
                    style={{ height: '200px', objectFit: 'cover', cursor: 'pointer' }}
                  />

                 
                </a>
                
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text className="flex-grow-1">
                    {project.description}
                  </Card.Text>
                  
                  <div className="mb-3">
                    {project.technologies.map((tech, index) => (
                      <Badge 
                        key={index} 
                        bg="secondary" 
                        className="me-1 mb-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Miniatures des images supplémentaires */}
                  {project.images && project.images.length > 1 && (
                    <div className="mb-3">
                      <small className="text-muted d-block mb-2">Plus d'images :</small>
                      <div className="d-flex flex-wrap gap-1">
                        {project.images.slice(1).map((image, index) => (
                          <a
                            key={index}
                            href={image}
                            data-fancybox={`gallery-${project.id}`}
                            data-caption={project.title}
                            style={{ width: '50px', height: '40px' }}
                          >
                            <img
                              src={image}
                              alt={`${project.title} ${index + 2}`}
                              style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: '4px',
                                cursor: 'pointer'
                              }}
                            />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="d-flex gap-2 mt-auto">
                    <Button 
                      variant="outline-primary" 
                      size="sm" 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-fill"
                    >
                      <i className="fab fa-github me-1"></i>
                      Code
                    </Button>
                    
                    {/* Bouton pour ouvrir la galerie complète */}
                    {project.images && project.images.length > 0 && (
                      <Button 
                        variant="outline-secondary" 
                        size="sm"
                        onClick={() => {
                          // Ouvre la première image de la galerie
                          Fancybox.show(
                            project.images.map((image, index) => ({
                              src: image,
                              caption: `${project.title} - Image ${index + 1}`
                            })),
                            {
                              startIndex: 0
                            }
                          );
                        }}
                      >
                        <i className="fas fa-images me-1"></i>
                        Galerie
                      </Button>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;