import React from 'react';
import { MessageContainer, ImgMeme } from './styles';
import CatImage from '../../assets/img/notFoundmeme.png'
import Layout from '../../components/Layout';

/**
 * Render a 404 - Not found page
 * @returns {Element} JSX
 */
function NotFound() {
    return (
        <Layout>
            <MessageContainer>
                <h2>404 - Not Found</h2>
                <ImgMeme src={CatImage}/>
            </MessageContainer>
        </Layout>
    );
}

export default NotFound;