/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom';
import facebookLogo from "../../Components/ContactIcons/facebook.svg";
import twitterkLogo from "../../Components/ContactIcons/twitter.svg";
import phoneLogo from "../../Components/ContactIcons/smartphone.svg";
import gmailLogo from "../../Components/ContactIcons/gmail.svg";
import "./contact.css"
const Contact = () => {
    return (
        <div className="contact">
            <h1>Contact me!</h1>
            <div className="contact__links">
                <a href="https://www.facebook.com/noelcarlo.lopez.3" className="link__logo">
                    <img src={facebookLogo} alt="facebook"></img>
                    <p>facebook.com/noelcarlo.lopez.3</p>
                </a>
                <a href="https://twitter.com/NCL0pez" className="link__logo">
                    <img src={twitterkLogo} alt="twitter"></img>
                    <p>twitter.com/NCL0pez</p>
                </a>
                <a href="#" className="link__logo">
                    <img src={phoneLogo} alt="PHONE"></img>
                    <p>09667605904</p>
                </a>
                <a href="#" className="link__logo">
                    <img src={gmailLogo} alt="GMAIL"></img>
                    <p>noelcarlo.lopez@gmail.com</p>
                </a>
            </div>
        </div>
    )
}

export default Contact
