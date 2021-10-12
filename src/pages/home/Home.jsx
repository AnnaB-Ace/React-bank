import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {PrimaryHeader, PrimaryMenu, PrimaryContent} from '../../components'
import { LogotAuthAction } from '../../store/actions'

const Home = () => {
  const dispatch = useDispatch()
  const state = useSelector(state => state.auth)
  const {login: {data}} = state;

  const handleClose=()=>{
    dispatch(LogotAuthAction())
  }

    return <>
      <PrimaryHeader onClickExit={handleClose} />
      <PrimaryMenu selected={0}/>
      <PrimaryContent>
        <span>Hola {data?.user?.firstName}</span>
      </PrimaryContent>
    </>
}

export default Home