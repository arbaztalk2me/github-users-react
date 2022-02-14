import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import "../index.css"
import loginImg from '../images/—Pngtree—muslim boy character using a_5961751.png';
const Login = () => {
    const { loginWithRedirect } = useAuth0();
  return (
    <div className='container container-login'>
        <div className='row '>
            <div className='col-12 col-md-8 d-flex flex-column justify-content-center align-items-center'>
                <div className='img-container '>
                    <img src={loginImg} className="img-fluid" alt="login-img"/>
                </div>
            </div>
            <div className='col-12 col-md-4  d-flex flex-column justify-content-center align-items-center '>
                <div className='d-grid gap-2'>
                    <button className='btn btn-warning' onClick={loginWithRedirect}>Login / Signup</button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Login