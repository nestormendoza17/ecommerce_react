import "./navBar.css"
import React from 'react';
import CartWidget from "../CartWidget/CartWidget";
import {NavLink} from 'react-router-dom';
import logo from "../image/logo_large.png";

export const NavBar = () => {
    return (
        <div className="container_navbar">
            <nav className="nav">
                <div>
                    <NavLink className="nav__link" to='/'><img src={logo} width="86" alt="Logo" /></NavLink>
                </div>
                <ul className="nav__list">
                    <li> <NavLink className="nav__link" to='/categoria/tinto'>Vinos Fuertes</NavLink></li>
                </ul>
                <ul className="nav__list">
                    <li> <NavLink className="nav__link" to='/categoria/suave'>Vinos Suaves</NavLink></li>
                </ul>
                <ul className="nav__list">
                    <li><NavLink className="nav__link" to='/cart'>
                        <CartWidget/>
                        </NavLink></li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;