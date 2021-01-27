import React from 'react'
import { Link } from 'react-router-dom'
import "./footer.css"
const Footer = () => {
    return (
        <div className="footer">
            <h1>Developed by Carlo Lopez © 2021</h1>
            {/* <div className="links">
                <Link to="/Projects" className="footer__link">Projects</Link>
                <Link to="/Contacts" className="footer__link">Contacts</Link>
                <Link to="/About" className="footer__link">About</Link>
            </div> */}
        </div>
    )
}

export default Footer
