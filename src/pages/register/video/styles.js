import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Content = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
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

export const Button = styled(Link)`
    background: var(--white);
    width: 200px;
    color: var(--black);
    text-align: center;
    border: 1px solid black;
    border-radius: 12px;
    height: 60px;
    font-size: 16px;
    padding: 16px;
    margin-top: 20vh;
    transition: ease 300ms;
    :hover {
        border-color: var(--secondary);
        opacity: 0.9;
        color: var(--blackLighter);
    }
`;
