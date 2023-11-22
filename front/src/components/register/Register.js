import React,{useState} from 'react'
import './register.css'
import { useNavigate } from 'react-router-dom'
import { postauthUser } from '../../api/authuser'
const Register = () => {

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
    <div className='bodyRegister'>
      <div className="containerR" >
  <div className="top" />
  <div className="bottom" />
  <div className="center">
    <h2>Please Register</h2>
    <input type="text" placeholder="name" value={name} onChange={(e=>setName(e.target.value))}/>
    <input type="text" placeholder="lastName" value={lastName} onChange={(e=>setLastName(e.target.value))} />
    <input type="email" placeholder="email" value={email} onChange={(e=>setEmail(e.target.value))}/>
    <input type="password" placeholder="password" value={password} onChange={(e=>setPassword(e.target.value))}/>
    <h2>&nbsp;</h2>
    <button  type='button' onClick={()=>login({name,lastName,email,password})}>login </button>
  </div>
</div>

    </div>
  )
}

export default Register


