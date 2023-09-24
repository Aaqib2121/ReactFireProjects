import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  background-color: #f7f7f7;
  padding: 4rem 0;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`;

const ImageWrapper = styled.div`
  margin-bottom: 2rem;

  @media (min-width: 992px) {
    margin-right: 2rem;
    margin-bottom: 0;
  }
`;

const AboutImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const AboutText = styled.div`
  max-width: 600px;
`;

const About = () => {
  return (
    <AboutContainer id="about">
      <h2 className="text-center pb-4"><b>About Me</b></h2>
      <ContentWrapper className="container">
        <ImageWrapper className="col-lg-6">
          <AboutImage src="images/Aaqib_2.jpeg" alt="Your Name" />
        </ImageWrapper>
        <AboutText className="col-lg-6">
          <p>
            Hi, I'm [Your Name]. As a passionate [Your Profession], I bring [Your Years] years of experience and expertise in [Your Domain]. My commitment to excellence and dedication to continuous learning have allowed me to [Your Notable Achievements or Skills].
          </p>
          <p>
            My work philosophy revolves around [Your Work Philosophy or Approach]. I'm motivated by [What Motivates You Professionally], and I thrive in collaborative environments where innovative ideas transform into impactful solutions.
          </p>
          <a
            href="images/Resume_Aaqib_2022-1.pdf"
            className="btn btn-primary my_resume"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            Download Resume
          </a>
        </AboutText>
      </ContentWrapper>
    </AboutContainer>
  );
};

export default About;
