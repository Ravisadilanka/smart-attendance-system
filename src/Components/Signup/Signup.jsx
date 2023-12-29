import React from 'react';
import '../Signup/Signup.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='bg'>
            <Header />

            <div className='signup-form'>
                <form action="submit">
                    <input type="text" placeholder='Name'/>
                    <input type="text" placeholder='Registration Number'/>
                    <input type="text" placeholder='NIC Number'/>
                    <input type="text" placeholder='Email'/>
                    <input type="password" placeholder='Password'/>
                    <input type="password" placeholder='Confirm Password'/>

                    <Link to="/dashboard">
                        <button>Sign Up</button>
                    </Link>
                    
                </form>
            </div>
        </div>
    );
};

export default Signup;
