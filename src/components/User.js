import React from 'react'
import Card from './Card'
import Followers from './Followers'

const User = () => {
  return (
    <div className='container my-3'>
        <div className='row'>
          <div className='col-12 col-md-6'>
             <Card/>
          </div>
          <div className='col-12 col-md-6'>
            <Followers/>
          </div>
        </div>
    </div>
  )
}

export default User