import React,{useContext} from 'react'
import "../index.css"
import { GithubContext } from '../context/context'
import { RiGitRepositoryFill } from "react-icons/ri";
import { FiUsers,FiUserPlus,FiCode} from "react-icons/fi";
const Info = () => {
  const{githubUser}=useContext(GithubContext);
  const{public_repos,followers,following,public_gists}=githubUser;
  const items=[
    {id:1,icon:<RiGitRepositoryFill/>,label:'repos',value:public_repos,addclass:"text-primary"},
    {id:2,icon:<FiUsers/>,label:'Followers',value:followers,addclass:"text-success"},
    {id:3,icon:<FiUserPlus/>,label:'Following',value:following,addclass:"text-info"},
    {id:4,icon:<FiCode/>,label:'Gists',value:public_gists,addclass:"text-warning"}
  ]
  return (
    <div className='container mt-4'>
      <div className='row'>
        {items.map((item)=>{
          return <Item key={item.id} {...item} />
        })}
      </div>
    </div>
  )
}


const Item=({icon,label,value,addclass})=>{
  return (
    <div className='col-md-3  mb-2 shadow-sm p-0 margin-info'>
        <div className="card" >
            <div className="card-body d-flex">
              <div>
                <h2 className={addclass}>{icon}</h2>
              </div>
              <div className='ms-3'>
                <h3>{value}</h3>
                <h5 className='text-muted'>{label}</h5>
              </div>
            </div>
          </div>
        </div>
  );
}

export default Info


