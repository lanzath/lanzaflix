import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
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
