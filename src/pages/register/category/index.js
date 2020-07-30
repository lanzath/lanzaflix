import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Content, Button, Form } from './styles';
import Layout from '../../../components/Layout';
import FormField from '../../../components/FormField';

/**
 * New video register component
 * @returns {Element} JSX
 */
function CategoryRegister() {
  const defaultValues = {
    name: '',
    description: '',
    color: '',
  };
  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(defaultValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(event) {
    setValue(
      event.target.getAttribute('name'),
      event.target.value
    );
  }

  useEffect(() => {
    const url = 'http://localhost:8080/categories/';
    fetch(url)
      .then(async (response) => {
        const res = await response.json();
        setCategories([
          ...res,
        ]);
      });
  }, [

  ]);

  return (
    <>
      <Layout>
        <Content>
          <h1> Cadastro de Categoria {values.name} </h1>

          <Form onSubmit={function handleSubmit(event) {
            event.preventDefault();
            setCategories([
              ...categories,
              values,
            ]);

            setValues(defaultValues)
          }}>

            <FormField
              label="Nome da Categoria"
              type="text"
              name="name"
              value={values.name}
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
                  <li key={`${category.name}${index}`}>
                    {category.name}
                  </li>
                )
              })}
            </ul>
          </Form>

          <Link to="/">Voltar para home</Link>
        </Content>
      </Layout>
    </>
  );
}

export default CategoryRegister;
