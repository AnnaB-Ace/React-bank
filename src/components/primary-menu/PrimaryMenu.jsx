import React from 'react'
import { useHistory } from 'react-router-dom'
import './PrimaryMenu.scss'

const defaultOptions = [
    {
        name: 'Home',
        path: '/home'
    },
    {
        name: 'Paises',
        path: '/countries'
    },
    {
        name: 'Estados',
        path: '/states'
    }
]

const PrimaryMenu = ({options = defaultOptions, selected}) => {
    const history = useHistory()
    const redirect = (path) => history.push(path) 
    return (
        <div className="primary-menu">
            {options.map((opt, i) => (
                <span 
                    className={`primary-menu__text ${selected === i && 'primary-menu--text-selected'}`}
                    onClick={() => redirect(opt.path)}
                    key={i}>
                        {opt.name}
                </span>
            ))}
        </div>
    )
}

export {PrimaryMenu}