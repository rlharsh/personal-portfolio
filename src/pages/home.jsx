import React from 'react'

import UserInformation from '../Components/user/userinformation'
import '../assets/css/home.css'
import { Box, Code, Coffee, Figma, Grid, Home, Mail, User, Zap } from 'react-feather'

import chat from '../assets/images/chat.png'

const home = () => {
  return (
    <div className='home'>
        <UserInformation />
        <div className='container'>
            <section id="introduction" data-aos="fade-up" className='introduction'>
                <div className='slug'>
                    <p><Home size={14}/> Introduction</p>
                </div>
                <h1 className='container__header'>
                    Say hi to <span className="highlight">Ronald,</span><br/>Web designer & developer.
                </h1>
                <p>
                    I design and develop things for the web, mobile, and desktop. I'm currently working on a few projects, but I'm always open to new opportunities. If you'd like to work together, feel free to reach out.
                </p>
            </section>
            <section id="about" data-aos="fade-up">
                <div className='slug'>
                    <p><User size={14}/> About</p>
                </div>
                <h2 className='container__header'>
                    Every great story starts with a great <span className='highlight'>story teller</span>.
                </h2>
                <p>
                    And that's what I do, as a web-developer I tell stories through my code. I have been studying and implementing modern web development solutions since <span className='highlight'>2022</span>.
                </p>
                <p>
                    Currently in my second year of college, I live in the state of Wisconsin with my beautiful wife and two cats.
                </p>
                <p>
                    In my free time I enjoy playing video games, watching movies, and spending time with my family. I also enjoy learning new things and expanding my knowledge.
                </p>
                <p>
                    In 2022 I finally got married and decided to start my life anew. I would very much like for you to become <span className='highlight'>part of my story</span>.
                </p>
            </section>
            <section id="services" data-aos="fade-up">
                <div className="slug">
                    <p><Grid size={14}/>Services</p>
                </div>
                <div className="service-card" data-aos="fade-left">
                    <div className="service-card__header">
                        <h2>Website Design</h2>
                        <Figma size={16} color='#28e98c'/>
                    </div>
                    <p>
                        I create unique digital designs concepts using Figma. You will be able to provide input every step of the way throughout the design process.
                    </p>
                </div>
                <div className="service-card" data-aos="fade-right">
                    <div className="service-card__header">
                        <h2>Development</h2>
                        <Code size={16} color='#28e98c'/>
                    </div>
                    <p>
                        I will handcraft the code needed to get your website, or web application live. You will be able to consult with me at every step throughout the process.
                    </p>
                </div>
                <div className="service-card" data-aos="fade-left">
                    <div className="service-card__header">
                        <h2>Sustainability</h2>
                        <Coffee size={16} color='#28e98c'/>
                    </div>
                    <p>
                        You can rest assured knowing that your data can remain current, with minor updates available at no charge. You will also be provided with full access to source code, meaning that you control the flow of your information.
                    </p>
                </div>
            </section>
            <section className="skills" data-aos="fade-up">
                <div className="slug">
                    <p><Zap size={14}/>Skills</p>
                </div>
            </section>
            <section id="projects" data-aos="fade-up">
                <div className='slug'>
                    <p><Box size={14}/> Projects</p>
                </div>
                <h2 className='container__header'>
                    Featured <span className="highlight">Projects</span>
                </h2>
                <div className='project-card' data-aos="fade-left">
                    <div className='project-card__image'></div>
                    <a href="https://vermillion-gnome-a889b2.netlify.app/" target='_blank'>Chatnonymous - Anonymous chat application.</a>
                </div>
            </section>
            <section id="contact" data-aos="fade-up">
                <div className='slug'>
                    <p><Mail size={14}/> Contact</p>
                </div>
                <h2 className='container__header'>
                    Let's <span className="highlight">Talk</span>
                </h2>
                <p>ronald.harsh@protonmail.com</p>
                <form action="post">
                    <label htmlFor="full-name">Full Name</label>
                    <input type="text" name="full-name" id="full-name" />
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                    <label htmlFor="subject">Subject</label>
                    <input type="text" name="subject" id="subject" />
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" cols="30" rows="10"></textarea>
                </form>
            </section>
        </div>
    </div>
  )
}

export default home