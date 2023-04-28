import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { many_user } from '../redux/Action/Action'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function Table({array,test,questions}) {
  const dispatch=useDispatch()
  const [show, setShow] = useState(Array(array.length).fill(false));

  const handleShow = (index) => {
    const newShow = [...show];
    newShow[index] = true;
    setShow(newShow);
  };

  const handleClose = (index) => {
    const newShow = [...show];
    newShow[index] = false;
    setShow(newShow);
  };
  console.log(array,test)
  console.log(questions,'ttt')
  var candidates=[]
  array.map((e)=>candidates.push(e.candidat))
  console.log(candidates)
  
  useEffect(() => {
   dispatch(many_user(candidates))
  }, [dispatch])

  const searchers= useSelector((state)=>state.Reducer.manyusers)
  console.log(searchers)
  return (
    <>
    {(test==='with test')?searchers.map((e,index)=>{
      const person = array.find((el) => el.candidat === e._id&&el.answers.length>0);
      console.log(person)
      if(person?.answers.length>0){
        return(
      <tr className="text-gray-700" key={e._id}>
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm" style={{display:'flex'}}>
                <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                  <img
                    className="rounded-full"
                    src={e.image}
                    alt=""
                    loading="lazy"
                    style={{width:'40px',height:'40px',borderRadius:'50%'}}
                  />
                  <div
                    className="absolute inset-0 rounded-full shadow-inner"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <Link to={`/profil/${e._id}`} className="font-semibold text-black">{e.name} {e.lastname}</Link>
                </div>
              </div>
            </td>
            <td className="px-4 py-3 text-ms font-semibold border">{e.job}</td>
            <td className="px-4 py-3 text-xs border">
              <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                {e.email}
              </span>
            </td>
            <td className="px-4 py-3 text-sm border">{e.phone}</td>
            <td className="px-4 py-3 text-sm border">
                <>
      <Button variant="primary" onClick={() => handleShow(index)} style={{fontSize:'10px'}}>
        Show Answers
      </Button>

      <Modal show={show[index]} onHide={() => handleClose(index)}>
        <Modal.Header closeButton>
          <Modal.Title>Candidat's answers</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {person.answers.map((e,i)=>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              Question n{i+1}:
              <Form.Control as="textarea" rows={5} value={questions[i].question} disabled/>
              Answer of candidat:
              <Form.Control as="textarea" rows={5} value={e} disabled/>
              <hr/>
            </Form.Group>)}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={()=>handleClose(index)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
              </td>
            </tr>)}
}):
searchers.map((e)=>{
    return(
  <tr className="text-gray-700" key={e._id}>
        <td className="px-4 py-3 border">
          <div className="flex items-center text-sm" style={{display:'flex'}}>
            <div className="relative w-8 h-8 mr-3 rounded-full md:block">
              <img
                className="rounded-full"
                src={e.image}
                alt=""
                loading="lazy"
                style={{width:'40px',height:'40px',borderRadius:'50%'}}
              />
              <div
                className="absolute inset-0 rounded-full shadow-inner"
                aria-hidden="true"
              />
            </div>
            <div>
              <p className="font-semibold text-black">{e.name} {e.lastname}</p>
            </div>
          </div>
        </td>
        <td className="px-4 py-3 text-ms font-semibold border">{e.job}</td>
        <td className="px-4 py-3 text-xs border">
          <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
            {e.email}
          </span>
        </td>
        <td className="px-4 py-3 text-sm border">{e.phone}</td>
        </tr>)
})
}
       
       </>      
  )
}

export default Table