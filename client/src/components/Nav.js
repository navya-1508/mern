import React from 'react'
import './NavBar.css'
import {Link} from 'react-router-dom'
// import logo1 from '../Assests/logo1.png'
export default function Nav() {
  return (
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
    {/* <div className='image'>
    <img src={logo1} alt="Logo"/>
    </div> */}
    </div>
  )
}
