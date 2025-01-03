import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import editimg from '../assets/img/editimg.jpg'


function Edit() {

  
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <div> 
    <button onClick={handleShow} className='btn btn-danger me-3'>edit</button>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}

        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <div className="container">
              <div className="row">
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                  <div
                    style={{
                      width: "100%",
                      height: "200px",
                      backgroundColor: "#eaf6fb",
                      borderRadius: "10px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      border: "2px dashed #000",
                    }}
                  >
                  <label>
                    <input type="file" style={{display:'none'}} />
                      <img
                      className='w-100'
                        src={editimg}
                        alt="Upload Icon"
                      />
                  </label>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Project Title"
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      placeholder="Enter Description"
                      rows="3"
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Languages used"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter GitHub URL"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Demo URL"
                    />
                  </div>
                </div>
              </div>
            </div>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
    </div>
    </>
  )
}

export default Edit