import React from 'react'
import './Book.css'
import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
export default function Book() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [roomType, setRoomType] = useState("");
  
  // const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

 axios.post('http://localhost:7000/Book', {name, email, checkInDate, checkOutDate, roomType })
         .then(result => {
            console.log(result);
            // navigate('/template'); // Navigate to '/login' on successful signup
         })
         .catch(err => console.log(err));
   };
  return (

    <div>
    <form className='forms' onSubmit={handleSubmit}>
        <h2>Hotel Room Booking</h2>
        <div className='inputs'>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" onChange={(e) => setName(e.target.value)} required/>
        </div>
        <div className='inputs'>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} required/>
        </div>
        <div className='inputs'>
        <label for="checkInDate">Check-In Date:</label>
        <input type="date" id="checkInDate" name="checkInDate"onChange={(e) => setCheckInDate(e.target.value)} required/>
        </div>
        <div className='inputs'>
        <label for="checkOutDate">Check-Out Date:</label>
        <input type="date" id="checkOutDate" name="checkOutDate" onChange={(e) => setCheckOutDate(e.target.value)} required/>
        </div>
        <div className='inputs'>
        <label for="roomType">Room Type:</label>
        <select id="roomType" name="roomType" onChange={(e) => setRoomType(e.target.value)} required>
            <option value="single">Single Room</option>
            <option value="double">Double Room</option>
            <option value="suite">Suite</option>
        </select>
        </div>
        <button type='submit'>Book</button>
        </form>
        <Link to='/template' className='back'>Back</Link>
    </div>
  )
}