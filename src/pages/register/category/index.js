import React from 'react';
import { Link } from 'react-router-dom';
import { Content, Button } from './styles';
import Layout from '../../../components/Layout';

/**
 * New video register component
 * @returns {Element} JSX
 */
function CategoryRegister() {
    return (
        <>
            <Layout>
                <Content>
                    <h1>Under Construction</h1>
                    <img src="https://lh6.ggpht.com/bnk6-_FcqNgaJeONsfcIO1zforvjq8tYLoSLmxwDxgVLZUhEiOvwu4HSlLejFAiGwQU%3Dw300" alt="doge" />
                    <Button as={Link} to="/">(Country Roads) Take me home xD</Button>
                </Content>
            </Layout>
        </>
    );
}

export default CategoryRegister;
