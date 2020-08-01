import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-flow: wrap column;
  align-items: center;
  background: var(--secondary);
  color: var(--white);
  font-size: 28px;
  min-height: 500px;
  padding-top: 20px;
  padding-right: 5%;
  padding-left: 5%;
  @media (min-width: 1400px) {
    min-height: 700px;
  }
  @media (max-width: 900px) {
    min-height: 300px;
    font-size: 16px;
  }
`;

export const Form = styled.form`
    display: block;
`;

export const Button = styled.a`
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  width: 200px;
  text-align: center;
  border: 1px solid transparent;
  color: var(--black);
  background: var(--white);
  border-color: var(--black);
  transition: opacity .3s;
  margin-top: 20px;
  @media (max-width: 800px) {
    display: block;
  }
`;
