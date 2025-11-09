import React, { useContext } from "react";
import { NavLink } from "react-router";
import AuthContext from "../AuthProvider/AuthContext";

const NavBar = () => {

  const {name, user } = useContext(AuthContext);
  console.log(name);

  const links = <>

    <li><NavLink to="/"><button>Home</button></NavLink></li>
    <li><NavLink to="/register"><button>Register</button></NavLink></li>
    <li><NavLink to="/login"><button>Log-In</button></NavLink></li>
    <li><NavLink to="/product"><button>Post a Product</button></NavLink></li>
  </>
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
             {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-bold border-3 border-green-700 p-3">🌾 Krishi-Link</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {
              links
            }
          </ul>
        </div>
        <div className="navbar-end ">
          <div className="w-[50px] h-[50px] rounded-[50%] border-5 border-green-600">
            
            <img src="" alt="" />
          </div>
          <h1 className="px-1 py-2 bg-amber-50 border-2 border-green-400 rounded-md ml-3">
            
            {
              user? <span>Log Out</span> : <span> Log In</span>
            }
            
            </h1>
        </div>
      </div>
    </div>
  );
};

export default NavBar;