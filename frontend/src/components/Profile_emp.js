import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrent } from '../redux/Action/Action'
import Navbar from './Navbar'
import './Profile_emp.css'


function Profile_emp() {
    const dispatch=useDispatch()
    useEffect(() => {
      dispatch(getCurrent())
    }, [dispatch])
    const user=useSelector((state)=>state.Reducer.user)

  return (
    
    <div id='body'>
     {(user.role==='Job searcher')?
      <>
       <Navbar/>
       <br/>
       <br/>
       <div className="container_p">
     <div className="left_Side">
       <div className="profileText">
         <div className="imgBx">
           <img className="photo" src={user.image} />
         </div>
         <br />
         <h2>
           {user.name} {user.lastname} <br />
           <span>{user.job}</span>{" "}
         </h2>
       </div>
       <div className="contactInfo">
         <h3 className="title">Contact Info</h3>
         <ul>
           <li>
             <span className="icon">
               <i className="fa fa-phone" aria-hidden="true" />
             </span>
             <span className="text">MAIL: {user.email}</span>
           </li>
           <li>
             <span className="icon">
               <i className="fa fa-envelope-o" aria-hidden="true" />
             </span>
             <span className="text">Phone number: {user.phone}</span>
           </li>
           <li>
             <span className="icon">
               <i className="fa fa-globe" aria-hidden="true" />
             </span>
             <span className="text">Adresse: {user.adresse}</span>
           </li>
         </ul>
       </div>
       <hr style={{color:'white'}}/>
       <div className="contactInfo language">
         <h3 className="title">Languages</h3>
         <h6 className="text" style={{color:'white'}}>{user.languages}</h6>
       </div>
     </div>
     <div className="right_Side">
       <div className="about">
         <h2 className="title2">Education</h2>
         <div className="box">
           <div className="text">
             <h4>{user.education}</h4>
           </div>
         </div>
       </div>
       <hr style={{color:'black'}}/>
       <div className="about">
         <h2 className="title2">Experience</h2>
         <div className="box">
           <div className="text">
             <h4>{user.experience}</h4>
           </div>
         </div>
       </div>
       <hr style={{color:'black'}}/>
       <div className="about skills">
         <h2 className="title2">Professionals skills</h2>
         <div className="box">
           <h4>{user.skills}</h4>
         </div> 
       </div>
       <hr style={{color:'black'}}/>
       <div className="about interest">
         <h2 className="title2">Interests</h2>
         {user.interests}
       </div>
     </div>
   </div>
   <br/>
       <br/>
   </>:
                        //company profile 

     <div >                  
   <header>
   {/* Navbar */}
   <Navbar/>
   {/* Navbar */}
   {/* Background image */}
   <div
     className="p-5 text-center bg-image"
     style={{
       backgroundImage:`url(${user.image})`,
       backgroundPosition:'center',
       backgroundRepeat:'no-repeat',
       backgroundSize:'cover',
       height: 400,
       marginTop: 58
     }}
   >
     <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
       <div className="d-flex justify-content-center align-items-center h-100">
         <div className="text-light">
           <h1 className="mb-3">Welcome to {user.name} page</h1>
           <h4 className="mb-3">{user.description}</h4>
         </div>
       </div>
     </div>
   </div>
   {/* Background image */}
 </header>

 <div className="container">
  <div className="row">
    <div className="col-md-12">
      <div className="main-timeline">
        <div className="timeline">
          <a className="timeline-content">
            <div className="timeline-icon">
              <i className="fa fa-globe" />
            </div>
            <h3 className="title">Our Services</h3>
            <p className="description">
             {user.services}
            </p>
          </a>
        </div>
        <div className="timeline">
          <a className="timeline-content">
            <div className="timeline-icon">
              <i className="fa fa-rocket" />
            </div>
            <h3 className="title">Our Products</h3>
            <p className="description">
              {user.products}
            </p>
          </a>
        </div>
        <div className="timeline" >
          <a className="timeline-content">
            <div className="timeline-icon">
              <i className="fa fa-rocket" />
            </div>
            <h3 className="title" >About us</h3>
            <p className="description">
             {user.about}
            </p>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

  {/* Footer */}
  <footer className="text-center text-lg-start bg-light text-muted">
    {/* Section: Social media */}
    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      {/* Left */}
      <div className="me-5 d-none d-lg-block">
        <span>Get connected with us on social networks:</span>
      </div>
      {/* Left */}
      {/* Right */}
      <div>
        <a href={user.facebook} className="me-4 text-reset">
        <i class="bi bi-facebook"></i>
        </a>
        <a href={user.twitter} className="me-4 text-reset">
        <i class="bi bi-twitter"></i>
        </a>
        <a href={user.instagram} className="me-4 text-reset">
        <i class="bi bi-instagram"></i>
        </a>
        <a href={user.linkedin} className="me-4 text-reset">
        <i class="bi bi-linkedin"></i>
        </a>
      </div>
      {/* Right */}
    </section>
    {/* Section: Social media */}
    {/* Section: Links  */}
    <section className="">
      <div className="container text-center text-md-start mt-5">
        {/* Grid row */}
        <div className="row mt-3">
          {/* Grid column */}
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            {/* Content */}
            <h6 className="text-uppercase fw-bold mb-4">
            <i class="bi bi-gem"></i>
              {user.name}
            </h6>
            <p>
             {user.about}
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Products</h6>
            <p>
              <a href="#!" className="text-reset">
                Angular
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                React
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Vue
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Laravel
              </a>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
            <p>
              <a href="#!" className="text-reset">
                Pricing
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Settings
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Orders
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Help
              </a>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p>
            <i class="bi bi-house-door-fill"></i> {user.adresse}
            </p>
            <p>
            <i class="bi bi-envelope"></i>
              {user.email}
            </p>
            <p>
            <i class="bi bi-telephone-fill"></i> {user.phone}
            </p>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row */}
      </div>
    </section>
    {/* Section: Links  */}
    
  </footer>
  {/* Footer */}
  </div> 
 }
     
</div>
  )
}

export default Profile_emp
