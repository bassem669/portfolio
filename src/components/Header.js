import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import useScreenSize from '../hooks/useScreenSize';

const Header = () => {
  const { isMobile } = useScreenSize();
  const [scrolled, setScrolled]   = useState(false);
  const [expanded, setExpanded]   = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'a-propos', 'competences', 'projets', 'contact'];
      const threshold = isMobile ? 150 : 100;
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= threshold && rect.bottom >= threshold;
        }
        return false;
      });

      if (currentSection) setActiveLink(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  const navItems = [
    { name: 'Accueil',      href: '#home',        icon: 'fas fa-home' },
    { name: 'À propos',     href: '#a-propos',    icon: 'fas fa-user' },
    { name: 'Compétences',  href: '#competences', icon: 'fas fa-code' },
    { name: 'Projets',      href: '#projets',     icon: 'fas fa-briefcase' },
    { name: 'Contact',      href: '#contact',     icon: 'fas fa-envelope' },
  ];

  const handleNavClick = (href) => {
    const sectionId = href.replace('#', '');
    setActiveLink(sectionId);
    setExpanded(false);

    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = isMobile ? 80 : 70;
      const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar
        expand="lg"
        fixed="top"
        expanded={expanded}
        onToggle={setExpanded}
        className="py-2 transition-all"
        style={{
          background: scrolled ? 'rgba(15, 23, 42, 0.98)' : 'rgba(15, 23, 42, 0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(255, 255, 255, 0.05)',
          transition: 'all 0.3s ease-in-out',
          zIndex: 9999,
          minHeight: '70px'
        }}
      >
        <Container fluid="lg" className="px-3 px-lg-4">
          {/* Brand */}
          <Navbar.Brand
            href="#home"
            className="fw-bold"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            style={{ fontSize: isMobile ? '1.1rem' : '1.25rem', lineHeight: '1.2' }}
          >
            <span className="text-white">
              <i className="fas fa-code me-2"></i>
              <span className="d-none d-sm-inline">Mathlouthi Bassem</span>
              <span className="d-inline d-sm-none">M. Bassem</span>
            </span>
          </Navbar.Brand>

          {/* Custom toggle button */}
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="border-0 shadow-none position-relative"
            style={{ width: '30px', height: '24px', background: 'transparent', border: 'none', padding: 0, zIndex: 10000 }}
          >
            <span className="d-block position-absolute w-100" style={{
              height: '2px', background: expanded ? 'transparent' : 'white',
              transition: 'all 0.3s ease', top: expanded ? '11px' : '0',
              transform: expanded ? 'rotate(45deg)' : 'none'
            }}></span>
            <span className="d-block position-absolute w-100" style={{
              height: '2px', background: 'white',
              transition: 'all 0.3s ease', top: '11px',
              opacity: expanded ? 0 : 1, transform: expanded ? 'translateX(-20px)' : 'none'
            }}></span>
            <span className="d-block position-absolute w-100" style={{
              height: '2px', background: 'white',
              transition: 'all 0.3s ease', top: expanded ? '11px' : '22px',
              transform: expanded ? 'rotate(-45deg)' : 'none'
            }}></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-lg-auto align-items-lg-center pt-3 pt-lg-0">
              {navItems.map((item, index) => {
                const isActive = activeLink === item.href.replace('#', '');
                return (
                  <Nav.Link
                    key={index}
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
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
                      border: isActive ? '1px solid rgba(59, 130, 246, 0.3)' : '1px solid transparent',
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

                    {/* Active dot desktop */}
                    {!isMobile && isActive && (
                      <span className="position-absolute d-none d-lg-block"
                        style={{
                          bottom: '-10px', left: '50%', transform: 'translateX(-50%)',
                          width: '6px', height: '6px',
                          background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
                          borderRadius: '50%'
                        }}
                      ></span>
                    )}

                    {/* Active dot mobile */}
                    {isMobile && isActive && (
                      <span className="ms-auto"
                        style={{
                          width: '6px', height: '6px',
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

      {/* Mobile backdrop */}
      {isMobile && expanded && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark"
          style={{ opacity: 0.5, zIndex: 9998, animation: 'fadeIn 0.3s ease' }}
          onClick={() => setExpanded(false)}
        />
      )}
    </>
  );
};

export default Header;
