import React from 'react';
import {NavLink} from "react-router-dom";
import {motion} from "framer-motion";
const Link = ({delay=0,page}) => {
    page = page.charAt(0).toUpperCase() + page.slice(1,page.length) ;
    return (
        <>
            <motion.li initial={{y:-100}} transition={{delay}} animate={{y:0}}>
                <NavLink to={{pathname:`/${page ==="Home" ? "":page}`}} exact className="link" activeClassName="link--clicked">{page}</NavLink>
            </motion.li>
        </>
    )
}

export default Link;
