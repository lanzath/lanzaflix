import React from 'react';
import Logo from '../../assets/img/lanzaflixlogo.png';
// import ButtonLink from './components/ButtonLink';
import './Menu.css';
import Button from '../Button';

/**
 * Navigation Menu Component
 * @returns {Element} JSX
 */
function Menu() {
    return (
        <nav className="menu">
            <a href="/">
                <img className="logo" src={ Logo } alt="LanzaFlix Logo"/>
            </a>
            <Button as="a" className="buttonLink" href="/">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;
