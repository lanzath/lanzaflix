import styled from 'styled-components';

export const MessageContainer = styled.div`
    background: var(--secondary);
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    min-height: 500px;
    color: var(--white);
    text-align: center;
    h2 {
      font-size: 36px;
      padding-bottom: 32px;
      line-height: 16px
    }
    @media (min-width: 1400px) {
      min-height: 700px;
    }
    @media (max-width: 800px) {
      font-size: 20px;
      padding: 0;
      img {
        border-radius: 30px;
        max-width: 120px;
        padding-top: 120px;
        height: auto;
      }
    }
`;

export const ImgMeme = styled.img`
  border-radius: 30px;
  max-width: 80%;
  height: auto;
`;
