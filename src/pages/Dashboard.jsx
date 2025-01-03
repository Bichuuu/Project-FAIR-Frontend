// import React from 'react'
// import Profile from '../components/Profile'
// import View from '../components/View'
// import Headers from '../components/Headers'

// function Dashboard() {
//   return (
//     <>
//     <Headers />
//     <div style={{marginTop:'100px'}} className='container-fluid text-center'>

//     <div className='row mt-3'>
//       <div className='col-lg-8'>
//       <h1 className='fw-bold'>welcome <span className='text-warning'>user</span> </h1>
//       <View/>

//       </div>
//       <div className='col-lg-4'>
//         <Profile/>

//       </div>
//     </div>

//     </div>


//     </>
//   )
// }

// export default Dashboard



import React, { useEffect, useState } from 'react';
import Profile from '../components/Profile';
import View from '../components/View';
import Headers from '../components/Headers'
import Footer from '../components/Footer'

function Dashboard() {

  const [userName, setUserName] = useState("")
  console.log(userName);

  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      setUserName(JSON.parse(sessionStorage.getItem("user")).username)
    }
    else {
      setUserName("")
    }
  }, [])

  return (
    <>
      <Headers />
      <div className="min-h-screen bg-gray-50 mt-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6 mt-5">
                <h1 className="text-3xl font-bold text-gray-900">
                  Welcome, <span className="text-blue-600">

                    {userName.split(" ")[0]}

                  </span>
                </h1>
                <p className="text-gray-600 mt-2">
                  Manage your projects and portfolio
                </p>
              </div>
              <View />
            </div>

            {/* Profile Sidebar */}
            <div className="lg:col-span-1 mt-5">
              <Profile />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
