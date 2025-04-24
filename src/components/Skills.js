import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SkillsContainer = styled.section`
  padding: 8rem 2rem 6rem;
  background-color: #f3f4f6;
`;

const SkillsWrapper = styled.div`
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

const SkillsIntro = styled.p`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 4rem;
  color: #4b5563;
  font-size: 1.1rem;
  line-height: 1.7;
`;

const SkillsCategoriesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const SkillsCategory = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
  
  h3 {
    font-size: 1.5rem;
    color: #1f2937;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    
    svg {
      margin-right: 0.75rem;
      color: #2563eb;
    }
  }
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const SkillItem = styled.li`
  background-color: #e0e7ff;
  color: #4f46e5;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: background-color 0.3s ease, transform 0.3s ease;
  
  &:hover {
    background-color: #c7d2fe;
    transform: translateY(-2px);
  }
`;

const SkillBars = styled.div`
  margin-top: 4rem;
`;

const SkillBarContainer = styled.div`
  margin-bottom: 1.5rem;
`;

const SkillBarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  
  span {
    font-weight: 500;
    color: #4b5563;
  }
`;

const SkillBarOuter = styled.div`
  height: 10px;
  background-color: #e5e7eb;
  border-radius: 5px;
  overflow: hidden;
`;

const SkillBarInner = styled.div`
  height: 100%;
  background-color: #2563eb;
  border-radius: 5px;
  width: ${props => props.width || '0%'};
  transition: width 1.5s ease;
`;

const Skills = () => {
  const skillsData = {
    languages: [
      "Java", "Python", "C", "C++", "SQL", "Bash scripting"
    ],
    frameworks: [
      "Scikit", "NLTK", "TensorFlow", "Keras", "Flask", "AngularJS", "ReactJS", "RESTful services"
    ],
    tools: [
      "Docker", "GIT", "SQLServer", "MySQL", "CI/CD pipelines", "Slurm"
    ],
    platforms: [
      "Linux", "Web", "Windows", "Arduino", "Raspberry", "MEAN", "MERN", "AWS"
    ],
    testing: [
      "JUnit", "Mockito", "Karate", "Pytest"
    ],
    softSkills: [
      "Sports", "Leadership", "Event Management", "Writing", "Public Speaking", "Time Management"
    ]
  };
  
  const skillBars = [
    { name: "Software Development", proficiency: "90%" },
    { name: "Machine Learning", proficiency: "85%" },
    { name: "Testing & Quality Assurance", proficiency: "80%" },
    { name: "Web Development", proficiency: "75%" },
    { name: "Research", proficiency: "85%" },
    { name: "Problem Solving", proficiency: "90%" },
  ];

  return (
    <SkillsContainer>
      <SkillsWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <SkillsIntro>
            Equipped with a diverse set of technical and soft skills acquired through academic pursuits and professional experience. 
            My expertise spans multiple programming languages, frameworks, and tools with a focus on software development, 
            machine learning, and testing.
          </SkillsIntro>
        </motion.div>
        
        <SkillsCategoriesContainer>
          {Object.entries(skillsData).map(([category, skills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
            >
              <SkillsCategory>
                <h3>
                  {getCategoryIcon(category)}
                  {formatCategoryName(category)}
                </h3>
                <SkillsList>
                  {skills.map(skill => (
                    <SkillItem key={skill}>{skill}</SkillItem>
                  ))}
                </SkillsList>
              </SkillsCategory>
            </motion.div>
          ))}
        </SkillsCategoriesContainer>
        
        <SkillBars>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <SectionTitle>Proficiency</SectionTitle>
          </motion.div>
          
          {skillBars.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 + (index * 0.1) }}
            >
              <SkillBarContainer>
                <SkillBarHeader>
                  <span>{skill.name}</span>
                  <span>{skill.proficiency}</span>
                </SkillBarHeader>
                <SkillBarOuter>
                  <SkillBarInner width={skill.proficiency} />
                </SkillBarOuter>
              </SkillBarContainer>
            </motion.div>
          ))}
        </SkillBars>
      </SkillsWrapper>
    </SkillsContainer>
  );
};

const formatCategoryName = (category) => {
  switch (category) {
    case 'languages':
      return 'Programming Languages';
    case 'frameworks':
      return 'Frameworks & Libraries';
    case 'tools':
      return 'Tools & Technologies';
    case 'platforms':
      return 'Platforms & Environments';
    case 'testing':
      return 'Testing & QA';
    case 'softSkills':
      return 'Soft Skills';
    default:
      return category.charAt(0).toUpperCase() + category.slice(1);
  }
};

const getCategoryIcon = (category) => {
  switch (category) {
    case 'languages':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
          <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z"/>
        </svg>
      );
    case 'frameworks':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
          <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.356 3.356a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414l-3.356-3.356a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0zm9.646 10.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708zM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11z"/>
        </svg>
      );
    case 'tools':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
          <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.356 3.356a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414l-3.356-3.356a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0zm9.646 10.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708zM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11z"/>
        </svg>
      );
    case 'platforms':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
          <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 1 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
        </svg>
      );
    case 'testing':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
          <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
          <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
        </svg>
      );
    case 'softSkills':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
          <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
          <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
        </svg>
      );
    default:
      return null;
  }
};

export default Skills;