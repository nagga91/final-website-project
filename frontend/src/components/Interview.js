import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { one_offer, update_offer } from '../redux/Action/Offer_act'
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import Test from './Test';
import Navbar from './Navbar';
import Form from 'react-bootstrap/Form';
import { getCurrent } from '../redux/Action/Action';

function Interview() {
  const dispatch=useDispatch()
  var url = window.location.pathname;
  var id = url.substring(url.lastIndexOf('/') + 1);
  const handle = useFullScreenHandle();
  const [showTest, setShowTest] = useState(false);

  useEffect(()=>{
  dispatch(getCurrent())
  dispatch(one_offer(id))
  
}
  ,[dispatch])
  const user=useSelector((state)=>state.Reducer.user)
const job=useSelector((state)=>state.Offersreducer.offer)
  console.log(job)
  console.log(user)

  const handleStartTest = () => {
    setShowTest(true);
    handle.enter();
    dispatch(update_offer(job._id,{candidates:[...job.candidates,{candidat:user._id}]}))
  }

  const handleFullScreenChange = () => {
    if (!handle.active) {
      setShowTest(false);
  }
  dispatch(one_offer(id))
  }

  return (
    <div style={{width: '100%',minHeight: '100vh',backgroundImage:`url("https://cdn.wallpapersafari.com/9/57/PdJiN3.jpg")`,backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'cover'}}>
      <Navbar/>
      <br/>
      <br/>
    <div style={{marginLeft:'5%'}}>
        <FullScreen handle={handle}
        onChange={handleFullScreenChange}
        enabled={showTest}>

        {showTest && job.test ? (<Test test={job.test} idoffer={job._id} iduser={user._id} candidates={job.candidates}/> ) : (
        <div style={{display:'flex'}}>
          <Form.Text
          disabled
          className='editor'
          style={{textAlign:'start',width: '70%',padding:'10px 0px',height:'320%',color:'white',fontSize:'20px',border:'1px solid'}}
          ><p style={{marginLeft:'5%',marginRight:'5%',color:'white'}}>
          Ground rules:<br/>
          - Test Content: The questions in the test will cover the content that is relevant to the specific job or skill being tested.
          <br/><br/>
          - One Attempt: Candidates will only have one chance to complete the test. Once they submit their responses, they will not be able to retake the test.
          <br/><br/>
          - Timing: Each question in the test will have a set time limit, after which the candidate's response will be automatically submitted.
          <hr/>
          Get started:<br/>
          Try to find a time and place where you will not be interrupted during the test. The test will begin once you click on start.
          </p>
          </Form.Text>
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'30%'}}>
            <div style={{backgroundColor:'white',marginRight:'50px',width:'40%',borderRadius:'15px'}}> 
            <i class="bi bi-puzzle" style={{fontSize:'3rem',color:'blue'}}><br/>
            <span style={{fontSize:'1rem',color:'black'}}>
            {job.title} test</span></i>
            </div>
            <div style={{backgroundColor:'white',width:'40%',borderRadius:'15px'}}>
          <i class="bi bi-hourglass-split" style={{fontSize:'3rem',color:'blue'}}><br/>
          <span style={{fontSize:'1rem',color:'black'}}>
            {job.test?.reduce((acc,e)=>acc+e.time,0
          )} min</span></i>
          </div>
          </div>
        </div>
      )}
        </FullScreen>
        <br/>
     <div>
     {(job.candidates?.filter(e=>e.candidat===user._id).length>0) ? 
        <button className="btn d-block d-sm-inline-block btn-light" style={{backgroundColor:'teal'}} disabled>Applied <i class="bi bi-check2"></i></button>
        :
        <button onClick={handleStartTest} style={{color:'#fff',backgroundColor:'#065f46',outline:'none',padding: '10px 5px',width: '100px',cursor: 'pointer',border: 'none',borderRadius: '3px',boxShadow: '0 0 1px 1px #e0e0ea'}}>
          Start Test
        </button>
      }
      </div>
    </div>
  </div>
  )
}

export default Interview
