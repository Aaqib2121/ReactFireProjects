import React from 'react';
import ProjectCard from './ProjectCard'; // Import your ProjectCard component

const Projects = () => {
  const projects = [
    {
      link: 'https://arks-studio.netlify.app/',
      imageSrc: 'images/ARK-STUDIO.png',
      alt: 'ARK Studio',
    },
    {
      link: 'https://arks-studio.netlify.app/',
      imageSrc: 'images/slice-visa.png',
      alt: 'ARK Studio',
    },
    {
      link: 'https://arks-studio.netlify.app/',
      imageSrc: 'images/Tie-up.png',
      alt: 'ARK Studio',
    },
    {
      link: 'https://arks-studio.netlify.app/',
      imageSrc: 'images/To Do list.png',
      alt: 'ARK Studio',
    },
    
    {
      link: 'https://arks-studio.netlify.app/',
      imageSrc: 'images/raabe.png',
      alt: 'ARK Studio',
    },
    {
      link: 'https://arks-studio.netlify.app/',
      imageSrc: 'images/Google-Clone.png',
      alt: 'ARK Studio',
    },
    {
      link: 'https://arks-studio.netlify.app/',
      imageSrc: 'images/digital-showroom.png',
      alt: 'ARK Studio',
    },
    {
      link: 'https://arks-studio.netlify.app/',
      imageSrc: 'images/clock-ui.png',
      alt: 'ARK Studio',
    },
    {
      link: 'https://arks-studio.netlify.app/',
      imageSrc: 'images/seedkro-img.png',
      alt: 'ARK Studio',
    },
  ];

  return (
    <section id="projects" className="about_company_profile pb-5 bg-gray">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center">
            <h1 className="pt-5">
              <span className="skill-title text-dark"><b>My Projects</b></span>
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="mt-4">
              <hr />
            </div>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade active show"
                id="pills-Details"
                role="tabpanel"
                aria-labelledby="pills-Details-tab"
              >
                <div className="row">
                  {projects.map((project, index) => (
                    <div key={index} className="col-md-6 col-lg-4 mt-4">
                      <ProjectCard
                        link={project.link}
                        imageSrc={project.imageSrc}
                        alt={project.alt}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
