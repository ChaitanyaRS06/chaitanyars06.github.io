import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import profileImage from '../assets/images/profile_image.jpeg';
const HomeContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  background: linear-gradient(to right, #f9fafb, #f3f4f6);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding-top: 6rem;
  }
`;

const ContentContainer = styled.div`
  width: 50%;
  padding: 2rem;
  z-index: 2;

  @media (max-width: 768px) {
    width: 100%;
    order: 2;
  }
`;

const ImageContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

  @media (max-width: 768px) {
    width: 100%;
    order: 1;
    margin-bottom: 2rem;
  }
`;

const ProfileImage = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: transparent; /* Changed from #2563eb to transparent */
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  


  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 20%; /* This moves the image down - adjust the percentage as needed */
  }
`;

const Greeting = styled.h2`
  font-size: 1.5rem;
  color: #2563eb;
  margin-bottom: 1rem;
  font-weight: 500;
`;

const Name = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 3.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  color: #1f2937;
  background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Title = styled.div`
  font-size: 1.5rem;
  color: #4b5563;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
    font-size: 1.2rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #6b7280;
  line-height: 1.7;
  margin-bottom: 2rem;
  max-width: 600px; /* Increase this to widen the description area */

  @media (max-width: 768px) {
    max-width: 100%;
  }
  
  a {
    color: #2563eb;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
    
    &:hover {
      color: #1d4ed8;
      text-decoration: underline;
    }
  }
`;


const BIBTEX = `@inproceedings{ShahaneETAL26DiffITest,
  title={Differential Inline Testing: Framework, Test Generation, and Application},
  author={Shahane, Chaitanya and Hansen, Derek and Wang, Wenxi and Nie, Pengyu},
  booktitle={International Conference on Collaborative Advances in Software and Computing},
  year={2026},
}`;

const PaperCard = styled.div`
  max-width: 600px;
  margin-bottom: 2rem;
  padding: 1.15rem 1.35rem;
  text-align: left;
  border: 1px solid rgba(37, 99, 235, 0.18);
  border-left: 3px solid #7c3aed;
  border-radius: 0.5rem;
  background: rgba(37, 99, 235, 0.04);

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const PaperTag = styled.span`
  display: inline-block;
  margin-bottom: 0.6rem;
  padding: 0.28rem 0.65rem;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: white;
  background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
  border-radius: 9999px;
`;

const PaperTitle = styled.p`
  margin: 0 0 0.4rem;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.45;
  color: #1f2937;
`;

const PaperAuthors = styled.p`
  margin: 0 0 0.25rem;
  font-size: 0.9rem;
  color: #4b5563;

  strong {
    color: #1f2937;
    font-weight: 700;
  }

  a {
    color: #2563eb;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: #1d4ed8;
      text-decoration: underline;
    }
  }
`;

const PaperVenue = styled.p`
  margin: 0;
  font-size: 0.85rem;
  line-height: 1.5;
  color: #6b7280;
`;

const BibtexToggle = styled.button`
  margin-top: 0.8rem;
  padding: 0.25rem 0.7rem;
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 600;
  color: #4b5563;
  background-color: #e5e7eb;
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #d1d5db;
  }
`;

const BibtexBlock = styled.pre`
  margin: 0.7rem 0 0;
  padding: 0.85rem;
  overflow-x: auto;
  font-size: 0.75rem;
  line-height: 1.5;
  color: #374151;
  background-color: #f3f4f6;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;


const PrimaryButton = styled(Link)`
  background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px -6px rgba(37, 99, 235, 0.5);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 24px -6px rgba(124, 58, 237, 0.55);
  }
`;

const SecondaryButton = styled(Link)`
  border: 2px solid #2563eb;
  color: #2563eb;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(37, 99, 235, 0.1);
    transform: translateY(-2px);
  }
`;

const ResumeButton = styled.a`
  background-color: #10B981; /* A green color to differentiate from the other buttons */
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

  &:hover {
    background-color: #059669;
    transform: translateY(-2px);
  }
`;

const CodeDot = styled.span`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: ${props => props.$color};
  margin-right: 8px;
`;

const TypedText = ({ texts, delay = 100, pauseTime = 1000 }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentText = texts[currentTextIndex];
      
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length + 1));
        
        if (displayText.length === currentText.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length - 1));
        
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? delay / 2 : delay);
    
    return () => clearTimeout(timeout);
  }, [currentTextIndex, delay, displayText, isDeleting, pauseTime, texts]);
  
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <CodeDot $color="#10B981" />
        {displayText}
        <span style={{ borderRight: '2px solid #2563eb', marginLeft: '2px', animation: 'blink 1s step-end infinite' }}></span>
      </div>
    </>
  );
};

const Shapes = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  opacity: 0.5;
`;

const Circle = styled.div`
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(37, 99, 235, 0.2) 0%, rgba(37, 99, 235, 0) 70%);
  animation: float 9s ease-in-out infinite;

  &:nth-child(1) {
    width: 300px;
    height: 300px;
    top: -150px;
    right: 10%;
    animation-duration: 11s;
  }

  &:nth-child(2) {
    width: 400px;
    height: 400px;
    bottom: -200px;
    left: 10%;
    background: radial-gradient(circle, rgba(124, 58, 237, 0.18) 0%, rgba(124, 58, 237, 0) 70%);
    animation-duration: 14s;
    animation-delay: -3s;
  }

  &:nth-child(3) {
    width: 200px;
    height: 200px;
    top: 30%;
    right: 20%;
    animation-duration: 9s;
    animation-delay: -1.5s;
  }
`;

const Home = () => {
  const [showBibtex, setShowBibtex] = useState(false);

  const roles = [
    "AI Engineer @ RootLogic Systems",
    "MS Computer Science, UVA"
  ];

  return (
    <HomeContainer>
      <Shapes>
        <Circle />
        <Circle />
        <Circle />
      </Shapes>
      
      <ContentContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Greeting>Hello, I'm</Greeting>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Name>Chaitanya Shahane</Name>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Title>
            <TypedText texts={roles} />
          </Title>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Description>
      I'm an AI Engineer at RootLogic Systems, building end-to-end AI stacks for production-ready systems — working across LLMs, agent orchestration, memory, evaluations, and observability. I design high-impact agent workflows that have delivered strong real-world results.

      <br /><br />

      My research makes deep learning libraries more reliable. We introduce <strong>differential inline testing</strong> — regression tests that sit next to the statement they check and need no hand-written oracle — and <strong>DiffITestGen</strong>, which generates them with LLMs. Across PyTorch and TensorFlow it produced <strong>9,611 differential inline tests at 92.9% precision</strong>, surfacing <strong>175 cross-device divergences</strong> and <strong>4 previously unknown PyTorch bugs confirmed by developers</strong>.
</Description>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <PaperCard>
            <PaperTag>Accepted · CASCON 2026</PaperTag>
            <PaperTitle>Differential Inline Testing: Framework, Test Generation, and Application</PaperTitle>
            <PaperAuthors>
              <strong>Chaitanya Shahane</strong>, Derek Hansen,{' '}
              <a href="https://wenxiwang.github.io/" target="_blank" rel="noopener noreferrer">Wenxi Wang</a>, and{' '}
              <a href="https://pengyunie.github.io/" target="_blank" rel="noopener noreferrer">Pengyu Nie</a>
            </PaperAuthors>
            <PaperVenue>
              In International Conference on Collaborative Advances in Software and Computing (CASCON'26), to appear. November 2026. Toronto, Canada.
            </PaperVenue>
            <BibtexToggle onClick={() => setShowBibtex(!showBibtex)}>
              {showBibtex ? 'hide bibtex' : 'bibtex'}
            </BibtexToggle>
            {showBibtex && <BibtexBlock>{BIBTEX}</BibtexBlock>}
          </PaperCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <ButtonsContainer>
            <PrimaryButton to="/about">More About Me</PrimaryButton>
            <SecondaryButton to="/contact">Contact Me</SecondaryButton>
            <ResumeButton 
    href="https://drive.google.com/file/d/1Scz9vxcDauX9UFnh4A3DYQfJkSGoNwe4/view?usp=drive_link" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    Download Resume
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style={{marginLeft: '8px'}}>
      <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
      <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
    </svg>
  </ResumeButton>
          </ButtonsContainer>
        </motion.div>
      </ContentContainer>
      
      <ImageContainer>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <ProfileImage>
  <img 
    src={profileImage} 
    alt="Chaitanya Shahane" 
  />
</ProfileImage>
        </motion.div>
      </ImageContainer>
    </HomeContainer>
  );
};

export default Home;