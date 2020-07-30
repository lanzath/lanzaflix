import styled from 'styled-components';

export const FormContainer = styled.div`
    display: flex;
    flex-flow: wrap column;
`;

export const FormLabel = styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TextArea = styled.textarea`
    margin: 4px auto;
    resize: none;
    @media(max-width: 900px) {
        width: 300px;
    }
`;