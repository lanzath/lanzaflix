import React from 'react'
import { FormContainer, FormLabel, FormInput } from './styles';

/**
 * Form fields component
 * @param {string} type from props.type
 * @param {string} name from props.name
 * @param {object} value from props.value
 * @param {Event} onChange from props.onChange
 * @returns {Element} JSX
 */
function FormField({ label, type, name, value, onChange }) {
    return (
        <FormContainer>
            <FormLabel>
                { label }:
                <FormInput
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                />
            </FormLabel>
        </FormContainer>
    );
}

export default FormField;
