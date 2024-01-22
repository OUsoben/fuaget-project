import React from 'react'
import { useNavigate } from 'react-router-dom'
const NotFoundPage = () => {

   const navigation = useNavigate()
  return (
    <>
     <div className="text-center">
      <div className="d-flex justify-content-center ">
      <img style={{width: "500px"}} className="img-fluid" src="https://www.digitalmesh.com/blog/wp-content/uploads/2020/05/404-error.jpg" alt="Not found image" />
      </div>
      <p>This page doesn't exist or was incorect!</p>
      <p>We suggest you back to home</p>
      <button className='btn btn-primary'
      onClick={()=>{
        navigation("/")
      }}
      >BACK TO HOME</button>
     </div>
    </>
  )
}

export default NotFoundPage