import styled from 'styled-components';

export const MessageContainer = styled.div`
    background: var(--black);
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    font-size: 40px;
    min-height: 500px;
    color: var(--white);
    text-align: center;
    @media (min-width: 1400px) {
        min-height: 700px;
    }
    @media (max-width: 900px) {
    font-size: 20px;
    img {
        border-radius: 30px;
        max-width: 120px;
        height: auto;
    }
  }
`;

export const ImgMeme = styled.img`
    border-radius: 30px;
    max-width: 80%;
    height: auto;
`;
