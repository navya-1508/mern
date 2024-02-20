import React from 'react'
import './Login.css'
// import NavBar from './NavBar'
import Nav from './Nav'
import {Link} from 'react-router-dom'
export default function Login() {
  return (
    <div>
      {/* <NavBar/>*/}
      <Nav/> 
    <div class="login-box">
    <h2>Login</h2>
    <form>
      <div class="user-box">
        <input type="text" name="" required=""/>
        <label>Username</label>
      </div>
      <div class="user-box">
        <input type="password" name="" required=""/>
        <label>Password</label>
      </div>
      <a href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Login
      </a>
    </form>
  </div>
  <h4>I didn't have account ? <Link to='/signup' className='sinback'>Signup</Link></h4>
  </div>
  
  )
}
