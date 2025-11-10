import React, { useContext } from "react";
import { NavLink } from "react-router";
import AuthContext from "../AuthProvider/AuthContext";

const NavBar = () => {
  const { user, logout } = useContext(AuthContext);

  const LogOut = () => {
    logout()
      .then(() => {
        alert("Log out successfull");
      })
      .catch((error) => {
        console.log("An error happened. When loging out", error);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">
          <button>Home</button>
        </NavLink>
      </li>
      <li>
        <NavLink to="/allcrops">
          <button>All Crops</button>
        </NavLink>
      </li>

      <li>
        <NavLink to="/register">
          <button>Register</button>
        </NavLink>
      </li>
      <li>
        <NavLink to="/login">
          <button>Log-In</button>
        </NavLink>
      </li>
      <li>
        <NavLink to="/product">
          <button>Post a Product</button>
        </NavLink>
      </li>
    </>
  );

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
          <a className="btn btn-ghost text-xl">🌾 Krishi-Link</a>
        </div>
        <div className="navbar-center hidden lg:flex lg:gap-3">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end ">
          <div className="w-[50px] h-[50px] rounded-[50%] border-5 border-green-600 hidden md:block">
            <img src="" alt="" />
          </div>

          <h1 className="flex items-center justify-between gap-3 px-4 py-2 ml-3 bg-amber-50 rounded-xl shadow-sm border border-amber-100 text-gray-800">
            {user ? (
              <div className="flex items-center gap-3">
                <span className="font-semibold text-gray-700">
                  {user.displayName}
                </span>
                <button
                  onClick={LogOut}
                  className="px-3 py-1 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 transition duration-200"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <NavLink
                to="/login"
                className="px-3 py-1 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-200"
              >
                Log In
              </NavLink>
            )}
          </h1>
          
        </div>
      </div>
    </div>
  );
};

export default NavBar;
