import React from 'react'
import './ErrorMessage.scss'

const ErrorMessage = ({error}) => {
    return (
        <div className="error-message">
            <span>{error}</span>
        </div>
    )
}

export {ErrorMessage}