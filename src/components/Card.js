import React,{useContext} from 'react'
import { MdLocationOn,MdLink,MdBusiness } from "react-icons/md";
import { GithubContext } from '../context/context'
const Card = () => {
    const{githubUser}=useContext(GithubContext);
    const{avatar_url,login,html_url,twitter_username,company,name,blog,bio,location}=githubUser;
  return (
        <div className="card mb-2" style={{width: '28rem'}}>
            <div className="card-body ">
            <div className="d-flex justify-content-center align-items-center">
                <div style={{width:'100px'}} className="me-2">
                    <img src={avatar_url} style={{height:'100%,width:100%'}} className="img-thumbnail round" alt={name}/>
                </div>
                <div className="me-2">
                    <h4>{name||login}</h4>
                    <p className='text-muted'>@{twitter_username||login}</p>
                </div> 
                <a href={html_url} className="btn btn-info btn-sm">follow</a>
            </div>
                <p className='text-muted'>{bio}</p>
                <div>
                    <p className='text-muted'><MdBusiness/>{company||"Not Mention"}</p>
                    <p className='text-muted'><MdLocationOn/>{location||"earth"}</p>
                    <a href={`https://${blog}`} style={{textDecoration:'none'}} className=""><MdLink/>{blog||"Not Mention"}</a>
                </div>
            </div>
        </div>
  )
}

export default Card


