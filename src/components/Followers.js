import React,{useContext} from 'react'

import { GithubContext } from '../context/context'
const Followers = () => {
    const{followers}=useContext(GithubContext);
    
  return (
    
    <div className="card mb-2" style={{width: '28rem',height:'276px',overflow:'scroll',overflowX:'hidden'}}>
            <div className="card-body ">
            {followers.map((follower,index)=>{
                const{avatar_url,login,html_url}=follower;
                return(
                   
                    <div className="d-flex  align-items-center" key={index}>
                        <div style={{width:'70px'}} className="me-2">
                            <img src={avatar_url} style={{height:'100%,width:100%'}} className="img-thumbnail round" alt={login}/>
                        </div>
                        <div className="me-2">
                            <p className='small'>{login}</p>
                            <p className='small'>{html_url}</p>
                        </div> 
                    </div>
                    
                    
                );
            })}
            </div>
        </div>
  )
}

export default Followers