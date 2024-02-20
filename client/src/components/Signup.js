import React from 'react'
import './Signup.css'
// import NavBar from './NavBar'
import Nav from './Nav'
import {Link} from 'react-router-dom'
export default function Signup() {
  return (
    <div>
      <div className='nav-container'>
    <div className='navigation'>
        <nav>
            <ul className='unlist'>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/Template">Template</Link></li>
        </ul>

        </nav>
      
    </div>
    </div>
    <div class="sign-box">
    <h2>SignUp</h2>
    <form>
      <div class="user-box">
        <input type="text" name="" required=""/>
        <label>Username</label>
      </div>
      <div class="user-box">
        <input type="password" name="" required=""/>
        <label>Password</label>
      </div>
      <div class="user-box">
        <input type="password" name="" required=""/>
        <label>Confirm-Password</label>
      </div>
      <a href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        SignUp
      </a>
    </form>
    </div>
     <h4>Already have account ? <Link to='/login' className='logback'>Login</Link></h4> 
    {/* <h3 className='login'>Already have account ? <Link to='/login' className='logback'>Login</Link></h3> */}
    </div>

  )
}
