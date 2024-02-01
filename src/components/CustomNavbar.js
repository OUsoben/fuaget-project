import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../styles/navbar.css";
import { NavLink } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
function BasicExample() {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => setIsOpen(!isOpen);
  // const hide = () => setIsOpen(false);
  // console.log(setIsOpen)
  return (
    
    <Navbar expand="lg" className=" ps-4 navbar-bgcolor nav-shadow sticky-top">
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
       <div className="ms-3">
        <img style={{width:"40px"}} className='img-fluid mb-2' src={require("../images/img-1.png")} alt="" />
        <Navbar.Brand 
         variant="h1"
          gutterBottom
          className='ms-2 me-4 col-md -2 col-sm-3 col-8   font-brand fs-5 text-white' href="/">F U A G E T</Navbar.Brand>
    </div>
    <Navbar.Collapse id="basic-navbar-nav text-white" color='white'>
          <Nav className="ms-auto p-2 me-5 " >
            
            <NavLink className='text-white me-3  text-font nav-link'  to={"/"} /*onClick={toggle}  onBlur={hide}*/>Home</NavLink>
            <NavLink className='text-white me-3  text-font nav-link' to={"/services"}>Sevices</NavLink>
            <NavLink className='text-white me-3  text-font nav-link' to={"/products"}>Products</NavLink>
            <NavLink className='text-white me-3  text-font nav-link' to={"/dashboard"}>Dashboard</NavLink>
            <NavLink className='text-white me-3  text-font nav-link' to={"/aboutus"}>About us</NavLink>
          </Nav> 
        </Navbar.Collapse>
    
    </Navbar>
  );
}

export default BasicExample;