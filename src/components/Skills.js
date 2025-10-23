import React from 'react';
import { Container, Row, Col, ProgressBar, Card } from 'react-bootstrap';

const Skills = () => {
  const skills = [
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Django', level: 75 },
    { name: 'Python', level: 70 },
    { name: 'AI', level: 25 }
  ];

  const technologies = [
    'React', 'Angular','Django', 'Express.js', 'MySql', 'PostgreSQL', 
    'TypeScript', 'Bootstrap', 'JavaScript', 'Java', 'Php', 
    'Machine Learning', 'Intelligence Artificielle', 'Flutter', 'Kotling'
  ];

  return (
    <section id="skills" className="py-5">
      <Container>
        <Row className="mb-5">
          <Col>
            <h2 className="text-center fw-bold mb-4">Mes Compétences</h2>
          </Col>
        </Row>
        
        <Row className="mb-5">
          <Col lg={6}>
            <h4 className="mb-4">Compétences techniques</h4>
            {skills.map((skill, index) => (
              <div key={index} className="mb-3">
                <div className="d-flex justify-content-between mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <ProgressBar 
                  now={skill.level} 
                  variant={skill.level > 80 ? 'success' : skill.level > 60 ? 'warning' : 'info'}
                />
              </div>
            ))}
          </Col>
          
          <Col lg={6}>
            <h4 className="mb-4">Technologies</h4>
            <Row>
              {technologies.map((tech, index) => (
                <Col key={index} sm={6} className="mb-2">
                  <Card className="text-center border-0 bg-light">
                    <Card.Body className="py-2">
                      <small className="fw-bold">{tech}</small>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;