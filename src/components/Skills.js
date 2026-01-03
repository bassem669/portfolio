import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Skills = () => {
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

    document.querySelectorAll('.tech-card').forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('resize', checkScreenSize);
      observer.disconnect();
    };
  }, [isMobile]);

  const technologies = [
    { name: 'React', icon: 'fab fa-react', color: '#61dafb' },
    { name: 'Angular', icon: 'fab fa-angular', color: '#dd0031' },
    { name: 'Django', icon: 'fab fa-python', color: '#092e20' },
    { name: 'Node.js', icon: 'fab fa-node-js', color: '#339933' },
    { name: 'Express.js', icon: 'fas fa-server', color: '#000000' },
    { name: 'MySQL', icon: 'fas fa-database', color: '#4479a1' },
    { name: 'MongoDB', icon: 'fas fa-database', color: '#336791' },
    { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: '#7952b3' },
    { name: 'JavaScript', icon: 'fab fa-js', color: '#f7df1e' },
    { name: 'Java', icon: 'fab fa-java', color: '#007396' },
    { name: 'Machine Learning', icon: 'fas fa-brain', color: '#ff6b6b' },
    { name: 'Flutter', icon: 'fas fa-mobile-alt', color: '#02569b' },
  ];

  // Nombre de colonnes par ligne selon l'écran
  const getColumns = () => {
    if (isMobile) return 2; // xs={6} = 2 colonnes sur mobile
    if (isTablet) return 3; // md={4} = 3 colonnes sur tablette
    return 4; // lg={3} = 4 colonnes sur desktop
  };

  return (
    <section id="competences" className="py-4 py-md-5 position-relative overflow-hidden">
      {/* Background Elements - Réduits sur mobile */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        zIndex: 0
      }}>
        <div style={{
          position: 'absolute',
          top: isMobile ? '10%' : '20%',
          right: isMobile ? '5%' : '10%',
          width: isMobile ? '200px' : (isTablet ? '300px' : '400px'),
          height: isMobile ? '200px' : (isTablet ? '300px' : '400px'),
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
          filter: `blur(${isMobile ? '40px' : '80px'})`,
          borderRadius: '50%'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: isMobile ? '10%' : '20%',
          left: isMobile ? '5%' : '10%',
          width: isMobile ? '250px' : (isTablet ? '350px' : '500px'),
          height: isMobile ? '250px' : (isTablet ? '350px' : '500px'),
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
          filter: `blur(${isMobile ? '50px' : '100px'})`,
          borderRadius: '50%'
        }}></div>
      </div>

      <Container className="px-3 px-md-4" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <Row className="mb-4 mb-md-5">
          <Col>
            <div className="text-center">
              <h2 className={`text-white mb-3 ${isMobile ? 'h3' : 'section-title'}`} 
                  style={isMobile ? { fontSize: '1.75rem' } : {}}>
                Mes <span className="text-gradient">Compétences</span>
              </h2>

              <p className="text-light opacity-75" style={{
                maxWidth: '700px',
                margin: '0 auto',
                fontSize: isMobile ? '0.9rem' : '1.1rem',
                lineHeight: '1.6',
                padding: isMobile ? '0 1rem' : '0'
              }}>
                Un éventail complet de technologies et frameworks que j'ai maîtrisés à travers
                mes projets académiques et professionnels.
              </p>
            </div>
          </Col>
        </Row>

        <Row className={`${isMobile ? 'row-cols-2' : 'row-cols-2 row-cols-md-3 row-cols-lg-4'} g-2 g-md-3`}>
          {technologies.map((tech, index) => (
            <Col key={index} className="mb-3 mb-md-4">
              <div
                className="tech-card animate-on-scroll"
                style={{
                  animationDelay: `${index * 0.03}s`
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
                    e.currentTarget.style.boxShadow = `0 20px 40px ${tech.color}30`;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.2)';
                  }
                }}
                onTouchStart={(e) => {
                  if (isMobile) {
                    e.currentTarget.style.transform = 'scale(0.95)';
                  }
                }}
                onTouchEnd={(e) => {
                  if (isMobile) {
                    e.currentTarget.style.transform = 'scale(1)';
                  }
                }}
              >
                <div className="tech-icon-wrapper d-flex align-items-center justify-content-center"
                  style={{
                    width: isMobile ? '50px' : (isTablet ? '60px' : '70px'),
                    height: isMobile ? '50px' : (isTablet ? '60px' : '70px'),
                    margin: '0 auto 0.75rem',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: isMobile ? '12px' : '16px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    transition: 'all 0.3s ease',
                    flexShrink: 0
                  }}>
                  <i
                    className={`${tech.icon} ${isMobile ? 'fa-lg' : 'fa-2x'}`}
                    style={{
                      color: tech.color,
                      transition: 'all 0.3s ease'
                    }}
                  ></i>
                </div>
                <h6 className={`text-white mb-0 text-center ${isMobile ? 'small' : ''}`} 
                    style={{ fontSize: isMobile ? '0.8rem' : '0.9rem' }}>
                  {tech.name}
                </h6>
              </div>
            </Col>
          ))}
        </Row>

        {/* Additional Info */}
        <Row className="mt-4 mt-md-5 pt-2 pt-md-3">
          <Col>
            <div className="glass-panel p-3 p-md-4 rounded-4 text-center" style={{
              background: 'rgba(30, 41, 59, 0.5)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
            }}>
              <h5 className={`text-white mb-2 mb-md-3 ${isMobile ? 'h6' : ''}`}>
                <i className={`fas fa-rocket ${isMobile ? 'me-1' : 'me-2'}`}></i>
                Toujours en Apprentissage
              </h5>
              <p className="text-light opacity-90 mb-0" style={{ 
                maxWidth: '800px', 
                margin: '0 auto',
                fontSize: isMobile ? '0.85rem' : '1rem',
                lineHeight: '1.6'
              }}>
                Je suis constamment à la recherche de nouvelles technologies et méthodologies
                pour améliorer mes compétences. Actuellement, je me forme sur
                <strong className="text-primary mx-1 mx-md-2">Git</strong> et
                <strong className="text-primary mx-1 mx-md-2">Docker</strong>
              </p>
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
        .tech-card {
          background: rgba(30, 41, 59, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1rem 0.5rem;
          transition: all 0.3s ease;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: ${isMobile ? '120px' : '150px'};
        }
        @media (min-width: 768px) {
          .tech-card {
            padding: 1.5rem 1rem;
            border-radius: 16px;
          }
        }
        @media (min-width: 992px) {
          .tech-card:hover .tech-icon-wrapper {
            transform: scale(1.1);
            background: rgba(255, 255, 255, 0.15);
            border-color: rgba(255, 255, 255, 0.3);
          }
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
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        /* Responsive adjustments */
        @media (max-width: 767px) {
          .row-cols-2 > * {
            padding: 0 0.25rem;
          }
        }
        
        /* Touch-friendly adjustments */
        @media (hover: none) {
          .tech-card:hover {
            transform: none !important;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;