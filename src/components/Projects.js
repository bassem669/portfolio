import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
// Import de Fancybox
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const projects = [
  {
    id: 1,
    title: 'AutoDirect – Plateforme de Vente de Véhicules (Projet Académique)',
    description: 'Développement d’une interface web dédiée à la vente d’automobiles, intégrant une gestion dynamique du catalogue. Mise en place d’un dashboard administrateur permettant la gestion complète des annonces de véhicules (ajout, modification et suppression – CRUD).',
    technologies: ['Angular', 'JsonServer'],
    images: [
      "/portfolio/assets/Projet 1/screencapture-localhost-4200-2025-10-08-19_01_13.png",
      "/portfolio/assets/Projet 1/screencapture-localhost-4200-cars-2025-10-08-19_01_34.png",
      "/portfolio/assets/Projet 1/Capture d'écran 2025-12-19 140941.png",
      "/portfolio/assets/Projet 1/Capture d'écran 2025-12-19 140906.png",
      "/portfolio/assets/Projet 1/Capture d'écran 2025-12-19 140827.png",
      "/portfolio/assets/Projet 1/screencapture-localhost-4200-panier-2025-10-08-19_05_39.png",
      "/portfolio/assets/Projet 1/screencapture-localhost-4200-cars-C002-2025-10-08-19_05_13.png",
      "/portfolio/assets/Projet 1/screencapture-localhost-4200-profil-2025-10-08-19_04_49.png",
      "/portfolio/assets/Projet 1/screencapture-localhost-4200-Dashbord-2025-10-08-19_04_33.png"
    ],
    github: 'https://github.com/bassem669/site-de-vente-Voitures'
  },
  {
    id: 2,
    title: 'G-Scolaire – Système de Gestion de Scolarité (Projet Binôme)',
    description: 'Développement d’une application web centralisée dédiée à la gestion administrative et pédagogique des élèves, intégrant une interface CRUD intuitive pour la gestion complète des données. Mise en place d’un système de sécurité basé sur les rôles (RBAC), garantissant un accès restreint et adapté aux profils Enseignant et Administrateur.',
    technologies: ['React', 'Django', 'MySql'],
    images: [
      "/portfolio/assets/Projet 2/Capture d'écran 2025-12-19 143607.png",
      "/portfolio/assets/Projet 2/Capture d'écran 2025-10-15 221111.png",
      "/portfolio/assets/Projet 2/Capture d'écran 2025-10-15 220137.png",
      "/portfolio/assets/Projet 2/Capture d'écran 2025-10-15 220119.png",
      "/portfolio/assets/Projet 2/Capture d'écran 2025-10-15 220920.png",
      "/portfolio/assets/Projet 2/Capture d'écran 2025-10-15 220940.png",
      "/portfolio/assets/Projet 2/Capture d'écran 2025-10-15 221012.png",
      "/portfolio/assets/Projet 2/Capture d'écran 2025-10-15 221024.png",
      "/portfolio/assets/Projet 2/Capture d'écran 2025-10-15 221035.png",
      "/portfolio/assets/Projet 2/Capture d'écran 2025-10-15 221129.png",
      "/portfolio/assets/Projet 2/Capture d'écran 2025-10-15 221141.png",
      "/portfolio/assets/Projet 2/Capture d'écran 2025-10-15 221153.png"
    ],
    github: 'https://github.com/bassem669/site_Gestion_des_etudiants'
  },
  {
    id: 3,
    title: 'Application web de location et vente des maisons',
    description: 'Conception et développement d’une plateforme web immobilière dédiée à la location et à la vente, intégrant une API REST (React/Django) et des fonctionnalités avancées de recherche et de gestion des profils. La solution inclut un module de Machine Learning pour l’estimation automatique des prix des biens ainsi qu’un dashboard sécurisé pour l’administration des annonces, des utilisateurs et des transactions.',
    technologies: ['React', 'Django', 'MySql'],
    images: [
      "/portfolio/assets/Projet 3/screencapture-localhost-3000-2025-09-28-20_57_25.png",
      "/portfolio/assets/Projet 3/screencapture-localhost-3000-register-2025-09-18-11_20_59.png",
      "/portfolio/assets/Projet 3/screencapture-localhost-3000-dashboard-2025-09-17-17_06_54.png",
      "/portfolio/assets/Projet 3/screencapture-localhost-3000-entreprise-manager-2025-09-17-16_33_49.png",
      "/portfolio/assets/Projet 3/screencapture-localhost-3000-annonce-34-2025-09-18-12_09_16.png",
      "/portfolio/assets/Projet 3/screencapture-localhost-3000-about-2025-12-19-14_17_09.png",
      "/portfolio/assets/Projet 3/screencapture-localhost-3000-contact-2025-12-19-14_17_27.png",
      "/portfolio/assets/Projet 3/Capture d'écran 2025-09-28 214025.png",
      "/portfolio/assets/Projet 3/Capture d'écran 2025-12-19 141654.png",
      "/portfolio/assets/Projet 3/Capture d'écran 2025-12-19 141857.png",
      "/portfolio/assets/Projet 3/Capture d'écran 2025-12-19 141953.png"
    ],
    github: 'https://github.com/bassem669/Application-web-de-location-et-vente-des-maisons'
  },
  {
    id: 4,
    title: 'EduLearn | Plateforme Éducative Interactive (Projet Académique – Méthode Scrum)',
    description: "Conception et développement d’un site web complet dédié au partage de ressources pédagogiques et à la collaboration entre enseignants et étudiants. Pilotage du projet selon la méthodologie Scrum, avec mise en œuvre des sprints, des réunions quotidiennes (Daily Stand-ups) et de la gestion du Product Backlog, afin de garantir un développement itératif et une livraison continue.",
    technologies: ['React', 'Node.js','Express.js', 'MySql','Scrum'],
    images: [
      "/portfolio/assets/Projet 4/screencapture-localhost-3000-2025-12-19-17_59_28.png",
      "/portfolio/assets/Projet 4/Capture d'écran 2025-12-19 180227.png",
      "/portfolio/assets/Projet 4/Capture d'écran 2025-12-19 180016.png",
      "/portfolio/assets/Projet 4/Capture d'écran 2025-12-19 180026.png",
      "/portfolio/assets/Projet 4/Capture d'écran 2025-12-19 180128.png",
      "/portfolio/assets/Projet 4/Capture d'écran 2025-12-19 180141.png",
      "/portfolio/assets/Projet 4/Capture d'écran 2025-12-19 180156.png",
      "/portfolio/assets/Projet 4/Capture d'écran 2025-12-19 180246.png",
      "/portfolio/assets/Projet 4/Capture d'écran 2025-12-19 180258.png",
      "/portfolio/assets/Projet 4/Capture d'écran 2025-12-19 180455.png",
      "/portfolio/assets/Projet 4/Capture d'écran 2025-12-19 180513.png",
      "/portfolio/assets/Projet 4/Capture d'écran 2025-12-19 180527.png",
      "/portfolio/assets/Projet 4/Capture d'écran 2025-12-19 180538.png",
      "/portfolio/assets/Projet 4/Capture d'écran 2025-12-19 180551.png",
      "/portfolio/assets/Projet 4/Capture d'écran 2025-12-19 180603.png",
      "/portfolio/assets/Projet 4/Capture d'écran 2025-12-19 180636.png",
      "/portfolio/assets/Projet 4/Capture d'écran 2025-12-19 180650.png",
      "/portfolio/assets/Projet 4/Capture d'écran 2025-12-19 180715.png"    
    ],
    github: ' https://github.com/bassem669/projet-d-integration'
  },
  {
    id: 5,
    title: 'KBM-TECH | Application E-commerce Full-Stack (Projet Binôme)',
    description: "Conception et développement d’une interface mobile performante, prise en charge de la logique métier via des API REST, et mise en place de notifications push avec Firebase Cloud Messaging (FCM). Intégration de l’API Gemini pour l’analyse comparative intelligente et automatisée des caractéristiques techniques des produits électroniques, ainsi que la modélisation et la synchronisation automatique de la base de données à l’aide de Sequelize.",
    technologies: ['Flutter', 'Node.js','Express.js', 'MySql (Sequelize)','Firebase'],
    images: [
      "/portfolio/assets/Projet 5/image.png",
      "/portfolio/assets/Projet 5/0ef53200-ceba-4b8d-b484-971b8f39e3ba.jpg",
      "/portfolio/assets/Projet 5/0faccb7f-f668-48f4-98c5-81655e63fa2a.jpg",
      "/portfolio/assets/Projet 5/2f2c3e10-6a72-4852-b4a8-704998bd66f9.jpg",
      "/portfolio/assets/Projet 5/08a761c7-a948-4a57-bb41-d8b8b96f0d37.jpg",
      "/portfolio/assets/Projet 5/8b3f1308-15a1-40fe-97f5-b7e811d82721.jpg",
      "/portfolio/assets/Projet 5/9ede6e3e-c74c-4f10-b920-d9b0bcf395b6.jpg",
      "/portfolio/assets/Projet 5/31cfa6dd-a1ad-486e-9da0-7c911873f1a1.jpg",
      "/portfolio/assets/Projet 5/53aacdb8-6161-405a-b9f8-2239b42cce4e.jpg",
      "/portfolio/assets/Projet 5/86e19bcd-7cbf-47ba-94d4-62600d3849cb.jpg",
      "/portfolio/assets/Projet 5/619b8b4f-5f57-4405-b93c-061396b17735.jpg",
      "/portfolio/assets/Projet 5/632ff2eb-69f8-45f8-876d-9d1d4ac17b04.jpg",
      "/portfolio/assets/Projet 5/9307a020-c327-4cff-975a-555512738fa2.jpg",
      "/portfolio/assets/Projet 5/775a8658-c14b-4ff0-975c-b326ee4324d4.jpg",
      "/portfolio/assets/Projet 5/76794a5e-ada4-495d-9276-a81006280d3a.jpg",
      "/portfolio/assets/Projet 5/652987be-bbb0-49e5-aa80-d5ee2f021420.jpg",
      "/portfolio/assets/Projet 5/712228ba-bb94-45e1-8079-bbf6396dec68.jpg",
      "/portfolio/assets/Projet 5/877304c5-1f15-41ed-884b-a9300999b0fa.jpg",
      "/portfolio/assets/Projet 5/a20830ce-d113-44a6-a7ec-14f80179133b.jpg",
      "/portfolio/assets/Projet 5/b1e77d83-80c3-4cb8-970f-037b8f3bdf26.jpg",
      "/portfolio/assets/Projet 5/c3fc1e17-f9fc-4ca0-944b-004524a1fb9e.jpg",
      "/portfolio/assets/Projet 5/cfaf2298-8475-4ee2-ab88-95fcca69c2cd.jpg",
      "/portfolio/assets/Projet 5/df0ad3ab-492a-4573-b276-bb5258e841fb.jpg",
      "/portfolio/assets/Projet 5/ff4b5869-44b0-4f6a-ba69-d73a09b195df.jpg"
    ],
    github: 'https://github.com/bassem669/KBM-TECH'
  }
];

const Projects = () => {
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

    // Initialiser Fancybox avec options responsive
    Fancybox.bind("[data-fancybox]", {
      Thumbs: {
        autoStart: true,
        mobileStyle: true
      },
      Toolbar: {
        display: {
          left: ["infobar"],
          middle: [],
          right: ["close"],
        },
      },
      on: {
        init: (fancybox) => {
          // Options pour mobile
          if (isMobile) {
            fancybox.options.Thumbs.mobileStyle = true;
            fancybox.options.Toolbar.display.right = ["close"];
          }
        }
      }
    });

    return () => {
      window.removeEventListener('resize', checkScreenSize);
      Fancybox.destroy();
    };
  }, [isMobile]);

  // Fonction pour tronquer le titre si trop long
  const truncateTitle = (title, maxLength) => {
    if (isMobile && title.length > maxLength) {
      return title.substring(0, maxLength) + '...';
    }
    return title;
  };

  return (
    <section id="projets" className="py-4 py-md-5" style={{
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Éléments décoratifs */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{
        background: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
        zIndex: 0
      }}></div>
      <div className="position-absolute bottom-0 end-0 w-100 h-100" style={{
        background: 'radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
        zIndex: 0
      }}></div>

      <Container className="px-3 px-md-4" style={{ position: 'relative', zIndex: 1 }}>
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
                {/* Image principale avec lien Fancybox */}
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
                        transition: 'transform 0.5s ease',
                        transform: 'scale(1)'
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
                        <span className={isMobile ? 'ms-1' : 'ms-1'}>{project.images.length}</span>
                      </Badge>
                    </div>
                    {/* Overlay au survol - seulement sur desktop */}
                    {!isMobile && (
                      <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                        style={{
                          background: 'rgba(59, 130, 246, 0.8)',
                          opacity: 0,
                          transition: 'opacity 0.3s ease',
                          pointerEvents: 'none'
                        }}>
                        <span className="text-white fw-bold" style={{ fontSize: isMobile ? '0.9rem' : '1rem' }}>
                          <i className={`fas fa-search-plus ${isMobile ? 'me-1' : 'me-2'}`}></i>
                          Voir l'aperçu
                        </span>
                      </div>
                    )}
                  </a>
                </div>

                <div className={`p-3 p-md-4 d-flex flex-column flex-grow-1 ${isMobile ? 'pb-3' : ''}`}>
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
                    {isMobile ? 
                      `${project.description.substring(0, 120)}...` : 
                      project.description
                    }
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

                  {/* Miniatures des images supplémentaires (Hidden but functional for fancybox) */}
                  <div className="d-none">
                    {project.images && project.images.length > 1 && (
                      <div className="d-flex flex-wrap gap-1">
                        {project.images.slice(1).map((image, index) => (
                          <a
                            key={index}
                            href={image}
                            data-fancybox={`gallery-${project.id}`}
                            data-caption={project.title}
                          >
                            <img src={image} alt="" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className={`d-flex gap-2 gap-md-3 mt-auto ${isMobile ? 'flex-column' : ''}`}>
                    <Button
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={isMobile ? 'w-100' : 'flex-fill'}
                      size={isMobile ? 'sm' : 'sm'}
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

                    {/* Bouton pour ouvrir la galerie complète */}
                    {project.images && project.images.length > 0 && (
                      <Button
                        variant="outline-light"
                        className={isMobile ? 'w-100' : 'flex-fill'}
                        size={isMobile ? 'sm' : 'sm'}
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
                <i className={`fas fa-paper-plane ${isMobile ? 'me-1' : 'me-2'}`}></i>
                {isMobile ? 'Contactez-moi' : 'Contactez-moi'}
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;