import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import useScreenSize from '../hooks/useScreenSize';

const About = () => {
  const { isMobile, isTablet } = useScreenSize();

  useEffect(() => {
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
    return () => observer.disconnect();
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
        {/* Grid pattern */}
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: isMobile ? '30px 30px' : '50px 50px',
          opacity: isMobile ? 0.2 : 0.3
        }}></div>

        {/* Decorative circle */}
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
                <div className="d-flex align-items-start">
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
          {/* Academic */}
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
                  <TimelineItem
                    title="Licence en Technologies de l'Information"
                    period="2023 - 2026"
                    badgeGradient="linear-gradient(45deg, #3b82f6, #8b5cf6)"
                    lineGradient="linear-gradient(to bottom, #3b82f6, #8b5cf6)"
                    dotColor="#3b82f6"
                    isMobile={isMobile}
                    className="mb-3 mb-md-4"
                  >
                    Formation axée sur le développement logiciel, les systèmes d'information,
                    la gestion de bases de données et les technologies web modernes.
                  </TimelineItem>

                  <TimelineItem
                    title="Baccalauréat – Spécialité Technique"
                    period="2023"
                    badgeGradient="linear-gradient(45deg, #8b5cf6, #ec4899)"
                    lineGradient="linear-gradient(to bottom, #8b5cf6, #ec4899)"
                    dotColor="#8b5cf6"
                    isMobile={isMobile}
                  >
                    Diplôme obtenu avec une moyenne de <strong className="text-primary">14.59</strong>.
                    Spécialisation orientée vers les disciplines techniques.
                  </TimelineItem>
                </div>
              </div>
            </div>
          </Col>

          {/* Professional */}
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
                  <TimelineItem
                    title="Stage de Fin d'étude – Société Tunisie Telecom"
                    period="02/2026 - 05/2026"
                    badgeGradient="linear-gradient(45deg, #10b981, #06b6d4)"
                    lineGradient="linear-gradient(to bottom, #10b981, #06b6d4)"
                    dotColor="#10b981"
                    isMobile={isMobile}
                    className="mb-3 mb-md-4"
                    bullets={[
                      "Développement d'une plateforme web de gestion d'assurance maladie.",
                      "Conception, gestion de bases de données et intégration de l'IA (Gemini) pour l'analyse de documents.",
                      "Mise en place d'un système de détection de fraude par analyse statistique."
                    ]}
                  />

                  <TimelineItem
                    title="Stage de Perfectionnement – Société Atomic IT Pro"
                    period="06/2025 - 07/2025"
                    badgeGradient="linear-gradient(45deg, #10b981, #06b6d4)"
                    lineGradient="linear-gradient(to bottom, #10b981, #06b6d4)"
                    dotColor="#10b981"
                    isMobile={isMobile}
                    className="mb-3 mb-md-4"
                    bullets={[
                      "Développement d'un site web dynamique pour la location et vente de maisons",
                      "Intégration d'un module Machine Learning pour l'estimation des prix",
                      "Développement d'API REST avec Django"
                    ]}
                  />

                  <TimelineItem
                    title="Stage d'Initiation – Société Yes Technologie"
                    period="01/2024 - 02/2024"
                    badgeGradient="linear-gradient(45deg, #06b6d4, #0ea5e9)"
                    lineGradient="linear-gradient(to bottom, #06b6d4, #0ea5e9)"
                    dotColor="#06b6d4"
                    isMobile={isMobile}
                    bullets={[
                      "Réalisation de sites web statiques et interactifs",
                      "Création d'interfaces modernes avec HTML, CSS, Bootstrap",
                      "Adaptation aux besoins spécifiques des utilisateurs"
                    ]}
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

/* ── Sub-components ─────────────────────────────────────────── */

const Badge = ({ children, className, style, ...props }) => (
  <span className={`badge ${className}`} style={style} {...props}>
    {children}
  </span>
);

const TimelineItem = ({ title, period, badgeGradient, lineGradient, dotColor, isMobile, children, bullets, className = '' }) => (
  <div className={`timeline-item ${isMobile ? 'ps-3' : 'ps-4'} position-relative ${className}`}>
    <div className="position-absolute start-0 top-0 bottom-0">
      <div style={{ width: '2px', height: '100%', background: lineGradient, position: 'relative' }}>
        <div style={{
          position: 'absolute',
          top: '0',
          left: '-6px',
          width: isMobile ? '12px' : '14px',
          height: isMobile ? '12px' : '14px',
          borderRadius: '50%',
          background: dotColor,
          border: '3px solid #1e293b'
        }}></div>
      </div>
    </div>
    <div>
      <div className={`d-flex ${isMobile ? 'flex-column' : 'justify-content-between'} align-items-${isMobile ? 'start' : 'center'} mb-2`}>
        <h6 className={`text-white mb-${isMobile ? '1' : '0'}`}>{title}</h6>
        <span className={`badge px-2 px-md-3 py-1 ${isMobile ? 'mt-1 mb-2' : ''}`} style={{
          background: badgeGradient,
          border: 'none',
          fontSize: isMobile ? '0.75rem' : '0.875rem'
        }}>
          {period}
        </span>
      </div>
      {children && (
        <p className="text-light opacity-90 mb-0" style={{ lineHeight: '1.6', fontSize: isMobile ? '0.85rem' : '0.9rem' }}>
          {children}
        </p>
      )}
      {bullets && (
        <ul className="list-unstyled text-light opacity-90 mb-0">
          {bullets.map((b, i) => (
            <li key={i} className="mb-1 mb-md-2 d-flex align-items-start">
              <i className="fas fa-check-circle text-success me-2 mt-1" style={{ fontSize: isMobile ? '0.8rem' : '0.9rem' }}></i>
              <span style={{ fontSize: isMobile ? '0.85rem' : '0.9rem' }}>{b}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

export default About;