import React, { useState } from 'react'
import loginImage from '../assets/img/loginImage.jpg';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { loginAPI, registerAPI } from '../../services/allAPI';

function Auth({ insideRegister }) {

  const [islogin, setIsLogin] = useState(false)
  const [userDetails, setUserDetails] = useState([{ username: "", email: "", password: "" }])
  const Navigate = useNavigate()
  console.log(userDetails);

  const handleRegister = async (e) => {
    e.preventDefault()
    if (userDetails.username && userDetails.email && userDetails.password) {
      try {
        const result = await registerAPI(userDetails)
        if (result.status == 200) {
          toast.success(`welcome${result?.data?.username}.....please login to explore`)
          setUserDetails({ username: "", email: "", password: "" })
          Navigate('/login')

        } else {
          if (result.status == 406) {
            toast.warning(result.response.data)
            setUserDetails({ username: "", email: "", password: "" })
          }
        }
      }
      catch (err) {
        console.log(err);
      }
    } else {
      toast.warning("enter the field complatey")
    }
  }




  const handleLogin = async (e) => {
    e.preventDefault()
    if (userDetails.email && userDetails.password) {
      try {
        const result = await loginAPI(userDetails)
        console.log(result);
        if (result.status == 200) {
          sessionStorage.setItem("user", JSON.stringify(result.data.user))
          sessionStorage.setItem("token", result.data.token)
          Navigate('/')
          setIsLogin(true)
          setTimeout(() => {
            setIsLogin(false)
            setUserDetails({ username: "", email: "", password: "" })
          }, 2000)
        }
        else {
          if (result.status == 404) {
            toast.error(result.response.data)
          }
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      toast.warning("please enter username and password")
    }
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
      // pauseOnHover
      // theme="light"
      // transition={Bounce}
      />


      <div className="login-page d-flex align-items-center justify-content-center">
        <div className="container bg-white p-4 rounded shadow-lg">
          <div className="row">
            {/* First Column: Image */}
            <div className="col-md-6">
              <img
                src={loginImage}
                alt="Login"
                className="img-fluid rounded h-100 w-100"
                style={{ objectFit: 'cover' }}
              />
            </div>

            {/* Second Column: Form */}
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h1 className="text-primary">Welcome Back!</h1>
              <h3 className="text-secondary">{insideRegister ? 'signup' : 'Login'} to continue</h3>

              <form>
                {/* Input Fields */}
                {insideRegister &&
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control rounded-pill"
                      placeholder="User Name"
                      onChange={e => { setUserDetails({ ...userDetails, username: e.target.value }) }}
                    />
                  </div>
                }

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control rounded-pill"
                    placeholder="Email"
                    onChange={e => { setUserDetails({ ...userDetails, email: e.target.value }) }} value={userDetails.email}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control rounded-pill"
                    placeholder="Password"
                    onChange={e => { setUserDetails({ ...userDetails, password: e.target.value }) }} value={userDetails.password}
                  />
                </div>

                {/* Buttons */}
                {insideRegister ?

                  <div>
                    <button onClick={handleRegister} type="submit" className="btn btn-primary rounded-pill w-50" style={{ marginLeft: '150px' }}>
                      Signup

                      {
                        islogin &&
                        <Spinner animation="border" />
                      }
                    </button>

                    <p className="text-center mt-3">
                      Already have an account?{' '}
                      <Link to={'/login'} className="text-primary text-decoration-none">
                        Login
                      </Link>
                    </p>
                  </div>

                  :
                  <div>
                    <button onClick={handleLogin} type="submit" className="btn btn-primary rounded-pill w-50" style={{ marginLeft: '150px' }}>
                      Login
                    </button>
                    <p className="text-center mt-3">
                      Don’t have an account?{' '}
                      <Link to={'/register'} className="text-primary text-decoration-none">
                        Register
                      </Link>
                    </p>
                  </div>
                }
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Auth