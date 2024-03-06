import React from 'react'
import './App.css'
import Login from './components/Login.js'
import Signup from './components/Signup.js'
//  import Home from './components/Home'
import Template from './components/Template.js'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
//  import {Link} from 'react-router-dom'
import account from './components/account.js'
import Book from './components/Book.js'
// import Nav from './components/Nav.js'
export default function App() {
  return (
    <div className='app'>
<Router>
  {/* <Login/>  */}
     {/* <h1 className='name'>Paradise Cove</h1> */}
      {/* <h4>Don't have an account? <Link to='/signup' className='sinback'>Signup</Link></h4> */}
      {/* <img id="home-wall" src={'https://blog.trustico.com/wp-content/uploads/2016/08/hotel2.jpg'} alt="Home"/> */}
      {/* <h1>PARADISE COVE </h1>  */}
      <Routes>
        <Route path="/Login" exact Component={Login} />
        <Route path="/Signup" exact Component={Signup} />
        <Route path="/Template" exact Component={Template} />
        <Route path="/account" exact Component={account} />
        <Route path="/Book" exact Component={Book} />
      </Routes>
    </Router>
    </div>
  )
}

