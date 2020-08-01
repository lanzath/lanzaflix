import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Content, Button, Form } from './styles';
import Layout from '../../../components/Layout';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';

/**
 * New video register component
 * @returns {Element} JSX
 */
function CategoryRegister() {
  const defaultValues = {
    title: '',
    description: '',
    color: '',
  };

  const { handleChange, values, clearForm } = useForm(defaultValues);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categories/'
      : 'https://lanzaflix-server.herokuapp.com/categories/';
    fetch(URL)
      .then(async (response) => {
        const res = await response.json();
        setCategories([
          ...res,
        ]);
      });
  }, []);

  return (
    <>
      <Layout>
        <Content>
          {/* <h1> Cadastro de Categoria {values.title} </h1> */}
          <h1> Aqui ainda está em construção :( </h1>

          <img src="https://lh6.ggpht.com/bnk6-_FcqNgaJeONsfcIO1zforvjq8tYLoSLmxwDxgVLZUhEiOvwu4HSlLejFAiGwQU%3Dw300" alt="Under Construction" />
          {/* <Form onSubmit={function handleSubmit(event) {
            event.preventDefault();
            setCategories([
              ...categories,
              values,
            ]);

            clearForm(defaultValues);
          }}>

            <FormField
              label="Nome da Categoria"
              type="text"
              name="title"
              value={values.title}
              onChange={handleChange}
            />

            <FormField
              label="Descrição da Categoria"
              type="textarea"
              name="description"
              value={values.description}
              onChange={handleChange}
            />

            <FormField
              label="Cor"
              type="color"
              name="color"
              value={values.color}
              onChange={handleChange}
            />
            <Button as="button" type="submit"> Cadastrar </Button>
            {categories.length === 0 && (
              <div>
                Loading...
              </div>
            )}
            <ul>
              {categories.map((category, index) => {
                return (
                  <li key={`${category.title}${index}`}>
                    {category.title}
                  </li>
                )
              })}
            </ul>
          </Form> */}

          <Button as={Link} to="/">Voltar para home</Button>
        </Content>
      </Layout>
    </>
  );
}

export default CategoryRegister;
