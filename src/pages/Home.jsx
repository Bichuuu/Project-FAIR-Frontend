import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import homeimg from '../assets/img/homeimg.webp'
import ProjectCard from '../components/ProjectCard'
import pflogo from '../assets/img/pflogo.png'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import author1 from '../assets/vectorprofile/author1.jpg'
import author2 from '../assets/vectorprofile/author2.jpg'
import author3 from '../assets/vectorprofile/author3.jpg'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <>
      <div className='d-flex justify-content-center'>
        <Row className='container' style={{ marginTop: '120px' }}>
          <Col className='p-5' lg={6} md={12} sm={12} >
            <div className='p-5'>

              <h1
                style={{ fontSize: '50px',
                  backgroundImage: 'linear-gradient(to right, #43C6AC, #191654)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text', 
                  color: 'transparent', 
                   }}
                className=''>
                <img
                  style={{ height: '70px', marginBottom: '20px' }}
                  src={pflogo} alt="" />
                PROJECT FAIR
              </h1>

              <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste veritatis dolorem quisquam distinctio amet mollitia vitae! Illo totam ipsa cupiditate, molestias, non eligendi, tempora expedita debitis sapiente saepe corporis ipsam!</p>

              {
                sessionStorage.getItem("token") ?
                <Link to ={'/dashboard'}><button className='btn btn-primary'>manage your project</button></Link>
              :
              <Link to ={'/login'}><button className='btn btn-primary'>start to explore</button></Link>
              }

            </div>

          </Col>
          <Col lg={6} md={12} sm={12}>
            <img src={homeimg} alt="" />
          </Col>
        </Row>

      </div>

      {/* project card  */}

      <div className='mt-5 text-center'>

        <h1 className='text-dark'>explor our project</h1>

        </div>
        

          <div className='container me-3 mt-5'>

            <div className=''>
              <ProjectCard />
            </div>

          </div>

       

     

     {/* testimonial */}


     {/* <div className='container flex-column text-center my-5 p-5 '>
        <h1>Our Testmonial</h1>

          <div className='Row d-flex'>
            <div className='col-lg-4'>
            <Card style={{ width: '18rem' }}>
     
      <Card.Body>
        <Card.Title>
          <div className='text-center mb-3'>
            <img className='w-100' src={elonmask} alt="" />
          </div>
        </Card.Title>
        <Card.Text className='align-justify'>
        <span className='text-warning'>

<i class="fa-solid fa-star"></i>

<i class="fa-solid fa-star"></i>

<i class="fa-solid fa-star"></i>

<i class="fa-solid fa-star"></i>

</span>

          <p>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            </div>
            <div className='col-lg-4'>
            <Card style={{ width: '18rem' }}>

      
      <Card.Body>
        <Card.Title>
        <div className='text-center'>
            <img className='w-100' src={meta} alt="" />
          </div>
        </Card.Title>
        <Card.Text className='align-justify'>
        <span className='text-warning'>

<i class="fa-solid fa-star"></i>

<i class="fa-solid fa-star"></i>

<i class="fa-solid fa-star"></i>

<i class="fa-solid fa-star"></i>

</span>

          <p>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            </div>
            <div className='col-lg-4'>
            <Card style={{ width: '18rem' }}>

          
      
      <Card.Body>
        <Card.Title>
        <div className='text-center mb-3'>
            <img className='w-100' src={rono} alt="" />
          </div>
        </Card.Title>
        <Card.Text className='align-justify'>
        <span className='text-warning'>

<i class="fa-solid fa-star"></i>

<i class="fa-solid fa-star"></i>

<i class="fa-solid fa-star"></i>

<i class="fa-solid fa-star"></i>

</span>


          <p>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            </div>
          </div>
        </div> */}


        {/* testimonial  */}

        {/* testimonial */}
  
        <section className=" container testimonials my-5 p-5">
          <div className="testimonial-header mb-5">
            <h3>Testimonial</h3>
            <h2>Happy Clients</h2>
          </div>
          <div className="row d-flex  ">
  
            <div className='col-lg-4'>
              <Card className="testimonial-item me-5 bg-dark text-light">
                <Card.Body className="testimonial-content">
                  <div className="quote-icon">
                    <i class="fas fa-quote-left"></i>
                  </div>
  
                  <div className='mb-3'>
                    <span className='text-warning'>
  
                      <i class="fa-solid fa-star"></i>
  
                      <i class="fa-solid fa-star"></i>
  
                      <i class="fa-solid fa-star"></i>
  
                      <i class="fa-solid fa-star"></i>
  
                    </span>
                  </div>
                  <Card.Text>
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                    live the blind texts.
                  </Card.Text>
                  <Card.Title>
                    <div className="testimonial-author">
                      <img src={author1} alt="Roger Scott" />
                      <div>
                        <h4>Roger Scott</h4>
                        <p>Marketing Manager</p>
                      </div>
                    </div>
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
  
  
            <div className='col-lg-4'>
              <Card className="testimonial-item me-5 bg-dark text-light">
                <Card.Body className="testimonial-content">
                  <div className="quote-icon">
                    <i class="fas fa-quote-left"></i>
                  </div>
  
                  <div className='mb-3'>
                    <span className='text-warning'>
  
                      <i class="fa-solid fa-star"></i>
  
                      <i class="fa-solid fa-star"></i>
  
                      <i class="fa-solid fa-star"></i>
  
                      <i class="fa-solid fa-star"></i>
  
                    </span>
                  </div>
                  <Card.Text>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                    live the blind texts.
                  </Card.Text>
                  <Card.Title>
                    <div className="testimonial-author">
                      <img src={author2} alt="Roger Scott" />
                      <div className=''>
                        <h4>Roger Scott</h4>
                        <p>Marketing Manager</p>
                      </div>
                    </div>
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
  
            <div className='col-lg-4'>
              <Card className="testimonial-item me-5 bg-dark text-light">
                <Card.Body className="testimonial-content">
                  <div className="quote-icon">
                    <i class="fas fa-quote-left"></i>
                  </div>
                  <div className='mb-3'>
                    <span className='text-warning '>
  
                      <i class="fa-solid fa-star"></i>
  
                      <i class="fa-solid fa-star"></i>
  
                      <i class="fa-solid fa-star"></i>
  
                      <i class="fa-solid fa-star"></i>
  
                    </span>
                  </div>
                  <Card.Text>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                    live the blind texts.
                  </Card.Text>
                  <Card.Title>
                    <div className="testimonial-author">
                      <img src={author3} alt="Roger Scott" />
                      <div>
                        <h4>Roger Scott</h4>
                        <p>Marketing Manager</p>
                      </div>
                    </div>
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
  
          </div>
        </section>




    </>
  )
}

export default Home