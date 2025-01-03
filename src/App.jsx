import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify'




function App() {
  

  return (
    <>
    <ToastContainer />
     <Routes>
      <Route path={'/'} element={<Home/>}></Route>
      <Route path={'/login'} element={<Auth/>}></Route>
      <Route path={'/register'} element={<Auth insideRegister={true}/>}></Route>
      <Route path={'/dashboard'} element={<Dashboard/>}></Route>
      <Route path={'/projects'} element={<Projects/>}></Route>

     </Routes>
     <Footer/>
    </>
  )
}

export default App
