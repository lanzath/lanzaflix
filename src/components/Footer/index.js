import React from 'react';
import { FooterBase } from './styles';

/**
 * Footer Component
 * @returns {Element} JSX
 */
function Footer() {
    return (
        <FooterBase>
            <a href="https://www.alura.com.br/">
                <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
            </a>
            <p>
                Orgulhosamente criado durante a
                {' '}
                <a href="https://www.alura.com.br/">
                    Imersão React da Alura,
                </a>
                {' '}personalizado com &#10084;&#65039; por Thiago Lanza.
            </p>
        </FooterBase>
    );
}

export default Footer;
