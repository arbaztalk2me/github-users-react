import React,{useContext} from 'react'
import {Navbar,Search,Info,User,Repos,Loading} from '../components';
import { GithubContext } from '../context/context';
const Dashboard = () => {
    const{loading}=useContext(GithubContext)
    if(loading){
      return (
      
        <div>
            <Navbar/>
            <Search/>
            <Loading/>
        </div>
      )
    }
  return (
      
    <div>
        <Navbar/>
        <Search/>
        <Info />
        <User/>
        <Repos/>
    </div>
  )
}

export default Dashboard