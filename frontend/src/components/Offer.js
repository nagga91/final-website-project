import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { get_offers, update_offer } from '../redux/Action/Offer_act'
import Navbar from './Navbar'
import './Offer.css'
import Accordion from 'react-bootstrap/Accordion';
import { Link, useNavigate } from 'react-router-dom'
import { getCurrent } from '../redux/Action/Action'
import Offcanvas from 'react-bootstrap/Offcanvas';

function Offer() {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [alert,setAlert]=useState(false)
    const [title,setTitle]=useState('')
    const [location,setLocation]=useState('')
    const [categorie,setCategorie]=useState('')
  useEffect(() => {
    dispatch(getCurrent())
    dispatch(get_offers())
  }, [dispatch])
  const user=useSelector((state)=>state.Reducer.user)
  const offers=useSelector((state)=>state.Offersreducer.offers)
  console.log(offers)
  console.log(user)
  return (
    <div style={{backgroundImage:`url("https://cdn.wallpapersafari.com/9/57/PdJiN3.jpg")`,backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'cover',minHeight:'100vh'}}>
     <Navbar/>
     
  <div className="container"  >
    <div className="row">
      <div className="col-lg-10 mx-auto mb-4">
        <div className="section-title text-center " style={{color:'white'}}>
          <h3 className="top-c-sep">Grow your career with us</h3>
          <p style={{color:'white'}}>
           You can find here all the opportunities of job and you can apply for the job that fits you 
          </p>
        </div>
      </div>
    </div>
    <div className="row" >
      <div className="col-lg-10 mx-auto">
        <div className="career-search mb-60">
          <form action="#" className="career-form mb-60" >
            <div className="row">
              <div className="col-md-6 col-lg-4 my-3">
                <div className="input-group position-relative">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search by Job Title"
                    id="keywords"
                    onChange={(e)=>setTitle(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-6 col-lg-4 my-3">
                <div className="input-group position-relative">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search by Location"
                    id="keywords"
                    onChange={(e)=>setLocation(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-6 col-lg-4 my-3">
                <div className="select-container">
                  <select className="form-select" onChange={(e)=>setCategorie(e.target.value)}>
                    <option value={''}>Search by categorie</option>
                    <hr/>
                    <option>Administration, business and management</option>
                    <option>Computing and ICT</option>
                    <option>Construction and building</option>
                    <option>Design, arts and crafts</option>
                    <option>Education and training</option>
                    <option>Engineering</option>
                    <option>Financial services</option>
                    <option>Hospitality, catering and tourism</option>
                    <option>Manufacturing and production</option>
                    <option>Transport, distribution and logistics</option>
                    <option>others...</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
          <div className="filter-result">
            <p className="mb-30 ff-montserrat" style={{color:'white'}}>Total Job Openings : {offers.length}</p>
            {offers.filter((offer)=>offer.title.toLowerCase().includes(title.toLowerCase().trim())&&
            offer.place.toLowerCase().includes(location.toLowerCase().trim())&&
            offer.jobtype.toLowerCase().includes(categorie.toLowerCase().trim()))
            .map((offer)=>
            <div key={offer._id}>
            <span style={{fontSize:'15px',textAlign:'start',background:'#f5f5f5'}}>Created at: {offer.createdAt}</span>
            <div className="col-xxl job-box d-md-flex align-items-center justify-content-between mb-30" style={{background:'#f5f5f5'}}>
            <div className="col-xxl job-left my-4 d-md-flex align-items-center flex-wrap">
            <div className="col-2" style={{position:'relative',marginTop:'0%'}}>
                <img className="img-holder" src={offer.userID.image}/>
              </div>
              <div className="col-10 job-content" style={{textAlign:'center'}}>
                <Link to={`/profil/${offer.userID._id}`}> {offer.userID.name} </Link>is hiring:
                <h2 className="text-center text-md-left" style={{color:'navy'}}>
                {offer.title}
                </h2>
                <span>{offer.jobtype}</span>
                <ul className="d-md-flex flex-wrap text-capitalize ff-open-sans">
                  <li className="mr-md-4">
                  <i class="bi bi-geo-alt"></i> {offer.place}
                  </li>
                  <li className="mr-md-4">
                  <i class="bi bi-currency-dollar"></i> {offer.salary}
                  </li>
                  <li className="mr-md-4">
                  <i class="bi bi-clock"></i> {offer.hours}
                  </li>
                  <li className="mr-md-4">
                  <i class="bi bi-hash"></i> {offer.withtest}
                  </li>
                </ul>
              </div>
            </div>
              
              <div>
              <div className="job-right my-4 flex-shrink-0" >
                {(offer.candidates.filter(e=>e.candidat===user._id).length>0) ? 
                <button className="btn d-block w-100 d-sm-inline-block btn-light" style={{backgroundColor:'teal'}} disabled>Applied <i class="bi bi-check2"></i></button>:
                
                <button onClick={()=>offer.withtest==='with test'?navigate('/interview/'+offer._id):
                dispatch(update_offer(offer._id,{candidates:[...offer.candidates,{candidat:user._id}]}),setAlert(true))
                
                } className="btn d-block w-100 d-sm-inline-block btn-light" style={{backgroundColor:'teal'}}>
       
                {(offer.withtest==='with test')? <span>Go to Test</span>:<span>Apply now</span>}
                </button>}

                {alert?<Offcanvas show={alert} onHide={()=> setAlert(false)} placement={'top'}>
                <Offcanvas.Header style={{justifyContent:'end'}} closeButton></Offcanvas.Header>
                <Offcanvas.Title style={{textAlign:'center'}}>Thank you {user.name} for applying</Offcanvas.Title>
                <Offcanvas.Body>
                The company is currently in the process of taking applications.
                </Offcanvas.Body>
                </Offcanvas>:null}
              </div>
                 <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
              <Accordion.Header>Show details...</Accordion.Header>
                <Accordion.Body style={{textAlign:'start'}}>
              Job description: {offer.description}
              <hr/>
              Required skills: {offer.skills} 
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
              </div>
              </div>
            
             </div> 
            
            
            )}
            
            
            
          </div>
        </div>
      </div>
    </div>
  </div>


    </div>
  )
}

export default Offer
