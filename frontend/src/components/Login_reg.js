import React, { useState } from 'react'
import './Login_reg.css'
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, register } from '../redux/Action/Action';

function Login_reg() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [name,setName]=useState("")
  const [phone,setPhone]=useState("")
  const [role,setRole]=useState("")
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleLogin=()=>{
    dispatch(login({email,password},navigate))
  }
  const handleregister=()=>{
    dispatch(register({role,name,phone,email,password},navigate))
  }
  return (
    <div className='body'>
      
      <div className="section">
        <div className="container">
          <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-5">
              <div className="section pb-5 pt-5 pt-sm-2 text-center">
                <h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
                <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                <label htmlFor="reg-log" />
                <div className="card-3d-wrap mx-auto">
                  <div className="card-3d-wrapper">
                    <div className="card-front">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Log In</h4>
                          <div className="form-group">
                            <input type="email" name="logemail" className="form-style" placeholder="Your Email" onChange={(e)=>setEmail(e.target.value)} id="logemail" autoComplete="off" />
                            <i className="input-icon uil uil-at" />
                          </div>	
                          <div className="form-group mt-2">
                            <input type="password" name="logpass" className="form-style" placeholder="Your Password" onChange={(e)=>setPassword(e.target.value)} id="logpass" autoComplete="off" />
                            <i className="input-icon uil uil-lock-alt" />
                          </div>
                          <button className="btn mt-4" id='tt' onClick={handleLogin}>submit</button>
                          <p className="mb-0 mt-4 text-center"><a href="#0" className="link">Forgot your password?</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="card-back">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-2 pb-3">Sign Up</h4>
                          <h6 className="mb-0 mt-0 text-center">select what kind of user you are:</h6>
                          <Form.Select size="sm" onChange={(e)=>setRole(e.target.value)}>
                          <option>select your role</option>
                            <option>Company</option>
                            <option>Job searcher</option>
                          </Form.Select>
                          <div className="form-group mt-2">
                            <input type="text" name="logname" className="form-style" placeholder="Your Name" onChange={(e)=>setName(e.target.value)} id="logname" autoComplete="off" />
                            <i className="input-icon uil uil-user" />
                          </div>	
                          <div className="form-group mt-2">
                            <input type="text" name="logname" className="form-style" placeholder="Your Phone number" onChange={(e)=>setPhone(e.target.value)} id="logname" autoComplete="off" />
                            <i className="input-icon uil uil-phone" />
                          </div>
                          <div className="form-group mt-2">
                            <input type="email" name="logemail" className="form-style" placeholder="Your Email" onChange={(e)=>setEmail(e.target.value)} id="logemail" autoComplete="off" />
                            <i className="input-icon uil uil-at" />
                          </div>	
                          <div className="form-group mt-2">
                            <input type="password" name="logpass" className="form-style" placeholder="Your Password" onChange={(e)=>setPassword(e.target.value)} id="logpass" autoComplete="off" />
                            <i className="input-icon uil uil-lock-alt" />
                          </div>
                          <button className="btn mt-2" id='tt' onClick={handleregister}>submit</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login_reg
