// import React from 'react'
// import Add from './Add'
// import Edit from './Edit'




// function View() {
//   return (
//     <>
// <div className='d-flex justify-content-between border bg-secondary'>
//   <h1 className='text-primary'>All Project</h1>


//           <Add/>

// <div className='mt-5 bg-info  w-100'>
//   <div className='border rounded p-3 d-flex justify-content-between'>
// <h1 className='text-primary'>project title</h1>
//   <div className='d-flex w-100 bg-success' >
//     <h1>japputo</h1>

    
//       <Edit/>
    

//     <a href="" className='btn me-3'><i class="fa-brands fa-github text-light"></i></a>

//     <button className='btn'><i class="fa-solid fa-trash text-danger"></i></button>

//   </div>
// </div>
// </div>
// </div>

//     </>
//   )
// }

// export default View




import React from 'react';
import Add from './Add';
import Edit from './Edit';
import { Github, Trash2, ExternalLink } from 'lucide-react';

function View() {
  return (
    <div className="space-y-6">
      {/* Header with Add Button */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">My Projects</h2>
        <Add />
      </div>

      {/* Project Cards */}
      <div className="grid gap-6">
        {/* Sample Project Card */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">Project Title</h3>
                <p className="mt-2 text-gray-600">
                  Project description goes here. This is a sample description of the project.
                </p>
                <div className="mt-4">
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Node.js', 'MongoDB'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3 ml-4">
                <Edit />
                <a
                  href="#"
                  className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100"
                  title="View on GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100"
                  title="View Live Demo"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
                <button
                  className="p-2 text-red-500 hover:text-red-700 rounded-full hover:bg-red-50"
                  title="Delete Project"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View;