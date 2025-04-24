import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsContainer = styled.section`
  padding: 8rem 2rem 6rem;
  background-color: #fff;
`;

const ProjectsWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1rem;
  text-align: center;
  position: relative;
  
  &:after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background-color: #2563eb;
    margin: 0.75rem auto 3rem;
    border-radius: 2px;
  }
`;

const ProjectsIntro = styled.p`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 4rem;
  color: #4b5563;
  font-size: 1.1rem;
  line-height: 1.7;
`;

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  background-color: ${props => props.active ? '#2563eb' : '#f3f4f6'};
  color: ${props => props.active ? 'white' : '#4b5563'};
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 9999px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.active ? '#2563eb' : '#e5e7eb'};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background-color: white;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  background-color: #e5e7eb;
  position: relative;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`;

const ProjectCategory = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: rgba(37, 99, 235, 0.9);
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  z-index: 10;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.75rem;
`;

const ProjectDescription = styled.p`
  color: #6b7280;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

const ProjectTechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background-color: #e0e7ff;
  color: #4f46e5;
  padding: 0.3rem 0.6rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #2563eb;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #1d4ed8;
  }
  
  svg {
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(2px);
  }
`;

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projectsData = [
    {
      id: 1,
      title: "Enhanced Inline Testing Framework for Deep Learning Libraries",
      category: "Research",
      description: "Research-oriented framework to validate output consistency across CPUs/GPUs in PyTorch and TensorFlow (differential testing). Integrated GPT API for automated inline test generation using few-shot learning.",
      image: "project1.jpg",
      techStack: ["Python", "GPT API", "LLaMA 3.3 70B", "PyTorch", "TensorFlow", "AST", "Docker", "Slurm"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 2,
      title: "Enhanced FRB Signal Detection for Astrophysics",
      category: "Research",
      description: "Research oriented project isolating specific FRB signals from other radio waves (possible signals from extraterrestrial life), data collected from GMRT (Giant Metrewave Radio Telescope).",
      image: "project2.jpg",
      techStack: ["Python", "TensorFlow", "Matplotlib", "Neural Networks"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 3,
      title: "Student Database Management System",
      category: "Web Application",
      description: "Student Database Management System with comprehensive CRUD operations APIs, enabling efficient data querying and manipulation with elaborate testing techniques.",
      image: "project3.jpg",
      techStack: ["Spring Boot", "JUnit", "Mockito", "Karate", "MySQL", "Automation Testing", "REST API"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 4,
      title: "Project Allocation System",
      category: "Web Development",
      description: "Developed a web-based system enabling students to register skills and faculty to post projects with required skill sets. Automated project-student mapping based on skill alignment.",
      image: "project4.jpg",
      techStack: ["Java", "JSP", "HTML", "CSS", "MySQL", "REST API"],
      demoLink: "#",
      codeLink: "#"
    }
  ];
  
  const filters = [
    { label: 'All', value: 'all' },
    { label: 'Research', value: 'Research' },
    { label: 'Web Application', value: 'Web Application' },
    { label: 'Web Development', value: 'Web Development' }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <ProjectsContainer>
      <ProjectsWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>My Projects</SectionTitle>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ProjectsIntro>
            Here are some of my recent projects spanning research, web development, and software engineering. 
            Each project represents a unique challenge and showcases different aspects of my technical skills.
          </ProjectsIntro>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <FilterButtons>
            {filters.map(filter => (
              <FilterButton
                key={filter.value}
                active={activeFilter === filter.value}
                onClick={() => setActiveFilter(filter.value)}
              >
                {filter.label}
              </FilterButton>
            ))}
          </FilterButtons>
        </motion.div>
        
        <ProjectsGrid>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
            >
              <ProjectCard>
                <ProjectImage>
                  {/* <img src={`/assets/images/${project.image}`} alt={project.title} /> */}
                  <ProjectCategory>{project.category}</ProjectCategory>
                </ProjectImage>
                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <ProjectTechStack>
                    {project.techStack.map((tech, i) => (
                      <TechTag key={i}>{tech}</TechTag>
                    ))}
                  </ProjectTechStack>
                  <ProjectLinks>
                    <ProjectLink href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      Live Demo
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                        <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                      </svg>
                    </ProjectLink>
                    <ProjectLink href={project.codeLink} target="_blank" rel="noopener noreferrer">
                      View Code
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                      </svg>
                    </ProjectLink>
                  </ProjectLinks>
                </ProjectContent>
              </ProjectCard>
            </motion.div>
          ))}
        </ProjectsGrid>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;