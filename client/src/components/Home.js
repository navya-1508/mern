import React from 'react'
// import NavBar from './NavBar'
import {Link} from 'react-router-dom'
import Login from './Login'
export default function Home() {
  return (
    <div className='home'>
      <Login/>
      <h4>Don't have an account? <Link to='/signup' className='sinback'>Signup</Link></h4>
       <img id="home-wall" src={'https://blog.trustico.com/wp-content/uploads/2016/08/hotel2.jpg'} alt="Home"/> 

      
    </div>
  )
}
