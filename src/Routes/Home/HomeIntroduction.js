import React, { useEffect, useState } from 'react';
import useSound from "use-sound";
import {motion} from "framer-motion";
import chorvald from "../../Components/pictures/ChorVald.jpg";
import donttouchme from "./soundFX/donttouchme.m4a";
import iloveyou from "./soundFX/iloveyou.m4a";

const HomeIntroduction = () => {
    const soundClip = ['',donttouchme,iloveyou];
    const [randomNumber,setRandomNumber] = useState(1);
    const [play] = useSound(soundClip[randomNumber]);

    const tagLines = ["Please!","do not ","hover your cursor","on my picture"];
    const onMouseEnter = () =>{
        play();
        setRandomNumber(Math.ceil(Math.random() *( soundClip.length)-1));
    }

    return (
        <>
            <section className="home__intro">
                    <div className="intro__picture">
                        <motion.img onMouseEnter={onMouseEnter} animate={{rotate:360}} src={chorvald}></motion.img>
                        <h1>Noel Carlo Lopez</h1>
                        <h2>1999-????</h2>
                    </div>
                    <div className="tagLines">
                        {tagLines.map((tagLine,index)=><TagLineContainer tagLine={tagLine} delay={index} key={index}/>)}
                    </div>
            </section>
        </>
    )
}
const TagLineContainer = ({tagLine,delay})=> {
    delay = delay *.50;
    return (
        <motion.div className="tagline" initial={{opacity:0}} transition={{delay,ease:"easeIn"}} animate={{opacity:1}}>
            {tagLine}
        </motion.div>
    )
 }

export default HomeIntroduction
