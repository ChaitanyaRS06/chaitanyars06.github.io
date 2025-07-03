import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

// Keep all your styled components the same as before...
const ContactContainer = styled.section`
  padding: 8rem 2rem 6rem;
  background-color: #f3f4f6;
`;

const ContactWrapper = styled.div`
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

const ContactIntro = styled.p`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 4rem;
  color: #4b5563;
  font-size: 1.1rem;
  line-height: 1.7;
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  padding: 2.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

const ContactInfoTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1.5rem;
`;

const ContactMethod = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  
  svg {
    color: #2563eb;
    font-size: 1.5rem;
    margin-right: 1rem;
    min-width: 24px;
  }
  
  div {
    h4 {
      font-size: 1.1rem;
      font-weight: 600;
      color: #374151;
      margin-bottom: 0.4rem;
    }
    
    p {
      color: #6b7280;
      font-size: 1rem;
      line-height: 1.5;
    }
    
    a {
      color: #6b7280;
      text-decoration: none;
      transition: color 0.3s ease;
      
      &:hover {
        color: #2563eb;
      }
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: #f3f4f6;
    border-radius: 50%;
    color: #4b5563;
    transition: all 0.3s ease;
    
    &:hover {
      background-color: #2563eb;
      color: white;
      transform: translateY(-3px);
    }
  }
`;

const ContactForm = styled.form`
  background-color: white;
  border-radius: 0.5rem;
  padding: 2.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

const FormTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1.5rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: #4b5563;
  }
  
  input, textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #d1d5db;
    border-radius: 0.375rem;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.3s ease;
    
    &:focus {
      border-color: #2563eb;
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
    }
  }
  
  textarea {
    min-height: 150px;
    resize: vertical;
  }
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const SubmitButton = styled.button`
  background-color: #2563eb;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  
  &:hover {
    background-color: #1d4ed8;
    transform: translateY(-2px);
  }
  
  svg {
    margin-left: 0.5rem;
  }
  
  &:disabled {
    background-color: #93c5fd;
    cursor: not-allowed;
    transform: none;
  }
`;

const FormMessage = styled.div`
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-radius: 0.375rem;
  font-weight: 500;
  background-color: ${props => props.success ? '#dcfce7' : '#fee2e2'};
  color: ${props => props.success ? '#166534' : '#b91c1c'};
  display: ${props => props.visible ? 'block' : 'none'};
`;

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState({
    visible: false,
    success: false,
    text: ''
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    const nameValue = form.current.user_name.value;
    const emailValue = form.current.user_email.value;
    const subjectValue = form.current.subject.value; 
    const messageValue = form.current.message.value;
    
    if (!nameValue || !emailValue || !subjectValue || !messageValue) {
      setFormMessage({
        visible: true,
        success: false,
        text: 'Please fill in all fields.'
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
      setFormMessage({
        visible: true,
        success: false,
        text: 'Please enter a valid email address.'
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Replace these with your actual EmailJS service, template, and user IDs
    emailjs.sendForm(
      'service_h643s4t', 
      'template_txbeuoa', 
      form.current, 
      'YaFcZDC1RJaOp9HFT'
    )
      .then((result) => {
        console.log('SUCCESS!', result.text, form.current);
        setFormMessage({
          visible: true,
          success: true,
          text: 'Your message has been sent successfully! I\'ll get back to you soon.'
        });
        form.current.reset();
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        setFormMessage({
          visible: true,
          success: false,
          text: 'Oops! There was a problem sending your message. Please try again or contact me directly via email.'
        });
      })
      .finally(() => {
        setIsSubmitting(false);
        
        // Clear message after 5 seconds
        setTimeout(() => {
          setFormMessage({
            visible: false,
            success: false,
            text: ''
          });
        }, 5000);
      });
  };

  return (
    <ContactContainer>
      <ContactWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>Get In Touch</SectionTitle>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ContactIntro>
            Have a question or want to work together? Feel free to reach out through the contact form or via email.
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </ContactIntro>
        </motion.div>
        
        <ContactContent>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <ContactInfo>
              <ContactInfoTitle>Contact Information</ContactInfoTitle>
              
              <ContactMethod>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                </svg>
                <div>
                  <h4>Location</h4>
                  <p>Charlottesville, Virginia, USA</p>
                </div>
              </ContactMethod>
              
              <ContactMethod>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                </svg>
                <div>
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:chaitanya.shahane6@gmail.com">chaitanya.shahane6@gmail.com</a>
                  </p>
                </div>
              </ContactMethod>
              
              {/* <ContactMethod>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                </svg>
                <div>
                  <h4>Phone</h4>
                  <p>
                    <a href="tel:+14342279248">(434)-227-9248</a>
                  </p>
                </div>
              </ContactMethod> */}
              
              <SocialLinks>
                <a href="https://github.com/ChaitanyaRS06" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </a>
                <a href="linkedin.com/in/chaitanya-shahane06/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                </a>
                <a href="mailto:chaitanya.shahane6@gmail.com" aria-label="Email">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                  </svg>
                </a>
              </SocialLinks>
            </ContactInfo>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ContactForm ref={form} onSubmit={handleSubmit}>
              <FormTitle>Send Me a Message</FormTitle>
              
              <FormMessage visible={formMessage.visible} success={formMessage.success}>
                {formMessage.text}
              </FormMessage>
              
              <FormRow>
                <FormGroup>
                  <label htmlFor="user_name">Full Name</label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    placeholder="Your full name"
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="user_email">Email Address</label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    placeholder="Your email address"
                  />
                </FormGroup>
              </FormRow>
              
              <FormGroup>
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What is this regarding?"
                />
              </FormGroup>
              
              <FormGroup>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="How can I help you?"
                ></textarea>
              </FormGroup>
              
              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style={{marginLeft: '8px'}}>
                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
                  </svg>
                )}
              </SubmitButton>
            </ContactForm>
          </motion.div>
        </ContactContent>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;