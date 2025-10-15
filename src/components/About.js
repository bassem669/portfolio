import React from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';

const About = () => {
  const softSkills = [
    {
      title: "Passionné",
      icon: "fas fa-heart",
      description: "Je suis une personne passionnée par le domaine du développement et des nouvelles technologies. Cette passion me pousse à rester motivé, curieux et engagé dans les projets que j'entreprends, en cherchant toujours à améliorer mes compétences et à atteindre des résultats de qualité.",
      level: 95
    },
    {
      title: "Adaptation",
      icon: "fas fa-people-arrows",
      description: "Je m'adapte facilement aux différents environnements de travail. Que ce soit dans une équipe dynamique, un cadre formel ou une structure en évolution, je sais ajuster ma manière de travailler afin de contribuer efficacement et de maintenir une bonne collaboration avec mes collègues.",
      level: 90
    },
    {
      title: "Travail sous pression",
      icon: "fas fa-tachometer-alt",
      description: "Je suis capable de travailler efficacement même dans des situations de pression ou de délais serrés. Plutôt que de céder au stress, j'utilise ces moments comme une opportunité pour démontrer mon sens de l'organisation, ma concentration et ma capacité à trouver rapidement des solutions adaptées.",
      level: 85
    },
    {
      title: "Apprentissage rapide",
      icon: "fas fa-bolt",
      description: "J'ai une forte capacité d'apprentissage, ce qui me permet de maîtriser rapidement de nouveaux outils ou technologies. Grâce à ma curiosité et à ma méthodologie, je peux assimiler les concepts essentiels et les mettre en pratique en peu de temps, ce qui me rend opérationnel rapidement.",
      level: 92
    }
  ];

  return (
    <section id="about" className="py-5 bg-light">
      <Container>
        <Row className="mb-5">
          <Col>
            <h2 className="text-center fw-bold mb-4">À propos de moi</h2>
            <p className="text-center text-muted lead mx-auto" style={{maxWidth: '1200px'}}>
              Je suis étudiant en Technologies de l’Information à l’Institut Supérieur des 
              Études Technologiques de Kélibia (ISET Kélibia). Passionné par le développement 
              web et les solutions numériques, je m’efforce de créer des projets modernes, efficaces
               et centrés sur l’utilisateur. Doté d’une grande capacité d’adaptation et d’apprentissage, 
               je suis toujours prêt à relever de nouveaux défis pour améliorer mes compétences et apporter 
               des solutions innovantes.
            </p>
          </Col>
        </Row>

        {/* Section Compétences personnelles */}
        <Row>
          <Col>
            <h3 className="text-center mb-5">Mes Forces Personnelles</h3>
          </Col>
        </Row>

        <Row>
          {softSkills.map((skill, index) => (
            <Col key={index} lg={6} className="mb-4">
              <Card className="h-100 border-0 shadow-sm hover-card">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="skill-icon me-3">
                      <i className={`${skill.icon} text-primary fa-2x`}></i>
                    </div>
                    <div>
                      <Card.Title className="h5 mb-1">{skill.title}</Card.Title>
                      <div className="d-flex justify-content-between align-items-center">
                        <small className="text-muted">Niveau de maîtrise</small>
                        <span className="badge bg-primary">{skill.level}%</span>
                      </div>
                    </div>
                  </div>
                  
                  <ProgressBar 
                    now={skill.level} 
                    className="mb-3"
                    variant={getProgressVariant(skill.level)}
                  />
                  
                  <Card.Text className="text-muted">
                    {skill.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Section Expérience et Éducation */}
        <Row className="mt-5">
          <Col lg={6} className="mb-4">
            <Card className="h-100 border-0 shadow-sm">
              <Card.Header className="bg-primary text-white">
                <h5 className="mb-0">
                  <i className="fas fa-graduation-cap me-2"></i>
                  Parcours Académique
                </h5>
              </Card.Header>
              <Card.Body>
                <div className="timeline">
                  <div className="timeline-item mb-4">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h6 className="mb-0">Licence en Technologies de l’Information</h6>
                      <span className="badge bg-secondary">2024 - Présent</span>
                    </div>
                    <p className="text-muted small mb-0">
                      Formation axée sur le développement logiciel, les systèmes d’information, 
                      la gestion de bases de données et les technologies web modernes. 
                      Développement des compétences en programmation, conception et sécurité informatique.
                    </p>
                  </div>
                  <div className="timeline-item">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h6 className="mb-0">Baccalauréat – Spécialité Technique</h6>
                      <span className="badge bg-secondary">2023</span>
                    </div>
                    <p className="text-muted small mb-0">
                      Diplôme obtenu avec une moyenne de <strong>14.52</strong>. 
                      Spécialisation orientée vers les disciplines techniques et informatiques, 
                      combinant théorie scientifique et applications pratiques.
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6} className="mb-4">
            <Card className="h-100 border-0 shadow-sm">
              <Card.Header className="bg-success text-white">
                <h5 className="mb-0">
                  <i className="fas fa-briefcase me-2"></i>
                  Expériences Professionnelles
                </h5>
              </Card.Header>
              <Card.Body>
                <div className="timeline">
                  <div className="timeline-item mb-4">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h6 className="mb-0">Stage – Société Atomic IT Pro</h6>
                      <span className="badge bg-secondary">16 juin 2025 - 12 juillet 2025</span>
                    </div>
                    <p className="text-muted small mb-0">
                      Participation au développement et à la maintenance d’applications web
                      Contribution aux projets en équipe et amélioration des compétences en développement full stack.
                      <br />Développement d’une application web de location et vente de maisons, <strong>intégrant un modèle de machine learning.</strong>
                    </p>
                  </div>
                  <div className="timeline-item">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h6 className="mb-0">Stage – Société Yes Technologie</h6>
                      <span className="badge bg-secondary">10 juin 2024 - 3 février 2024</span>
                    </div>
                    <p className="text-muted small mb-0">
                      Découverte du milieu professionnel et initiation au développement web. 
                      Participation à des tâches de conception et d’intégration d’interfaces utilisateur.
                      <br />Développement d’un site vitrine (statique)
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

// Fonction utilitaire pour les variantes de ProgressBar
const getProgressVariant = (level) => {
  if (level >= 90) return 'success';
  if (level >= 80) return 'info';
  if (level >= 70) return 'warning';
  return 'secondary';
};

export default About;