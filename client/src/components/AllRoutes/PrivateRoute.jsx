import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const isAuth = useSelector(state => state.Authreducer)
    if(!isAuth){
        return <Navigate to='/login' />
    }
    return children

  
}

export default PrivateRoute
