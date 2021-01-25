import React from 'react';
import {motion} from "framer-motion";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import css from "../../Components/Icon/css-3.svg";
import html from "../../Components/Icon/html5.svg";
import js from "../../Components/Icon/javascript.svg";
import nodeJs from "../../Components/Icon/nodejs.svg";
import react from "../../Components/Icon/react.svg";
import mysql from "../../Components/Icon/mysql.svg";
import mongodb from "../../Components/Icon/mongodb-ar21.svg";
import csharp from "../../Components/Icon/hashtag.svg";
import Icon  from "./Icon.js";
import { Link } from 'react-router-dom';
const AboutInformation = () => {
    const icons = [css,html,js,nodeJs,react,mysql,mongodb,csharp];
    const variants={
        shrink:{scale:0},
        grow:{scale:1}
    };
    return (
        <motion.div className="about__information" initial={{opacity:0}} transition={{delay:.5, ease:'easeIn'}} animate={{opacity:1}} exit={{opacity:0}}>
            <motion.p   className="introduction" variants={variants} initial="shrink" transition={{delay:1}} animate="grow" >
                A computer science graduate from STI college and also an aspiring Software Developer,
                I love doing fullstack development. I discovered my love for coding when I was in 1st year,
                <br></br>"The more I create something, the more I got into it"
            </motion.p>
            <motion.div className="skills">
                <motion.h2>Skills</motion.h2>
                <motion.div className="skills__logo">
                   {icons.map((icon,id)=>(<Icon key={id} icon={icon} delay={id}/>))}
                </motion.div>
            </motion.div>
            <motion.div>
                <Link to={{pathname:"https://github.com/nchloride?tab=repositories"}} target="_blank" className="projects__link">
                    <motion.div initial={{x:-5}} animate={{x:0}} transition={{repeat:Infinity,duration:1}}>
                        <ArrowForwardIcon/>
                    </motion.div>
                    <motion.h1>Projects</motion.h1>
                    <motion.div initial={{x:5}} animate={{x:0}} transition={{repeat:Infinity,duration:1}}>
                        <ArrowBackIcon/>
                    </motion.div>
                </Link>
            </motion.div>
        </motion.div>
    )
}

export default AboutInformation
