import React from 'react';
import Logo from '../../assets/img/lanzaflix-logo.png';
import ButtonLink from './components/ButtonLink';
import './Menu.css';

/**
 * Navigation Menu Component
 * @returns {Element} JSX
 */
function Menu() {
    return (
        <nav className="menu">
            <a href="/">
                <img className="logo" src={Logo} alt="LanzaFlix Logo"/>
            </a>
            <ButtonLink className="buttonLink" href="/">
                Novo Vídeo
            </ButtonLink>
        </nav>
    );
}

export default Menu;
