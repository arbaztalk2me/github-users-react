import React,{useContext} from 'react'
import {Bar3D,Pie3D,ExampleChart3D,Doughnut2D,Column3D} from './charts'
import { GithubContext } from '../context/context';

const Repos = () => {
  const {repos}=useContext(GithubContext)
  let languages=repos.reduce((total,item)=>{
    const{language}=item;
    if(!language) return total;
    if(!total[language]){
      total[language]={label:language,value:1}
    }else{
      total[language]={...total[language],value:total[language].value+1}
    }
    return total;
  },{})

  languages=Object.values(languages)
  


  // stars
  let {stars}=repos.reduce((total,item)=>{
    const{stargazers_count,name,forks}=item
    total.stars[stargazers_count]={label:name,value:stargazers_count}
    return total;
  },{
    stars:{}
  })

 stars=Object.values(stars).slice(-5).reverse();

  // const chartData = [
  //   {
  //     label: "HTML",
  //     value: "17"
  //   },
  //   {
  //     label: "CSS",
  //     value: "23"
  //   },
  //   {
  //     label: "Canada",
  //     value: "80"
  //   },
    
  // ];
  return <div className='container'>
      <div className='row'>
          <div className='col-12 col-md-6'>
            <div className="card mb-2" style={{width: '28rem'}}>
              <div className="card-body ">
                <Pie3D data={languages} />
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6'>
            <div className="card mb-2" style={{width: '28rem'}}>
                <div className="card-body ">
                <Column3D data={stars} />
                </div>
              </div>
          </div>
      </div>
  </div>
}

export default Repos;