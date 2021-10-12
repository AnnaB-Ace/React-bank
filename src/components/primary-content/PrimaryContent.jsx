import React from 'react'
import './PrimaryContent.scss'

const PrimaryContent = ({children}) => {
    return (
        <div className="primary-content">
            {children}
        </div>
    )
}

export {PrimaryContent}