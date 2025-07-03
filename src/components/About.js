import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled.section`
  padding: 8rem 2rem 6rem;
  background-color: #fff;
`;

const AboutWrapper = styled.div`
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

const AboutContent = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const AboutImageContainer = styled.div`
  flex: 1;
  
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`;

const AboutImage = styled.div`
  width: 100%;
  height: 400px;
  background-color: #e5e7eb;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(37, 99, 235, 0.7), rgba(59, 130, 246, 0.5));
    opacity: 0.8;
  }
`;

const AboutTextContainer = styled.div`
  flex: 1;

  p {
    font-size: 1.1rem;
    line-height: 1.7;
    color: #4b5563;
    margin-bottom: 1.5rem;
  }

  h3 {
    font-size: 1.8rem;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 1rem;
  }
`;

const HighlightText = styled.span`
  color: #2563eb;
  font-weight: 600;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  span:first-child {
    font-weight: 600;
    color: #374151;
  }
  
  span:last-child {
    color: #6b7280;
    word-break: break-word;
  }
`;

const ResumeButton = styled.a`
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
  
  svg {
    margin-left: 0.5rem;
  }
`;

const EducationSection = styled.div`
  margin-top: 5rem;
`;

const Timeline = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 4px;
    background: #e5e7eb;
    left: 50%;
    margin-left: -2px;
    
    @media (max-width: 768px) {
      left: 31px;
    }
  }
`;

const TimelineCard = styled.div`
  position: relative;
  width: 50%;
  padding: 20px 40px;
  
  &:nth-child(odd) {
    left: 0;
    
    &:before {
      content: '';
      position: absolute;
      top: 24px;
      right: -10px;
      width: 20px;
      height: 20px;
      background: #2563eb;
      border-radius: 50%;
      box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.2);
      z-index: 1;
    }
    
    &:after {
      content: '';
      position: absolute;
      top: 24px;
      right: 10px;
      width: 0;
      height: 0;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      border-left: 10px solid white;
    }
  }
  
  &:nth-child(even) {
    left: 50%;
    
    &:before {
      content: '';
      position: absolute;
      top: 24px;
      left: -10px;
      width: 20px;
      height: 20px;
      background: #2563eb;
      border-radius: 50%;
      box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.2);
      z-index: 1;
    }
    
    &:after {
      content: '';
      position: absolute;
      top: 24px;
      left: 10px;
      width: 0;
      height: 0;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      border-right: 10px solid white;
    }
  }
  
  @media (max-width: 768px) {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
    left: 0 !important;
    
    &:nth-child(odd):before, &:nth-child(even):before {
      left: 21px;
      right: auto;
    }
    
    &:nth-child(odd):after, &:nth-child(even):after {
      left: 40px;
      right: auto;
      border-right: 10px solid white;
      border-left: 0;
    }
  }
`;

const TimelineCardContent = styled.div`
  position: relative;
  padding: 20px;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  
  h4 {
    margin: 0 0 5px 0;
    color: #1f2937;
    font-size: 1.25rem;
    font-weight: 600;
  }
  
  p {
    margin: 0;
    font-size: 1rem;
    line-height: 1.6;
    color: #6b7280;
  }
`;

const TimelinePeriod = styled.span`
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  background-color: #e0e7ff;
  color: #4f46e5;
  border-radius: 1rem;
  margin-bottom: 0.75rem;
`;

const TimelineLocation = styled.span`
  display: block;
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.75rem;
`;

const About = () => {
  const educationData = [
    {
      id: 1,
      institution: "University of Virginia",
      degree: "Master of Science in Computer Science",
      period: "Expected Graduation: Dec 2025",
      location: "Charlottesville, USA",
      gpa: "3.86/4",
      courses: "Machine Learning for Software Reliability, Natural Language Processing, Machine Learning, Software Analysis, Resonsible AI"
    },
    {
      id: 2,
      institution: "MIT World Peace University",
      degree: "Bachelor of Technology - Computer Science",
      period: "Dec 2020 - May 2024",
      location: "Pune, India",
      gpa: "3.9/4",
      courses: "Data Structures with C++, Java Programming, Theory of Computation, Software Design Modelling and Testing, Artificial Intelligence, Deep Learning, Data Base Management System, Computer Networks"
    }
  ];

  return (
    <AboutContainer>
      <AboutWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>About Me</SectionTitle>
        </motion.div>
        
        <AboutContent>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AboutImageContainer>
              <AboutImage>
                {/* Add actual image here */}
                {/* <img src="/assets/about-image.jpg" alt="Chaitanya Shahane" style={{width: '100%', height: '100%', objectFit: 'cover'}} /> */}
              </AboutImage>
            </AboutImageContainer>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <AboutTextContainer>
              <h3>I'm <HighlightText>Chaitanya Shahane</HighlightText>, a Software Developer & Research Assistant</h3>
              <p>
                I am a passionate Computer Science graduate student at the University of Virginia, specializing in software development, 
                machine learning, and research in software testing. With experience in both academic and professional environments, 
                I combine theoretical knowledge with practical implementation to build efficient and innovative solutions.
              </p>
              <p>
                My journey in computer science is driven by a curiosity to explore new technologies and solve complex problems. 
                I'm particularly interested in enhancing software reliability through advanced testing frameworks and machine learning applications.
              </p>
              
              <InfoGrid>
                  <InfoItem>
                    <span>Email:</span>
                    <span>chaitanya.shahane6@gmail.com</span>
                  </InfoItem>
                  <InfoItem>
                    <span>Location:</span>
                    <span>Charlottesville, Virginia</span>
                  </InfoItem>
                  <InfoItem>
                    <span>LinkedIn:</span>
                    <span>linkedin.com/in/chaitanya-shahane06/</span>
                  </InfoItem>
                  <InfoItem>
                    <span>GitHub:</span>
                    <span>github.com/ChaitanyaRS06</span>
                  </InfoItem>
                </InfoGrid>
              
              <ResumeButton href="https://drive.google.com/file/d/1MffC8O9PyDlq2MS98F95ZH4Mn0CuwxOE/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                Download Resume
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style={{marginLeft: '8px'}}>
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                </svg>
              </ResumeButton>
            </AboutTextContainer>
          </motion.div>
        </AboutContent>
        
        <EducationSection>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle>Education</SectionTitle>
          </motion.div>
          
          <Timeline>
            {educationData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + (index * 0.2) }}
              >
                <TimelineCard>
                  <TimelineCardContent>
                    <TimelinePeriod>{item.period}</TimelinePeriod>
                    <h4>{item.degree}</h4>
                    <TimelineLocation>{item.institution}, {item.location}</TimelineLocation>
                    <p><strong>GPA:</strong> {item.gpa}</p>
                    <p><strong>Relevant Courses:</strong> {item.courses}</p>
                  </TimelineCardContent>
                </TimelineCard>
              </motion.div>
            ))}
          </Timeline>
        </EducationSection>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default About;