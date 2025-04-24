import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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
  background-color: #2563eb;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #3b82f6;
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;

const Greeting = styled.h2`
  font-size: 1.5rem;
  color: #2563eb;
  margin-bottom: 1rem;
  font-weight: 500;
`;

const Name = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #1f2937;

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
  max-width: 500px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const PrimaryButton = styled(Link)`
  background-color: #2563eb;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

  &:hover {
    background-color: #1d4ed8;
    transform: translateY(-2px);
  }
`;

const SecondaryButton = styled(Link)`
  border: 2px solid #2563eb;
  color: #2563eb;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
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

const CodeDot = styled.span`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: ${props => props.color};
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
        <CodeDot color="#10B981" />
        {displayText}
        <span style={{ borderRight: '2px solid #2563eb', marginLeft: '2px', animation: 'blink 1s step-end infinite' }}></span>
      </div>
      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
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

  &:nth-child(1) {
    width: 300px;
    height: 300px;
    top: -150px;
    right: 10%;
  }

  &:nth-child(2) {
    width: 400px;
    height: 400px;
    bottom: -200px;
    left: 10%;
  }

  &:nth-child(3) {
    width: 200px;
    height: 200px;
    top: 30%;
    right: 20%;
  }
`;

const Home = () => {
  const roles = [
    "Software Developer", 
    "Machine Learning Engineer", 
    "Research Assistant",
    "Graduate Student at UVA"
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
            I specialize in building robust software solutions and exploring the frontiers of machine learning and software testing. Currently pursuing my Master's in Computer Science at the University of Virginia.
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
            {/* You can add an actual image here */}
            {/* <img src="/assets/profile.jpg" alt="Chaitanya Shahane" /> */}
          </ProfileImage>
        </motion.div>
      </ImageContainer>
    </HomeContainer>
  );
};

export default Home;