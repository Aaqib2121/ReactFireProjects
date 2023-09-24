import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin, faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons';

const FooterContainer = styled.footer`
  background-color: #212121; /* Dark gray background color */
  color: #fff;
  padding: 1rem;
  text-align: center;
`;

const FooterText = styled.span`
  font-size: 0.9rem;
`;

const CopyrightIcon = styled(FontAwesomeIcon)`
  margin: 0 0.2rem;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #007bff;
  }
`;

const SocialIcons = styled.div`
  margin-top: 1rem;

  > * {
    margin: 0 0.5rem;
    font-size: 1.5rem;
    cursor: pointer;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: #007bff;
    }
  }
`;

const InstagramIcon = styled(FontAwesomeIcon)`
  color: #e1306c; // Replace with actual Instagram color
`;

const LinkedInIcon = styled(FontAwesomeIcon)`
  color: #0077b5; // Replace with actual LinkedIn color
`;

const WhatsAppIcon = styled(FontAwesomeIcon)`
  color: #25d366; // Replace with actual WhatsApp color
`;

const GitHubIcon = styled(FontAwesomeIcon)`
  color: #333; // Replace with actual GitHub color
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        Created By <FooterLink href="#">CodingAaqib</FooterLink> |{' '}
        <CopyrightIcon icon={faCopyright} /> {new Date().getFullYear()} All rights reserved.
      </FooterText>
      <SocialIcons>
        <a href="https://www.instagram.com/aaqibnakwa/" target="_blank" rel="noopener noreferrer">
          <InstagramIcon icon={faInstagram} />
        </a>
        <a href="https://www.linkedin.com/in/aquib-nakhwa-86085a21b/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon icon={faLinkedin} />
        </a>
        <a href="https://wa.me/9324043356" target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon icon={faWhatsapp} />
        </a>
        <a href="https://github.com/Aaqib2121" target="_blank" rel="noopener noreferrer">
          <GitHubIcon icon={faGithub} />
        </a>
      </SocialIcons>
    </FooterContainer>
  );
};

export default Footer;
