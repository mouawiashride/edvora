import React from 'react'
import './style.css'
  const Header=()=> {
  return (
    <div className='parentheader'  >
        <h1 className='title'>
            Edvora
        </h1>
        <div className='secondepart'>
       <p className='userName' >
       Dhruv Singh
       </p>
       <div className='userimg' >
       </div>
       </div>
      
    </div>
  )
}
export default React.memo(Header);