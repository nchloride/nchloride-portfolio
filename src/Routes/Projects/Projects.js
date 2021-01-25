import React from 'react';
import {motion} from "framer-motion";
import rantapp from "../../Components/projects-picture/rantapp.png";
import carolyngullon from "../../Components/projects-picture/carolyngullon.png";
import filiisipan from "../../Components/projects-picture/fili-isipan.jpg";
import "./projects.css";
import ProjectContainer from './ProjectContainer';
const Projects = () => {
    const projects =[{
        name:"Rant-O-Media",
        description:"A social media website",
        link:"https://crud-social-media.herokuapp.com/",
        repo:"https://github.com/nchloride/Socmed-Crud",
        picture:rantapp,
        isDeveloped:true
    },
    {
        name:"Fili-isipan",
        description:"An open world cross-word puzzle game",
        link:"https://drive.google.com/file/d/1Qhd3B7g9lHHIGFp_ts15Coq3DxUp3x8A/view?usp=sharing",
        isDeveloped:true,
        picture:filiisipan
    },
    {
        name:"Carolyn Baking",
        description:"A baking portfolio",
        repo:"https://github.com/nchloride/personal-cooking-web",
        picture:carolyngullon,
        isDeveloped:false
    }
]
    return (
        <motion.div className="projects" id="Projects" >
            <motion.h1 className="projects__title">Projects</motion.h1>
            <motion.div className="projects__container">
              {projects.map((project,id)=>(<ProjectContainer isDeveloped={project.isDeveloped} delay={id} key={id} picture={project.picture} link={project.link} name={project.name} repo={project.repo} description={project.description}/>))}
            </motion.div>
        </motion.div>
    )
}

export default Projects
