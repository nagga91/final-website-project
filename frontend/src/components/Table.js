import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { many_user } from '../redux/Action/Action'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Table({array}) {
  const dispatch=useDispatch()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(array)
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
    {searchers.map((e)=>{return(
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
            {array.map((el)=>
              (e._id===el.candidat&&el.answers.length>0)?<td className="px-4 py-3 text-sm border">
                <>
      <Button variant="primary" onClick={handleShow} style={{fontSize:'10px'}}>
        Show Answers
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {el.answers.map((e,i)=>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Answer {i+1}</Form.Label>
              <Form.Control as="textarea" rows={3} value={e} disabled/>
            </Form.Group>)}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
              </td>:null
            
            )}
            </tr>)}
      )}
       
       </>      
  )
}

export default Table