import React from 'react';
import './form-1.css';
import { IoIosArrowBack } from 'react-icons/io';
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from 'react-icons/fc';
import { AiFillApple } from 'react-icons/ai';


export default function Form1() {
  return (
    <div className='block'>
      <div className='block-1' id='bg'>
        <IoIosArrowBack style={{ color: "white", fontSize: "20px", margin: "15px 0 0 10px" }} />
        <div className='block-1-content'>
          <h2 style={{paddingLeft:"10px"}}>Hi!</h2>
          <div className='form-1'>
            <input type="mail" placeHolder="email" size={26} />
            <button style={{textAlign:"center",color:"black",backgroundColor:"orange"}} type='submit'>Continue</button>
            <p style={{margin:"5px 0",textAlign:"center"}}>or</p>
            <button type='button'><BsFacebook/> Continue with Facebook</button>
            <button type='button'><FcGoogle/> Continue with Google</button>
            <button type='button'><AiFillApple /> Continue with Apple</button>
            <p>Don't have an account?<span style={{ color: "orange" }}> Sign up</span></p>
            <p style={{color:"orange"}}>Forgot your password</p>
          </div>
        </div>
      </div>
      <div className='block-2' id='bg'>
        <IoIosArrowBack style={{ color: "white", fontSize: "20px", margin: "15px 0 0 10px" }} />
        <div className='block-1-content'>
          <h2 style={{paddingLeft:"10px"}}>Sign up</h2>
          <div className='form-2'>
            <p>Looks like you don't have an account. Let's create a new account for <strong>jane.doe@gmail.com</strong></p>
            <input style={{margin:"10px 0 5px 0"}} type="name" placeHolder="name" size={26} />
            <input type="password" placeHolder="password" size={26} />
            <p>By selecting Agree and continue below, I agree to <span style={{ color: "orange" }}>Terms of Service and Privacy Policy</span></p>
            <button style={{textAlign:"center",color:"black",backgroundColor:"orange"}} type='submit'>Agree and Continue</button>
          </div>
        </div>
      </div>
      <div className='block-3' id='bg'>
        <IoIosArrowBack style={{ color: "white", fontSize: "20px", margin: "15px 0 0 10px" }} />
        <div className='block-1-content'>
          <h2 style={{paddingLeft:"10px"}}>Log in</h2>
          <div className='form-3'>
            <strong>Jane Dow</strong>
            <p>jane.doe@gmail.com</p>
            <input type="password" placeHolder="password" size={26} />
            <button style={{ textAlign: "center", color: "black", backgroundColor: "orange" }} type='submit'>Continue</button>
            <p style={{color:"orange",paddingLeft:"5px"}}>Forgot your password ?</p>
          </div>
        </div>
      </div>
    </div>
  )
}
