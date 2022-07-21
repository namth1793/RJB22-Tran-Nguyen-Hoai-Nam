import React from 'react';
import './form-2.css';
import img from './image/left-image.png';

export default function Form2() {
  return (
    <div className='block'>
      <div className='left'>
        <img src={img} alt="img"/>
      </div>
      <div className='right'>
        <div className='form'>
          <h1 style={{ marginBottom: "-10px" }}>Register</h1>
          <p>Already have an account? <span>Log in</span></p>
          <h4>Manage all your lottery efficently</h4>
          <p>Let's get you all set up so you can verify your personal account and begin <br /> setting up your profile.</p><br/>
          <div className='grid-form'>
            <div className='firstname'>
              <label for="firstname" style={{ fontWeight: "700" }}>First Name</label><br/>
              <input type="name" id="firstname" size={40}/>
            </div>
            <div className='lastname'>
              <label for="lastname" style={{ fontWeight: "700" }}>Last Name</label><br/>
              <input type="name" id="lastname" size={40}/>
            </div>
            <div className='phonenumber'>
              <label for="phonenumber" style={{ fontWeight: "700" }}>Phone Number</label><br/>
              <input type="phone" id="phonenumber" size={40}/>
            </div>
            <div className='email'>
              <label for="email" style={{ fontWeight: "700" }}>Email</label><br/>
              <input type="mail" id="email" size={40}/>
            </div>
            <div className='pass'>
              <label for="pass" style={{ fontWeight: "700" }}>Password</label><br/>
              <input type="password" id="pass" size={40}/>
            </div>
            <div className='confirm'>
              <label for="confirm" style={{ fontWeight: "700" }}>Confirm Password</label><br/>
              <input type="password" id="confirm" size={40}/>
            </div>
          </div>
          <input type="checkbox" style={{marginTop:"20px"}}/> Yes, I want to receive Lottery Display emails<br/>
          <input type="checkbox" /> I agree to all the <span>Term Privacy Policy</span> and <span>Fees</span>
          <br/>
          <button type='submit' style={{marginTop:"20px"}} id="submit">Create Account</button>
        </div>
      </div>
    </div>
  )
}
