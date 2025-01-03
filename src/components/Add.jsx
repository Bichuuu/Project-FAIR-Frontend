import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import addproject from '../assets/img/addproject.gif'
import { ToastContainer, toast } from 'react-toastify';
import { addProjectAPI } from '../../services/allAPI';


function Add() {

  const [projectDetails, setProjectDetails] = useState({
    title: "",
    languages: "",
    github: "",
    website: "",
    overview: "",
    projectimg: "",
    // projectimg: null,
  })
  console.log(projectDetails);


  const [isValidUpload, setIsValidUpload] = useState(false)
  const [previewupload, setPreviewUpload] = useState(addproject) // img convert to URL 
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setProjectDetails({
      title: "",
      languages: "",
      github: "",
      website: "",
      overview: "",
      projectimg: "",
      // projectimg: null,
    })
    // setPreviewUpload(addproject)
  }



  const handleShow = () => setShow(true);

  // check image file 

  useEffect(() => {

    if (projectDetails.projectimg.type == "image/png" ||
       projectDetails.projectimg.type == "image/jpg" ||
        projectDetails.projectimg.type == "image/jpeg") {
      setIsValidUpload(true)

      // method for convert url 

      setPreviewUpload(URL.createObjectURL(projectDetails.projectimg))
      // setPreviewUpload(URL.createObjectURL(projectDetails.projectimg));

    } else {
      setIsValidUpload(false)
      setPreviewUpload(addproject)
      setProjectDetails({ ...projectDetails, projectimg: "" })


    }
  }, [projectDetails.projectimg])

  const handleAddProject =async () => {
    const { title, languages, github, website, overview, projectimg } = projectDetails


    if (title && languages && github && website && overview && projectimg) {
      // api call

      // req body
      const reqBody = new FormData()

      // to store data useing method .append 
      reqBody.append("title", title)
      reqBody.append("languages", languages)
      reqBody.append("github", github)
      reqBody.append("website", website)
      reqBody.append("overview", overview)
      reqBody.append("projectimg", projectimg)

      // reqHeader
      const token = sessionStorage.getItem("token")

      if (token) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        }

        try{

          const result=await addProjectAPI(reqBody,reqHeader)
          console.log(result);

          if(result.status ==200){
            handleClose()
            toast.success("project successfully added")
            // alert("project successfully added")
          }
          else{
            toast.error(result.response.data)
            // alert(result.response.data)
          }
          
        }
        catch(err){
          console.log(err);
          
  
        }
      }


    }

    else {
      toast.warning("enter the fields completely")
      // alert("enter the fields completely")
    }

  }


  return (
    <>
   <ToastContainer 
  position="top-right" 
  autoClose={3000} 
  hideProgressBar={false} 
  newestOnTop={false} 
  closeOnClick 
  rtl={false} 
  pauseOnFocusLoss 
  draggable 
  pauseOnHover 
  theme="light" 
/>

    
      <div>
        <button onClick={handleShow} className='btn btn-danger'>
          <Modal.Title>
            Add New Project
          </Modal.Title>
        </button>

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
            <Modal.Title>add project</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <div className="container">
              <div className="row">
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                  <div
                    style={{
                      width: "100%",
                      height: "300px",
                      backgroundColor: "#eaf6fb",
                      borderRadius: "10px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      border: "5px",
                    }}
                  >
                    <label>
                      <input
                        onChange={(e) => { setProjectDetails({ ...projectDetails, projectimg: e.target.files[0]}) }}
                        type="file"
                        style={{ display: 'none' }}
                      />
                      <img
                        className='w-100'
                        src={previewupload}
                        alt="Preview of uploaded file"
                      />
                    </label>
                  </div>

                </div>
                {

                  !isValidUpload &&
                  <div className='text-danger my-2'>
                    *uplode only the following file type (jpg, jpeg, png)*
                  </div>
                }



                <div className="col-md-8">
                  <div className="mb-3">
                    <input onChange={(e) => { setProjectDetails({ ...projectDetails, title: e.target.value }) }}
                      type="text"
                      className="form-control"
                      placeholder="Enter Project Title"
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      onChange={(e) => { setProjectDetails({ ...projectDetails, overview: e.target.value }) }}
                      className="form-control"
                      placeholder="Enter Description"
                      rows="3"
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <input
                      onChange={(e) => { setProjectDetails({ ...projectDetails, languages: e.target.value }) }}
                      type="text"
                      className="form-control"
                      placeholder="Enter Languages used"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      onChange={(e) => { setProjectDetails({ ...projectDetails, github: e.target.value }) }}
                      type="text"
                      className="form-control"
                      placeholder="Enter GitHub URL"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      onChange={(e) => { setProjectDetails({ ...projectDetails, website: e.target.value }) }}
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
            <Button onClick={handleAddProject} variant="primary">Upload</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  )
}

export default Add











