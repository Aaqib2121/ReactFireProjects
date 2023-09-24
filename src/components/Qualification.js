import React from "react";
import styled from "styled-components";

const QualificationContainer = styled.section`
  background-image: url("path-to-your-background-image.jpg");
  background-size: cover;
  padding: 4rem 0;
  font-family: "Your Custom Font", sans-serif;
`;

const QualificationHeading = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const QualificationCard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 10px 20px 15px rgba(0, 0, 0, 0.1); /* Add the box-shadow property */
  margin-bottom: 2rem;

  .icon {
    font-size: 2rem;
    margin-right: 1rem;
  }

  .info {
    h3 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    p {
      color: #777;
    }
  }
`;

const Qualification = () => {
  return (
    <QualificationContainer id="qualification">
      <div className="container">
        <QualificationHeading>
        <h2 className="text-center pb-4"><b>My Qualifications</b></h2>
        </QualificationHeading>
        <div className="row">
          <div className="col-md-6">
            <QualificationCard>
              <div className="icon">🎓</div>
              <div className="info">
                <h3>Bachelor of Science in Information Technology (BSc IT)</h3>
                <p>June 2018 – June 2021</p>
                <p>
                  Mumbai University - MAHARASHTA COLLEGE of Arts, Science &
                  Commerce
                </p>
              </div>
            </QualificationCard>

            <QualificationCard>
              <div className="icon">🎓</div>
              <div className="info">
                <h3>HSC (Science)</h3>
                <p>June 2016 - February 2018</p>
                <p>
                  Maharashtra State Board Secondary & Higher Secondary Education
                </p>
              </div>
            </QualificationCard>
          </div>

          <div className="col-md-6">
            <QualificationCard>
              <div className="icon">🎓</div>
              <div className="info">
                <h3>SSC</h3>
                <p>June 2014 - March 2015</p>
                <p>
                  Maharashtra State Board Secondary & Higher Secondary Education
                </p>
              </div>
            </QualificationCard>

            <QualificationCard>
              <div className="icon">🎓</div>
              <div className="info">
                <h3>MSC (Information Technology)</h3>
                <p>June 2021 - April 2023</p>
                <p>
                  Mumbai University - Navneet College of Arts, Science &
                  Commerce
                </p>
              </div>
            </QualificationCard>
          </div>
        </div>
      </div>
    </QualificationContainer>
  );
};

export default Qualification;
