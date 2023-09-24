import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  0% {
    margin-left: -800px;
  }
  20%, 80% {
    margin-left: -800px;
  }
  35% {
    margin-left: 0px;
  }
  100% {
    margin-left: 0px;
  }
`;

const HomeContainer = styled.section`
  background-image: url('images/arnold-francisca-f77Bh3inUpE-unsplash.jpg');
  background-size: cover;
  background-position: center;
  padding: 4rem 0;
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 0;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  height: 100%;

  /* Add animation property using slideIn animation */
  animation: ${slideIn} 1s ease-in-out;
`;


const HomeText = styled.div`
  max-width: 600px;
  color: white;
`;

const WelcomeHeading = styled.h1`
  font-size: 35px;
  margin-bottom: 1rem;
  padding-top: 5rem;
  opacity: 0;
  animation: ${fadeIn} 6s ease-in-out infinite;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const DescriptionText = styled.p`
  font-size: 1.1rem;
  line-height: 1.5;
  font-size: 20px;
  opacity: 0;
  animation: ${fadeIn} 6s ease-in-out infinite;
  animation-delay: 0.3s;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  margin-top: 1.5rem;
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  border: 2px solid #007bff;
  border-radius: 50px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  animation: ${fadeIn} 6s ease-in-out infinite;
  animation-delay: 0.6s;

  &:hover {
    background-color: transparent;
    border-color: #007bff;
    color: white;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;


const Home = () => {
  return (
    <HomeContainer id="home">
      <ContentWrapper id="home-content">
        <HomeText>
          <WelcomeHeading><b>Welcome to Aaqib Portfolio</b></WelcomeHeading>
          <DescriptionText>
            I'm [Your Name], a [Your Profession] with a passion for [Your Interests]. I specialize in [Your Domain] and love creating [Your Skills]. Let's build something amazing together!
          </DescriptionText>
          <Button href="#contact">Get in Touch</Button>
        </HomeText>
      </ContentWrapper>
    </HomeContainer>
  );
};

export default Home;
