import React, { useState } from 'react'
import './App.css'
import './style/Home.css'
import './style/NavBar.css'
import './style/About.css'
import './style/Contact.css'
import './style/Project.css'
import Card from './Card'
import './index.css'
import { motion } from "framer-motion"



function App() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    return(
        <>
        <head>
            <title>Smooth Scroll Landing Page</title>
            <link rel="stylesheet" href="App.css"></link>
            <link href="https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css" rel="stylesheet"></link>
            
        </head>
        <body>
            <div class="container">
                <nav className="navbar">
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <i class="icon ion-logo-menu-outline"></i>
                    <div className="nav-link">
                        <motion.a initial={{opacity: 0, x: -100}}
                        animate={{opacity: 1, x: 0 }}
                        transition={{ type: "spring", duration: 2, delay: .5}}
                        hover={{scale: 2}}
                        href="#home" onClick={closeMobileMenu}>Home.</motion.a>
                        <motion.a 
                        initial={{opacity: 0, x: -100}}
                        animate={{opacity: 1, x: 0 }}
                        transition={{ type: "spring", duration: 2, delay: .7}}
                        hover={{scale: 2}}
                        href="#about" onClick={closeMobileMenu}>About.</motion.a>
                        <motion.a 
                        initial={{opacity: 0, x: -100}}
                        animate={{opacity: 1, x: 0 }}
                        transition={{ type: "spring", duration: 2, delay: .9}}
                        hover={{scale: 2}}
                        href="#project" onClick={closeMobileMenu}>Projects.</motion.a>
                        <motion.a 
                        initial={{opacity: 0, x: -100}}
                        animate={{opacity: 1, x: 0 }}
                        transition={{ type: "spring", duration: 2, delay: 1.1}}
                        hover={{scale: 2}}
                        href="#contact" onClick={closeMobileMenu}>Contact.</motion.a>
                    </div>
                </nav>
                <section id="home">
                    <h1> Kevin Burgin </h1>
                    <div className="git-link">
                    <a href="https://github.com/KevinBurgin"><i class="icon ion-logo-github"></i></a>
                    <a href="https://www.linkedin.com/in/kevin-burgin-683110181/"><i class="icon ion-logo-linkedin"></i></a>
                    <i class="icon ion-logo-menu"></i>
                    </div>
                    {/* <button onClick={() => handleClick()}>Resume</button> */}
                </section>
                <section id="about">
                    <h1>Hello, Im Kevin A Full Stack Developer</h1>
                    {/* <p>I am passionate</p> */}
                </section>
                <section id="project">
                    <h1>Projects</h1>
                        <Card/> 
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>   
                </section>
                <section id="contact" className="bg-gray-700">
                    <h1>Contact</h1>
                    <p>aksdjdfs</p>
                </section>
            </div>
        </body>       
        </>
    )
}

export default App;
