import React from 'react'
import './book.css'
import {Link} from 'react-router-dom'
export default function book() {
  return (
    <div>
    <form className='forms'>
        <h2>Hotel Room Booking</h2>
        <div className='inputs'>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name"required/>
        </div>
        <div className='inputs'>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required/>
        </div>
        <div className='inputs'>
        <label for="checkInDate">Check-In Date:</label>
        <input type="date" id="checkInDate" name="checkInDate" required/>
        </div>
        <div className='inputs'>
        <label for="checkOutDate">Check-Out Date:</label>
        <input type="date" id="checkOutDate" name="checkOutDate" required/>
        </div>
        <div className='inputs'>
        <label for="roomType">Room Type:</label>
        <select id="roomType" name="roomType" required>
            <option value="single">Single Room</option>
            <option value="double">Double Room</option>
            <option value="suite">Suite</option>
        </select>
        </div>
        <a href=" ">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Book Now
      </a>
        </form>
        <Link to='/template' className='back'>Back</Link>
    </div>
  )
}