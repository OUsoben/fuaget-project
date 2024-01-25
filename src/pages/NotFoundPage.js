import React from 'react'
import { useNavigate } from 'react-router-dom'
const NotFoundPage = () => {

   const navigation = useNavigate()
  return (
    <>
     <div className="text-center  mb-5">
      <div className="d-flex justify-content-center ">
      <img style={{width: "40%"}} className="img-fluid" src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg?size=626&ext=jpg&ga=GA1.1.1401702421.1699262363&semt=ais" alt="Not found image" />
      </div>
      <h3  style={{ fontFamily: "Spicy Rice", color: "pink" }}>Opps</h3>
      <p className='text-muted'>We can't find the page you're <br /> looking for.</p>
      
      <button  className='btn btn-success rounded-pill'
      onClick={()=>{
        navigation("/")
      }}
      >Go Back</button>
     </div>
    </>
  )
}

export default NotFoundPage