import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background-color: rgba(255, 255, 255, 0.97);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  box-shadow: ${props => props.scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
  transition: all 0.3s ease;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: #2563eb;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: white;
    padding: 2rem;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    align-items: center;
  }
`;

const NavLink = styled(Link)`
  color: #1f2937;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #2563eb;
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }

  &.active:after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activePath, setActivePath] = useState('/');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    const handleLocation = () => {
      setActivePath(window.location.pathname);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    window.addEventListener('popstate', handleLocation);
    
    // Set initial path
    setActivePath(window.location.pathname);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('popstate', handleLocation);
    };
  }, []);

  return (
    <Nav scrolled={scrolled}>
      <Logo to="/">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          CS
        </motion.div>
      </Logo>
      
      <MobileMenuButton onClick={toggleMenu}>
        {isMenuOpen ? '✕' : '☰'}
      </MobileMenuButton>
      
      <NavLinks isOpen={isMenuOpen}>
        {[
          { path: '/', label: 'Home' },
          { path: '/about', label: 'About' },
          { path: '/skills', label: 'Skills' },
          { path: '/projects', label: 'Projects' },
          { path: '/contact', label: 'Contact' }
        ].map((link) => (
          <motion.div
            key={link.path}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: isMenuOpen ? 0.1 : 0.3 }}
          >
            <NavLink 
              to={link.path} 
              className={activePath === link.path ? 'active' : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          </motion.div>
        ))}
      </NavLinks>
    </Nav>
  );
};

export default Header;