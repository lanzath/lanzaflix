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

export const FormInput = styled.input`
    width: 280px;
    height: 32px;
    margin: 4px auto;
    resize: none;
`;