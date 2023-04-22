import React, { useState } from 'react'
import './App.css'
import './style/Home.css'
import './style/NavBar.css'
import './style/About.css'
import './style/Contact.css'
import './style/Project.css'
import './index.css'
import "tailwindcss/tailwind.css"
import Profile from "./assests/Profile.jpg"
import { motion } from "framer-motion"



function App() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    // const closeMobileMenu = () => setClick(false);

    return(
        <>
        <head>
            <title>Smooth Scroll Landing Page</title>
            <link rel="stylesheet" href="App.css"></link>
            <link href="https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css" rel="stylesheet"></link>
            
        </head>
        <body>
            <div className="main">
                <nav className="navbar">
                        <button className="pl-5 py-5" onClick={() => handleClick()}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        </button>
                        
                    <div className={click ? "nav-link text-xl md:text-2xl lg:text-3xl text-white text-opacity-80 " : "hidden"} 
                        >
                        <a href="#home" >Home</a>
                        <a href="#about">About</a>
                        <a href="#project">Projects</a>
                        <a href="#contact">Contact</a>
                    </div>
                    </nav>
                    <div className="git-link flex flex-end text-white text-opacity-50">
                <a className=" text-2xl pr-3" href="https://github.com/KevinBurgin"><i class="icon ion-logo-github"></i></a>
                    <a className=" text-2xl pr-3" href="https://www.linkedin.com/in/kevin-burgin-683110181/"><i class="icon ion-logo-linkedin"></i></a>
                    <h3>Kevin Burgin</h3>
                </div>
                <section id="home">
                    <motion.h1 className="home-title"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay:0, duration: 6}}
                    >HELLO WORLD</motion.h1>
                    <motion.div className="home-subtitle" initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay:0, duration: 6}}>
                    Full Stack Software Devleoper
                    </motion.div>
                    <motion.div className="home-name" initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay:0, duration: 6}}>Kevin Burgin</motion.div>
                </section>
                
                <section id="about">
                <div className="shadow"></div>
                <div className="about-title">About</div>
               <div className="about-container">
                
                <div className='about-img'>
                    <img className="profile" src={Profile}></img>
                    </div>
                    <div className= "bio">As a full-stack software developer with over a year of experience, I have a solid foundation in front-end and back-end development, along with the ability to integrate and manage various databases, APIs, and web services. I am proficient in popular programming languages such as Javascript, Ruby, HTML, CSS, and C#, and have hands-on experience with frameworks such as React, Ruby on Rails, ASP.NET, and .NET. With exceptional problem-solving skills, keen attention to detail, and a strong work ethic, I am confident in my ability to deliver high-quality software solutions that meet and exceed client expectations. </div>
                    </div>

                    <div className='skill-container'>
                    {/* <FontAwesomeIcon icon="fa-brands fa-react" /> */}
                    <div className='skill'>React</div>
                    <div className='skill'>JavaScript</div>
                    <div className='skill'>CSS</div>
                    <div className='skill'>Ruby</div>
                    </div>
                </section>
                <section id="project">
                    <h1 className='project-title'>Projects</h1>
                </section>
                <section id="contact" >
                    <h1 className=" contact text-4xl font-bold">
                        
                        <div className='contact-title'>Contact</div>
                        {/* <div className='contact-personal-email'>Kevinburgin33@gmail.com</div> */}
                        <div className='contact-card'>
                            <div className='contact-left'>
                                <div className='contact-name'>Full Name</div>
                                    <input className='contact-name-input'></input>
                                <div className='contact-email'>Email</div>
                                    <input className='contact-email-input'></input>
                            </div>
                            <div className='contact-right'>
                                <div className='contact-message'>Message</div>
                                    <input className='contact-message-input'></input>
                                    
                                </div>
                            </div>
                            <button className='contact-button'>Submit</button>
                    </h1>
                </section>
            </div>
                <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
                <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        </body>       
        </>
    )
}

export default App;
