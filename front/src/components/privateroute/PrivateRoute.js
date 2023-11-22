import React, {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {fetchAuthUser} from '../../api/authuser'
import Login from '../login/Login'

import Admin from '../Admin/Admin'
import NavbarContaciner from '../navbar/NavbarContaciner'
import {useDispatch,useSelector} from 'react-redux'
import { setAuth } from '../../redux/authSlice'
import Client from '../User/Client'
const PrivateRoute = () => {
  const dispatch =  useDispatch()
  const navigate = useNavigate()
  const authUser = useSelector(state=>state.auth)
  console.log('data auth ',authUser)
  const getAuth=async()=>{
    const data = await fetchAuthUser()
    console.log('data auth',data)
    dispatch(setAuth(data))
  }
  useEffect(()=>{
    getAuth()
  },[])

const token = localStorage.getItem('token')
const logout=()=>{
  localStorage.removeItem('token')
  navigate('/login')
}
  return (
    <div>
{
token ? (<><NavbarContaciner auth={authUser} logout={logout}   />
{
authUser.role === "admin" ?  <Admin auth={authUser} logout={logout} /> : <Client auth={authUser} logout={logout} /> 

}</>):(<Login/>)
}  
    </div>
    
  )
}

export default PrivateRoute
