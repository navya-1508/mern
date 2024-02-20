import React from 'react'
import './App.css'
import Login from './components/Login.js'
import Signup from './components/Signup.js'
//  import Home from './components/Home'
import Template from './components/Template.js'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import {Link} from 'react-router-dom'
import account from './components/account.js'
import book from './components/book.js'
export default function App() {
  return (
    <div>
      {/* <Link to='/template'>Hotel Management System</Link> */}
      {/* <h1>Hotel Management System</h1> */}
      <Router>
      {/* <Home/>  */}
      <Routes>
        <Route path="/Login" exact Component={Login} />
        <Route path="/Signup" exact Component={Signup} />
        <Route path="/Template" exact Component={Template} />
        <Route path="/account" exact Component={account} />
        <Route path="/book" exact Component={book} />
      </Routes>
    </Router>
    </div>
  )
}

