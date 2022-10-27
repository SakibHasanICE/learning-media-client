import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

import './Register.css'
 
const Register = () => {
     const{newUser,signinWithGoogle,signinWithGithub}=useContext(AuthContext);
    const handleSubmit = event=>{
        event.preventDefault();
        const form =event.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        const photoURL=form.photoURL.value;
        console.log(name,email,password,photoURL)
        form.reset();
        newUser(email,password,name,photoURL)
         .then(result =>{
           const user=result.user;
           console.log(user)
         })
         .catch(error=>{
            console.error(error);
         })
    }
    const handleGooglesignin=()=>{
            signinWithGoogle()
            .then(result=>{
                const user=result.user;
                console.log(user)
            })
            .catch(error=>console.error(error))
    }
    const handleGithubsignin=()=>{
        signinWithGithub()
        .then(result=>{
            const user=result.user;
            <p className="text-red-600 text-xl">{user.email}</p>  
        })
        .catch(error=>console.error(error))
} 
    return (
        <div className='form-container h-fit container mx-auto mb-14'>
        <h2 className='text-3xl'>Register</h2>
        <form onSubmit={handleSubmit}>
            <label className='block text-left ml-12' htmlFor="name">Name</label>
            <input className='border-black border-2 p-3 rounded-md w-9/12 h-10' type="name"  name="name" required/>
            
            <label className='block text-left ml-12' htmlFor="email">Email</label>
            <input className='border-black border-2 p-3 rounded-md w-9/12 h-10' type="email"  name="email" required/>
           
            <label className='block mt-4 text-left ml-12' htmlFor="password">Password</label>
            <input className='border-black border-2 p-3 rounded-md w-9/12 h-10' type="password"  name="password" required/>
           
            <label className='block mt-4 text-left ml-12' htmlFor="photoURL">Photo URL</label>
            <input className='border-black p-2 rounded-md border-2 w-9/12 h-10' type="photoURL"  name="photoURL"/>
            
            <button className='block w-9/12 rounded-md bg-red-500 mx-auto mt-5 h-10 text-white font-bold text-xl' type="submit">Submit</button> 
            
            <p className='mt-3 text-md '>Already have an account?<Link className="mx-3 text-red-700 font-bold text-xl" to="/login">Login</Link></p>
            <button onClick={handleGooglesignin} className='block mb-2 w-9/12 rounded-md bg-amber-600 mx-auto mt-5 h-10 text-white font-bold text-xl' type="submit">Google</button> 
            <button onClick={handleGithubsignin} className='block mb-10 w-9/12 rounded-md bg-gray-600 mx-auto  h-10 text-white font-bold text-xl' type="submit">Github</button> 
            
        
        </form>
        
    </div>
    );
};

export default Register;