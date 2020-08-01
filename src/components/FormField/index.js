import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const FormContainer = styled.div`
    position: relative;
    textarea {
      min-height: 150px;
    }
    input[type="color"] {
      display: block;
      padding-left: 60px;
    }
`;

const FormLabel = styled.label``;
FormLabel.Text = styled.span`
    color: #E5E5E5;
    height: 57px;
    position: absolute;
    top: 0;
    left: 16px;

    display: flex;
    align-items: center;

    transform-origin: 0% 0%;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;

    transition: .1s ease-in-out;
`;

const FormInput = styled.input`
    background: #53585D;
    color: #F5F5F5;
    display: block;
    width: 100%;
    height: 56px;
    font-size: 16px;

    outline: 0;
    border: 0;
    border-top: 4px solid transparent;
    border-bottom: 4px solid #53585D;

    padding: 16px 16px;
    margin-bottom: 44px;

    resize: none;
    border-radius: 4px;
    transition: border-color .3s;

    &:focus {
      border-bottom-color: var(--primary);
    }
    &:focus:not([type='color']) + ${FormLabel.Text} {
      transform: scale(.6) translateY(-10px);
    }
    ${({ value }) => {
    const hasValue = value.length > 0;
    return hasValue && css`
      &:not([type='color']) + ${FormLabel.Text} {
          transform: scale(.6) translateY(-10px);
      }
  `;
  }
  }
`;

/**
 * Form fields component
 * @param {string} type from props.type
 * @param {string} name from props.name
 * @param {object} value from props.value
 * @param {Event} onChange from props.onChange
 * @returns {Element} JSX
 */
function FormField({ label, type, name, value, onChange, suggestions }) {
  const fieldId = `id_${name}`;
  const isTextArea = type === 'textarea';
  const tag = isTextArea ? 'textarea' : 'input';

  const hasValue = Boolean(value.length);
  const hasSuggestions = Boolean(suggestions.length);

  return (
    <FormContainer>
      <FormLabel htmlFor={fieldId}>
        <FormInput
          as={tag}
          id={fieldId}
          type={type}
          name={name}
          hasValue={hasValue}
          value={value}
          onChange={onChange}
          autoComplete={hasSuggestions ? 'off' : undefined}
          list={hasSuggestions ? `suggestionFor_${fieldId}` : undefined}
        />
        <FormLabel.Text>
          {label}:
        </FormLabel.Text>
        {
          hasSuggestions && (
            <datalist id={`suggestionFor_${fieldId}`}>
              {
                suggestions.map((suggestion) => (
                  <option value={suggestion} key={`suggestionFor_${fieldId}_option${suggestion}`}>
                    {suggestion}
                  </option>
                ))
              }
            </datalist>
          )
        }
      </FormLabel>
    </FormContainer>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => { },
  suggestions: [],
}

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  suggestions: PropTypes.arrayOf(PropTypes.string),
}

export default FormField;
