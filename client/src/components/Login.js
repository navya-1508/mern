import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import Nav from './Nav';
import {Link, useNavigate } from 'react-router-dom';

export default function Login() {
   const [email,setEmail] = useState("");
   const [password, setPassword] = useState("");
   const navigate = useNavigate(); // Add parentheses to useNavigate

   const handleSubmit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:7000/login', { email, password })
         .then(result => {
            console.log(result)
            if(result.data==="Success"){
               navigate('/template');
            // window.location.href = '/template'; 
            }
         // Navigate to '/template' on successful login
         })
         .catch(err => console.log(err));
   };

   return (
      <div>
         <Nav />
         <div className="login-box">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
               <div className="user-box">
                  <input type="text" onChange={(e) => setEmail(e.target.value)} name="username" required />
                  <label>Username</label>
               </div>
               <div className="user-box">
                  <input type="password" onChange={(e) => setPassword(e.target.value)} name="password" required />
                  <label>Password</label>
               </div>
               <button type="submit">Login</button>
            </form>
         </div>
          <h4>Don't have an account? <Link to='/signup' className='sinback'>Signup</Link></h4> 
      </div>
   );
}
