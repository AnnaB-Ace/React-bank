import React from 'react'
import './Login.scss'
import {Button, Input} from '../../components'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAuthAction } from '../../store/actions'

const Login = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.auth)
    const {login: {isLoading}} = state;

    const [formData, setFormData] = useState({
        user: '',
        password: ''
    })

    const {user, password} = formData

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name]: value
        })

    }
    
    const register = () => {}
    const submit = async () => {dispatch(getAuthAction(formData.user, formData.password))}



    const loginDisabled = !user || !password || isLoading
    return <div className="login">
        <div className="login__content">
            <div className="login__box">
                <span className="login__box-text">No brindes datos personales por correo, teléfono, SMS o redes sociales.</span>
            </div>
            <Input label="Usuario:" value={user} name="user" onChange={handleChange}/>
            <Input label="Contraseña:" value={password} name="password" onChange={handleChange}/>
            <div style={{display: 'flex'}}>
                <Button 
                    text="Registrarme" 
                    type="secondary" 
                    onClick={register}
                />
                <Button 
                    text="Ingresar" 
                    type="primary" 
                    onClick={submit}
                    isLoding={isLoading}
                    disabled={loginDisabled}
                />
            </div>
        </div>
    </div>
}

export default Login

        // fetch("https://lgx-users.herokuapp.com/api/auth/sign-in", {
        // method: "POST",
        // headers: {
        // 'Content-Type': 'application/json'
        // },
        // body: JSON.stringify({
        //     email: formData.user,
        //     password: formData.password
        // })
        // })
        // .then(response => response.json())
        // .then( (response) => { 
        //     history.push('/home')
        // })
        // .catch(err => {
        //     console.log('Err', err)
        // })

        // axios({
        // method: 'post',
        // url: "https://lgx-users.herokuapp.com/api/auth/sign-in",
        // data: {
        //     email: formData.user,
        //     password: formData.password
        // }
        // })
        // .then( (response) => { 
        //     history.push('/home')
        // })
        // .catch(err => {
        //     console.log('Err', err)
        // });