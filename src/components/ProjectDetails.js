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
  background: ${props => props.$primary ? 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)' : 'transparent'};
  color: ${props => props.$primary ? 'white' : '#2563eb'};
  border: ${props => props.$primary ? 'none' : '1px solid #2563eb'};
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s ease;
  box-shadow: ${props => props.$primary ? '0 8px 20px -6px rgba(37, 99, 235, 0.5)' : 'none'};

  &:hover {
    background: ${props => props.$primary ? 'linear-gradient(135deg, #1d4ed8 0%, #6d28d9 100%)' : 'rgba(37, 99, 235, 0.08)'};
    transform: translateY(-2px);
  }
  
  svg {
    margin-left: 0.5rem;
  }
`;

const projectDetails = {
  'differential-testing': {
    title: "DiffITestGen: LLM-Powered Differential Inline Testing for Deep Learning APIs",
    category: "Research",
    overview: "My Master's thesis. DiffITestGen extends inline testing to support differential testing, powered by LLM-based test generation. Evaluated on 1,550 PyTorch APIs, it generated 9,654 valid differential inline tests (62.5% success rate) and discovered 215 divergences across 53 APIs — yielding 12 genuine differential bugs, 7 of which were confirmed by PyTorch developers.",
    description: [
      "DIFFITESTGEN introduces differential inline tests as a novel solution to the test oracle problem in inline testing. Unlike traditional inline tests that require explicit expected outputs, differential inline tests check whether outputs diverge when executing the same statement under different conditions (e.g., CPU vs CUDA devices).",
      "The framework leverages a sophisticated three-stage pipeline: bootstrapping creates a pool of differential inline test examples by translating existing fuzzing inputs; generation employs GPT-4o with retrieval-augmented generation to create comprehensive tests targeting corner cases; and refinement iteratively fixes invalid tests based on execution feedback.",
      "We evaluated the framework across two scenarios: library developers (11,619 tensor-assignment statements, 73.74% success rate) and library users (1,550 PyTorch APIs, 62.5% success rate). For the user scenario, DiffITestGen generated 9,654 valid differential inline tests and covered 1,092 lines of code not exercised by PyTorch's unit tests. It surfaced 215 divergences across 53 APIs; after filtering out expected cross-device randomness, 12 genuine differential bugs remained, 7 of which were confirmed by PyTorch developers."
    ],
    phases: [
      {
        title: "Phase 1: Differential Inline Testing Framework",
        details: "Extended the pytest-inline framework to support differential testing by introducing new syntax for specifying differential variables (e.g., backend devices). Implemented sophisticated backend device management, output comparison using torch.allclose with configurable tolerances, and stochastic operation handling through random seed control to ensure reproducible cross-device comparisons."
      },
      {
        title: "Phase 2: LLM-Powered Test Generation (DIFFITESTGEN)",
        details: "Developed a comprehensive three-stage framework: (1) Bootstrapping stage that translates TitanFuzz-generated inputs into differential inline test format, (2) Generation stage using GPT-4o with semantic similarity search and API documentation retrieval, and (3) Refinement stage with iterative error correction based on execution feedback."
      },
      {
        details: "Conducted a large-scale evaluation on 1,550 PyTorch APIs (library-user scenario), generating 9,654 valid differential inline tests at a 62.5% success rate and covering 1,092 lines beyond PyTorch's unit tests. Discovered 215 divergences across 53 APIs; after excluding expected cross-device randomness, 12 differential bugs were reported via 12 grouped GitHub issues, with 7 confirmed by PyTorch developers."
      }
    ],
    keyFeatures: [
      "Novel differential inline testing syntax that eliminates the need for explicit expected outputs",
      "LLM-powered test generation using GPT-4o with few-shot learning and retrieval-augmented generation",
      "Sophisticated error analysis and iterative refinement driven by execution feedback",
      "Cross-device consistency validation between CPU and CUDA implementations",
      "Automated translation pipeline from fuzzing inputs to differential inline tests",
      "Comprehensive evaluation framework with detailed error pattern analysis"
    ],
    technicalInnovations: [
      "Differential Variables: Novel syntax for specifying variables that differ across program versions",
      "Context Retrieval: Semantic similarity search over bootstrapped examples and API documentation",
      "Iterative Refinement: Multi-stage error correction with specialized LLM agents",
      "Stochastic Operation Handling: Random seed control for reproducible cross-device testing",
      "Error Pattern Analysis: Comprehensive categorization of error types across both evaluation scenarios"
    ],
    results: [
      "215 divergences discovered across 53 unique PyTorch APIs",
      "12 genuine differential bugs identified after filtering expected cross-device randomness",
      "7 confirmed as previously unknown bugs by PyTorch developers (12 GitHub issues submitted)",
      "9,654 valid differential inline tests generated (62.5% success rate)",
      "1,092 lines of code covered beyond PyTorch's unit tests",
      "Superior API coverage compared to state-of-the-art LLM-based fuzzing"
    ],
    technologies: [
      "LLM Integration: GPT-4o for differential inline test generation and refinement",
      "Deep Learning Library Under Test: PyTorch (CPU vs. CUDA cross-device comparison)",
      "Infrastructure: Docker containerization, Slurm job scheduler, GPU compute",
      "Retrieval: Retrieval-augmented generation over API docs and bootstrapped examples",
      "Testing Framework: pytest-inline extension with differential testing support",
      "Code Analysis: Python AST for dependency tracking and operation detection"
    ],
    evaluation: [
      "Dataset: 1,550 PyTorch APIs (library-user scenario)",
      "Test Generation: 9,654 valid differential inline tests",
      "Success Rate: 62.5% (library users) / 73.74% (library developers)",
      "Bug Discovery: 215 divergences across 53 unique APIs",
      "Confirmation: 12 differential bugs reported, 7 confirmed by PyTorch developers",
      "Coverage: 1,092 lines covered beyond PyTorch's unit tests"
    ],
    techStack: [
      "Python", "GPT-4o", "PyTorch", "AST", "Docker",
      "Slurm", "pytest-inline", "RAG", "Semantic Search", "Error Analysis"
    ],
    codeLink: "https://github.com/ChaitanyaRS06/DIFFITESTGEN",
    paperLink: null,
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
                <Button href={project.codeLink} target="_blank" rel="noopener noreferrer" $primary>
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