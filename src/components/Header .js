import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 992); // Bootstrap's lg breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Gestion du scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Gestion des liens actifs au scroll
      const sections = ['home', 'a-propos', 'competences', 'projets', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Ajuster le seuil pour mobile
          const threshold = isMobile ? 150 : 100;
          return rect.top <= threshold && rect.bottom >= threshold;
        }
        return false;
      });

      if (currentSection) {
        setActiveLink(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled, isMobile]);

  const navItems = [
    { name: 'Accueil', href: '#home', icon: 'fas fa-home' },
    { name: 'À propos', href: '#a-propos', icon: 'fas fa-user' },
    { name: 'Compétences', href: '#competences', icon: 'fas fa-code' },
    { name: 'Projets', href: '#projets', icon: 'fas fa-briefcase' },
    { name: 'Contact', href: '#contact', icon: 'fas fa-envelope' },
  ];

  const handleNavClick = (href) => {
    const sectionId = href.replace('#', '');
    setActiveLink(sectionId);
    setExpanded(false);

    // Scroll fluide
    const element = document.querySelector(href);
    if (element) {
      // Ajuster pour la hauteur de la navbar mobile
      const navbarHeight = isMobile ? 80 : 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <Navbar
        expand="lg"
        fixed="top"
        expanded={expanded}
        onToggle={setExpanded}
        className={`py-2 transition-all ${scrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}
        style={{
          background: scrolled
            ? 'rgba(15, 23, 42, 0.98)'
            : 'rgba(15, 23, 42, 0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: scrolled
            ? '1px solid rgba(255, 255, 255, 0.1)'
            : '1px solid rgba(255, 255, 255, 0.05)',
          transition: 'all 0.3s ease-in-out',
          zIndex: 9999,
          minHeight: '70px'
        }}
      >
        <Container fluid="lg" className="px-3 px-lg-4">
          {/* Logo/Brand - Optimisé pour mobile */}
          <Navbar.Brand 
            href="#home" 
            className="fw-bold"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            style={{
              fontSize: isMobile ? '1.1rem' : '1.25rem',
              lineHeight: '1.2'
            }}
          >
            <span className="text-white">
              <i className="fas fa-code me-2"></i>
              <span className="d-none d-sm-inline">Mathlouthi Bassem</span>
              <span className="d-inline d-sm-none">M. Bassem</span>
            </span>
          </Navbar.Brand>

          {/* Toggle button personnalisé */}
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="border-0 shadow-none position-relative"
            style={{
              width: '30px',
              height: '24px',
              background: 'transparent',
              border: 'none',
              padding: 0,
              position: 'relative',
              zIndex: 10000
            }}
          >
            <span className="d-block position-absolute w-100"
              style={{
                height: '2px',
                background: expanded ? 'transparent' : 'white',
                transition: 'all 0.3s ease',
                top: expanded ? '11px' : '0',
                transform: expanded ? 'rotate(45deg)' : 'none'
              }}
            ></span>
            <span className="d-block position-absolute w-100"
              style={{
                height: '2px',
                background: expanded ? 'white' : 'white',
                transition: 'all 0.3s ease',
                top: '11px',
                opacity: expanded ? 0 : 1,
                transform: expanded ? 'translateX(-20px)' : 'none'
              }}
            ></span>
            <span className="d-block position-absolute w-100"
              style={{
                height: '2px',
                background: expanded ? 'white' : 'white',
                transition: 'all 0.3s ease',
                top: expanded ? '11px' : '22px',
                transform: expanded ? 'rotate(-45deg)' : 'none'
              }}
            ></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-lg-auto align-items-lg-center pt-3 pt-lg-0">
              {navItems.map((item, index) => {
                const isActive = activeLink === item.href.replace('#', '');

                return (
                  <Nav.Link
                    key={index}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="position-relative mx-lg-2 my-1 my-lg-0 px-3 py-2 rounded-lg rounded-lg-3"
                    style={{
                      color: isActive ? 'white' : 'rgba(255, 255, 255, 0.7)',
                      fontSize: isMobile ? '1rem' : '0.95rem',
                      fontWeight: isActive ? '600' : '400',
                      transition: 'all 0.3s ease',
                      minWidth: isMobile ? 'auto' : '110px',
                      textAlign: isMobile ? 'left' : 'center',
                      background: isActive
                        ? 'linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))'
                        : 'transparent',
                      border: isActive
                        ? '1px solid rgba(59, 130, 246, 0.3)'
                        : '1px solid transparent',
                      borderRadius: isMobile ? '8px' : '50px',
                      margin: isMobile ? '4px 0' : '0 8px',
                      width: isMobile ? '100%' : 'auto',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: isMobile ? 'flex-start' : 'center'
                    }}
                    onMouseEnter={(e) => {
                      if (!isMobile && !isActive) {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                        e.currentTarget.style.color = 'white';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isMobile && !isActive) {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                      }
                    }}
                  >
                    <i className={`${item.icon} me-3`} style={{ width: '20px' }}></i>
                    {item.name}

                    {/* Indicateur de section active (visible uniquement sur desktop) */}
                    {!isMobile && isActive && (
                      <span className="position-absolute d-none d-lg-block"
                        style={{
                          bottom: '-10px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '6px',
                          height: '6px',
                          background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
                          borderRadius: '50%'
                        }}
                      ></span>
                    )}
                    
                    {/* Indicateur pour mobile */}
                    {isMobile && isActive && (
                      <span className="ms-auto"
                        style={{
                          width: '6px',
                          height: '6px',
                          background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
                          borderRadius: '50%'
                        }}
                      ></span>
                    )}
                  </Nav.Link>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      {/* Backdrop pour mobile quand le menu est ouvert */}
      {isMobile && expanded && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark"
          style={{
            opacity: 0.5,
            zIndex: 9998,
            animation: 'fadeIn 0.3s ease'
          }}
          onClick={() => setExpanded(false)}
        />
      )}
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 0.5; }
        }
        
        .rounded-lg {
          border-radius: 8px;
        }
        
        @media (min-width: 992px) {
          .rounded-lg-3 {
            border-radius: 50px !important;
          }
        }
        
        /* Animation pour le menu mobile */
        .navbar-collapse {
          transition: all 0.3s ease;
        }
        
        /* Ajustements pour mobile */
        @media (max-width: 991.98px) {
          .navbar-collapse {
            position: fixed;
            top: 70px;
            left: 0;
            right: 0;
            background: rgba(15, 23, 42, 0.98);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            padding: 1rem;
            max-height: calc(100vh - 70px);
            overflow-y: auto;
          }
          
          .navbar-nav {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default Header;