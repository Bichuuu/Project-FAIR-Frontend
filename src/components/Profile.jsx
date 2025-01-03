// import React from 'react'
// import { useState } from 'react';
// import Collapse from 'react-bootstrap/Collapse';
// import profile from '../assets/img/profile.jpg'

// function Profile() {
//   const [open, setOpen] = useState(false);
//   return (
//     <>
//     <div className='d-flex justify-content-center'>
//       <h1 className='text'>Profile</h1>


//       <button onClick={() => setOpen(!open)}
//         aria-controls="example-collapse-text"
//         aria-expanded={open}
//          className='btn text-warning'>
//           <i class="fa-solid fa-angle-down"></i>
//           </button>

//       <Collapse in={open} >
//           {/* <div id="example-collapse-text d-flex flex-column align-items-center justify-content-center p-3 shadow rounded"> */}
//           <div id="example-collapse-text">


//        <div className='d-flex flex-column align-items-center justify-content-center p-3 shadow rounded w-75 mt-3'>
//            <label>
//             <input type="file" style={{display:'none'}} />
//               <img
//                           src={profile}
//                           alt="Upload Icon"
//                           style={{ maxWidth: '100px'}}
//                           className='img-fluid rounded-circle'
//                         />
//                          </label>
//        </div>
              
//               <div className="mb-3">
//                       <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Enter GitHub URL"
//                       />
//                     </div>
//                     <div className="mb-3">
//                       <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Enter Demo URL"
//                       />
//                     </div> 

//                     <button className='btn w-100 btn-warning'>uplode</button>        
//           </div>
//         </Collapse>
//     </div>

//     </>
//   )
// }

// export default Profile




// import React, { useState } from 'react';
// import Collapse from 'react-bootstrap/Collapse';
// import profile from '../assets/img/profile.jpg';

// function Profile() {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <div className="d-flex flex-column align-items-center">
//         {/* Profile Heading */}
//         <h1 className="text-info">Profile</h1>

//         {/* Toggle Button */}
//         <button
//           onClick={() => setOpen(!open)}
//           aria-controls="example-collapse-text"
//           aria-expanded={open}
//           className="btn text-warning"
//         >
//           <i className="fa-solid fa-angle-down"></i>
//         </button>

//         {/* Collapsible Section */}
//         <Collapse in={open}>
//           <div
//             id="example-collapse-text"
//             className="d-flex flex-column align-items-center justify-content-center p-3 shadow rounded w-75 mt-3"
//           >
//             {/* Profile Image Upload */}
//             <label>
//               <input type="file" style={{ display: 'none' }} />
//               <img
//                 src={profile}
//                 alt="Upload Icon"
//                 className="img-fluid rounded-circle"
//                 style={{ maxWidth: '100px', cursor: 'pointer' }}
//               />
//             </label>

//             {/* Form Inputs */}
//             <div className="mb-3 w-100">
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Enter GitHub URL"
//               />
//             </div>
//             <div className="mb-3 w-100">
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Enter Demo URL"
//               />
//             </div>
//           </div>
//         </Collapse>
//       </div>
//     </>
//   );
// }

// export default Profile;


// cloudegpt -------------


import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Github, Link } from 'lucide-react';
import profile from '../assets/img/profile.jpg'

function Profile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Profile</h2>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-500 hover:text-gray-700"
          >
            {isOpen ? (
              <ChevronUp className="h-5 w-5" />
            ) : (
              <ChevronDown className="h-5 w-5" />
            )}
          </button>
        </div>

        <div className={`space-y-6 ${isOpen ? 'block' : 'hidden'}`}>
          {/* Profile Image Upload */}
          <div className="flex flex-col items-center">
            <div className="relative group">
              <label className="cursor-pointer">
                <input type="file" className="hidden" accept="image/*" />
                <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center border-2 border-blue-500">
                  <img
                    src={profile} // Replace with your image path
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-sm">Change</span>
                </div>
              </label>
            </div>
            <p className="mt-2 text-sm text-gray-500">Click to upload new image</p>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                GitHub URL
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Github className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter GitHub URL"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Demo URL
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Link className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter Demo URL"
                />
              </div>
            </div>

            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
