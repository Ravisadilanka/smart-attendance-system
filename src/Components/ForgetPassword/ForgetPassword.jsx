import React from 'react'
import Header from '../Header/Header'
import './ForgetPassword.css'
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
  return (

    <div>
        <Header />
        <div className='forget-form'>

            <form action="submit">
                <input type="text" placeholder='Registration Number'/>
                <input type="text" placeholder='Email'/>
                <input type="password" placeholder='Password'/>
                <input type="password" placeholder='Confirm Password'/>

                <Link to="/dashboard">
                  <button>Sign Up</button>
                </Link>
            </form>
        </div>
    </div>
  )
}

export default ForgetPassword