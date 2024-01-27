import { Outlet, Navigate } from 'react-router-dom'

const Auth = () => {
    let auth = {'token':true}
    return(
        auth.token ? <Outlet/> : <Navigate to="/"/>
    )
}

export default Auth;