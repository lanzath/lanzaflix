import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Content, Button } from './styles';
import Layout from '../../../components/Layout';
import { Form } from '../category/styles';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categories';

/**
 * New video register component
 * @returns {Element} JSX
 */
function VideoRegister() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const categoryTitles = categories.map(({ title }) => title);
  const { handleChange, values } = useForm({
    title: '',
    url: '',
    category: '',
  });

  useEffect(() => {
    categoriesRepository
      .getAll()
      .then((categoriesFromServer) => {
        setCategories(categoriesFromServer);
      });
  }, [])

  console.log(categories);

  return (
    <>
      <Layout>
        <Content>
          <h2>Cadastro de Vídeo</h2>
          <Form onSubmit={(event) => {
            event.preventDefault();
            const chosenCategory = categories.find((category) => {
              return category.title === values.category;
            });
            videosRepository.create({
              title: values.title,
              url: values.url,
              categoryId: chosenCategory.id,
            })
              .then(() => {
                console.log('Cadastrado com Sucesso :)');
                history.push('/');
              });
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
              suggestions={categoryTitles}
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
