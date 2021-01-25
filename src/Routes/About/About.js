import React ,{useState}  from 'react'
import {motion,AnimateSharedLayout, AnimatePresence} from "framer-motion";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Me from "../../Components/pictures/me.jpg";
import "./about.css"
import AboutInformation from './AboutInformation';
import useDetailHooks from '../../Helper/detailsOpenHooks';
const About = () => {
    const [toggleOpen,isDetailsOpen] = useDetailHooks(false);

    return (
     
            <motion.div id="About" layout className="about__page">
                <AnimateSharedLayout >
                    <motion.div className='about'>
                        <motion.div
                        className={`about__details ${isDetailsOpen && 'about__details-clicked'}`}
                        layout
                        >
                            <motion.div
                            layout 
                            className="about__profile" 
                            onClick={toggleOpen}
                            >
                                <motion.img src={Me} alt="me" className="about__photo" ></motion.img>
                                <motion.h1 >Hi! Im Noel Carlo Lopez</motion.h1>
                                { !isDetailsOpen && <ArrowDownwardIcon className="about__arrow"/>}
                            </motion.div>
                            <AnimatePresence>
                                {isDetailsOpen && <AboutInformation toggleOpen={toggleOpen}/>}
                            </AnimatePresence>
                        </motion.div>
                    </motion.div>
                </AnimateSharedLayout>
            </motion.div>

    )
}

export default About
