import React from 'react';
import { Link } from 'react-router-dom';
import './login.css'
const Login = () => {
    return (
        <div className='form-container h-fit container mx-auto'>
            <h2 className='text-3xl'>Login</h2>
            <form className=''>
                <div className="form"></div>
                <label className='block text-left ml-12' htmlFor="email">Email</label>
                <input className='border-black border-2 p-3 rounded-md w-9/12 h-10' type="email"  name="email" required/>
                <label className='block mt-4 text-left ml-12' htmlFor="email">Password</label>
                <input className='border-black p-2  rounded-md border-2 w-9/12 h-10' type="password"  name="password" required/>
                <button className='block w-9/12 rounded-md bg-red-500 mx-auto mt-5 h-10 text-white font-bold text-xl' type="submit">Submit</button>
                <p className='mt-3 text-md mb-7'>New to Learning media <Link className="mx-3 text-red-700 font-bold text-xl" to="/register">Register</Link></p>
                   
            </form>
        </div>
    );
};

export default Login;