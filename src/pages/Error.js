import React from 'react'
import { Link } from 'react-router-dom'
import "../index.css"
const Error = () => {
  return (
    <div className='container height-error d-flex flex-column justify-content-center align-items-center ' >
        <h1>404</h1>
        <h5>Sorry the page you tried cannot br found.</h5>
        <Link to="/" className='btn btn-outline-primary'>BACK HOME</Link>
    </div>
  )
}

export default Error