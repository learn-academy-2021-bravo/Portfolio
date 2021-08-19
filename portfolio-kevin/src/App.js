import React, { useState } from 'react'
import './App.css'
import './style/Home.css'
import './style/NavBar.css'
import './style/About.css'
import './style/Contact.css'
import './style/Project.css'
import Card from './Card'
import './index.css'
import "tailwindcss/tailwind.css"
import Profile from "./assests/Profile.jpg"
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
            <div className="main">
                <nav className="navbar">
                    {/* <div className="pl-3 py-2">
                        <button onClick={() => handleClick()}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        </button> */}
                    <div className= "nav-link  text-xl md:text-2xl lg:text-3xl text-white text-opacity-50"  
                        >
                        <motion.a 
                        initial={{opacity: 0, x: -100}}
                        animate={{opacity: 1, x: 0 }}
                        transition={{ type: "spring", duration: 2, delay: .9}}
                        hover={{scale: 2}}
                        href="#home" >Home.</motion.a>
                        <motion.a 
                        initial={{opacity: 0, x: -100}}
                        animate={{opacity: 1, x: 0 }}
                        transition={{ type: "spring", duration: 3, delay: .9}}
                        hover={{scale: 2}}
                        href="#about">About.</motion.a>
                        <motion.a 
                        initial={{opacity: 0, x: -100}}
                        animate={{opacity: 1, x: 0 }}
                        transition={{ type: "spring", duration: 4, delay: .9}}
                        hover={{scale: 2}}
                        href="#project">Projects.</motion.a>
                        <motion.a 
                        initial={{opacity: 0, x: -100}}
                        animate={{opacity: 1, x: 0 }}
                        transition={{ type: "spring", duration: 5, delay: .9}}
                        hover={{scale: 2}}
                        href="#contact">Contact.</motion.a>
                    </div>
                    {/* </div> */}
                </nav>
                <section id="home">
                <div className="git-link flex text-white text-opacity-50">
                <a className=" text-2xl pr-3" href="https://github.com/KevinBurgin"><i class="icon ion-logo-github"></i></a>
                    <a className=" text-2xl pr-3" href="https://www.linkedin.com/in/kevin-burgin-683110181/"><i class="icon ion-logo-linkedin"></i></a>
                    <h3>Kevin Burgin</h3>
                </div>
                <div className="intro">
                    <p className=" ">Hello, Im Kevin Burgin</p>
                    <h3 className=" ">A Full Stack Developer</h3>
                    
                </div>
                    {/* <button onClick={() => handleClick()}>Resume</button> */}
                </section>
                <section id="about">
                    <h1>Hello, Im Kevin A Full Stack Developer</h1>
                    <img className="w-40 h-50 "src={Profile}></img>
                    {/* <p>I am passionate</p> */}
                </section>
                <section id="project">
                    <h1>Projects</h1>
                        <Card/> 
                        <Card/>
                        <Card/>  
                </section>
                <section id="contact" className="">
                    <h1>Contact</h1>
                    <p>aksdjdfs</p>
                </section>
            </div>
            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        </body>       
        </>
    )
}

export default App;
