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
        <NavLink to="/addcrop">
          <button>Add Crop</button>
        </NavLink>
      </li>

      <li>
        <NavLink to="/mypost">
          <button>My Post</button>
        </NavLink>
      </li>

      <li>
        <NavLink to="/myinterest">
          <button>My Interest</button>
        </NavLink>
      </li>

       <li>
        <NavLink to="/register">
          <button>Register</button>
        </NavLink>
      </li>
      {/* <li>
        <NavLink to="/login">
          <button>Log-In</button>
        </NavLink>
      </li> */}


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
          <a className="btn btn-ghost text-sm md:text-xl">🌾 Krishi-Link</a>
        </div>
        <div className="navbar-center hidden lg:flex lg:gap-3">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end flex items-center gap-3">
          {/* Profile Image */}
          {user && (
            <div className="w-[45px] h-[45px] rounded-full overflow-hidden border-2 border-green-600 hidden md:block shadow-sm">
              <img
                src={
                  user.photoURL || "https://i.ibb.co/2d3W7Yt/default-avatar.png"
                }
                alt="User Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Name + Buttons */}
          <div className="flex items-center gap-3 bg-amber-50 border border-amber-100 shadow-sm rounded-xl px-3 py-2 md:px-4 md:py-2 text-gray-800">
            {user ? (
              <>
                {/* Name only visible on md+ screens */}
                <span className="font-medium text-gray-700 hidden sm:block">
                  {user.displayName?.split(" ")[0] || "User"}
                </span>

                <button
                  onClick={LogOut}
                  className="px-3 py-1 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 active:scale-95 transition-all duration-200"
                >
                  Log Out
                </button>
              </>
            ) : (
              <NavLink
                to="/login"
                className="px-3 py-1 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 active:scale-95 transition-all duration-200"
              >
                Log In
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
