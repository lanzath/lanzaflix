import React from 'react'

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
        <div>
            <label>
                { label }:
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                />
            </label>
        </div>
    );
}

export default FormField;