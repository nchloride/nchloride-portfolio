import React from 'react';
import {motion} from "framer-motion";
const NavigationButton = ({setNavOpen}) => {
    const toggleNav = ()=> setNavOpen(prevData=>!prevData)
    return (
        <motion.button className="navigation__button"
         drag 
         dragConstraints={{
            top:10,
            left:10,
            right:10,
            bottom:10
        }} onClick={toggleNav}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </motion.button>
    )
}

export default NavigationButton
