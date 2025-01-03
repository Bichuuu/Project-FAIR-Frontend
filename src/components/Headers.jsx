import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Headers() {
  return (
    <>
     <Navbar expand="lg" className="bg-body-tertiary position-fixed top-0 w-100" 
      style={{
        background: "linear-gradient(to right, #0F2027, #203A43, #2C5364)"
         }}>
        <Container>
          <Navbar.Brand >
            <Link
            style={{color:'white'}}
             className='fw-bold text-decoration-none fs-4 ' to="/">
              PROJECT FAIR
              </Link>

{/* <div 

  className="text-danger " 
  style={{ fontSize: "12px", marginLeft: "-16px", color: "black" }}
>
</div> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto ">
            <Nav.Link >
              <button type='text'style={{
        width: '80px',
        // background: 'linear-gradient(to right, #FFDEE9, #B5FFFC)', 
        border: '2px solid #ffffff', 
        borderRadius: '10px',
        padding: '10px 15px', 
        color: '#333', 
        fontSize: '16px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', 
      }} className='rounded p-1 border border-white me-5'>logout</button>
            </Nav.Link>
                       
            </Nav>
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Headers

