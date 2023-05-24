import React from 'react';
import { Container, Content, Icon, customLinkStyles } from './style';
import { FaLinkedin, FaFacebook, FaEnvelope, FaWhatsapp, FaGithub } from 'react-icons/fa';


export default function Contact() {

  return (
    <Container>
      <Content>
        <Icon>
          <div>
            <FaLinkedin />
            <a href="https://www.linkedin.com/in/jo%C3%A3o-nascimento-725785236/" target="_blank" rel="noopener noreferrer" style={customLinkStyles}>
              LinkedIn
            </a>
          </div>
          <div>
            <FaFacebook />
            <a href="https://www.facebook.com/enzo.luciano.7" target="_blank" rel="noopener noreferrer" style={customLinkStyles}>
              Facebook
            </a>
          </div>
          <div>
            <FaWhatsapp />
            <a href="https://wa.me/351935062949" target="_blank" rel="noopener noreferrer" style={customLinkStyles}>
              WhatsApp
            </a>
          </div>
          <div>
            <FaGithub />
            <a href="https://github.com/DevOfInfinity" target="_blank" rel="noopener noreferrer" style={customLinkStyles}>
              GitHub
            </a>
          </div>
          <div>
            <FaEnvelope />
            <a href="mailto:joaolunascimento87@gmail.com" style={customLinkStyles}>
              E-Mail
            </a>
          </div>
        </Icon>
      </Content>
    </Container >
  );
}
