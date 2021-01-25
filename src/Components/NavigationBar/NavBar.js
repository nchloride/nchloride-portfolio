import React, { useState } from 'react';
import NavigationButton from '../NavigationButton/NavigationButton';
import "./navbar.css"
import Link from './NavLink';

const NavBar = () => {
    const [navOpen,setNavOpen] = useState(false);
    const pages = [{page:'home',delay:0},{page:'about',delay:.2},{page:'projects',delay:.4},{page:'contacts',delay:.6}];
    return (
        <>
            <div className={`navigation__bar ${navOpen ? "navigation__bar-open" :"" }`}>
                <ul className="links">
                {pages.map((page,id)=>(<Link page={page.page} delay={page.delay} key={id}/>))}
                </ul>
            </div>
            <NavigationButton setNavOpen ={setNavOpen}/>
        </>
    )
}

export default NavBar
