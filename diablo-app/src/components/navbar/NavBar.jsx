import React from 'react';

export const NavBar = () => {
    return (
        <div className="container">
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
                    <li className="nav__link" href="#">Carrito</li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;