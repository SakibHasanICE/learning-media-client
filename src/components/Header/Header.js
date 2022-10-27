import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";
import img from "../images/logo1.png";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";

const Header = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="bg-cyan-700 h-20 flex items-center">
      <img className="w-16 ml-14" src={img} alt="" />

      <div className="flex  items-center justify-between   container mx-auto w-10/12  ">
        <h1 className="text-3xl text-blue-50 font-bold">Learning Media</h1>

        <nav className="flex items-center">
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
          {user?.photoURL && (
            <Tippy content={user.displayName
            }>
              <img
                className=" bg-white  w-14 rounded-full"
                src={user.photoURL}
                alt="Userimage"
              />
            </Tippy>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Header;
