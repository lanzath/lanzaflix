import React from 'react';
import { Content, Button } from './styles';
import Layout from '../../../components/Layout';

/**
 * New video register component
 * @returns {Element} JSX
 */
function VideoRegister() {
  return (
    <>
      <Layout>
        <Content>
          <h2>Cadastro de Vídeo</h2>
          <Button to="/register/category" style={{ textDecoration: 'none', fontWeight: 'bold' }}>
            Cadastrar Categoria
          </Button>
        </Content>
      </Layout>
    </>
  );
}

export default VideoRegister;
