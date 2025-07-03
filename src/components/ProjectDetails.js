import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const DetailContainer = styled.section`
  padding: 8rem 2rem 6rem;
  background-color: #fff;
`;

const DetailWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: #4b5563;
  font-weight: 500;
  margin-bottom: 2rem;
  text-decoration: none;
  transition: color 0.3s ease;
  
  svg {
    margin-right: 0.5rem;
  }
  
  &:hover {
    color: #2563eb;
  }
`;

const DetailHeader = styled.div`
  margin-bottom: 3rem;
`;

const ProjectTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1rem;
`;

const ProjectCategory = styled.span`
  display: inline-block;
  background-color: #e0e7ff;
  color: #4f46e5;
  padding: 0.4rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin: 2.5rem 0 1rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.5rem;
    width: 50px;
    height: 3px;
    background-color: #2563eb;
    border-radius: 2px;
  }
`;

const DetailContent = styled.div`
  color: #4b5563;
  line-height: 1.8;
  
  p {
    margin-bottom: 1.5rem;
  }
  
  ul {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
    
    li {
      margin-bottom: 0.5rem;
      position: relative;
      
      &:before {
        content: '•';
        position: absolute;
        left: -1rem;
        color: #2563eb;
      }
    }
  }
  
  strong {
    color: #1f2937;
    font-weight: 600;
  }
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.5rem;
`;

const TechItem = styled.span`
  background-color: #f3f4f6;
  color: #4b5563;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 3rem;
`;

const Button = styled.a`
  background-color: ${props => props.primary ? '#2563eb' : 'transparent'};
  color: ${props => props.primary ? 'white' : '#2563eb'};
  border: ${props => props.primary ? 'none' : '1px solid #2563eb'};
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 500;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.primary ? '#1d4ed8' : 'rgba(37, 99, 235, 0.1)'};
    transform: translateY(-2px);
  }
  
  svg {
    margin-left: 0.5rem;
  }
`;

const projectDetails = {
  'differential-testing': {
    title: "Few-Shot Differential Testing Framework for Deep Learning APIs",
    category: "Research",
    overview: "A comprehensive framework for automated differential testing of deep learning libraries using inline test generation and few-shot learning to validate API behavior across CPU and GPU environments.",
    description: [
      "As part of my research in testing deep learning libraries, I designed and implemented a comprehensive framework for automated differential testing of PyTorch APIs using inline test generation. The framework leverages Abstract Syntax Trees (AST) to inject test cases directly into code paths, allowing for efficient and fine-grained validation of API behavior across CPU and GPU environments.",
      "The initial system focused on PyTorch, utilizing Python's AST to programmatically generate inline tests. These tests emphasized the use of extreme input values to expose edge-case bugs and inconsistencies in API behavior. The tests were executed across both CPU and GPU backends to identify divergence in output and failure cases, helping uncover subtle bugs in numerical operations.",
      "Building upon this, I developed a few-shot learning model that scales the generation of differential inline tests using an LLM. A curated dataset of 1300 PyTorch and TensorFlow APIs was used to guide the generation of over 54,000 test cases covering 5469 distinct APIs."
    ],
    phases: [
      {
        title: "Phase 1: Differential Inline Testing with AST",
        details: "The initial system focused on PyTorch, utilizing Python's AST to programmatically generate inline tests. These tests emphasized the use of extreme input values to expose edge-case bugs and inconsistencies in API behavior. The tests were executed across both CPU and GPU backends to identify divergence in output and failure cases, helping uncover subtle bugs in numerical operations."
      },
      {
        title: "Phase 2: Few-Shot Learning Framework for Test Generation",
        details: "Building upon this, I developed a few-shot learning model that scales the generation of differential inline tests using an LLM. A curated dataset of 1300 PyTorch and TensorFlow APIs was used to guide the generation of over 54,000 test cases covering 5469 distinct APIs."
      }
    ],
    keyFeatures: [
      "Valid and invalid test outputs were categorized automatically post-execution",
      "The invalid tests were recycled back into the few-shot learning loop to help the model generate improved test candidates",
      "Increasing the overall test validity rate and coverage",
      "Test execution was conducted on NVIDIA A100 and H200 GPUs using a Slurm-based job scheduler for scalability"
    ],
    technologies: [
      "LLM Integration: GPT API (few-shot learning)",
      "Frameworks: PyTorch, TensorFlow",
      "Infrastructure: Docker, Slurm, NVIDIA A100/H200 GPUs",
      "Code Tools: Python AST, Web Scraping (for API extraction)",
      "Test Categorization: Valid, Invalid, Bug-inducing, Inconclusive"
    ],
    techStack: ["Python", "GPT API", "PyTorch", "TensorFlow", "AST", "Docker", "Slurm", "NVIDIA H200"],
    codeLink: "https://github.com/ChaitanyaRS06/deep-learning-testing",
    demoLink: null
  }
};

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projectDetails[projectId];
  
  if (!project) {
    return (
      <DetailContainer>
        <DetailWrapper>
          <BackButton to="/projects">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
            Back to Projects
          </BackButton>
          <h1>Project Not Found</h1>
          <p>The project you're looking for doesn't exist or has been moved.</p>
        </DetailWrapper>
      </DetailContainer>
    );
  }
  
  return (
    <DetailContainer>
      <DetailWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <BackButton to="/projects">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
            Back to Projects
          </BackButton>
          
          <DetailHeader>
            <ProjectCategory>{project.category}</ProjectCategory>
            <ProjectTitle>{project.title}</ProjectTitle>
          </DetailHeader>
          
          <DetailContent>
            <p>{project.overview}</p>
            
            {project.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            
            {project.phases && (
              <>
                <SectionTitle>Project Phases</SectionTitle>
                {project.phases.map((phase, index) => (
                  <div key={index}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.75rem' }}>
                      {phase.title}
                    </h3>
                    <p>{phase.details}</p>
                  </div>
                ))}
              </>
            )}
            
            <SectionTitle>Key Features</SectionTitle>
            <ul>
              {project.keyFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            
            <SectionTitle>Technologies Used</SectionTitle>
            <ul>
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            
            <SectionTitle>Tech Stack</SectionTitle>
            <TechList>
              {project.techStack.map((tech, index) => (
                <TechItem key={index}>{tech}</TechItem>
              ))}
            </TechList>
            
            <ButtonGroup>
              {project.codeLink && (
                <Button href={project.codeLink} target="_blank" rel="noopener noreferrer" primary>
                  View Code
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style={{ marginLeft: '8px' }}>
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </Button>
              )}
              {project.demoLink && (
                <Button href={project.demoLink} target="_blank" rel="noopener noreferrer">
                  Live Demo
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style={{ marginLeft: '8px' }}>
                    <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                    <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                  </svg>
                </Button>
              )}
            </ButtonGroup>
          </DetailContent>
        </motion.div>
      </DetailWrapper>
    </DetailContainer>
  );
};

export default ProjectDetails;