import React from 'react'

import UserInformation from '../Components/user/userinformation'
import '../assets/css/home.css'
import { Award, Book, Box, Code, Coffee, Figma, Grid, Home, Mail, User, Zap } from 'react-feather'

import chat from '../assets/images/chat.png'
import dictionary from '../assets/images/Dictionary.png';
import github from '../assets/images/DevFinder.png';

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
            <section className="skills" data-aos="fade-up">
                <div className="slug">
                    <p><Zap size={14}/>Skills</p>
                </div>
                <div className="skills-container">

                    { /* HTML5 skill */}
                    <div className="skill" data-aos="fade-right">
                        <div className="skill__header">
                            <h2>HTML5</h2>
                            <i className="fa-brands fa-html5 fa-beat"></i>
                        </div>
                        <p>
                        The cornerstone of web development, offering enriched semantics, streamlined coding, and advanced web forms. As a backbone of every web application, it supports interactive content, ensuring cross-platform compatibility. My proficiency with HTML5 has enabled me to build structured and accessible web content, facilitating intuitive user navigation.
                        </p>
                    </div>

                    { /* JavaScript skill */}
                    <div className="skill" data-aos="fade-left">
                        <div className="skill__header">
                            <h2>JavaScript</h2>
                            <i className="fa-brands fa-js fa-bounce"></i>
                        </div>
                        <p>
                        A dynamic scripting language that powers interactivity on the web, enabling rich, engaging digital experiences. Its versatility spans client-side and server-side development. With JavaScript, I've crafted interactive features, data-driven applications, and asynchronous communication, bringing websites to life and enhancing user engagement.
                        </p>
                    </div>

                    { /* ReactJS Skill */ }
                    <div className="skill" data-aos="fade-right">
                        <div className="skill__header">
                            <h2>ReactJS</h2>
                            <i className="fa-brands fa-react fa-spin"></i>
                        </div>
                        <p>
                        A robust JavaScript library famed for constructing seamless user interfaces. Excelling in crafting single-page applications, it boosts user experiences with its dynamic rendering and efficient data updates. Harnessing ReactJS, I've created reusable components that improve development efficiency and maintainability across diverse projects.
                        </p>
                    </div>

                    { /* NodeJS Skill */ }
                    <div className="skill" data-aos="fade-left">
                        <div className="skill__header">
                            <h2>Node</h2>
                            <i className="fa-brands fa-node-js fa-shake"></i>
                        </div>
                        <p>
                        A powerful JavaScript runtime that fosters scalable network applications, heralding a revolution in server-side development. With its non-blocking I/O model, it excels at real-time applications and data-intensive tasks. Leveraging NodeJS, I've created efficient, high-performance back-end services that bolster web application functionality and user experiences.
                        </p>
                    </div>

                    { /* Sass Skill */ }
                    <div className="skill" data-aos="fade-right">
                        <div className="skill__header">
                            <h2>Sass</h2>
                            <i className="fa-brands fa-sass fa-beat"></i>
                        </div>
                        <p>
                        An innovative CSS extension language that supercharges style sheets with variables, nesting, and mixins. By promoting reusable styles and reducing repetition, it elevates maintainability and design consistency. My mastery of Sass has facilitated the crafting of sophisticated, efficient style sheets, driving compelling, unified aesthetics across web applications.
                        </p>
                    </div>

                </div>
            </section>
            <section id="education" data-aos="fade-up">
                <div className='slug'>
                    <p><Book size={14}/> Education</p>
                </div>
                <div className='education-tile'>
                    <div className='education-tile__header'>
                        <div className="education-tile__header__left">
                            <h2>Nicolet College</h2>
                            <p>Rhinelander, WI</p>
                        </div>
                        <div className="education-tile__header__right">
                            <h2>Degree: <span className='highlight'>Associates of Science</span></h2>
                            <p>2022-Present</p>
                        </div>
                    </div>
                    <div className="education-tile__body">
                        <p>Currently, I'm advancing my technical prowess by pursuing an Associates degree in IT - Web Software Development. This rigorous program has enabled me to gain comprehensive insights into the world of web development, honing my proficiency in diverse programming languages, web design strategies, database management, and more. As I navigate this academic journey, I'm equipped with a growing toolkit of cutting-edge skills to craft intuitive, dynamic web solutions.</p>
                        <h2>Areas of Study:</h2>
                        <ul>
                            <li data-aos="fade-right"><p><span className="highlight">Web Design</span>: Expertly transform reference images into dynamic web applications, bringing unique digital visions to life with precision and creativity.</p></li>
                            <li data-aos="fade-left"><p><span className="highlight">Project Management</span>: Lead projects from conception to completion, utilizing strategic planning, resource allocation, and proactive problem-solving to ensure timely and successful delivery.</p></li>
                            <li data-aos="fade-right"><p><span className="highlight">Communication</span>: Harness excellent communication skills to foster effective collaboration, streamline processes, and ensure clarity and alignment within project teams.</p></li>
                            <li data-aos="fade-left"><p><span className="highlight">Web Software Programming</span>: Skilled in crafting efficient, scalable web software, leveraging diverse programming languages and frameworks to create robust, user-centric solutions.</p></li>
                        </ul>
                    </div>
                </div>
            </section>
            <section id="awards" data-aos="fade-up">
                <div className='slug'>
                    <p><Award size={14}/> Awards</p>
                </div>
                <div className="award-container">
                    <div className="award-container__header">
                        <h2>Deans List</h2>
                        <p>2022-Present</p>
                    </div>
                    <div className="award-container__body">
                        <p>
                        A prestigious academic honor consistently awarded in recognition of my high scholastic performance and commitment to excellence throughout my IT - Web Software Development Associates program. This acknowledgment underscores my dedication to maintaining a high standard of learning, reflecting my potential for success in rigorous professional environments.
                        </p>
                    </div>
                </div>
                <div className="award-container">
                    <div className="award-container__header">
                        <h2>Phi Theta Kappa</h2>
                        <p>2022-Present</p>
                    </div>
                    <div className="award-container__body">
                        <p>
                        Honored with membership in this prestigious international honor society, reserved for high-achieving students in two-year colleges. This recognition underscores my commitment to academic excellence, leadership, and service, highlighting my drive for continual learning and personal growth in my pursuit of web development mastery.
                        </p>
                        <p>Click <a href="../../ptk-ronald.pdf" target="_blank" rel="noopener noreferrer">here</a> to download a copy of certification.</p>
                    </div>
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
                    <img src={dictionary} className='project-image' alt="Dictionary Project Screenshot" />
                    <a href="https://creative-moxie-076da4.netlify.app/" target='_blank'>Dictionary</a>
                    <p>An online dictionary that consumes a public API, built using React & TypeScript.</p>
                </div>
                <div className='project-card' data-aos="fade-left">
                    <img src={github} className='project-image' alt="Dictionary Project Screenshot" />
                    <a href="https://gorgeous-arithmetic-e2e15a.netlify.app/" target='_blank'>GitHub User Information</a>
                    <p>A GitHub user search, built using React & TypeScript.</p>
                </div>
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
                    Step into the arena of peace of mind and digital autonomy! With my services, your data doesn't just stay up-to-date - it thrives, refreshed and invigorated, with minor tweaks performed free of charge. But the excitement doesn't stop there! You'll also wield full control over your digital realm with unrestricted access to your source code, allowing you to steer the course of your information flow. Together, we'll ensure your data remains dynamic, empowered, and in your command!
                    </p>
                </div>
            </section>
        </div>
    </div>
  )
}

export default home
