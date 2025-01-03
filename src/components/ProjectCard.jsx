import React from 'react'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
// import pcardimg from '../assets/img/pcardimg.jpg'
// import pcard2 from '../assets/img/pcard2.jpg'
import innerpcard from '../assets/img/innerpcard.jpg'

function ProjectCard() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <>
<div className='d-flex mb-5'>
  
  <Card onClick={handleShow} style={{ width: '18rem' }}
   className='text-center me-5'>
        <Card.Img variant="top h-100" src='https://www.webstacks.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F9qa6g0dkae5p%2F2I4jcpMxvmHeOafAcY4WWj%2F0c2822adf9bb6eaf88159b63e7a5dbdd%2FTrello_-_Demo_page.png&w=3840&q=75' />
        <Card.Body>
          <Card.Title>project name</Card.Title>
          
          
        </Card.Body>
      </Card>
  
      <Modal size='lg' show={show} onHide={handleClose}
      className="transparent-modal">
          <Modal.Header closeButton>
            <Modal.Title style={{color:'darkgreen',fontSize:'50px'}}>Demo Project</Modal.Title>
          </Modal.Header>
          <Modal.Body        >
            <div
             className='row'>
              <div className='col-lg-6'>
                <img className='w-100' src={innerpcard} alt="" />
              </div>
              <div className='col-lg-6'>
                <h3 className='text-warning' >project name </h3>
                <h5 className='text-dark'>language used</h5>
                <p className='text-dark'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem laboriosam, pariatur veniam accusantium minus dolorum a repellendus? Doloremque porro tenetur in similique! Consequatur quae exercitationem voluptatem voluptas in autem blanditiis?</p>
  
              </div>
            </div>
            <div>
              <a  style={{width:'100px'}} 
              className='btn btn-dark ms-2'
               href="">
              <i class="fa-brands fa-github"></i>
              </a>
  
              <a href="" 
              style={{width:'100px'}}
               className='btn btn-info ms-2'>
                <i class="fa-solid fa-link"></i>
                </a>
  
            </div>
          </Modal.Body>
          
        </Modal>
  
   {/* card 2 */}

   <Card onClick={handleShow} style={{ width: '18rem' }}
 className='text-center me-5'>
      <Card.Img variant="top h-100" src="https://i.pinimg.com/736x/63/93/3e/63933e60ea08dd648244bb7b4163c5be.jpg" />
      <Card.Body>
        <Card.Title>project name</Card.Title>
        
        
      </Card.Body>
    </Card>

    <Modal size='lg' show={show} onHide={handleClose}
    className="transparent-modal">
        <Modal.Header closeButton>
          <Modal.Title style={{color:'darkgreen',fontSize:'50px'}}>Demo Project</Modal.Title>
        </Modal.Header>
        <Modal.Body        >
          <div
           className='row'>
            <div className='col-lg-6'>
              <img className='w-100' src={innerpcard} alt="" />
            </div>
            <div className='col-lg-6'>
              <h3 className='text-warning' >project name </h3>
              <h5 className='text-dark'>language used</h5>
              <p className='text-dark'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem laboriosam, pariatur veniam accusantium minus dolorum a repellendus? Doloremque porro tenetur in similique! Consequatur quae exercitationem voluptatem voluptas in autem blanditiis?</p>

            </div>
          </div>
          <div>
            <a  style={{width:'100px'}} 
            className='btn btn-dark ms-2'
             href="">
            <i class="fa-brands fa-github"></i>
            </a>

            <a href="" 
            style={{width:'100px'}}
             className='btn btn-info ms-2'>
              <i class="fa-solid fa-link"></i>
              </a>

          </div>
        </Modal.Body>
        
      </Modal>

      {/* card 3 */}

      <Card onClick={handleShow} style={{ width: '18rem' }}
 className='text-center'>
      <Card.Img variant="top h-100" src='https://images.squarespace-cdn.com/content/v1/647033b16bc83637ffea3efe/1685939606560-GOB9X7L47L300ECY6I89/singular-website-refresh-project-thumbnail-%402x..png' />
      <Card.Body>
        <Card.Title>project name</Card.Title> 
        
        
      </Card.Body>
    </Card>

    <Modal size='lg' show={show} onHide={handleClose}
    className="transparent-modal">
        <Modal.Header closeButton>
          <Modal.Title style={{color:'darkgreen',fontSize:'50px'}}>Demo Project</Modal.Title>
        </Modal.Header>
        <Modal.Body        >
          <div
           className='row'>
            <div className='col-lg-6'>
              <img className='w-100' src={innerpcard} alt="" />
            </div>
            <div className='col-lg-6'>
              <h3 className='text-warning' >project name </h3>
              <h5 className='text-dark'>language used</h5>
              <p className='text-dark'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem laboriosam, pariatur veniam accusantium minus dolorum a repellendus? Doloremque porro tenetur in similique! Consequatur quae exercitationem voluptatem voluptas in autem blanditiis?</p>

            </div>
          </div>
          <div>
            <a  style={{width:'100px'}} 
            className='btn btn-dark ms-2'
             href="">
            <i class="fa-brands fa-github"></i>
            </a>

            <a href="" 
            style={{width:'100px'}}
             className='btn btn-info ms-2'>
              <i class="fa-solid fa-link"></i>
              </a>

          </div>
        </Modal.Body>
        
      </Modal>
</div>

 
    </>
  )
}

export default ProjectCard