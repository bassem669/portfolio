import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
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

    // Animation des éléments
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: isMobile ? 0.05 : 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('resize', checkScreenSize);
      observer.disconnect();
    };
  }, [isMobile]);

  const softSkills = [
    {
      title: "Passionné",
      icon: "fas fa-fire",
      description: "Je suis une personne passionnée par le domaine du développement et des nouvelles technologies. Cette passion me pousse à rester motivé, curieux et engagé dans les projets que j'entreprends.",
      color: "#ef4444",
      gradient: "linear-gradient(45deg, #ef4444, #f97316)"
    },
    {
      title: "Apprentissage rapide",
      icon: "fas fa-bolt",
      description: "J'ai une forte capacité d'apprentissage, ce qui me permet de maîtriser rapidement de nouveaux outils ou technologies. Grâce à ma curiosité, je peux assimiler les concepts essentiels rapidement.",
      color: "#eab308",
      gradient: "linear-gradient(45deg, #eab308, #84cc16)"
    },
    {
      title: "Résolution de problèmes",
      icon: "fas fa-puzzle-piece",
      description: "J'excelle dans l'analyse et la résolution de problèmes complexes. Mon approche méthodique me permet de trouver des solutions créatives aux défis techniques.",
      color: "#3b82f6",
      gradient: "linear-gradient(45deg, #3b82f6, #8b5cf6)"
    },
    {
      title: "Travail d'équipe",
      icon: "fas fa-users",
      description: "Je valorise la collaboration et la communication efficace. J'aime contribuer à des projets collectifs et apprendre des autres membres de l'équipe.",
      color: "#10b981",
      gradient: "linear-gradient(45deg, #10b981, #06b6d4)"
    }
  ];

  return (
    <section id="a-propos" className="py-5 position-relative overflow-hidden">
      {/* Background Elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        zIndex: 0
      }}>
        {/* Grid pattern - Simplified on mobile */}
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: isMobile ? '30px 30px' : '50px 50px',
          opacity: isMobile ? 0.2 : 0.3
        }}></div>

        {/* Decorative circles - Simplified on mobile */}
        <div style={{
          position: 'absolute',
          top: isMobile ? '5%' : '10%',
          left: isMobile ? '2%' : '5%',
          width: isMobile ? '150px' : (isTablet ? '200px' : '300px'),
          height: isMobile ? '150px' : (isTablet ? '200px' : '300px'),
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
          filter: `blur(${isMobile ? '30px' : '60px'})`,
          borderRadius: '50%'
        }}></div>
      </div>

      <Container className="px-3 px-md-4" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <Row className="mb-4 mb-md-5">
          <Col>
            <div className="text-center mb-3 mb-md-4 animate-on-scroll">
              <Badge
                bg="transparent"
                className="mb-3 px-3 py-2 rounded-pill d-inline-flex align-items-center"
                style={{
                  background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  fontSize: isMobile ? '0.8rem' : '0.9rem',
                  color: '#93c5fd'
                }}
              >
                <i className="fas fa-user me-2"></i>
                Mon Profil
              </Badge>

              <h2 className={`text-white mb-3 mb-md-4 ${isMobile ? 'h3' : 'section-title'}`} 
                  style={isMobile ? { fontSize: '1.75rem' } : {}}>
                À propos de <span className="text-gradient">moi</span>
              </h2>

              <div className="glass-panel p-3 p-md-4 p-lg-5 rounded-4 mx-auto" style={{
                maxWidth: '900px',
                background: 'rgba(30, 41, 59, 0.7)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
              }}>
                <p className={`mb-0 text-center text-light ${isMobile ? '' : 'lead'}`} style={{
                  lineHeight: '1.7',
                  fontSize: isMobile ? '0.95rem' : '1.1rem'
                }}>
                  Je suis étudiant en <strong className="text-primary">Technologies de l'Information</strong> à l'Institut Supérieur des
                  Études Technologiques de Kélibia (ISET Kélibia). Passionné par le développement
                  web et les solutions numériques, je m'efforce de créer des projets modernes, efficaces
                  et centrés sur l'utilisateur.
                </p>
              </div>
            </div>
          </Col>
        </Row>

        {/* Soft Skills */}
        <Row className="mb-4 mb-md-5">
          <Col>
            <div className="text-center mb-4 mb-md-5">
              <h3 className={`text-white mb-3 ${isMobile ? 'h4' : ''}`}>
                <i className="fas fa-star me-3"></i>
                Mes Forces Personnelles
              </h3>
              <p className="text-light opacity-75" style={{ 
                maxWidth: '600px', 
                margin: '0 auto',
                fontSize: isMobile ? '0.9rem' : '1rem'
              }}>
                Des qualités qui font la différence dans mon approche du développement
              </p>
            </div>
          </Col>
        </Row>

        <Row className={`${isMobile ? 'row-cols-1' : 'row-cols-1 row-cols-md-2'} g-3 g-md-4 mb-4 mb-md-5`}>
          {softSkills.map((skill, index) => (
            <Col key={index} className="mb-3 mb-md-0">
              <div className="dev-card h-100 p-3 p-md-4 animate-on-scroll"
                style={{
                  background: 'rgba(30, 41, 59, 0.7)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  transition: isMobile ? 'none' : 'all 0.3s ease',
                  height: '100%'
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.borderColor = `${skill.color}40`;
                    e.currentTarget.style.boxShadow = `0 12px 40px ${skill.color}20`;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.2)';
                  }
                }}
              >
                <div className={`d-flex ${isMobile ? 'align-items-start' : 'align-items-start'}`}>
                  <div className={`rounded-circle p-2 p-md-3 ${isMobile ? 'me-3' : 'me-4'} d-flex align-items-center justify-content-center`}
                    style={{
                      background: skill.gradient,
                      minWidth: isMobile ? '48px' : '60px',
                      height: isMobile ? '48px' : '60px',
                      boxShadow: `0 6px 20px ${skill.color}40`,
                      flexShrink: 0
                    }}>
                    <i className={`${skill.icon} ${isMobile ? 'fa-sm' : 'fa-lg'} text-white`}></i>
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 className={`text-white mb-2 mb-md-3 ${isMobile ? 'h5' : ''}`}>{skill.title}</h4>
                    <p className="text-light opacity-90 mb-0" style={{ 
                      lineHeight: '1.6',
                      fontSize: isMobile ? '0.9rem' : '1rem'
                    }}>
                      {skill.description}
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Timeline Section */}
        <Row className={`${isMobile ? 'row-cols-1' : 'row-cols-1 row-cols-lg-2'} g-3 g-md-4`}>
          <Col className="mb-3 mb-lg-0">
            <div className="animate-on-scroll">
              <div className="dev-card h-100 overflow-hidden"
                style={{
                  background: 'rgba(30, 41, 59, 0.7)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(59, 130, 246, 0.2)',
                  borderRadius: '16px',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                  height: '100%'
                }}>
                <div className="p-3 p-md-4" style={{
                  background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.3))',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <h5 className={`mb-0 text-white d-flex align-items-center ${isMobile ? 'h6' : ''}`}>
                    <div className={`rounded-circle ${isMobile ? 'p-1 me-2' : 'p-2 me-3'}`} style={{
                      background: 'rgba(255, 255, 255, 0.2)',
                      width: isMobile ? '32px' : '40px',
                      height: isMobile ? '32px' : '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <i className={`fas fa-graduation-cap ${isMobile ? 'fa-sm' : ''}`}></i>
                    </div>
                    Parcours Académique
                  </h5>
                </div>
                <div className="p-3 p-md-4">
                  <div className={`timeline-item mb-3 mb-md-4 ${isMobile ? 'ps-3' : 'ps-4'} position-relative`}>
                    <div className="position-absolute start-0 top-0 bottom-0">
                      <div style={{
                        width: '2px',
                        height: '100%',
                        background: 'linear-gradient(to bottom, #3b82f6, #8b5cf6)',
                        position: 'relative'
                      }}>
                        <div style={{
                          position: 'absolute',
                          top: '0',
                          left: '-6px',
                          width: isMobile ? '12px' : '14px',
                          height: isMobile ? '12px' : '14px',
                          borderRadius: '50%',
                          background: '#3b82f6',
                          border: `3px solid ${isMobile ? '#1e293b' : '#1e293b'}`
                        }}></div>
                      </div>
                    </div>
                    <div className="mb-2 mb-md-3">
                      <div className={`d-flex ${isMobile ? 'flex-column' : 'justify-content-between'} align-items-${isMobile ? 'start' : 'center'} mb-2`}>
                        <h6 className={`text-white mb-${isMobile ? '1' : '0'} ${isMobile ? 'h6' : ''}`}>
                          Licence en Technologies de l'Information
                        </h6>
                        <Badge className={`px-2 px-md-3 py-1 ${isMobile ? 'mt-1 mb-2' : ''}`} style={{
                          background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
                          border: 'none',
                          fontSize: isMobile ? '0.75rem' : '0.875rem'
                        }}>
                          2024 - Présent
                        </Badge>
                      </div>
                      <p className="text-light opacity-90 mb-0" style={{ 
                        lineHeight: '1.6',
                        fontSize: isMobile ? '0.85rem' : '0.9rem'
                      }}>
                        Formation axée sur le développement logiciel, les systèmes d'information,
                        la gestion de bases de données et les technologies web modernes.
                      </p>
                    </div>
                  </div>

                  <div className={`timeline-item ${isMobile ? 'ps-3' : 'ps-4'} position-relative`}>
                    <div className="position-absolute start-0 top-0 bottom-0">
                      <div style={{
                        width: '2px',
                        height: '100%',
                        background: 'linear-gradient(to bottom, #8b5cf6, #ec4899)',
                        position: 'relative'
                      }}>
                        <div style={{
                          position: 'absolute',
                          top: '0',
                          left: '-6px',
                          width: isMobile ? '12px' : '14px',
                          height: isMobile ? '12px' : '14px',
                          borderRadius: '50%',
                          background: '#8b5cf6',
                          border: `3px solid ${isMobile ? '#1e293b' : '#1e293b'}`
                        }}></div>
                      </div>
                    </div>
                    <div>
                      <div className={`d-flex ${isMobile ? 'flex-column' : 'justify-content-between'} align-items-${isMobile ? 'start' : 'center'} mb-2`}>
                        <h6 className={`text-white mb-${isMobile ? '1' : '0'} ${isMobile ? 'h6' : ''}`}>
                          Baccalauréat – Spécialité Technique
                        </h6>
                        <Badge className={`px-2 px-md-3 py-1 ${isMobile ? 'mt-1 mb-2' : ''}`} style={{
                          background: 'linear-gradient(45deg, #8b5cf6, #ec4899)',
                          border: 'none',
                          fontSize: isMobile ? '0.75rem' : '0.875rem'
                        }}>
                          2023
                        </Badge>
                      </div>
                      <p className="text-light opacity-90 mb-0" style={{ 
                        lineHeight: '1.6',
                        fontSize: isMobile ? '0.85rem' : '0.9rem'
                      }}>
                        Diplôme obtenu avec une moyenne de <strong className="text-primary">14.52</strong>.
                        Spécialisation orientée vers les disciplines techniques.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col>
            <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <div className="dev-card h-100 overflow-hidden"
                style={{
                  background: 'rgba(30, 41, 59, 0.7)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(16, 185, 129, 0.2)',
                  borderRadius: '16px',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                  height: '100%'
                }}>
                <div className="p-3 p-md-4" style={{
                  background: 'linear-gradient(90deg, rgba(16, 185, 129, 0.3), rgba(6, 182, 212, 0.3))',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <h5 className={`mb-0 text-white d-flex align-items-center ${isMobile ? 'h6' : ''}`}>
                    <div className={`rounded-circle ${isMobile ? 'p-1 me-2' : 'p-2 me-3'}`} style={{
                      background: 'rgba(255, 255, 255, 0.2)',
                      width: isMobile ? '32px' : '40px',
                      height: isMobile ? '32px' : '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <i className={`fas fa-briefcase ${isMobile ? 'fa-sm' : ''}`}></i>
                    </div>
                    Expériences Professionnelles
                  </h5>
                </div>
                <div className="p-3 p-md-4">
                  <div className={`timeline-item mb-3 mb-md-4 ${isMobile ? 'ps-3' : 'ps-4'} position-relative`}>
                    <div className="position-absolute start-0 top-0 bottom-0">
                      <div style={{
                        width: '2px',
                        height: '100%',
                        background: 'linear-gradient(to bottom, #10b981, #06b6d4)',
                        position: 'relative'
                      }}>
                        <div style={{
                          position: 'absolute',
                          top: '0',
                          left: '-6px',
                          width: isMobile ? '12px' : '14px',
                          height: isMobile ? '12px' : '14px',
                          borderRadius: '50%',
                          background: '#10b981',
                          border: `3px solid ${isMobile ? '#1e293b' : '#1e293b'}`
                        }}></div>
                      </div>
                    </div>
                    <div className="mb-2 mb-md-3">
                      <div className={`d-flex ${isMobile ? 'flex-column' : 'justify-content-between'} align-items-${isMobile ? 'start' : 'center'} mb-2`}>
                        <h6 className={`text-white mb-${isMobile ? '1' : '0'} ${isMobile ? 'h6' : ''}`}>
                          Stage – Société Atomic IT Pro
                        </h6>
                        <Badge className={`px-2 px-md-3 py-1 ${isMobile ? 'mt-1 mb-2' : ''}`} style={{
                          background: 'linear-gradient(45deg, #10b981, #06b6d4)',
                          border: 'none',
                          fontSize: isMobile ? '0.75rem' : '0.875rem'
                        }}>
                          Été 2025
                        </Badge>
                      </div>
                      <ul className="list-unstyled text-light opacity-90 mb-0">
                        <li className="mb-1 mb-md-2 d-flex align-items-start">
                          <i className={`fas fa-check-circle text-success ${isMobile ? 'me-2 mt-1' : 'me-2 mt-1'}`} 
                             style={{ fontSize: isMobile ? '0.8rem' : '0.9rem' }}></i>
                          <span style={{ fontSize: isMobile ? '0.85rem' : '0.9rem' }}>
                            Développement d'un site web dynamique pour la location et vente de maisons
                          </span>
                        </li>
                        <li className="mb-1 mb-md-2 d-flex align-items-start">
                          <i className={`fas fa-check-circle text-success ${isMobile ? 'me-2 mt-1' : 'me-2 mt-1'}`} 
                             style={{ fontSize: isMobile ? '0.8rem' : '0.9rem' }}></i>
                          <span style={{ fontSize: isMobile ? '0.85rem' : '0.9rem' }}>
                            Intégration d'un module Machine Learning pour l'estimation des prix
                          </span>
                        </li>
                        <li className="mb-1 mb-md-2 d-flex align-items-start">
                          <i className={`fas fa-check-circle text-success ${isMobile ? 'me-2 mt-1' : 'me-2 mt-1'}`} 
                             style={{ fontSize: isMobile ? '0.8rem' : '0.9rem' }}></i>
                          <span style={{ fontSize: isMobile ? '0.85rem' : '0.9rem' }}>
                            Développement d'API REST avec Django
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className={`timeline-item ${isMobile ? 'ps-3' : 'ps-4'} position-relative`}>
                    <div className="position-absolute start-0 top-0 bottom-0">
                      <div style={{
                        width: '2px',
                        height: '100%',
                        background: 'linear-gradient(to bottom, #06b6d4, #0ea5e9)',
                        position: 'relative'
                      }}>
                        <div style={{
                          position: 'absolute',
                          top: '0',
                          left: '-6px',
                          width: isMobile ? '12px' : '14px',
                          height: isMobile ? '12px' : '14px',
                          borderRadius: '50%',
                          background: '#06b6d4',
                          border: `3px solid ${isMobile ? '#1e293b' : '#1e293b'}`
                        }}></div>
                      </div>
                    </div>
                    <div>
                      <div className={`d-flex ${isMobile ? 'flex-column' : 'justify-content-between'} align-items-${isMobile ? 'start' : 'center'} mb-2`}>
                        <h6 className={`text-white mb-${isMobile ? '1' : '0'} ${isMobile ? 'h6' : ''}`}>
                          Stage – Société Yes Technologie
                        </h6>
                        <Badge className={`px-2 px-md-3 py-1 ${isMobile ? 'mt-1 mb-2' : ''}`} style={{
                          background: 'linear-gradient(45deg, #06b6d4, #0ea5e9)',
                          border: 'none',
                          fontSize: isMobile ? '0.75rem' : '0.875rem'
                        }}>
                          2024
                        </Badge>
                      </div>
                      <ul className="list-unstyled text-light opacity-90 mb-0">
                        <li className="mb-1 mb-md-2 d-flex align-items-start">
                          <i className={`fas fa-check-circle text-success ${isMobile ? 'me-2 mt-1' : 'me-2 mt-1'}`} 
                             style={{ fontSize: isMobile ? '0.8rem' : '0.9rem' }}></i>
                          <span style={{ fontSize: isMobile ? '0.85rem' : '0.9rem' }}>
                            Réalisation de sites web statiques et interactifs
                          </span>
                        </li>
                        <li className="mb-1 mb-md-2 d-flex align-items-start">
                          <i className={`fas fa-check-circle text-success ${isMobile ? 'me-2 mt-1' : 'me-2 mt-1'}`} 
                             style={{ fontSize: isMobile ? '0.8rem' : '0.9rem' }}></i>
                          <span style={{ fontSize: isMobile ? '0.85rem' : '0.9rem' }}>
                            Création d'interfaces modernes avec HTML, CSS, Bootstrap
                          </span>
                        </li>
                        <li className="mb-1 mb-md-2 d-flex align-items-start">
                          <i className={`fas fa-check-circle text-success ${isMobile ? 'me-2 mt-1' : 'me-2 mt-1'}`} 
                             style={{ fontSize: isMobile ? '0.8rem' : '0.9rem' }}></i>
                          <span style={{ fontSize: isMobile ? '0.85rem' : '0.9rem' }}>
                            Adaptation aux besoins spécifiques des utilisateurs
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <style jsx="true">{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }
        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        .text-gradient {
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        @media (min-width: 768px) {
          .section-title {
            font-size: 2.5rem;
            font-weight: 700;
            position: relative;
            display: inline-block;
          }
          .section-title::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background: linear-gradient(45deg, #3b82f6, #8b5cf6);
            border-radius: 2px;
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Responsive adjustments */
        @media (max-width: 767px) {
          .dev-card {
            margin-bottom: 1rem;
          }
          .timeline-item {
            padding-left: 2rem !important;
          }
          .glass-panel {
            margin: 0 -1rem;
          }
        }
        
        /* Touch-friendly adjustments */
        @media (hover: none) {
          .dev-card:hover {
            transform: none !important;
            border-color: rgba(255, 255, 255, 0.1) !important;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2) !important;
          }
        }
      `}</style>
    </section>
  );
};

// Composant Badge personnalisé
const Badge = ({ children, className, style, ...props }) => {
  return (
    <span className={`badge ${className}`} style={style} {...props}>
      {children}
    </span>
  );
};

export default About;