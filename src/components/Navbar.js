import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
const Navbar = () => {
  const { loginWithRedirect,isAuthenticated,logout,user,isLoading } = useAuth0();
  const isUser=isAuthenticated && user;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">Github|Checker</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {isUser?<li className="nav-item active">
            <button className="btn btn-primary" onClick={()=>{logout({returnTo:window.location.origin});}}>Logout</button>
          </li>:<li className="nav-item active">
            <button className="btn btn-primary" onClick={loginWithRedirect}>Login</button>
          </li>}
        </ul>
      </div>
</nav>
  )
}

export default Navbar



          