import React from 'react';
import { MessageContainer } from './styles';

/**
 * Render a 404 - Not found page
 * @returns {Element} JSX
 */
function NotFound() {
    return (
        <MessageContainer>
            <h1>404 - Not Found</h1>
        </MessageContainer>
    );
}

export default NotFound;