import React from 'react';
import { Link } from 'react-router-dom';
import img from '../images/logo1.png'
const Header = () => {
    return (
    <div className='bg-cyan-700 h-32 flex items-center'>
          <img className='w-24 ml-12' src={img} alt="" />
         <div className="flex justify-between  container mx-auto w-10/12  ">
        
         
        <h1 className="text-3xl text-blue-50 font-bold">Learning Media</h1>
      <nav>
        <Link className="mx-3 text-white" to="/">Courses</Link>
        <Link className="mx-3 text-white" to="/quiz">FAQ</Link>
        <Link className="mx-3 text-white" to="/statistics">Blog</Link>
        <Link className="mx-3 text-white" to="/blog">Theme</Link>
        <Link className="mx-3 text-white" to="/blog">Login</Link>
      </nav>
      </div>
    
    </div>
    );
};

export default Header;