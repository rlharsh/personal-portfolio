import React, { useState, useRef, useEffect } from 'react';

import '../../assets/css/navbar.css'

import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import { Award, Book, Box, GitHub, Grid, Home, Instagram, Mail, Twitter, User, Zap } from 'react-feather';
import { Link as ScrollLink } from 'react-scroll';

const navbar = () => {

    const ref = useRef();
    const [navbarOpen, setNavbarOpen] = React.useState(false);

    useEffect(() => {
        const handleResize = () => {
            setNavbarOpen(window.innerWidth >= 768);
        };

        if (window.innerWidth >= 768) {
            setNavbarOpen(true);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

    useEffect(() => {
        const handler = (event) => {
          if (
            navbarOpen &&
            ref.current
          ) {
            if (window.innerWidth < 768) {
                 setNavbarOpen(false);
            }
          }
        };
        //document.addEventListener('mousedown', handler);
        return () => {
          document.removeEventListener('mousedown', handler);
        };
      }, [navbarOpen]);

      return (
        <nav ref={ref} className='navbar'>
            <button className='toggle' onClick={() => setNavbarOpen((prev) => !prev)}>
              {navbarOpen ? (<MdClose style={{ width: '24px', height: '24px' }} />) : (<FiMenu style={{width: '24px',height: '24px'}}/>)}
            </button>

            <div className={`menu-nav${navbarOpen ? ' show-menu' : ''}`}>
                <div className='inner-menu'>
                  <h3>Navigation</h3>
                    <ul className='contact-links'>
                    <ScrollLink
                      className='link-holder'
                      to="introduction"
                      spy={true}
                      smooth={true}
                      offset={-170}
                      duration={500}
                      activeClass="active-link"
                    >
                      <span className='icon-wrapper'><Home size={16}/></span><p>Home</p>
                    </ScrollLink>
                    <ScrollLink
                      className='link-holder'
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-170}
                      duration={500}
                      activeClass="active-link"
                    >
                      <span className='icon-wrapper'><User size={16}/></span><p>About</p>
                    </ScrollLink>

                    <ScrollLink
                      className='link-holder'
                      to='skills'
                      spy={true}
                      smooth={true}
                      offset={-170}
                      duration={500}
                      activeClass='active-link'
                      >

                      <span className='icon-wrapper'><Zap size={16}/></span><p>Skills</p>

                      </ScrollLink>

                      <ScrollLink
                      className='link-holder'
                      to='education'
                      spy={true}
                      smooth={true}
                      offset={-170}
                      duration={500}
                      activeClass='active-link'
                      >

                      <span className='icon-wrapper'><Book size={16}/></span><p>Education</p>

                      </ScrollLink>

                      <ScrollLink
                      className='link-holder'
                      to='awards'
                      spy={true}
                      smooth={true}
                      offset={-170}
                      duration={500}
                      activeClass='active-link'
                      >

                      <span className='icon-wrapper'><Award size={16}/></span><p>Skills</p>

                      </ScrollLink>


                    <ScrollLink
                      className='link-holder'
                      to="projects"
                      spy={true}
                      smooth={true}
                      offset={-170}
                      duration={500}
                      activeClass="active-link"
                    >
                      <span className='icon-wrapper'><Box size={16}/></span><p>Projects</p>
                    </ScrollLink>

                    <ScrollLink
                      className='link-holder'
                      to='services'
                      spy={true}
                      smooth={true}
                      offset={-170}
                      duration={500}
                      activeClass='active-link'
                      >

                      <span className='icon-wrapper'><Grid size={16}/></span><p>Services</p>

                      </ScrollLink>
                    </ul>
                    <div className='social'>
                      <h3>Social</h3>
                      <div className="social-icons">
                        <Twitter size={14}/>
                        <Instagram size={14}/>
                        <GitHub size={14}/>
                      </div>
                    </div>
                </div>
            </div>
        </nav>
      )
}

export default navbar
