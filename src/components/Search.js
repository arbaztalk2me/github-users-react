import React,{useState,useContext} from 'react'
import { GithubContext } from '../context/context';

const Search = () => {
  const[user,setUser]=useState("");
  const{request,error,searchGithubUser,loading}=useContext(GithubContext);
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(user){
      searchGithubUser(user)
    }
  }

  return (
    <div className='container mt-3 mb-2'>
      {error.show&&<p className='text-danger'>{error.msg}</p>}
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input value={user} onChange={(e)=>setUser(e.target.value)} type="text" className="form-control" placeholder="Search username" />
         { request===0||loading?<button className="btn btn-outline-primary" disabled type="submit">Search</button>:<button className="btn btn-outline-primary"  type="submit">Search</button>}
        </div>
      </form>
      <h3 className="text-center text-muted">Requests : {request}/60</h3>
    </div>
  )
}

export default Search