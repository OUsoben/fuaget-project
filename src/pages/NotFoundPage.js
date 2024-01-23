import React from 'react'
import { useNavigate } from 'react-router-dom'
const NotFoundPage = () => {

   const navigation = useNavigate()
  return (
    <>
     <div className="text-center">
      <div className="d-flex justify-content-center ">
      <img style={{width: "700px"}} className="img-fluid" src="https://assets.materialup.com/uploads/adcc58cc-144d-4700-b4f6-028c3cbeacbf/preview.jpg" alt="Not found image" />
      </div>
      <h3  style={{ fontFamily: "Spicy Rice", color: "pink" }}>Opps</h3>
      <p className='text-muted'>We can't find the pgae you're <br /> looking for.</p>
      
      <button  className='btn btn-success rounded-pill'
      onClick={()=>{
        navigation("/")
      }}
      >BACK TO HOME</button>
     </div>
    </>
  )
}

export default NotFoundPage