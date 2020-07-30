import styled from 'styled-components';

export const Main = styled.main`
    background-color: var(--secondary);
    color: var(--white);
    margin-bottom: 20px;
    flex: 1;
    @media (max-width: 800px) {
      padding-left: 1%;
      padding-right: 1%;
    }
`;