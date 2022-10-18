import "./navBar.css"
import React from 'react';
import CartWidget from "../cartwidget/CartWidget";

export const NavBar = () => {
    return (
        <div className="container_navbar">
            <nav className="nav">
                <div>
                    <a className="nav__link" href="#">Diablo Vinos</a>
                </div>
                <ul className="nav__list">
                    <li className="nav__link" href="#">Vinos Fuertes</li>
                </ul>
                <ul className="nav__list">
                    <li className="nav__link" href="#">Vinos Suaves</li>
                </ul>
                <ul className="nav__list">
                    <li className="nav__link" href="#"><CartWidget/></li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;