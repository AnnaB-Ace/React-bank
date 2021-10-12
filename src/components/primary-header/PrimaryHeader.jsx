import React, { useState } from 'react'
import './PrimaryHeader.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'

const options = [
    {
        name: 'Mi ejecutivo',
        path: ''
    },
    {
        name: 'Mis gestiones',
        path: ''
    },
    {
        name: 'Atención al cliente',
        path: ''
    }
]

const Menu = ({options}) => {
    return (<div>
        {options.map((opt, i) => (
            <span 
                key={i} 
                className="primary-header__text">
                {opt.name}
            </span>
        ))}
        {/* <span onClick={onClickExit} className="primary-header__exit">S</span> */}
        
    </div>)
}

const Close = ({subtitle, handleClose}) => {
    return (
        <div className="primary-header__close">
            {subtitle && <span className="primary-header__close-subtitle">{subtitle}</span>}
            <div className="primary-header__close-icon-container" onClick={handleClose}>
              <FontAwesomeIcon size="2x" color="gray" icon={faTimes} />
            </div>
        </div>
    )
}
const Options = ({onClickExit, email}) => {
    return (
        <div className="primary-header__options">
            <div className="options options-mail">
              {email}
            </div>
            <div className="options">
              Account settings
            </div>
            <div className="options options-logout" onClick={onClickExit}>
              Log out
            </div>
        </div>
    )
}

const PrimaryHeader = ({title = 'React Bank', handleClose, subtitle, onClickExit = () => {}}) => {
    const state = useSelector(state => state.auth)
    const{login:{data}}=state
    const{user:{email,firstName,lastName }}=data
    console.log(data, firstName, lastName)
    const [open, setOpen] = useState(false)
   const handleButton=()=>{
       if (!open) {
           setOpen(true)
       }else{
            setOpen(false)
       }
      
    }
    return (
        <div className="primary-header">
            <div>
                {title && <span className="primary-header__title">{title}</span>}
            </div>
            {handleClose ? <Close {...{handleClose, subtitle}} /> : <Menu {...{options, onClickExit}}/>}
            <span className="primary-header__user">
                <span className="primary-header__button">{firstName.charAt(0)}{lastName.charAt(0)}</span>
                <span className="primary-header__flecha"><FontAwesomeIcon size="2x" color="gray" icon={faAngleDown} onClick={handleButton} /></span>
                {open?(<Options {...{onClickExit, email}} />):null}
       
            </span>
        </div>
    )
}

export {PrimaryHeader}