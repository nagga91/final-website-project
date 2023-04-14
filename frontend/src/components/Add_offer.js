import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useDispatch } from 'react-redux';
import { add_offer } from '../redux/Action/Offer_act';

function Add_offer() {
    const dispatch=useDispatch()
    const [title,setTitle]=useState('')
    const [hours,setHours]=useState('')
    const [jobtype,setJobtype]=useState('')
    const [place,setPlace]=useState('')
    const [description,setDescription]=useState('')
    const [salary,setSalary]=useState('')
    const [withtest,setWithtest]=useState('')
    const [skills,setSkills]=useState('')
    const [question1,setQuestion1]=useState('')
    const [time1,setTime1]=useState(0)
    const [question2,setQuestion2]=useState('')
    const [time2,setTime2]=useState(0)
    const [question3,setQuestion3]=useState('')
    const [time3,setTime3]=useState(0)
    const [question4,setQuestion4]=useState('')
    const [time4,setTime4]=useState(0)
    const [question5,setQuestion5]=useState('')
    const [time5,setTime5]=useState(0)
    const [question6,setQuestion6]=useState('')
    const [time6,setTime6]=useState(0)
    const [question7,setQuestion7]=useState('')
    const [time7,setTime7]=useState(0)
    const [question8,setQuestion8]=useState('')
    const [time8,setTime8]=useState(0)
    const [question9,setQuestion9]=useState('')
    const [time9,setTime9]=useState(0)
    const [question10,setQuestion10]=useState('')
    const [time10,setTime10]=useState(0)
    
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

    const handleadd=()=>{
      var test=[]
      const verify=(question,time)=>{
        if(question.length!==0 && time!==0){
          test.push({question,time})
      }
      return test
      }
      verify(question1,time1);verify(question2,time2);verify(question3,time3);verify(question4,time4);verify(question5,time5);verify(question6,time6);verify(question7,time7);verify(question8,time8);verify(question9,time9);verify(question10,time10);
      var data={title,description,place,salary,hours,test,skills,jobtype,withtest}
      dispatch(add_offer(data))
      handleClose()
    }  

  return (
    <div>
       <Button variant="outline-primary" onClick={handleShow}>
        Add offer
      </Button>

      <Modal show={show} fullscreen={fullscreen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title >Here you can add new offer</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{display:'flex'}}>
        <div className="col-md-5 personal-info">
        
        <form className="form-horizontal" role="form">
        <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Title</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          placeholder='enter the job title'
          onChange={(e)=>setTitle(e.target.value)}
        />
      </InputGroup>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Location</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          placeholder='enter the location of company'
          onChange={(e)=>setPlace(e.target.value)}
        />
      </InputGroup>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">working time</InputGroup.Text>
        <Form.Select size="sm" onChange={(e)=>setHours(e.target.value)}>
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
        />
      </InputGroup>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Skills required</InputGroup.Text>
        <Form.Control
          as="textarea"
          placeholder="skills required to this job"
          style={{ height: '100px' }}
          onChange={(e)=>setSkills(e.target.value)}
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
          />
          <InputGroup.Text id="inputGroup-sizing-sm" >Response time<br/> (minutes)</InputGroup.Text>
          <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          style={{width:'10%'}}
          onChange={(e)=>setTime1(e.target.value)}
          />
          </InputGroup>
          <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">2nd question</InputGroup.Text>
          <Form.Control
          as="textarea"
          placeholder="enter the question number 2"
          style={{ height: '60px',width:'50%' }}
          onChange={(e)=>setQuestion2(e.target.value)}
          />
          <InputGroup.Text id="inputGroup-sizing-sm" >Response time<br/> (minutes)</InputGroup.Text>
          <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          style={{width:'10%'}}
          onChange={(e)=>setTime2(e.target.value)}
          />
          </InputGroup>
          <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">3rd question</InputGroup.Text>
          <Form.Control
          as="textarea"
          placeholder="enter the question number 3"
          style={{ height: '60px',width:'50%' }}
          onChange={(e)=>setQuestion3(e.target.value)}
          />
          <InputGroup.Text id="inputGroup-sizing-sm" >Response time<br/> (minutes)</InputGroup.Text>
          <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          style={{width:'10%'}}
          onChange={(e)=>setTime3(e.target.value)}
          />
          </InputGroup>
          <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">4th question</InputGroup.Text>
          <Form.Control
          as="textarea"
          placeholder="enter the question number 4"
          style={{ height: '60px',width:'50%' }}
          onChange={(e)=>setQuestion4(e.target.value)}
          />
          <InputGroup.Text id="inputGroup-sizing-sm" >Response time<br/> (minutes)</InputGroup.Text>
          <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          style={{width:'10%'}}
          onChange={(e)=>setTime4(e.target.value)}
          />
          </InputGroup>
          <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">5th question</InputGroup.Text>
          <Form.Control
          as="textarea"
          placeholder="enter the question number 5"
          style={{ height: '60px',width:'50%' }}
          onChange={(e)=>setQuestion5(e.target.value)}
          />
          <InputGroup.Text id="inputGroup-sizing-sm" >Response time<br/> (minutes)</InputGroup.Text>
          <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          style={{width:'10%'}}
          onChange={(e)=>setTime5(e.target.value)}
          />
          </InputGroup>
          <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">6th question</InputGroup.Text>
          <Form.Control
          as="textarea"
          placeholder="enter the question number 6"
          style={{ height: '60px',width:'50%' }}
          onChange={(e)=>setQuestion6(e.target.value)}
          />
          <InputGroup.Text id="inputGroup-sizing-sm" >Response time<br/> (minutes)</InputGroup.Text>
          <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          style={{width:'10%'}}
          onChange={(e)=>setTime6(e.target.value)}
          />
          </InputGroup>
          <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">7th question</InputGroup.Text>
          <Form.Control
          as="textarea"
          placeholder="enter the question number 7"
          style={{ height: '60px',width:'50%' }}
          onChange={(e)=>setQuestion7(e.target.value)}
          />
          <InputGroup.Text id="inputGroup-sizing-sm" >Response time<br/> (minutes)</InputGroup.Text>
          <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          style={{width:'10%'}}
          onChange={(e)=>setTime7(e.target.value)}
          />
          </InputGroup>
          <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">8th question</InputGroup.Text>
          <Form.Control
          as="textarea"
          placeholder="enter the question number 8"
          style={{ height: '60px',width:'50%' }}
          onChange={(e)=>setQuestion8(e.target.value)}
          />
          <InputGroup.Text id="inputGroup-sizing-sm" >Response time<br/> (minutes)</InputGroup.Text>
          <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          style={{width:'10%'}}
          onChange={(e)=>setTime8(e.target.value)}
          />
          </InputGroup>
          <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">9th question</InputGroup.Text>
          <Form.Control
          as="textarea"
          placeholder="enter the question number 9"
          style={{ height: '60px',width:'50%' }}
          onChange={(e)=>setQuestion9(e.target.value)}
          />
          <InputGroup.Text id="inputGroup-sizing-sm" >Response time<br/> (minutes)</InputGroup.Text>
          <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          style={{width:'10%'}}
          onChange={(e)=>setTime9(e.target.value)}
          />
          </InputGroup>
          <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">10th question</InputGroup.Text>
          <Form.Control
          as="textarea"
          placeholder="enter the question number 10"
          style={{ height: '60px',width:'50%' }}
          onChange={(e)=>setQuestion10(e.target.value)}
          />
          <InputGroup.Text id="inputGroup-sizing-sm" >Response time<br/> (minutes)</InputGroup.Text>
          <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          style={{width:'10%'}}
          onChange={(e)=>setTime10(e.target.value)}
          />
          </InputGroup>


          </div>:null}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleadd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Add_offer
