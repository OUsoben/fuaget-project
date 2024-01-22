import React from 'react'
import "../styles/homeStyle.css"
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const HomePage = () => {
  return (
    <>
          <div className="container">
            <div className="row ">
               <section className="p-5 mt-5 col-xl-5">
                <p style={{whiteSpace: "pre"}} className='text-danger fw-bolder font-start'>N e w   P l a t f o r m</p>
                <h1 className='font-start2 '>Partner For <br /> Your Future</h1>
                <p className='text-muted pt-4'>Whether you're a online shopper or a first-time seller our market welcomes you. Join us on this journey of exploration connection and empowerment.</p>
                <button className='btn btn-warning mt-4'>Get Start  <span><FontAwesomeIcon icon={faArrowRight} /></span></button>
               </section>
               <div className="col-xl-7 ">
                <img className='img-fluid' src="https://img.freepik.com/premium-vector/people-man-woman-characters-planning-counting-money-income-budget_133260-1101.jpg?size=626&ext=jpg" alt="" />
               </div>
              
               <section className='p-5 row justify-content-center '>
                <p className=' fw-bolder font-start2 fs-4 text-center mt-5'>Discover  Market place</p>
               <div className="col-xl-5 order-1">
                      <img className='img-fluid' src="https://img.freepik.com/premium-vector/employer-look-employee-job-application-resume-with-magnifying-glass_90661-343.jpg?size=626&ext=jpg" alt="" />
               </div>
               <div className="col-xl-3  order-xl-2 mt-4">
                <p className='text-muted pt-4'>Our marketplace is a vibrant hub where buyers and sellers converge to exchange products and services. With a diverse range of offerings, from unique handcrafted items to essential services, there's something for everyone. Navigate through categories,  and make connections with sellers who are passionate about what they offer.</p>

               </div>
                  
               </section>
            </div>
          </div>
    </>
  )
}

export default HomePage