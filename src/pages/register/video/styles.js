import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--black);
    color: var(--white);
    font-size: 28px;
    min-height: 500px;
    @media (min-width: 1400px) {
        min-height: 700px;
    }
    @media (max-width: 900px) {
    min-height: 300px;
    font-size: 16px;
    }
`;
