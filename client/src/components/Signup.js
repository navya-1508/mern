import React, { useState } from 'react';
import './Signup.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Link } from 'react-router-dom';

export default function Signup() {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const navigate = useNavigate(); // Add parentheses to useNavigate

   const handleSubmit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:7000/signup', { name, email, password })
         .then(result => {
            console.log(result);
            navigate('/login'); // Navigate to '/login' on successful signup
         })
         .catch(err => console.log(err));
   };

   return (
      <div>
         <div className='nav-container'>
            <div className='navigation'>
               <nav>
                  <ul className='unlist'>
                     <li><Link to="/login">Login</Link></li>
                     <li><Link to="/signup">Signup</Link></li>
                     <li><Link to="/template">Template</Link></li>
                  </ul>
               </nav>
            </div>
         </div>
         <div className="sign-box">
            <h2>SignUp</h2>
            <form onSubmit={handleSubmit}>
               <div className="user-box">
                  <input type="text" onChange={(e) => setName(e.target.value)} name="name" required />
                  <label>Username</label>
               </div>
               <div className="user-box">
                  <input type="email" onChange={(e) => setEmail(e.target.value)} name="email" required />
                  <label>Email</label>
               </div>
               <div className="user-box">
                  <input type="password" onChange={(e) => setPassword(e.target.value)} name="password" required />
                  <label>Password</label>
               </div>
               <button type="submit">Signup</button>
            </form>
         </div>
          {/* <h4>Already have an account? <Link to='/login' className='logback'>Login</Link></h4>  */}
      </div>
   );
}
