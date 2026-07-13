import React, { useEffect } from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import useScreenSize from '../hooks/useScreenSize';
import projects from '../data/projects';

const Projects = () => {
  const { isMobile, isTablet } = useScreenSize();

  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {
      Thumbs: { autoStart: true, mobileStyle: true },
      Toolbar: {
        display: { left: ["infobar"], middle: [], right: ["close"] },
      },
    });

    return () => Fancybox.destroy();
  }, []);

  const truncateTitle = (title, maxLength) => {
    if (isMobile && title.length > maxLength) {
      return title.substring(0, maxLength) + '...';
    }
    return title;
  };

  const truncateWords = (text, maxChars) => {
    if (!isMobile || text.length <= maxChars) return text;
    const truncated = text.substring(0, maxChars);
    return truncated.substring(0, truncated.lastIndexOf(' ')) + '...';
  };

  return (
    <section id="projets" className="py-4 py-md-5" style={{
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative background */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{
        background: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
        zIndex: 0
      }}></div>
      <div className="position-absolute bottom-0 end-0 w-100 h-100" style={{
        background: 'radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
        zIndex: 0
      }}></div>

      <Container className="px-3 px-md-4" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <Row className="mb-4 mb-md-5">
          <Col>
            <div className="text-center mb-3 mb-md-4">
              <h2 className={`text-white mb-2 mb-md-3 ${isMobile ? 'h3' : 'section-title'}`}
                  style={isMobile ? { fontSize: '1.75rem' } : {}}>
                Mes Projets
              </h2>
              <p className="text-light opacity-75" style={{
                maxWidth: '600px',
                margin: '0 auto',
                fontSize: isMobile ? '0.9rem' : '1rem',
                lineHeight: '1.6',
                padding: isMobile ? '0 1rem' : '0'
              }}>
                Découvrez mes réalisations récentes. Chaque projet représente un défi unique relevé avec passion et expertise.
              </p>
            </div>
          </Col>
        </Row>

        <Row className={`${isMobile ? 'row-cols-1' : 'row-cols-1 row-cols-md-2 row-cols-lg-3'} g-3 g-md-4`}>
          {projects.map(project => (
            <Col key={project.id} className="mb-3 mb-md-4">
              <div className="dev-card h-100 p-0 d-flex flex-column" style={{
                background: 'rgba(30, 41, 59, 0.7)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: isMobile ? '12px' : '16px',
                overflow: 'hidden',
                transition: isMobile ? 'none' : 'all 0.3s ease',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                height: '100%'
              }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 16px 40px rgba(59, 130, 246, 0.3)';
                    e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.2)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  }
                }}>

                {/* Image principale */}
                <div className="position-relative overflow-hidden" style={{
                  height: isMobile ? '180px' : (isTablet ? '200px' : '220px')
                }}>
                  <a
                    href={project.images && project.images.length > 0 ? project.images[0] : '/api/placeholder/400/250'}
                    data-fancybox={`gallery-${project.id}`}
                    data-caption={project.title}
                    className="d-block h-100"
                  >
                    <div
                      className="d-block w-100 h-100"
                      style={{
                        backgroundImage: `url('${project.images && project.images.length > 0 ? project.images[0] : '/api/placeholder/400/250'}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        transition: 'transform 0.5s ease'
                      }}
                    />
                    <div className="position-absolute top-0 end-0 m-2 m-md-3">
                      <Badge className="d-flex align-items-center gap-1 p-1 p-md-2" style={{
                        background: 'rgba(0, 0, 0, 0.7)',
                        backdropFilter: 'blur(4px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: isMobile ? '8px' : '12px',
                        fontSize: isMobile ? '0.75rem' : '0.85rem'
                      }}>
                        <i className={`fas fa-images ${isMobile ? 'fa-xs' : ''}`}></i>
                        <span className="ms-1">{project.images.length}</span>
                      </Badge>
                    </div>

                    {/* Hover overlay (desktop only) */}
                    {!isMobile && (
                      <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                        style={{
                          background: 'rgba(59, 130, 246, 0.8)',
                          opacity: 0,
                          transition: 'opacity 0.3s ease',
                          pointerEvents: 'none'
                        }}>
                        <span className="text-white fw-bold">
                          <i className="fas fa-search-plus me-2"></i>
                          Voir l'aperçu
                        </span>
                      </div>
                    )}
                  </a>
                </div>

                {/* Hidden images for fancybox */}
                <div className="d-none">
                  {project.images && project.images.length > 1 && project.images.slice(1).map((image, index) => (
                    <a
                      key={index}
                      href={image}
                      data-fancybox={`gallery-${project.id}`}
                      data-caption={project.title}
                    >
                      <img src={image} alt="" loading="lazy" />
                    </a>
                  ))}
                </div>

                {/* Card body */}
                <div className={`p-3 p-md-4 d-flex flex-column flex-grow-1`}>
                  <div className="d-flex justify-content-between align-items-start mb-2 mb-md-3">
                    <h5 className={`text-white fw-bold mb-0 ${isMobile ? 'h6' : ''}`}
                        style={{ fontSize: isMobile ? '1rem' : '1.25rem' }}>
                      {truncateTitle(project.title, isMobile ? 60 : 100)}
                    </h5>
                  </div>

                  <p className="flex-grow-1 mb-3 mb-md-4 text-light opacity-90" style={{
                    lineHeight: '1.6',
                    fontSize: isMobile ? '0.85rem' : '0.95rem'
                  }}>
                    {truncateWords(project.description, 120)}
                  </p>

                  <div className="mb-3 mb-md-4">
                    <small className="text-light opacity-75 d-block mb-1 mb-md-2" style={{ fontSize: isMobile ? '0.8rem' : '0.9rem' }}>
                      <i className={`fas fa-cogs ${isMobile ? 'me-1' : 'me-2'}`}></i>
                      Technologies utilisées :
                    </small>
                    <div className="d-flex flex-wrap gap-1 gap-md-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="badge p-1 p-md-2"
                          style={{
                            background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))',
                            color: '#93c5fd',
                            border: '1px solid rgba(59, 130, 246, 0.3)',
                            fontSize: isMobile ? '0.75rem' : '0.85rem',
                            fontWeight: '500',
                            whiteSpace: 'nowrap'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className={`d-flex gap-2 gap-md-3 mt-auto ${isMobile ? 'flex-column' : ''}`}>
                    <Button
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={isMobile ? 'w-100' : 'flex-fill'}
                      size="sm"
                      style={{
                        background: 'linear-gradient(45deg, #3b82f6, #2563eb)',
                        border: 'none',
                        borderRadius: isMobile ? '8px' : '10px',
                        padding: isMobile ? '0.6rem' : '0.75rem',
                        fontWeight: '600',
                        fontSize: isMobile ? '0.85rem' : '0.9rem',
                        transition: isMobile ? 'none' : 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        if (!isMobile) {
                          e.target.style.transform = 'translateY(-2px)';
                          e.target.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.4)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isMobile) {
                          e.target.style.transform = 'translateY(0)';
                          e.target.style.boxShadow = 'none';
                        }
                      }}
                    >
                      <i className={`fab fa-github ${isMobile ? 'me-1' : 'me-2'}`}></i>
                      {isMobile ? 'Code' : 'Voir le code'}
                    </Button>

                    {project.images && project.images.length > 0 && (
                      <Button
                        variant="outline-light"
                        className={isMobile ? 'w-100' : 'flex-fill'}
                        size="sm"
                        onClick={() => {
                          Fancybox.show(
                            project.images.map((image, index) => ({
                              src: image,
                              caption: `${project.title} - Image ${index + 1}`
                            })),
                            { startIndex: 0 }
                          );
                        }}
                        style={{
                          background: 'transparent',
                          border: '1px solid rgba(255, 255, 255, 0.3)',
                          borderRadius: isMobile ? '8px' : '10px',
                          padding: isMobile ? '0.6rem' : '0.75rem',
                          fontWeight: '600',
                          color: '#fff',
                          fontSize: isMobile ? '0.85rem' : '0.9rem',
                          transition: isMobile ? 'none' : 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          if (!isMobile) {
                            e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                            e.target.style.borderColor = 'rgba(59, 130, 246, 0.5)';
                            e.target.style.transform = 'translateY(-2px)';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isMobile) {
                            e.target.style.background = 'transparent';
                            e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                            e.target.style.transform = 'translateY(0)';
                          }
                        }}
                      >
                        <i className={`fas fa-images ${isMobile ? 'me-1' : 'me-2'}`}></i>
                        {isMobile ? 'Galerie' : 'Voir la galerie'}
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Call to Action */}
        <Row className="mt-4 mt-md-5 pt-2 pt-md-3">
          <Col className="text-center">
            <div style={{
              background: 'rgba(30, 41, 59, 0.5)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              borderRadius: isMobile ? '12px' : '16px',
              padding: isMobile ? '1.5rem' : '2rem'
            }}>
              <h5 className={`text-white mb-2 mb-md-3 ${isMobile ? 'h6' : ''}`}>
                Vous avez un projet en tête ?
              </h5>
              <p className="text-light opacity-75 mb-3 mb-md-4" style={{
                fontSize: isMobile ? '0.9rem' : '1rem',
                lineHeight: '1.6'
              }}>
                N'hésitez pas à me contacter pour discuter de votre projet.
              </p>
              <Button
                href="#contact"
                size={isMobile ? 'sm' : 'md'}
                style={{
                  background: 'linear-gradient(45deg, #8b5cf6, #7c3aed)',
                  border: 'none',
                  padding: isMobile ? '0.6rem 1.5rem' : '0.75rem 2rem',
                  borderRadius: isMobile ? '8px' : '10px',
                  fontWeight: '600',
                  fontSize: isMobile ? '0.85rem' : '1rem'
                }}
                onClick={(e) => {
                  if (isMobile) {
                    e.preventDefault();
                    const element = document.querySelector('#contact');
                    if (element) {
                      const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - 70;
                      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                    }
                  }
                }}
              >
                <i className={`fas fa-paper-plane ${isMobile ? 'me-1' : 'me-2'}`}></i>
                Contactez-moi
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;