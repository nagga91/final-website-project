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
      <nav className="navbar navbar-expand-lg navbar-light bg-dark" style={{backgroundColor:'#e3f2fd'}}>
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarExample01">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item active">
              <a className="nav-link text-light" aria-current="page" href="/profile">
              <i class="bi bi-person-fill"></i> Profil
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/edit">
              <i class="bi bi-person-fill-gear"></i> Edit Profil
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/test">
              <i class="bi bi-question-circle-fill"></i> Training Interview
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/offers">
              <i class="bi bi-binoculars-fill"></i> Opportunities
              </a>
            </li>
          </ul>
        </div>
        <div className="d-flex align-items-center">
           <button type="button" className="btn px-3 me-2" onClick={handleLogout} style={{background:'#208f8f',borderRadius:'20px',fontSize:'inherit',color:'#fff',boxShadow:'none',border:'none',textShadow:'none',padding:'.5rem .8rem',transition:'background-color 0.25s'}}>
             Logout
           </button>
         </div>
      </div>
    </nav>
   {/* Navbar */}</>:
   <>
   <nav className="navbar navbar-expand-lg navbar-light bg-dark">
     <div className="container-fluid">
       <div className="collapse navbar-collapse" id="navbarExample01">
         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           <li className="nav-item active">
             <a className="nav-link text-light" aria-current="page" href="/profile">
             <i class="bi bi-person-fill"></i> Profil
             </a>
           </li>
           <li className="nav-item">
             <a className="nav-link text-light" href="/edit">
             <i class="bi bi-person-fill-gear"></i> Edit Profil
             </a>
           </li>
           <li className="nav-item">
             <a className="nav-link text-light" href="/myoffers">
             <i class="bi bi-search"></i> we are hiring
             </a>
           </li>
         </ul>
       </div>
       <div className="d-flex align-items-center">
          <button type="button" className="btn px-3 me-2" onClick={handleLogout} style={{background:'#208f8f',borderRadius:'20px',fontSize:'inherit',color:'#fff',boxShadow:'none',border:'none',textShadow:'none',padding:'.5rem .8rem',transition:'background-color 0.25s'}}>
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
