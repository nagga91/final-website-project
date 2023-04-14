import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useDispatch } from 'react-redux';
import { add_offer, update_offer } from '../redux/Action/Offer_act';

function Update_offer({offer}) {
    const dispatch=useDispatch()
    const [title,setTitle]=useState(offer.title)
    const [hours,setHours]=useState(offer.hours)
    const [jobtype,setJobtype]=useState(offer.jobtype)
    const [place,setPlace]=useState(offer.place)
    const [description,setDescription]=useState(offer.description)
    const [salary,setSalary]=useState(offer.salary)
    const [withtest,setWithtest]=useState(offer.withtest)
    const [skills,setSkills]=useState(offer.skills)
    const [question1,setQuestion1]=useState(offer.test[0]?.question)
    const [time1,setTime1]=useState(offer.test[0]?.time)
    const [question2,setQuestion2]=useState(offer.test[1]?.question)
    const [time2,setTime2]=useState(offer.test[1]?.time)
    const [question3,setQuestion3]=useState(offer.test[2]?.question)
    const [time3,setTime3]=useState(offer.test[2]?.time)
    const [question4,setQuestion4]=useState(offer.test[3]?.question)
    const [time4,setTime4]=useState(offer.test[3]?.time)
    const [question5,setQuestion5]=useState(offer.test[4]?.question)
    const [time5,setTime5]=useState(offer.test[4]?.time)
    const [question6,setQuestion6]=useState(offer.test[5]?.question)
    const [time6,setTime6]=useState(offer.test[5]?.time)
    const [question7,setQuestion7]=useState(offer.test[6]?.question)
    const [time7,setTime7]=useState(offer.test[6]?.time)
    const [question8,setQuestion8]=useState(offer.test[7]?.question)
    const [time8,setTime8]=useState(offer.test[7]?.time)
    const [question9,setQuestion9]=useState(offer.test[8]?.question)
    const [time9,setTime9]=useState(offer.test[8]?.time)
    const [question10,setQuestion10]=useState(offer.test[9]?.question)
    const [time10,setTime10]=useState(offer.test[9]?.time)
    
    const [show, setShow] = useState(false);
    const [showquestions, setShowquestions] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const changeHandler = (e) => {
        if (e.target.value === 'with test') {
          setShowquestions(true);
        } else {
          setShowquestions(false);
        }
      }

    const handleupdate=()=>{
      var test=[]
      const verify=(question,time)=>{
        if(question!==undefined && time!==null){
          test.push({question,time})
      }
      return test
      }
      verify(question1,time1);verify(question2,time2);verify(question3,time3);verify(question4,time4);verify(question5,time5);verify(question6,time6);verify(question7,time7);verify(question8,time8);verify(question9,time9);verify(question10,time10);
      var data={title,description,place,salary,hours,test,skills,jobtype,withtest}
      dispatch(update_offer(offer._id,data))
      handleClose()
    }  

  return (
    <div >
       <Button variant="outline-primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} fullscreen={fullscreen} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title >you can update your offer</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{display:'flex'}} >
        <div className="col-md-5 personal-info">
        
        <form className="form-horizontal" role="form">
        <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Title</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          placeholder='enter the job title'
          onChange={(e)=>setTitle(e.target.value)}
          defaultValue={offer.title}
        />
      </InputGroup>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Location</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          placeholder='enter the location of company'
          onChange={(e)=>setPlace(e.target.value)}
          defaultValue={offer.place}
        />
      </InputGroup>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">working time</InputGroup.Text>
        <Form.Select size="sm" onChange={(e)=>setHours(e.target.value)} >
            <option>select full time or part time</option>
            <hr/>
            <option>Full Time</option>
            <option>Part Time</option>
        </Form.Select>
      </InputGroup>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Job categorie</InputGroup.Text>
        <Form.Select size="sm" onChange={(e)=>setJobtype(e.target.value)}>
            <option>select the categorie of job</option>
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
            </Form.Select>
      </InputGroup>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Interval salary</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          placeholder='from-to(unit)'
          onChange={(e)=>setSalary(e.target.value)}
          defaultValue={offer.salary}
        />
      </InputGroup>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Include test?</InputGroup.Text>
        <Form.Select size="sm" onChange={(e)=>{setWithtest(e.target.value);
        changeHandler(e)}}>
            <option>select with or without</option>
            <hr/>
            <option>with test</option>
            <option>without test</option>
        </Form.Select>
      </InputGroup>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Job description</InputGroup.Text>
        <Form.Control
          as="textarea"
          placeholder="daily tasks and projects..."
          style={{ height: '100px' }}
          onChange={(e)=>setDescription(e.target.value)}
          defaultValue={offer.description}
        />
      </InputGroup>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Skills required</InputGroup.Text>
        <Form.Control
          as="textarea"
          placeholder="skills required to this job"
          style={{ height: '100px' }}
          onChange={(e)=>setSkills(e.target.value)}
          defaultValue={offer.skills}
        />
      </InputGroup>
        </form>
        </div>

         {showquestions ? <div className="col-md-7 personal-info">
         <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">1st question</InputGroup.Text>
          <Form.Control
          as="textarea"
          placeholder="enter the question number 1"
          style={{ height: '60px',width:'50%' }}
          onChange={(e)=>setQuestion1(e.target.value)}
          defaultValue={offer.test[0]?.question}
          />
          <InputGroup.Text id="inputGroup-sizing-sm" >Response time<br/> (minutes)</InputGroup.Text>
          <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          style={{width:'10%'}}
          onChange={(e)=>setTime1(e.target.value)}
          defaultValue={offer.test[0]?.time}
          />
          </InputGroup>
          <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">2nd question</InputGroup.Text>
          <Form.Control
          as="textarea"
          placeholder="enter the question number 2"
          style={{ height: '60px',width:'50%' }}
          onChange={(e)=>setQuestion2(e.target.value)}
          defaultValue={offer.test[1]?.question}
          />
          <InputGroup.Text id="inputGroup-sizing-sm" >Response time<br/> (minutes)</InputGroup.Text>
          <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          style={{width:'10%'}}
          onChange={(e)=>setTime2(e.target.value)}
          defaultValue={offer.test[1]?.time}
          />
          </InputGroup>
          <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">3rd question</InputGroup.Text>
          <Form.Control
          as="textarea"
          placeholder="enter the question number 3"
          style={{ height: '60px',width:'50%' }}
          onChange={(e)=>setQuestion3(e.target.value)}
          defaultValue={offer.test[2]?.question}
          />
          <InputGroup.Text id="inputGroup-sizing-sm" >Response time<br/> (minutes)</InputGroup.Text>
          <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          style={{width:'10%'}}
          onChange={(e)=>setTime3(e.target.value)}
          defaultValue={offer.test[2]?.time}
          />
          </InputGroup>
          <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">4th question</InputGroup.Text>
          <Form.Control
          as="textarea"
          placeholder="enter the question number 4"
          style={{ height: '60px',width:'50%' }}
          onChange={(e)=>setQuestion4(e.target.value)}
          defaultValue={offer.test[3]?.question}
          />
          <InputGroup.Text id="inputGroup-sizing-sm" >Response time<br/> (minutes)</InputGroup.Text>
          <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          style={{width:'10%'}}
          onChange={(e)=>setTime4(e.target.value)}
          defaultValue={offer.test[3]?.time}
          />
          </InputGroup>
          <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">5th question</InputGroup.Text>
          <Form.Control
          as="textarea"
          placeholder="enter the question number 5"
          style={{ height: '60px',width:'50%' }}
          onChange={(e)=>setQuestion5(e.target.value)}
          defaultValue={offer.test[4]?.question}
          />
          <InputGroup.Text id="inputGroup-sizing-sm" >Response time<br/> (minutes)</InputGroup.Text>
          <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          style={{width:'10%'}}
          onChange={(e)=>setTime5(e.target.value)}
          defaultValue={offer.test[4]?.time}
          />
          </InputGroup>
          <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">6th question</InputGroup.Text>
          <Form.Control
          as="textarea"
          placeholder="enter the question number 6"
          style={{ height: '60px',width:'50%' }}
          onChange={(e)=>setQuestion6(e.target.value)}
          defaultValue={offer.test[5]?.question}
          />
          <InputGroup.Text id="inputGroup-sizing-sm" >Response time<br/> (minutes)</InputGroup.Text>
          <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          style={{width:'10%'}}
          onChange={(e)=>setTime6(e.target.value)}
          defaultValue={offer.test[5]?.time}
          />
          </InputGroup>
          <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">7th question</InputGroup.Text>
          <Form.Control
          as="textarea"
          placeholder="enter the question number 7"
          style={{ height: '60px',width:'50%' }}
          onChange={(e)=>setQuestion7(e.target.value)}
          defaultValue={offer.test[6]?.question}
          />
          <InputGroup.Text id="inputGroup-sizing-sm" >Response time<br/> (minutes)</InputGroup.Text>
          <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          style={{width:'10%'}}
          onChange={(e)=>setTime7(e.target.value)}
          defaultValue={offer.test[6]?.time}
          />
          </InputGroup>
          <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">8th question</InputGroup.Text>
          <Form.Control
          as="textarea"
          placeholder="enter the question number 8"
          style={{ height: '60px',width:'50%' }}
          onChange={(e)=>setQuestion8(e.target.value)}
          defaultValue={offer.test[7]?.question}
          />
          <InputGroup.Text id="inputGroup-sizing-sm" >Response time<br/> (minutes)</InputGroup.Text>
          <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          style={{width:'10%'}}
          onChange={(e)=>setTime8(e.target.value)}
          defaultValue={offer.test[7]?.time}
          />
          </InputGroup>
          <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">9th question</InputGroup.Text>
          <Form.Control
          as="textarea"
          placeholder="enter the question number 9"
          style={{ height: '60px',width:'50%' }}
          onChange={(e)=>setQuestion9(e.target.value)}
          defaultValue={offer.test[8]?.question}
          />
          <InputGroup.Text id="inputGroup-sizing-sm" >Response time<br/> (minutes)</InputGroup.Text>
          <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          style={{width:'10%'}}
          onChange={(e)=>setTime9(e.target.value)}
          defaultValue={offer.test[8]?.time}
          />
          </InputGroup>
          <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">10th question</InputGroup.Text>
          <Form.Control
          as="textarea"
          placeholder="enter the question number 10"
          style={{ height: '60px',width:'50%' }}
          onChange={(e)=>setQuestion10(e.target.value)}
          defaultValue={offer.test[9]?.question}
          />
          <InputGroup.Text id="inputGroup-sizing-sm" >Response time<br/> (minutes)</InputGroup.Text>
          <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          style={{width:'10%'}}
          onChange={(e)=>setTime10(e.target.value)}
          defaultValue={offer.test[9]?.time}
          />
          </InputGroup>


          </div>:null}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleupdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Update_offer
