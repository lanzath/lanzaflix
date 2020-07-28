import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/lanzaflixlogo.png';
import './Menu.css';
import Button from '../Button';
// import ButtonLink from './components/ButtonLink';

/**
 * Navigation Menu Component
 * @returns {Element} JSX
 */
function Menu() {
    return (
        <nav className="menu">
            <Link to="/">
                <img className="logo" src={ Logo } alt="LanzaFlix Logo"/>
            </Link>
            <Button as={ Link } className="buttonLink" to="/register/video">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;
