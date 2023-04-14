import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delete_offer, my_offers } from '../redux/Action/Offer_act'
import Navbar from './Navbar'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Add_offer from './Add_offer';
import Update_offer from './Update_offer';
import Table from './Table';

 function Myoffers() {
    const dispatch=useDispatch()
 useEffect(() => {
    dispatch(my_offers())
  }, [dispatch])

  const myoffers=useSelector((state)=>state.Offersreducer.myoffers)
  console.log(myoffers)
  const [activeOfferIndex, setActiveOfferIndex] = useState(null);

  const handleTabClick = (index) => {
    setActiveOfferIndex(index);
  };

  return (
    <div style={{backgroundImage:`url("https://cdn.wallpapersafari.com/9/57/PdJiN3.jpg")`,backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'cover'}}>
      <Navbar/>
      <br/>
      <div style={{marginLeft:'10%',width: '80%',alignItems: 'center',height: '10%',backgroundColor: 'teal',borderRadius:'15px'}}>
      <h4 style={{color:'black'}}>Manage your job offers and applicants in one place. <br/> Add offers and view applicant profiles.<hr/> Get started by clicking 'Add Offer'.</h4>
      </div>
      
      <Add_offer/>
      <br/>
    {myoffers.map((offer,index)=>(
    <div key={index}>
        <Card style={{ width: '90%',marginLeft:'5%' }}>
      <Card.Body>
        <Card.Title><h2>{offer.title}</h2></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{offer.jobtype}</Card.Subtitle>
        <Card.Text >
            <ul className="d-md-flex text-capitalize" style={{justifyContent:'center'}}>
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
        </Card.Text>
        <div style={{display:'flex',justifyContent:'center'}}>
        <Update_offer offer={offer}/> 
        <Button variant="outline-danger" onClick={()=>dispatch(delete_offer(offer._id))} style={{marginLeft:'20px'}}>Delete</Button>
        </div>

        <Tab.Container 
         id={`offer-${index}-tabs`}
         defaultActiveKey="first"
         activeKey={activeOfferIndex === index ? 'second' : 'first'}
         onSelect={() => handleTabClick(index)}>
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Description</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">candidates</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first" style={{textAlign:'start'}}>
              <h6>description :</h6>
              <p>{offer.description}</p>
              <hr/>
              <h6>skills required :</h6>
              <p>{offer.skills}</p>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
            <section className="container mx-auto p-6 font-mono">      
  <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
    <div className="w-full overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Job title</th>
            <th className="px-4 py-3">Email</th>
            <th className="px-4 py-3">Phone</th>
            {offer.withtest==='with test'?<th className="px-4 py-3">Answers</th>:null}
          </tr>
        </thead>
        <tbody className="bg-white" >
         
            
          {activeOfferIndex === index&&(<Table array={offer.candidates}/>)}
          
          
        </tbody>
      </table>
    </div>
  </div>
  </section> 

            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
      </Card.Body>
    </Card>
<br/>
    </div>)
    
    )}

    </div>
  )
}

export default Myoffers
