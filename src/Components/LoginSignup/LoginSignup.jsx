import React from 'react'
import './LoginSignup.css'
import { Link } from 'react-router-dom';
import loginBg from '../Assets/login-bg.jpg'
import { useState } from 'react';

export const LoginSignup = () => {
    const [action, setAction] = useState("Student");

  return (
    <div className='login-bg'>
        
        <div className='login-header'>
            <h1 className='login-title'>Smart Attendance System</h1>
            <img src={loginBg} alt="" className='login-bg-img'/>
            <div>
            <Link to="/signup">
                <button >Sign Up</button>
            </Link>
            </div>
        </div>

        <div className='login-form'>
                <div className={action === 'Student' ? 'action-button-1' : 'action-button-1-gray'}>
                    <button onClick={() => {setAction("Student")}}>Student</button>
                </div>
                <div className={action === 'Lecture' ? 'action-button-2' : 'action-button-2-gray'}>
                    <button onClick={() => {setAction("Lecture")}}>Lecture</button>
                </div>
            <form action="submit">
                <input type="text" placeholder={action === 'Student' ? 'Registration Number' : 'Staff ID'}/>
                <input type="password" placeholder='Password'/>
                <Link to="/forget-password">
                    <a href="#" className='forget-password'>Forget Password?</a>
                </Link>
                <Link to="/dashboard">
                    <button type='Submit'>Login</button>
                </Link>
                
                <p>Don’t have an account</p>
                <a href="/signup" className='sign-up'>Sign Up</a>
            </form>
        </div>
    </div>
  )
}
