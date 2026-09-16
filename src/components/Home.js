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

      I hold a Master's in Computer Science from the University of Virginia (Dec 2025). For my thesis on <strong>Differential Inline Testing</strong>, I built <strong>DiffITestGen</strong> — an LLM-powered framework that generates differential tests for deep learning APIs, surfacing <strong>12 differential bugs in PyTorch (7 confirmed by PyTorch developers)</strong>. I was advised by Professor <a href="https://wenxiwang.github.io/" target="_blank" rel="noopener noreferrer">Wenxi Wang</a> (CS, UVA) and Professor <a href="https://pengyunie.github.io/" target="_blank" rel="noopener noreferrer">Pengyu Nie</a> (CS, University of Waterloo).
</Description>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <ButtonsContainer>
            <PrimaryButton to="/projects">View My Work</PrimaryButton>
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