import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCurrent, update_user } from '../redux/Action/Action';
import Navbar from './Navbar';

function Edit_profile() {

  const dispatch=useDispatch()
  const navigate=useNavigate()

  useEffect(() => {
    dispatch(getCurrent())
  }, [dispatch])

  const user=useSelector((state)=>state.Reducer.user)

  const [name,setName]=useState(user.name)
  const [lastname,setLastname]=useState(user.lastname)
  const [email,setEmail]=useState(user.email)
  const [job,setJob]=useState(user.job)
  const [phone,setPhone]=useState(user.phone)
  const [adresse,setAdresse]=useState(user.adresse)
  const [experience,setExperience]=useState(user.experience)
  const [education,setEducation]=useState(user.education)
  const [skills,setSkills]=useState(user.skills)
  const [interests,setInterests]=useState(user.interests)
  const [languages,setLanguages]=useState(user.languages)
  const [certifications,setCertifications]=useState(user.certifications)
  const [image,setImage]=useState([])
  const [about,setAbout]=useState(user.about)
  const [description,setDescription]=useState(user.description)
  const [services,setServices]=useState(user.services)
  const [products,setProducts]=useState(user.products)
  const [facebook,setFacebook]=useState(user.facebook)
  const [linkedin,setLinkedin]=useState(user.linkedin)
  const [instagram,setInstagram]=useState(user.instagram)
  const [twitter,setTwitter]=useState(user.twitter)
  
  const handleedit=async()=>{
    var data={}
    const formaData=new FormData()
    formaData.append('file',image)
    formaData.append('upload_preset','ml_default')
    if(image.length===undefined){
    await axios.post('https://api.cloudinary.com/v1_1/dwb8dvmbw/upload',formaData).then((res)=>
    {  console.log(res.data.url)
     data={name,lastname,image:res.data.url,email,job,phone,adresse,education,experience,languages,skills,interests,certifications,about,description,services,products,facebook,linkedin,instagram,twitter}
  })
  }else{
    data={name,lastname,email,job,phone,adresse,education,experience,languages,skills,interests,certifications,about,description,services,products,facebook,linkedin,instagram,twitter}
  }
  dispatch(update_user(user._id,data))
    navigate('/profile')
}

  return (
    <div style={{backgroundImage:`url("https://cdn.wallpapersafari.com/9/57/PdJiN3.jpg")`,backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'cover'}}>
    
    {(user.role==='Job searcher')?
    <> 
    <Navbar/>
    <div className="container bootstrap snippets bootdey" >
    <h1 className="text-primary">EDIT YOUR PROFIL</h1>
    <hr />
    <div className="row">
      {/* left column */}
      <div className="col-md-2">
        <div className="text-center">
          <img
            src={"https://bootdey.com/img/Content/avatar/avatar7.png"}
            className="avatar img-circle img-thumbnail"
            alt="avatar"
          />
          <h6 style={{color:'#ffeba7'}}>Upload a different photo</h6>
          <input type="file" accept='image/*,.mp4' className="form-control" onChange={(e)=>setImage(e.target.files[0])} />
        </div>
      </div>
      {/* edit form column */}
      <div className="col-md-5 personal-info">
        
        <form className="form-horizontal" role="form">
        <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Name</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          onChange={(e)=>setName(e.target.value)}
          defaultValue={user.name}
        />
      </InputGroup>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Lastname</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          onChange={(e)=>setLastname(e.target.value)}
          defaultValue={user.lastname}
        />
      </InputGroup>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Email</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          onChange={(e)=>setEmail(e.target.value)}
          defaultValue={user.email}
        />
      </InputGroup>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Current Job</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          onChange={(e)=>setJob(e.target.value)}
          defaultValue={user.job}
        />
      </InputGroup>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Adresse</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          onChange={(e)=>setAdresse(e.target.value)}
          defaultValue={user.adresse}
        />
      </InputGroup>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Phone</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          onChange={(e)=>setPhone(e.target.value)}
          defaultValue={user.phone}
        />
      </InputGroup>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Education</InputGroup.Text>
        <Form.Control
          as="textarea"
          placeholder="from year-to year:where are you studied?"
          style={{ height: '100px' }}
          onChange={(e)=>setEducation(e.target.value)}
          defaultValue={user.education}
        />
      </InputGroup>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Experience</InputGroup.Text>
        <Form.Control
          as="textarea"
          placeholder="from year-to year:where are you worked and what?"
          style={{ height: '100px' }}
          onChange={(e)=>setExperience(e.target.value)}
          defaultValue={user.experience}
        />
      </InputGroup>
      
        </form>
      </div>
      <div className="col-md-5 personal-info">
        <form className="form-horizontal" role="form">
        <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Skills</InputGroup.Text>
        <Form.Control
          as="textarea"
          placeholder="skill 1 / skill 2..."
          style={{ height: '100px' }}
          onChange={(e)=>setSkills(e.target.value)}
          defaultValue={user.skills}
        />
        </InputGroup>
        <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Interests</InputGroup.Text>
        <Form.Control
          as="textarea"
          placeholder="what are your interests ?"
          style={{ height: '100px' }}
          onChange={(e)=>setInterests(e.target.value)}
          defaultValue={user.interests}
        />
        </InputGroup>
        <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Certifications</InputGroup.Text>
        <Form.Control
          as="textarea"
          placeholder="your certifications..."
          style={{ height: '100px' }}
          onChange={(e)=>setCertifications(e.target.value)}
          defaultValue={user.certifications}
        />
        </InputGroup>
        <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Languages</InputGroup.Text>
        <Form.Control
          as="textarea"
          placeholder="how many languages can you practise?"
          style={{ height: '100px' }}
          onChange={(e)=>setLanguages(e.target.value)}
          defaultValue={user.languages}
        />
        </InputGroup>
        </form>
      </div>
    </div>
  </div>
  <hr />
  <Button variant="secondary" href='/profile'>
            Close
          </Button>
          <Button variant="primary" onClick={handleedit}>
            Save Changes
          </Button>
          </>
    :
    <>
    <Navbar/>
    <div className="container bootstrap snippets bootdey" >
    <h1 className="text-primary">EDIT YOUR PAGE</h1>
    <hr />
    <div className="row">
      {/* left column */}
      <div className="col-md-2">
        <div className="text-center">
          <img
            src="https://bootdey.com/img/Content/avatar/avatar7.png"
            className="avatar img-circle img-thumbnail"
            alt="avatar"
          />
          <h6 style={{color:'#ffeba7'}}>Upload a different photo</h6>
          <input type="file" accept='image/*,.mp4' className="form-control" onChange={(e)=>setImage(e.target.files[0])} />
        </div>
      </div>
      {/* edit form column */}
      <div className="col-md-5 personal-info">
        
        <form className="form-horizontal" role="form">
        <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Name of company</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          onChange={(e)=>setName(e.target.value)}
          defaultValue={user.name}
        />
      </InputGroup>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Email</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          onChange={(e)=>setEmail(e.target.value)}
          defaultValue={user.email}
        />
      </InputGroup>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Adresse</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          onChange={(e)=>setAdresse(e.target.value)}
          defaultValue={user.adresse}
        />
      </InputGroup>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Phone</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          onChange={(e)=>setPhone(e.target.value)}
          defaultValue={user.phone}
        />
      </InputGroup>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Link facebook</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          onChange={(e)=>setFacebook(e.target.value)}
          defaultValue={user.facebook}
        />
      </InputGroup>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Link linkedin</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          onChange={(e)=>setLinkedin(e.target.value)}
          defaultValue={user.linkedin}
        />
      </InputGroup>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Link instagram</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          onChange={(e)=>setInstagram(e.target.value)}
          defaultValue={user.instagram}
        />
      </InputGroup>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Link twitter</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          onChange={(e)=>setTwitter(e.target.value)}
          defaultValue={user.twitter}
        />
      </InputGroup>
      
        </form>
      </div>
      <div className="col-md-5 personal-info">
        <form className="form-horizontal" role="form">
        <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Description</InputGroup.Text>
        <Form.Control
          as="textarea"
          placeholder="describe your company in short paragraph"
          style={{ height: '100px' }}
          onChange={(e)=>setDescription(e.target.value)}
          defaultValue={user.description}
        />
        </InputGroup>
        <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Services</InputGroup.Text>
        <Form.Control
          as="textarea"
          placeholder="what are your services ?"
          style={{ height: '100px' }}
          onChange={(e)=>setServices(e.target.value)}
          defaultValue={user.services}
        />
        </InputGroup>
        <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Products</InputGroup.Text>
        <Form.Control
          as="textarea"
          placeholder="list of your products"
          style={{ height: '100px' }}
          onChange={(e)=>setProducts(e.target.value)}
          defaultValue={user.products}
        />
        </InputGroup>
        <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">About us</InputGroup.Text>
        <Form.Control
          as="textarea"
          placeholder="About your company"
          style={{ height: '100px' }}
          onChange={(e)=>setAbout(e.target.value)}
          defaultValue={user.about}
        />
        </InputGroup>
        </form>
      </div>
    </div>
  </div>
  <hr />
  <Button variant="secondary" href='/profile'>
            Close
          </Button>
          <Button variant="primary" onClick={handleedit}>
            Save Changes
          </Button>
          </>
          }
  

    </div>
  )
}

export default Edit_profile
