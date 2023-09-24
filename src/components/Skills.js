import React from 'react';
import styled from 'styled-components';


const SkillsContainer = styled.section`
  background-color: #fff;
  padding: 4rem 0;
`;

const SkillsTitle = styled.h2`
  text-align: center;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  justify-content: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillItem = styled.div`
  border: 1px solid #ddd;
  padding: 2rem; /* Added padding to skill cards */
  text-align: center;
  background-color: #fff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  width: 90%;

  &:hover {
    transform: translateY(-10px);
  }
`;

const SkillLogo = styled.img`
  max-width: 70%;
  height: auto;
`;

const SkillName = styled.h3`
  margin-top: 1rem;
`;


const Skills = () => {
  return (
    <SkillsContainer id="skills" className="skills bg-dark">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center">
            <SkillsTitle className='text-white'><b>My Skills</b></SkillsTitle>
          </div>
        </div>
        <SkillsGrid className='p-4'>
          <SkillItem>
            <SkillLogo src="images/html-logo.png" className='pb-4' width="160" alt="HTML" />
          </SkillItem>
          <SkillItem>
            <SkillLogo src="images/css-logo.png" width="120" alt="CSS" />
          </SkillItem>
          <SkillItem>
            <SkillLogo src="images/js-logo.png" width="160" alt="JavaScript" />
          </SkillItem>
        </SkillsGrid>
        <SkillsGrid className='p-4'>
          <SkillItem>
            <SkillLogo src="images/bootstrap-logo.png" width="190" alt="Bootstrap" />
          </SkillItem>
          <SkillItem>
            <SkillLogo src="images/react-logo.png" width="160" alt="React" />
          </SkillItem>
          <SkillItem>
            <SkillLogo src="images/firebase-logo.png" width="120" alt="Firebase" />
            <SkillName>Firebase</SkillName>
          </SkillItem>
        </SkillsGrid>
      </div>
    </SkillsContainer>
  );
};

export default Skills;


