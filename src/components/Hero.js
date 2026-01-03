import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';

const Hero = () => {
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

    // Animation d'entrée
    const elements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      },
      { threshold: isMobile ? 0.05 : 0.1 }
    );

    elements.forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('resize', checkScreenSize);
      observer.disconnect();
    };
  }, [isMobile]);

  const socialLinks = [
    { 
      icon: 'github', 
      link: 'https://github.com/bassem669',
      color: '#333',
      hoverColor: '#4078c0'
    },
    { 
      icon: 'linkedin', 
      link: 'https://www.linkedin.com/in/bassem-mathlouthi-3abab6362/',
      color: '#0077b5',
      hoverColor: '#00a0dc'
    },
    { 
      icon: 'facebook', 
      link: 'https://www.facebook.com/bassam.mathlouthi.1',
      color: '#1877f2',
      hoverColor: '#3b5998'
    }
  ];

  const technologies = [
    { name: 'React.js', color: '#61dafb', bgColor: 'rgba(97, 218, 251, 0.1)' },
    { name: 'Django', color: '#ff9900', bgColor: 'rgba(255, 153, 0, 0.1)' },
    { name: 'MySQL', color: '#4479a1', bgColor: 'rgba(68, 121, 161, 0.1)' },
    { name: 'JWT', color: '#d63aff', bgColor: 'rgba(214, 58, 255, 0.1)' },
    { name: 'Python', color: '#3776ab', bgColor: 'rgba(55, 118, 171, 0.1)' }
  ];

  // Taille responsive pour l'image de profil
  const getProfileImageSize = () => {
    if (isMobile) return 280;
    if (isTablet) return 350;
    return 450;
  };

  return (
    <section
      id="home"
      className="min-vh-100 d-flex align-items-center position-relative overflow-hidden"
      style={{ 
        paddingTop: isMobile ? '70px' : '80px',
        paddingBottom: isMobile ? '50px' : '0',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)'
      }}
    >
      {/* Background Elements - Réduit sur mobile */}
      <div className="position-absolute w-100 h-100 top-0 start-0">
        <div className="position-absolute particles-container" style={{ 
          width: '100%', 
          height: '100%',
          opacity: isMobile ? 0.4 : 0.6
        }}>
          {[...Array(isMobile ? 10 : 20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                position: 'absolute',
                width: `${Math.random() * (isMobile ? 2 : 3) + 1}px`,
                height: `${Math.random() * (isMobile ? 2 : 3) + 1}px`,
                background: `rgba(59, 130, 246, ${Math.random() * 0.5 + 0.2})`,
                borderRadius: '50%',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        {/* Effets de lumières - Réduits sur mobile */}
        <div
          style={{
            position: 'absolute',
            top: isMobile ? '5%' : '10%',
            right: isMobile ? '5%' : '10%',
            width: isMobile ? '200px' : (isTablet ? '300px' : '500px'),
            height: isMobile ? '200px' : (isTablet ? '300px' : '500px'),
            background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)',
            filter: `blur(${isMobile ? '40px' : '80px'})`,
            zIndex: 0
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: isMobile ? '5%' : '10%',
            left: isMobile ? '5%' : '10%',
            width: isMobile ? '250px' : (isTablet ? '400px' : '600px'),
            height: isMobile ? '250px' : (isTablet ? '400px' : '600px'),
            background: 'radial-gradient(circle, rgba(129, 140, 248, 0.15) 0%, transparent 70%)',
            filter: `blur(${isMobile ? '50px' : '100px'})`,
            zIndex: 0
          }}
        />
      </div>

      <Container className="px-3 px-md-4 px-lg-5" style={{ position: 'relative', zIndex: 1 }}>
        <Row className="align-items-center">
          <Col lg={6} className="order-lg-1 order-2">
            <div className={`pe-lg-5 ${isMobile ? 'text-center' : ''}`}>
              <div className="animate-on-scroll fade-in-up" style={{ animationDelay: '0.1s' }}>
                <Badge 
                  bg="transparent" 
                  className="mb-3 mb-md-4 px-3 py-2 rounded-pill d-inline-flex align-items-center"
                  style={{
                    background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    fontSize: isMobile ? '0.8rem' : '0.9rem',
                    maxWidth: '100%'
                  }}
                >
                  <div style={{
                    width: '6px',
                    height: '6px',
                    background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
                    borderRadius: '50%',
                    marginRight: isMobile ? '6px' : '10px',
                    animation: 'pulse 2s infinite',
                    flexShrink: 0
                  }}></div>
                  <span className="text-truncate">
                    Étudiant en Développement de Systèmes Informatiques
                  </span>
                </Badge>

                <h1 className={`fw-bold mb-3 mb-md-4 text-white animate-on-scroll fade-in-up ${isMobile ? 'display-5' : 'display-4'}`} 
                    style={{ animationDelay: '0.2s' }}>
                  {isMobile ? (
                    <>
                      Bonjour,<br />
                      je suis{' '}
                      <span className="text-gradient d-block mt-2" style={{
                        background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontSize: '2.5rem',
                        lineHeight: '1.2'
                      }}>
                        Mathlouthi Bassem
                      </span>
                    </>
                  ) : (
                    <>
                      Bonjour, je suis{' '}
                      <div className="text-gradient mt-2" style={{
                        background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontSize: isTablet ? '3rem' : '3.5rem',
                        display: 'inline-block',
                        lineHeight: '1.2'
                      }}>
                        Mathlouthi Bassem
                      </div>
                    </>
                  )}
                </h1>

                <p className="mb-4 mb-md-5 text-light animate-on-scroll fade-in-up" style={{ 
                  animationDelay: '0.3s',
                  fontSize: isMobile ? '1rem' : '1.1rem',
                  lineHeight: '1.7',
                  opacity: 0.9,
                  textAlign: isMobile ? 'center' : 'left'
                }}>
                  Passionné par le développement Full-Stack, je suis actuellement en dernière année de Licence en Technologies de l'Information à l'ISET Kélibia. Je recherche un{' '}
                  <span className="fw-bold text-primary">Stage de Fin d'Études (PFE)</span>{' '}
                  pour mettre en pratique mes compétences et contribuer à des projets innovants.
                </p>

                <div className="mb-4 mb-md-5 animate-on-scroll fade-in-up" style={{ animationDelay: '0.4s' }}>
                  <h6 className={`text-uppercase mb-3 text-light ${isMobile ? 'text-center' : ''}`} style={{ 
                    letterSpacing: isMobile ? '2px' : '3px', 
                    fontSize: isMobile ? '0.8rem' : '0.875rem',
                    fontWeight: 600 
                  }}>
                    <i className="fas fa-cogs me-2"></i>
                    Stack Technique
                  </h6>
                  <div className={`d-flex flex-wrap gap-2 ${isMobile ? 'justify-content-center' : ''}`}>
                    {technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 px-md-3 py-1 py-md-2 rounded-pill d-flex align-items-center"
                        style={{
                          background: tech.bgColor,
                          border: `1px solid ${tech.color}30`,
                          color: tech.color,
                          fontSize: isMobile ? '0.75rem' : '0.85rem',
                          fontWeight: 500,
                          transition: 'all 0.3s ease',
                          maxWidth: '100%'
                        }}
                        onMouseEnter={(e) => {
                          if (!isMobile) {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = `0 4px 12px ${tech.color}30`;
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isMobile) {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                          }
                        }}
                      >
                        <span style={{
                          width: '5px',
                          height: '5px',
                          background: tech.color,
                          borderRadius: '50%',
                          marginRight: isMobile ? '5px' : '8px',
                          flexShrink: 0
                        }}></span>
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={`d-flex flex-wrap gap-2 gap-md-3 mb-4 mb-md-5 animate-on-scroll fade-in-up ${isMobile ? 'justify-content-center' : ''}`} 
                     style={{ animationDelay: '0.5s' }}>
                  <Button
                    href="#projets"
                    className={`rounded-pill ${isMobile ? 'px-3 py-2' : 'px-4 py-3'}`}
                    style={{
                      background: 'linear-gradient(45deg, #3b82f6, #2563eb)',
                      border: 'none',
                      fontWeight: 600,
                      fontSize: isMobile ? '0.9rem' : '1rem',
                      minWidth: isMobile ? '140px' : '180px',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)',
                      flex: isMobile ? '1 0 auto' : 'none'
                    }}
                    onMouseEnter={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.transform = 'translateY(-3px)';
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.4)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.3)';
                      }
                    }}
                  >
                    <i className="fas fa-eye me-2"></i>
                    {isMobile ? 'Projets' : 'Voir mes projets'}
                  </Button>
                  
                  <Button
                    href="/portfolio/Bassem_Mathlouthi_CV.pdf"
                    target="_blank"
                    variant="outline-light"
                    className={`rounded-pill ${isMobile ? 'px-3 py-2' : 'px-4 py-3'}`}
                    style={{
                      background: 'transparent',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      color: 'white',
                      fontWeight: 600,
                      fontSize: isMobile ? '0.9rem' : '1rem',
                      minWidth: isMobile ? '140px' : '180px',
                      transition: 'all 0.3s ease',
                      flex: isMobile ? '1 0 auto' : 'none'
                    }}
                    onMouseEnter={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.5)';
                        e.currentTarget.style.transform = 'translateY(-3px)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }
                    }}
                  >
                    <i className="fas fa-download me-2"></i>
                    {isMobile ? 'Télécharger CV' : 'Télécharger CV'}
                  </Button>
                </div>

                <div className={`d-flex gap-3 gap-md-4 animate-on-scroll fade-in-up ${isMobile ? 'justify-content-center' : ''}`} 
                     style={{ animationDelay: '0.6s' }}>
                  {socialLinks.map((social, i) => (
                    <a
                      key={i}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-flex align-items-center justify-content-center rounded-circle"
                      style={{
                        width: isMobile ? '40px' : '44px',
                        height: isMobile ? '40px' : '44px',
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: 'white',
                        fontSize: isMobile ? '1rem' : '1.1rem',
                        transition: 'all 0.3s ease',
                        textDecoration: 'none'
                      }}
                      onMouseEnter={(e) => {
                        if (!isMobile) {
                          e.currentTarget.style.background = social.hoverColor;
                          e.currentTarget.style.transform = 'translateY(-3px) scale(1.1)';
                          e.currentTarget.style.boxShadow = `0 6px 20px ${social.hoverColor}50`;
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
                          e.currentTarget.style.background = social.hoverColor;
                        }
                      }}
                      onTouchEnd={(e) => {
                        if (isMobile) {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                        }
                      }}
                    >
                      <i className={`fab fa-${social.icon}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Col>

          <Col lg={6} className="order-lg-2 order-1 mb-4 mb-lg-0">
            <div className={`animate-on-scroll fade-in ${isMobile ? 'mb-4' : ''}`} style={{ animationDelay: '0.8s' }}>
              <div className="position-relative d-inline-block">
                {/* Cadre décoratif - Réduit sur mobile */}
                {!isMobile && (
                  <div className="position-absolute top-50 start-50 translate-middle"
                    style={{
                      width: '105%',
                      height: '105%',
                      background: 'linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.2), transparent)',
                      borderRadius: '50%',
                      animation: 'rotate 20s linear infinite',
                      zIndex: 0
                    }}
                  ></div>
                )}

                <div
                  className="rounded-circle overflow-hidden position-relative mx-auto"
                  style={{
                    width: getProfileImageSize(),
                    height: getProfileImageSize(),
                    maxWidth: '100%',
                    border: `2px solid rgba(255,255,255,${isMobile ? 0.05 : 0.1})`,
                    boxShadow: isMobile 
                      ? '0 10px 30px rgba(0, 0, 0, 0.2)'
                      : '0 20px 60px rgba(0, 0, 0, 0.3)',
                    zIndex: 1
                  }}
                >
                  <img
                    src='/portfolio/assets/IMG20240829165954.jpg'
                    alt="Mathlouthi Bassem"
                    className="w-100 h-100 object-fit-cover profile-image"
                    style={{ 
                      objectFit: 'cover',
                      filter: 'brightness(1.05) contrast(1.05)'
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const fallback = e.target.nextSibling;
                      if (fallback) {
                        fallback.style.display = 'flex';
                      }
                    }}
                  />

                  {/* Fallback */}
                  <div
                    className="w-100 h-100 d-flex align-items-center justify-content-center"
                    style={{ 
                      display: 'none',
                      background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)'
                    }}
                  >
                    <i className={`fas fa-user-astronaut ${isMobile ? 'fa-4x' : 'fa-6x'} text-white`}></i>
                  </div>
                </div>

                {/* Badge animé - Position et taille responsive */}
                {!isMobile && (
                  <div className="position-absolute bottom-0 end-0 translate-middle"
                    style={{
                      background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
                      width: isTablet ? '60px' : '80px',
                      height: isTablet ? '60px' : '80px',
                      borderRadius: isTablet ? '15px' : '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: isTablet ? '1.5rem' : '2rem',
                      boxShadow: '0 8px 30px rgba(59, 130, 246, 0.4)',
                      animation: 'float 3s ease-in-out infinite',
                      zIndex: 2
                    }}
                  >
                    <i className="fas fa-code"></i>
                  </div>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Scroll indicator - Seulement sur desktop */}
      {!isMobile && (
        <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4 animate-on-scroll fade-in"
          style={{ animationDelay: '1s', zIndex: 1 }}>
          <div className="d-flex flex-column align-items-center text-light opacity-75"
            style={{ cursor: 'pointer' }}
            onClick={() => document.getElementById('a-propos').scrollIntoView({ behavior: 'smooth' })}>
            <span className="mb-2" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
              Scroll
            </span>
            <div style={{
              width: '24px',
              height: '40px',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '12px',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                width: '4px',
                height: '10px',
                background: 'white',
                borderRadius: '2px',
                left: '50%',
                top: '8px',
                transform: 'translateX(-50%)',
                animation: 'scroll 2s infinite'
              }}></div>
            </div>
          </div>
        </div>
      )}

      {/* Ajout des animations CSS */}
      <style jsx="true">{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        @keyframes rotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes scroll {
          0% { transform: translateX(-50%) translateY(0); opacity: 1; }
          100% { transform: translateX(-50%) translateY(15px); opacity: 0; }
        }
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s ease;
        }
        .fade-in-up {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }
        .animate-on-scroll.animated {
          opacity: 1;
          transform: translateY(0);
        }
        .particle {
          animation: float 20s infinite ease-in-out;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .display-5 {
            font-size: 2.5rem !important;
          }
        }
        
        @media (max-width: 576px) {
          .display-5 {
            font-size: 2rem !important;
          }
          .text-gradient {
            font-size: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
