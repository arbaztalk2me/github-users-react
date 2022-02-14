import React,{useState,useEffect} from 'react';
import axios from 'axios';
import mockFollowers from './mockData/mockFollowers';
import mockRepos from './mockData/mockRepos';
import mockUser from './mockData/mockUser';


const GithubContext=React.createContext();
const profile_url="https://api.github.com/users/";
const followers_url="https://api.github.com/users/arbaztalk2me/followers";
const repos_url="https://api.github.com/users/arbaztalk2me/repos?per_page=100";
const limit_url='https://api.github.com/rate_limit';



const GithubProvider=({children})=>{
    const [githubUser,setGithubUser]=useState(mockUser);
    const [repos,setRepos]=useState(mockRepos);
    const [followers,setFollowers]=useState(mockFollowers);
    const[request,setRequest]=useState(0);
    const[loading,setLoading]=useState(false);
    const[error,setError]=useState({
        show:false,
        msg:""
    })
    const checkLimit=async()=>{
        const response=await axios(limit_url).then(({data})=>{
                let {rate:{remaining},}=data
                setRequest(remaining)
                if(remaining===0){
                    // throw err
                    toggleError(true,"Your Search Limit is over")
                }
        }).catch((err)=>console.log(err))
        
    }

    const searchGithubUser=async(user)=>{
        setLoading(true)
        toggleError()
        const response=await axios(`${profile_url}${user}`).catch((err)=>console.log(err))
        if(response){
            setGithubUser(response.data)
            const{login,followers_url}=response.data;
            await axios(`${profile_url}${login}/repos?per_page=100`).then(response=>setRepos(response.data))

            await axios(`${followers_url}?per_page=100`).then(response=>setFollowers(response.data))

        }else{
           
            toggleError(true,'user not found')
        }
        checkLimit();
        setLoading(false)
    }

    function toggleError(show=false,msg=''){
        setError({show,msg})
    }
    
    useEffect(checkLimit,[])
    
    return <GithubContext.Provider value={{githubUser,repos,followers,request,error,searchGithubUser,loading}}>{children}</GithubContext.Provider>
}


export {GithubContext,GithubProvider};