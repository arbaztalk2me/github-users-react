import React from 'react'
import { Loading } from '../components';
import { useAuth0 } from "@auth0/auth0-react";

function AuthWrapper ({children}) {
    const{isLoading,error}=useAuth0()
 
      if(isLoading){
          return  <Loading/>
      }
      if(error){
          return  <h2 className="text-danger">{error.message}</h2>
      }
      return <>{children}</>;
  
}

export default AuthWrapper