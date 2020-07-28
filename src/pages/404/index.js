import React from 'react';
import { MessageContainer, ImgMeme } from './styles';
import CatImage from '../../assets/img/notFoundmeme.png'
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

/**
 * Render a 404 - Not found page
 * @returns {Element} JSX
 */
function NotFound() {
    return (
        <>
            <Menu />
            <MessageContainer>
                <h1>404 - Not Found</h1>
                <ImgMeme src={CatImage}/>
            </MessageContainer>
            <Footer />
        </>
    );
}

export default NotFound;