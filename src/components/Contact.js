import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import useScreenSize from '../hooks/useScreenSize';

const Contact = () => {
  const { isMobile, isTablet } = useScreenSize();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alertType, setAlertType] = useState('success');
  const [alertMessage, setAlertMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: process.env.REACT_APP_WEB3FORMS_ACCESS_KEY || "a951bd95-b2cb-402e-9b4b-eb832864090b",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Nouveau message de Portfolio de ${formData.name}`
        })
      });

      const result = await response.json();

      if (result.success) {
        setAlertType('success');
        setAlertMessage('Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.');
        setShowAlert(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setShowAlert(false), 5000);
      } else {
        throw new Error(result.message || "Une erreur est survenue.");
      }

    } catch (error) {
      console.error('Erreur en envoyant le mail:', error);
      setAlertType('danger');
      setAlertMessage('Une erreur est survenue. Veuillez réessayer ou me contacter directement par email.');
      setShowAlert(true);
    } finally {
      setIsSubmitting(false);
    }
  };


  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      info: 'bassemmathlouthi05@gmail.com',
      link: 'mailto:bassemmathlouthi05@gmail.com',
      color: '#3b82f6'
    },
    {
      icon: 'fas fa-phone',
      title: 'Téléphone',
      info: '+216 26 557 704',
      link: 'tel:+21626557704',
      color: '#10b981'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Localisation',
      info: 'Kélibia, Tunisie',
      color: '#8b5cf6'
    },
    {
      icon: 'fab fa-linkedin',
      title: 'LinkedIn',
      info: 'bassem-mathlouthi-3abab6362',
      link: 'https://www.linkedin.com/in/bassem-mathlouthi-3abab6362/',
      color: '#0077b5'
    }
  ];

  return (
    <section id="contact" className="py-5 position-relative overflow-hidden">
      {/* Background Elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        zIndex: 0
      }}>
        <div style={{
          position: 'absolute',
          top: isMobile ? '5%' : '10%',
          right: isMobile ? '2%' : '5%',
          width: isMobile ? '200px' : (isTablet ? '300px' : '400px'),
          height: isMobile ? '200px' : (isTablet ? '300px' : '400px'),
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
          filter: `blur(${isMobile ? '40px' : '80px'})`,
          borderRadius: '50%'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: isMobile ? '5%' : '10%',
          left: isMobile ? '2%' : '5%',
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
                Travaillons <span className="text-gradient">Ensemble</span>
              </h2>
              <p className="text-light opacity-75" style={{
                maxWidth: '700px',
                margin: '0 auto',
                fontSize: isMobile ? '0.95rem' : '1.1rem',
                lineHeight: '1.7',
                padding: isMobile ? '0 1rem' : '0'
              }}>
                Vous avez un projet en tête ou souhaitez discuter d'une opportunité ?
                N'hésitez pas à me contacter. Je suis ouvert aux collaborations,
                stages et propositions de projets intéressants.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="g-3 g-md-4">
          {/* Contact Form */}
          <Col lg={8} className="mb-3 mb-lg-0">
            <div className="animate-on-scroll">
              <div className="glass-panel p-3 p-md-4 p-lg-5 rounded-4 h-100"
                style={{
                  background: 'rgba(30, 41, 59, 0.7)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
                }}
              >
                {showAlert && (
                  <Alert
                    variant={alertType}
                    className={`mb-3 mb-md-4 border-0 d-flex align-items-center ${alertType === 'success' ? 'bg-success' : 'bg-danger'}`}
                    style={{
                      background: alertType === 'success'
                        ? 'linear-gradient(45deg, rgba(16, 185, 129, 0.9), rgba(6, 182, 212, 0.9))'
                        : 'linear-gradient(45deg, rgba(239, 68, 68, 0.9), rgba(249, 115, 22, 0.9))',
                      color: 'white',
                      border: 'none',
                      borderRadius: '12px',
                      padding: isMobile ? '0.75rem 1rem' : '1rem 1.25rem'
                    }}
                    onClose={() => setShowAlert(false)}
                    dismissible
                  >
                    <i className={`fas fa-${alertType === 'success' ? 'check-circle' : 'exclamation-circle'} ${isMobile ? 'me-2' : 'me-3'} ${isMobile ? 'fa-sm' : 'fa-lg'}`}></i>
                    <span className="flex-grow-1" style={{ fontSize: isMobile ? '0.875rem' : '1rem' }}>
                      {alertMessage}
                    </span>
                  </Alert>
                )}

                <h4 className={`text-white mb-3 ${isMobile ? 'h5' : ''}`}>
                  <i className={`fas fa-envelope-open-text ${isMobile ? 'me-2' : 'me-3'}`}></i>
                  Envoyez-moi un message
                </h4>

                <Form onSubmit={handleSubmit}>
                  <Row className="g-2 g-md-3">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="text-light opacity-90 mb-1 mb-md-2" style={{ fontSize: isMobile ? '0.9rem' : '1rem' }}>
                          <i className="fas fa-user me-2"></i>
                          Votre nom
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Votre nom complet"
                          className={`${isMobile ? 'form-control' : 'form-control-lg'} custom-input`}
                          style={{
                            background: 'rgba(15, 23, 42, 0.8)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            color: 'white',
                            borderRadius: isMobile ? '8px' : '12px',
                            padding: isMobile ? '0.5rem 0.75rem' : '0.75rem 1rem',
                            fontSize: isMobile ? '0.9rem' : '1rem'
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = '#3b82f6';
                            e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.2)';
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                            e.target.style.boxShadow = 'none';
                          }}
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="text-light opacity-90 mb-1 mb-md-2" style={{ fontSize: isMobile ? '0.9rem' : '1rem' }}>
                          <i className="fas fa-envelope me-2"></i>
                          Votre email
                        </Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="votre@email.com"
                          className={`${isMobile ? 'form-control' : 'form-control-lg'} custom-input`}
                          style={{
                            background: 'rgba(15, 23, 42, 0.8)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            color: 'white',
                            borderRadius: isMobile ? '8px' : '12px',
                            padding: isMobile ? '0.5rem 0.75rem' : '0.75rem 1rem',
                            fontSize: isMobile ? '0.9rem' : '1rem'
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = '#3b82f6';
                            e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.2)';
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                            e.target.style.boxShadow = 'none';
                          }}
                        />
                      </Form.Group>
                    </Col>

                    <Col xs={12}>
                      <Form.Group>
                        <Form.Label className="text-light opacity-90 mb-1 mb-md-2" style={{ fontSize: isMobile ? '0.9rem' : '1rem' }}>
                          <i className="fas fa-comment-dots me-2"></i>
                          Votre message
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={isMobile ? 4 : 6}
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          placeholder="Décrivez votre projet, opportunité ou posez-moi une question..."
                          className={`${isMobile ? 'form-control' : 'form-control-lg'} custom-input`}
                          style={{
                            background: 'rgba(15, 23, 42, 0.8)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            color: 'white',
                            borderRadius: isMobile ? '8px' : '12px',
                            padding: isMobile ? '0.5rem 0.75rem' : '0.75rem 1rem',
                            resize: 'vertical',
                            minHeight: isMobile ? '120px' : '150px',
                            fontSize: isMobile ? '0.9rem' : '1rem'
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = '#3b82f6';
                            e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.2)';
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                            e.target.style.boxShadow = 'none';
                          }}
                        />
                      </Form.Group>
                    </Col>

                    <Col xs={12} className="mt-3 mt-md-4">
                      <Button
                        type="submit"
                        size={isMobile ? 'md' : 'lg'}
                        disabled={isSubmitting}
                        className={`rounded-pill w-100 ${isMobile ? 'px-4 py-2' : 'px-5 py-3'}`}
                        style={{
                          background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
                          border: 'none',
                          fontWeight: 600,
                          fontSize: isMobile ? '0.95rem' : '1.1rem',
                          transition: isMobile ? 'none' : 'all 0.3s ease',
                          boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)'
                        }}
                        onMouseEnter={(e) => {
                          if (!isMobile && !isSubmitting) {
                            e.target.style.transform = 'translateY(-3px)';
                            e.target.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.4)';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isMobile && !isSubmitting) {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.3)';
                          }
                        }}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Envoi en cours...
                          </>
                        ) : (
                          <>
                            <i className="fas fa-paper-plane me-2"></i>
                            {isMobile ? 'Envoyer' : 'Envoyer le message'}
                          </>
                        )}
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </div>
          </Col>

          {/* Contact Information */}
          <Col lg={4}>
            <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <div className="glass-panel p-3 p-md-4 rounded-4 h-100"
                style={{
                  background: 'rgba(30, 41, 59, 0.7)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
                }}
              >
                <h4 className={`text-white mb-3 ${isMobile ? 'h5' : ''}`}>
                  <i className={`fas fa-address-card ${isMobile ? 'me-2' : 'me-3'}`}></i>
                  Informations de contact
                </h4>

                <p className="text-light opacity-75 mb-3 mb-md-4" style={{
                  lineHeight: '1.6',
                  fontSize: isMobile ? '0.9rem' : '1rem'
                }}>
                  Vous pouvez également me contacter directement via l'un de ces moyens.
                  Je réponds généralement dans les 24 heures.
                </p>

                <div className="contact-info-list">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className={`contact-item p-2 p-md-3 mb-2 mb-md-3 rounded-3 d-flex align-items-start ${info.link ? 'cursor-pointer' : ''}`}
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        transition: isMobile ? 'none' : 'all 0.3s ease'
                      }}
                      onClick={() => info.link && window.open(info.link, '_blank')}
                      onMouseEnter={(e) => {
                        if (!isMobile && info.link) {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                          e.currentTarget.style.borderColor = `${info.color}40`;
                          e.currentTarget.style.transform = 'translateX(5px)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isMobile && info.link) {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                          e.currentTarget.style.transform = 'translateX(0)';
                        }
                      }}
                      onTouchStart={(e) => {
                        if (isMobile && info.link) e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                      }}
                      onTouchEnd={(e) => {
                        if (isMobile && info.link) e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                      }}
                    >
                      <div className={`rounded-circle ${isMobile ? 'p-1 me-2' : 'p-2 me-3'} d-flex align-items-center justify-content-center`}
                        style={{
                          background: info.color,
                          width: isMobile ? '32px' : '40px',
                          height: isMobile ? '32px' : '40px',
                          minWidth: isMobile ? '32px' : '40px',
                          flexShrink: 0
                        }}>
                        <i className={`${info.icon} ${isMobile ? 'fa-sm' : ''} text-white`}></i>
                      </div>
                      <div style={{ flex: 1 }}>
                        <h6 className={`text-white mb-${isMobile ? '0' : '1'} ${isMobile ? 'small' : ''}`}>
                          {info.title}
                        </h6>
                        <p className="text-light opacity-90 mb-0" style={{
                          fontSize: isMobile ? '0.8rem' : '0.9rem',
                          lineHeight: '1.4'
                        }}>
                          {info.info}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-3 mt-md-4 pt-3 border-top border-secondary">
                  <h6 className={`text-white mb-${isMobile ? '2' : '3'}`}>
                    <i className="fas fa-share-alt me-2"></i>
                    Suivez-moi
                  </h6>
                  <div className="d-flex gap-2 gap-md-3">
                    <SocialLink icon="fab fa-github"   link="https://github.com/bassem669"                             color="#333"     title="GitHub"   isMobile={isMobile} />
                    <SocialLink icon="fab fa-linkedin" link="https://www.linkedin.com/in/bassem-mathlouthi-3abab6362/" color="#0077b5" title="LinkedIn" isMobile={isMobile} />
                    <SocialLink icon="fab fa-facebook" link="https://www.facebook.com/bassam.mathlouthi.1"             color="#1877f2" title="Facebook" isMobile={isMobile} />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const SocialLink = ({ icon, link, color, title, isMobile }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-circle d-flex align-items-center justify-content-center"
    style={{
      width: isMobile ? '36px' : '44px',
      height: isMobile ? '36px' : '44px',
      background: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      color: 'white',
      fontSize: isMobile ? '0.9rem' : '1.1rem',
      transition: isMobile ? 'none' : 'all 0.3s ease',
      textDecoration: 'none'
    }}
    onMouseEnter={(e) => {
      if (!isMobile) {
        e.currentTarget.style.background = color;
        e.currentTarget.style.transform = 'translateY(-3px) scale(1.1)';
        e.currentTarget.style.boxShadow = `0 6px 20px ${color}50`;
      }
    }}
    onMouseLeave={(e) => {
      if (!isMobile) {
        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.boxShadow = 'none';
      }
    }}
    onTouchStart={(e) => { if (isMobile) e.currentTarget.style.background = color; }}
    onTouchEnd={(e)   => { if (isMobile) e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'; }}
    title={title}
  >
    <i className={icon}></i>
  </a>
);

export default Contact;