import React from 'react';
import { useHistory } from 'react-router-dom';
import { Content, Button } from './styles';
import Layout from '../../../components/Layout';
import { Form } from '../category/styles';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';

/**
 * New video register component
 * @returns {Element} JSX
 */
function VideoRegister() {
  const history = useHistory();
  const { handleChange, values } = useForm({
    title: '',
    url: '',
    category: '',
  });

  return (
    <>
      <Layout>
        <Content>
          <h2>Cadastro de Vídeo</h2>
          <Form onSubmit={(event) => {
            event.preventDefault();
            history.push('/');
          }}>
            <FormField
              label="Título do Vídeo"
              type="text"
              name="title"
              value={values.title}
              onChange={handleChange}
            />
            <FormField
              label="URL"
              name="url"
              value={values.url}
              onChange={handleChange}
            />
            <FormField
              label="Categoria"
              name="category"
              value={values.category}
              onChange={handleChange}
            />

            <Button as="button" type="submit">
              Cadastrar Vídeo
            </Button>
          </Form>
          <Button to="/register/category">
            Cadastrar Categoria
          </Button>
        </Content>
      </Layout>
    </>
  );
}

export default VideoRegister;
