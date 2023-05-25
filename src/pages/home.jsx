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
                Dive into the exhilarating world of digital design and development with me! My canvas stretches across <span className="highlight">web, mobile, and desktop landscapes</span>, constantly bustling with innovative projects. Despite the excitement of my current endeavors, I'm perpetually primed for <span className="highlight">fresh opportunities</span> that stir my creativity. If you're interested in joining forces to craft digital masterpieces, don't hesitate to connect. <span className="highlight">Together</span>, let's shape the future of digital innovation!
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
                Welcome to my world as a web developer, where I weave captivating narratives through the art of code. Since <span className="highlight">2022</span>, I've been immersed in the dynamic currents of modern web development, curating an extensive toolkit of state-of-the-art solutions.
                </p>
                <p>
                As I enter my second year of college, I am humbled and delighted to share my life's journey, rooted in the heart of Wisconsin, with my radiant wife and our two adorable feline companions.
                </p>
                <p>
                When I'm not crafting digital masterpieces, you'll find me indulging in the virtual worlds of video games, immersing in the cinematic universe of movies, or cherishing priceless moments with my family. My thirst for knowledge is unquenchable, and I revel in the thrill of learning and growing each day.
                </p>
                <p>
                2022 marked a pivotal chapter in my life, as I tied the knot and embarked on an exhilarating new life journey. I would be honored if you chose to be a part of this ongoing, thrilling narrative. Let's script our success <span className="highlight">story together</span>!
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
                    Step into the thrilling world of bespoke digital design with Figma! Together, we'll embark on an engaging, interactive journey where your invaluable insights will be woven into each stage of the design process. Witness your visions spring to life as we collaborate to mold the perfect concept that's as unique as you are. Let's shape your digital landscape together!
                    </p>
                </div>
                <div className="service-card" data-aos="fade-right">
                    <div className="service-card__header">
                        <h2>Development</h2>
                        <Code size={16} color='#28e98c'/>
                    </div>
                    <p>
                    Get ready for a thrilling expedition into the dynamic world of coding! I'll meticulously weave each strand of code, crafting the perfect digital tapestry to bring your website or web application to life. But this isn't just a solo act — it's a tandem venture. You'll be included in every strategic twist and turn, enabling us to seamlessly blend your vision into each line of code. Let's collaborate and watch your digital dreams come alive!
                    </p>
                </div>
                <div className="service-card" data-aos="fade-left">
                    <div className="service-card__header">
                        <h2>Sustainability</h2>
                        <Coffee size={16} color='#28e98c'/>
                    </div>
                    <p>
                    Step into the arena of peace of mind and digital autonomy! With our services, your data doesn't just stay up-to-date - it thrives, refreshed and invigorated, with minor tweaks performed free of charge. But the excitement doesn't stop there! You'll also wield full control over your digital realm with unrestricted access to your source code, allowing you to steer the course of your information flow. Together, we'll ensure your data remains dynamic, empowered, and in your command!
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
                <p>
                Ready to ignite the spark of possibility? I invite you to fill out the form below to commence our thrilling collaboration. Alternatively, you can launch a direct line of communication by sending an email to <span className="highlight">ronald.harsh@protonmail.com</span> for an in-depth exploration of possibilities and a prompt callback. Let's seize this exciting opportunity to connect and usher in a new era of digital innovation together!
                </p>
                <form action="post">
                    <label htmlFor="full-name">Full Name <span className="urgent">*</span></label>
                    <input type="text" name="full-name" id="full-name" placeholder='Interested Customer' />
                    <label htmlFor="email">Email <span className="urgent">*</span></label>
                    <input type="email" name="email" id="email" placeholder='john.doe@mycoolemail.com' />
                    <label htmlFor="subject">Subject</label>
                    <input type="text" name="subject" id="subject" placeholder='Web Development' />
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" cols="30" rows="10"></textarea>
                    <button className='button'><Mail size={24}/> Submit</button>
                </form>
            </section>
        </div>
    </div>
  )
}

export default home