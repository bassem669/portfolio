import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768;
      const tablet = window.innerWidth >= 768 && window.innerWidth < 992;
      setIsMobile(mobile);
      setIsTablet(tablet);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    // Mise à jour de l'année
    setCurrentYear(new Date().getFullYear());

    // Gestion du bouton de retour en haut
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', checkScreenSize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    {
      icon: 'github',
      url: 'https://github.com/bassem669',
      color: '#333',
      label: 'GitHub'
    },
    {
      icon: 'linkedin',
      url: 'https://www.linkedin.com/in/bassem-mathlouthi-3abab6362/',
      color: '#0077b5',
      label: 'LinkedIn'
    },
    {
      icon: 'facebook',
      url: 'https://www.facebook.com/bassam.mathlouthi.1',
      color: '#1877f2',
      label: 'Facebook'
    }
  ];

  const quickLinks = [
    { label: 'Accueil', href: '#home' },
    { label: 'À propos', href: '#a-propos' },
    { label: 'Compétences', href: '#competences' },
    { label: 'Projets', href: '#projets' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <>
      {/* Bouton de retour en haut - Position responsive */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="position-fixed rounded-circle p-0 border-0 d-flex align-items-center justify-content-center"
          style={{
            width: isMobile ? '44px' : '50px',
            height: isMobile ? '44px' : '50px',
            background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
            zIndex: 1000,
            boxShadow: '0 4px 20px rgba(59, 130, 246, 0.4)',
            transition: isMobile ? 'none' : 'all 0.3s ease',
            bottom: isMobile ? '80px' : '30px',
            right: isMobile ? '20px' : '30px'
          }}
          onMouseEnter={(e) => {
            if (!isMobile) {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.6)';
            }
          }}
          onMouseLeave={(e) => {
            if (!isMobile) {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 20px rgba(59, 130, 246, 0.4)';
            }
          }}
          aria-label="Retour en haut"
        >
          <i className="fas fa-arrow-up text-white" style={{ fontSize: isMobile ? '1rem' : '1.2rem' }}></i>
        </Button>
      )}

      <footer className="py-4 py-md-5 position-relative overflow-hidden">
        {/* Background Elements */}
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{
          background: 'linear-gradient(to top, #0f172a 0%, #1e293b 100%)',
          zIndex: 0
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '1px',
            background: 'linear-gradient(90deg, transparent, #3b82f6, transparent)'
          }}></div>
        </div>

        <Container className="px-3 px-md-4" style={{ position: 'relative', zIndex: 1 }}>
          {/* Main Footer Content */}
          <Row className={`${isMobile ? 'row-cols-1' : 'row-cols-1 row-cols-md-2 row-cols-lg-3'} g-3 g-md-4`}>
            <Col className="mb-3 mb-md-0">
              <div className="mb-3 mb-md-4">
                <div className="d-flex align-items-center mb-2 mb-md-3">
                  <div className={`rounded-circle ${isMobile ? 'p-1 me-2' : 'p-2 me-2'} d-flex align-items-center justify-content-center`}
                    style={{
                      background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
                      width: isMobile ? '36px' : '40px',
                      height: isMobile ? '36px' : '40px',
                      flexShrink: 0
                    }}>
                    <i className={`fas fa-code text-white ${isMobile ? 'fa-sm' : ''}`}></i>
                  </div>
                  <h5 className={`text-white mb-0 ${isMobile ? 'h6' : ''}`}>Mathlouthi Bassem</h5>
                </div>
                <p className="text-light opacity-75 mb-0" style={{ 
                  lineHeight: '1.6',
                  fontSize: isMobile ? '0.85rem' : '0.9rem'
                }}>
                  Développeur Full-Stack passionné par la création de solutions innovantes et performantes. 
                  Toujours en quête de nouveaux défis et d'apprentissages.
                </p>
              </div>
            </Col>

            <Col className="mb-3 mb-md-0">
              <h6 className={`text-white mb-3 ${isMobile ? 'h6' : ''}`} style={{ fontWeight: 600 }}>
                <i className="fas fa-link me-2"></i>
                Liens rapides
              </h6>
              <div className="d-flex flex-column gap-1 gap-md-2">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-light opacity-75 text-decoration-none d-flex align-items-center"
                    style={{
                      transition: isMobile ? 'none' : 'all 0.3s ease',
                      fontSize: isMobile ? '0.85rem' : '0.9rem'
                    }}
                    onMouseEnter={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.opacity = '1';
                        e.currentTarget.style.color = '#3b82f6';
                        e.currentTarget.style.transform = 'translateX(5px)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.opacity = '0.75';
                        e.currentTarget.style.color = '';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }
                    }}
                    onClick={(e) => {
                      if (isMobile) {
                        e.preventDefault();
                        const element = document.querySelector(link.href);
                        if (element) {
                          const navbarHeight = isMobile ? 70 : 80;
                          const elementPosition = element.getBoundingClientRect().top;
                          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
                          window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                          });
                        }
                      }
                    }}
                  >
                    <i className="fas fa-chevron-right me-2" style={{ 
                      fontSize: isMobile ? '0.6rem' : '0.7rem' 
                    }}></i>
                    {link.label}
                  </a>
                ))}
              </div>
            </Col>

            <Col className="mb-3 mb-md-0">
              <h6 className={`text-white mb-3 ${isMobile ? 'h6' : ''}`} style={{ fontWeight: 600 }}>
                <i className="fas fa-share-alt me-2"></i>
                Connectons-nous
              </h6>
              <p className="text-light opacity-75 mb-3 mb-md-4" style={{ 
                fontSize: isMobile ? '0.85rem' : '0.9rem',
                lineHeight: '1.5'
              }}>
                Suivez-moi sur les réseaux sociaux pour suivre mon parcours et mes projets.
              </p>
              <div className="d-flex gap-2 gap-md-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: isMobile ? '38px' : '44px',
                      height: isMobile ? '38px' : '44px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      color: 'white',
                      fontSize: isMobile ? '1rem' : '1.1rem',
                      transition: isMobile ? 'none' : 'all 0.3s ease',
                      textDecoration: 'none',
                      flexShrink: 0
                    }}
                    onMouseEnter={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.background = social.color;
                        e.currentTarget.style.transform = 'translateY(-3px) scale(1.1)';
                        e.currentTarget.style.boxShadow = `0 6px 20px ${social.color}50`;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        e.currentTarget.style.boxShadow = 'none';
                      }
                    }}
                    onTouchStart={(e) => {
                      if (isMobile) {
                        e.currentTarget.style.background = social.color;
                      }
                    }}
                    onTouchEnd={(e) => {
                      if (isMobile) {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                      }
                    }}
                    title={social.label}
                    aria-label={social.label}
                  >
                    <i className={`fab fa-${social.icon}`}></i>
                  </a>
                ))}
              </div>
            </Col>
          </Row>

          {/* Divider */}
          <hr className="my-4 my-md-5" style={{ 
            borderColor: 'rgba(255, 255, 255, 0.1)',
            opacity: 0.3,
            marginLeft: isMobile ? '-1rem' : '0',
            marginRight: isMobile ? '-1rem' : '0'
          }} />

          {/* Bottom Footer */}
          <Row className="align-items-center">
            <Col md={6} className={`${isMobile ? 'text-center' : 'text-center text-md-start'} mb-3 mb-md-0`}>
              <p className="mb-0 text-light opacity-75" style={{ 
                fontSize: isMobile ? '0.8rem' : '0.9rem',
                lineHeight: '1.5'
              }}>
                &copy; {currentYear} <span className="text-white fw-bold">Mathlouthi Bassem</span>.{' '}
                <span className="d-inline d-md-block d-lg-inline">Tous droits réservés.</span>
              </p>
            </Col>
            
            <Col md={6} className={`${isMobile ? 'text-center' : 'text-center text-md-end'}`}>
              <div className={`d-flex flex-column ${isMobile ? 'align-items-center' : 'flex-md-row align-items-center justify-content-md-end'} gap-1 gap-md-2`}>
                <a 
                  href="mailto:bassemmathlouthi05@gmail.com"
                  className="text-light opacity-75 text-decoration-none d-flex align-items-center justify-content-center"
                  style={{ 
                    fontSize: isMobile ? '0.8rem' : '0.9rem',
                    wordBreak: 'break-word'
                  }}
                  onMouseEnter={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.opacity = '1';
                      e.currentTarget.style.color = '#3b82f6';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.opacity = '0.75';
                      e.currentTarget.style.color = '';
                    }
                  }}
                  onTouchStart={(e) => {
                    if (isMobile) {
                      e.currentTarget.style.color = '#3b82f6';
                    }
                  }}
                  onTouchEnd={(e) => {
                    if (isMobile) {
                      e.currentTarget.style.color = '';
                    }
                  }}
                >
                  <i className="fas fa-envelope me-2"></i>
                  {isMobile ? 'Email' : 'bassemmathlouthi05@gmail.com'}
                </a>
                
                {!isMobile && (
                  <span className="text-light opacity-50 mx-2">•</span>
                )}
                
                <a 
                  href="tel:+21626557704"
                  className="text-light opacity-75 text-decoration-none d-flex align-items-center justify-content-center"
                  style={{ fontSize: isMobile ? '0.8rem' : '0.9rem' }}
                  onMouseEnter={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.opacity = '1';
                      e.currentTarget.style.color = '#10b981';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.opacity = '0.75';
                      e.currentTarget.style.color = '';
                    }
                  }}
                  onTouchStart={(e) => {
                    if (isMobile) {
                      e.currentTarget.style.color = '#10b981';
                    }
                  }}
                  onTouchEnd={(e) => {
                    if (isMobile) {
                      e.currentTarget.style.color = '';
                    }
                  }}
                >
                  <i className="fas fa-phone me-2"></i>
                  {isMobile ? 'Appeler' : '+216 26 557 704'}
                </a>
              </div>
              
              <p className={`mt-2 mt-md-3 mb-0 text-light opacity-50 ${isMobile ? 'text-center' : ''}`} 
                 style={{ fontSize: isMobile ? '0.75rem' : '0.8rem' }}>
                <i className="fas fa-map-marker-alt me-1"></i>
                Kélibia, Tunisie
              </p>
            </Col>
          </Row>

          {/* Call to Action */}
          <Row className="mt-4 mt-md-5 pt-2 pt-md-3">
            <Col>
              <div className="text-center">
                <p className="text-light opacity-75 mb-2 mb-md-3" style={{ 
                  fontSize: isMobile ? '0.85rem' : '0.9rem',
                  lineHeight: '1.5'
                }}>
                  Vous avez un projet intéressant ou une opportunité de stage ?
                </p>
                <Button
                  href="#contact"
                  size={isMobile ? 'sm' : 'md'}
                  className={`rounded-pill ${isMobile ? 'px-3 py-2' : 'px-4 py-2'}`}
                  style={{
                    background: 'linear-gradient(45deg, #8b5cf6, #7c3aed)',
                    border: 'none',
                    fontWeight: 600,
                    fontSize: isMobile ? '0.85rem' : '0.9rem',
                    transition: isMobile ? 'none' : 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (!isMobile) {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 6px 20px rgba(139, 92, 246, 0.4)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isMobile) {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }
                  }}
                  onClick={(e) => {
                    if (isMobile) {
                      e.preventDefault();
                      const element = document.querySelector('#contact');
                      if (element) {
                        const navbarHeight = 70;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: 'smooth'
                        });
                      }
                    }
                  }}
                >
                  <i className={`fas fa-handshake ${isMobile ? 'me-1' : 'me-2'}`}></i>
                  {isMobile ? 'Discutons' : 'Discutons de votre projet'}
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>

      <style jsx="true">{`
        footer {
          background: linear-gradient(180deg, #0f172a 0%, #1a2332 100%);
        }
        .transition-all {
          transition: all 0.3s ease;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        footer {
          animation: fadeInUp 0.8s ease;
        }
        
        /* Responsive adjustments */
        @media (max-width: 767px) {
          .row-cols-1 > * {
            padding-bottom: 1.5rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }
          .row-cols-1 > *:last-child {
            border-bottom: none;
            padding-bottom: 0;
          }
        }
        
        /* Touch-friendly adjustments */
        @media (hover: none) {
          a:hover {
            transform: none !important;
            opacity: 0.75 !important;
          }
          .btn:hover {
            transform: none !important;
            box-shadow: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;