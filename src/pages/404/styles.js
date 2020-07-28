import styled from 'styled-components';

export const MessageContainer = styled.div`
    background: var(--black);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 8rem;
    color: var(--white);
    text-align: center;
    @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;