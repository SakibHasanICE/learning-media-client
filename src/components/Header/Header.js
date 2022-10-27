import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";
import img from "../images/logo1.png";
const Header = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="bg-cyan-700 h-20 flex items-center">
      <img className="w-16 ml-14" src={img} alt="" />
      <div className="flex justify-between  container mx-auto w-10/12  ">
        <h1 className="text-3xl text-blue-50 font-bold">Learning Media</h1>
        {user?.photoURL && <img src={user.photoURL} alt="" />}
        
        {user?.email && (
          <p className="text-red-600 text-xl">welcome {user.email}</p>
        )}

        <nav>
          <Link className="mx-3 text-white" to="/">
            Courses
          </Link>
          <Link className="mx-3 text-white" to="/faq">
            FAQ
          </Link>
          <Link className="mx-3 text-white" to="/blog">
            Blog
          </Link>
          <Link className="mx-3 text-white" to="/blog">
            Theme
          </Link>
          <Link className="mx-3 text-white" to="/login">
            Login
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
