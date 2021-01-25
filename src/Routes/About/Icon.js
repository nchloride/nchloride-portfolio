import React from 'react';
import {motion} from "framer-motion";
const Icon = ({icon,delay}) => {
    delay = delay * .10;
    return (
        <motion.img src={icon} initial={{x:10}} animate={{x:0}} transition={{delay,ease:'easeIn'}}/>
    )
}

export default Icon
