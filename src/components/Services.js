import React, { useState } from 'react';
import styled from 'styled-components';

const ServicesContainer = styled.section`
  background-color: #f9f9f9;
  padding: 4rem 0;
`;

const ServiceHeading = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const ServiceCard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  height: 100%;
  opacity: 0.8; /* Reduce opacity for non-hovered cards */
  transform: translateY(20px); /* Initial position */
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out, filter 0.5s ease-in-out;

  &:hover {
    opacity: 1;
    filter: blur(0); /* Remove blur on hover */
  }

  &.blur {
    filter: blur(4px); /* Apply blur to non-hovered cards */
  }
`;

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1); // Track hovered card index

  return (
    <ServicesContainer id="services">
      <div className="container">
        <ServiceHeading>Our Services</ServiceHeading>
        <div className="row">
          <div className="col-lg-4">
            <ServiceCard className={`${hoveredIndex !== 0 ? 'blur' : ''}`}
              onMouseEnter={() => setHoveredIndex(0)}
              onMouseLeave={() => setHoveredIndex(-1)}>
              <h3>Web Development</h3>
              <p>We specialize in creating modern and responsive websites using the latest technologies.</p>
            </ServiceCard>
          </div>
          <div className="col-lg-4">
            <ServiceCard className={`${hoveredIndex !== 1 ? 'blur' : ''}`}
              onMouseEnter={() => setHoveredIndex(1)}
              onMouseLeave={() => setHoveredIndex(-1)}>
              <h3>Responsive Design</h3>
              <p>Our talented designers create stunning visual assets that will make your brand stand out.</p>
            </ServiceCard>
          </div>
          <div className="col-lg-4">
            <ServiceCard className={`${hoveredIndex !== 2 ? 'blur' : ''}`}
              onMouseEnter={() => setHoveredIndex(2)}
              onMouseLeave={() => setHoveredIndex(-1)}>
              <h3>SEO Optimization</h3>
              <p>We help you improve your website's visibility and ranking on search engines to attract more visitors.</p>
            </ServiceCard>
          </div>
        </div>
      </div>
    </ServicesContainer>
  );
};

export default Services;
