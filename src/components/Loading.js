import React from 'react'
import loadingImg from '../images/DualBall-1s-200px.svg'
const Loading = () => {
  return (
    <div className="container" >
        <div className='d-flex justify-content-center align-items-center' style={{width:'100%',height:'100%'}}>
          <img src={loadingImg} alt="loading" />
        </div>
       
    </div>
  )
}

export default Loading