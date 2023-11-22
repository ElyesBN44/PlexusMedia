import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { postauthUser } from '../../api/authuser'

import './register2.css'

const Register2 = () => {
    const [name,setName]=useState('')
    const [lastName,setLastName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
  
    const navigate = useNavigate()
    const login=async(value)=>{
      await postauthUser(value)
      navigate('/login')
    }
  return (
    <div className='body'>
    <div className="container">
    <h1>Register</h1>
    <h2>Create a new account</h2>
    <form className="form" action="#">
      <fieldset className="form-fieldset ui-input __first">
        <input type="text" id="username" tabIndex={0} value={name} onChange={(e=>setName(e.target.value))} />
        <label >
          <span data-text="Username">Username</span>
        </label>
      </fieldset>
      <fieldset className="form-fieldset ui-input __first">
        <input type="text" id="username" value={lastName} onChange={(e=>setLastName(e.target.value))}  tabIndex={0}  />
        <label >
          <span data-text="Username">last Name</span>
        </label>
      </fieldset>
      <fieldset className="form-fieldset ui-input __second">
        <input type="email" id="email" tabIndex={0}  value={email} onChange={(e=>setEmail(e.target.value))}/>
        <label >
          <span data-text="E-mail Address">E-mail Address</span>
        </label>
      </fieldset>

      <fieldset className="form-fieldset ui-input __fourth">
        <input type="password" id="password"  value={password} onChange={(e=>setPassword(e.target.value))}/>
        <label >
          <span data-text="Repeat New Password">Repeat New Password</span>
        </label>
      </fieldset>
      <div className="form-footer">
        <button className="btn" type='button' onClick={()=>login({name,lastName,email,password})}>Register</button>
      </div>
    </form>
  </div>
  </div>
  )
}

export default Register2
