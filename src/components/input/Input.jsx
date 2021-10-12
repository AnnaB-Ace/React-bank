import React from 'react'
import './Input.scss'

export const Input = ({
    label = '',
    type = 'text',
    value,
    onChange = () => {},
    name, 
    placeholder
}) => {
    return <div className="input">
        <span className="input__label">{label}</span>
        <input {...{type, placeholder, onChange, name, value}} />
    </div>
}
