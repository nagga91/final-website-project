import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { getCurrent, logout } from '../redux/Action/Action'


function Navbar() {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    useEffect(() => {
      dispatch(getCurrent())
    }, [dispatch])
  
    const user=useSelector((state)=>state.Reducer.user)
    const handleLogout=()=>{
        dispatch(logout(navigate))
      }
  return (
    <div>
      {(user.role==='Job searcher')?
      <> 
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarExample01">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item active">
              <a className="nav-link text-danger" aria-current="page" href="/profile">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primary" href="/edit">
              Edit Profil
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-success" href="/test">
              Training Interview
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-warning" href="/offers">
                Opportunities
              </a>
            </li>
          </ul>
        </div>
        <div className="d-flex align-items-center">
           <button type="button" className="btn btn-link px-3 me-2" onClick={handleLogout}>
             Logout
           </button>
         </div>
      </div>
    </nav>
   {/* Navbar */}</>:
   <>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
     <div className="container-fluid">
       <div className="collapse navbar-collapse" id="navbarExample01">
         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           <li className="nav-item active">
             <a className="nav-link text-danger" aria-current="page" href="/profile">
               Home
             </a>
           </li>
           <li className="nav-item">
             <a className="nav-link text-primary" href="/edit">
             Edit Profil
             </a>
           </li>
           <li className="nav-item">
             <a className="nav-link text-warning" href="#">
               Jobs
             </a>
           </li>
         </ul>
       </div>
       <div className="d-flex align-items-center">
          <button type="button" className="btn btn-link px-3 me-2" onClick={handleLogout}>
            Logout
          </button>
        </div>
     </div>
   </nav>
  {/* Navbar */}
  </>} 
  
    </div>
  )
}

export default Navbar
