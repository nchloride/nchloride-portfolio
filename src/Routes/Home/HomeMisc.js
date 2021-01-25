import React from 'react'
import coding from "../../Components/HomeIcons/coding.svg";
import editing from "../../Components/HomeIcons/film-reel.svg";
import fullstack from "../../Components/HomeIcons/arrows.svg";
const HomeMisc = () => {
    return (
        <div className="home__misc">
            <h1 className="home_misc_title">What can I do?</h1>
            <div className="misc__services">
                <section className="service">
                    <img src={coding} alt="coding"></img>
                    <h1>Develop websites</h1>
                    <p>I can create websites for your business </p>
                </section>
                <section className="service">
                    <img src={editing} alt="editing"></img>
                    <h1>image and video editing</h1>
                    <p>I can do multimedia works for you</p>
                </section>
                <section className="service">
                    <img src={fullstack} alt="fullstack"></img>
                    <h1>Fullstack development</h1>
                    <p>I am mostly focused on building fullstack web application</p>
                </section>
            </div>
        </div>
    )
}

export default HomeMisc
