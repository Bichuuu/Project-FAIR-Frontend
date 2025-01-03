


// import React, { useEffect, useState } from "react";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import addproject from "../assets/img/download.jpg";

// function Add() {
//   const [projectDetails, setProjectDetails] = useState({
//     title: "",
//     language: "",
//     github: "",
//     website: "",
//     overview: "",
//     projectimg: null,
//   });
//   const [isValidUpload, setIsValidUpload] = useState(false);
//   const [previewUpload, setPreviewUpload] = useState(addproject);
//   const [show, setShow] = useState(false);

//   const handleClose = () => {
//     setShow(false);
//     setProjectDetails({
//       title: "",
//       language: "",
//       github: "",
//       website: "",
//       overview: "",
//       projectimg: null,
//     });
//     setPreviewUpload(addproject);
//   };

//   const handleShow = () => setShow(true);

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     console.log("Uploaded File:", file);
//     setProjectDetails({ ...projectDetails, projectimg: file });
//   };

//   useEffect(() => {
//     if (projectDetails.projectimg) {
//       const file = projectDetails.projectimg;
//       if (
//         file.type === "image/png" ||
//         file.type === "image/jpg" ||
//         file.type === "image/jpeg"
//       ) {
//         setIsValidUpload(true);
//         setPreviewUpload(URL.createObjectURL(file));
//       } else {
//         setIsValidUpload(false);
//         setProjectDetails({ ...projectDetails, projectimg: null });
//         setPreviewUpload(addproject);
//       }
//     }
//   }, [projectDetails.projectimg]);

//   return (
//     <>
//       <div>
//         <button onClick={handleShow} className="btn btn-danger">
//           ADD New Project
//         </button>

//         <Modal
//           show={show}
//           onHide={handleClose}
//           backdrop="static"
//           keyboard={false}
//           size="lg"
//           aria-labelledby="contained-modal-title-vcenter"
//           centered
//         >
//           <Modal.Header closeButton>
//             <Modal.Title>Add New Project</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <div className="container">
//               <div className="row">
//                 <div className="col-md-4 d-flex justify-content-center align-items-center">
//                   <div
//                     style={{
//                       width: "100%",
//                       height: "200px",
//                       backgroundColor: "#eaf6fb",
//                       borderRadius: "10px",
//                       display: "flex",
//                       justifyContent: "center",
//                       alignItems: "center",
//                       border: "2px dashed #000",
//                     }}
//                   >
//                     <label>
//                       <input
//                         onChange={handleFileChange}
//                         type="file"
//                         accept="image/png, image/jpg, image/jpeg"
//                         style={{ display: "none" }}
//                       />
//                       <img
//                         className="w-100 bg-light"
//                         src={previewUpload}
//                         alt="Preview of uploaded file"
//                       />
//                     </label>
//                   </div>
//                 </div>
//                 {!isValidUpload && (
//                   <div className="text-danger my-2">
//                     *Upload only the following file types (JPG, JPEG, PNG)*
//                   </div>
//                 )}
//                 <div className="col-md-8">
//                   <div className="mb-3">
//                     <input
//                       onChange={(e) =>
//                         setProjectDetails({ ...projectDetails, title: e.target.value })
//                       }
//                       type="text"
//                       className="form-control"
//                       placeholder="Enter Project Title"
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <textarea
//                       onChange={(e) =>
//                         setProjectDetails({ ...projectDetails, overview: e.target.value })
//                       }
//                       className="form-control"
//                       placeholder="Enter Description"
//                       rows="3"
//                     ></textarea>
//                   </div>
//                   <div className="mb-3">
//                     <input
//                       onChange={(e) =>
//                         setProjectDetails({ ...projectDetails, language: e.target.value })
//                       }
//                       type="text"
//                       className="form-control"
//                       placeholder="Enter Languages used"
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <input
//                       onChange={(e) =>
//                         setProjectDetails({ ...projectDetails, github: e.target.value })
//                       }
//                       type="text"
//                       className="form-control"
//                       placeholder="Enter GitHub URL"
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <input
//                       onChange={(e) =>
//                         setProjectDetails({ ...projectDetails, website: e.target.value })
//                       }
//                       type="text"
//                       className="form-control"
//                       placeholder="Enter Demo URL"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//               Close
//             </Button>
//             <Button variant="primary">Upload</Button>
//           </Modal.Footer>
//         </Modal>
//       </div>
//     </>
//   );
// }

// export default Add;
