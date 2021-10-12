import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import './Button.scss'

export const Button = ({onClick, text = '', type = 'primary', disabled, isLoding}) => {
console.log(isLoding)
    const selectClass = () => {
        let _class = ''
        switch (type) {
            case 'primary':
                _class = 'button--especial'
                break;
            case 'secondary':
                _class = 'button--secondary'
                break;
            default:
                _class = 'button--especial'
                break;
        }
        return _class
    }

    return <button 
            className={`button ${selectClass()}`}
            disabled={disabled}
            {...{onClick}}>
            {isLoding 
                ? <div style={{height: 30, paddingTop: '8px'}}><ClipLoader color="#1973b8" loading={true} size={20} /></div>
                : text}
        </button>
}