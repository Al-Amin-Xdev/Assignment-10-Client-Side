import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../AuthProvider/AuthContext";

const NavBar = () => {
  const { user, logout } = useContext(AuthContext);

  const LogOut = () => {
    logout()
      .then(() => alert("Logged out successfully ✔"))
      .catch((error) => console.log("Logout error:", error));
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-3 py-1 rounded-md hover:bg-amber-100 transition ${
              isActive ? "bg-amber-200 font-semibold" : ""
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allcrops"
          className={({ isActive }) =>
            `px-3 py-1 rounded-md hover:bg-amber-100 transition ${
              isActive ? "bg-amber-200 font-semibold" : ""
            }`
          }
        >
          All Crops
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addcrop"
          className={({ isActive }) =>
            `px-3 py-1 rounded-md hover:bg-amber-100 transition ${
              isActive ? "bg-amber-200 font-semibold" : ""
            }`
          }
        >
          Add Crop
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/mypost"
          className={({ isActive }) =>
            `px-3 py-1 rounded-md hover:bg-amber-100 transition ${
              isActive ? "bg-amber-200 font-semibold" : ""
            }`
          }
        >
          My Post
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myinterest"
          className={({ isActive }) =>
            `px-3 py-1 rounded-md hover:bg-amber-100 transition ${
              isActive ? "bg-amber-200 font-semibold" : ""
            }`
          }
        >
          My Interest
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/register"
          className={({ isActive }) =>
            `px-3 py-1 rounded-md hover:bg-amber-100 transition ${
              isActive ? "bg-amber-200 font-semibold" : ""
            }`
          }
        >
          Register
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `px-3 py-1 rounded-md hover:bg-amber-100 transition ${
                isActive ? "bg-amber-200 font-semibold" : ""
              }`
            }
          >
            Profile
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <NavLink to="/" className="text-xl font-bold text-green-600">
              🌾 Krishi-Link
            </NavLink>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <ul className="flex space-x-2">{links}</ul>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden flex items-center">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost p-2 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content mt-2 p-2 shadow bg-white rounded-md w-48 flex flex-col space-y-1"
              >
                {links}
              </ul>
            </div>
          </div>

          {/* Profile & Logout */}
          <div className="hidden md:flex items-center gap-3">
            {user && (
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-green-500 shadow-sm">
                <img
                  src={user.photoURL || "https://i.ibb.co/2d3W7Yt/default-avatar.png"}
                  alt="User Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="flex items-center gap-2 bg-amber-50 border border-amber-100 rounded-xl px-3 py-1 shadow-sm">
              {user ? (
                <>
                  <span className="hidden sm:block font-medium text-gray-700">
                    {user.displayName?.split(" ")[0] || "No User"}
                  </span>
                  <button
                    onClick={LogOut}
                    className="px-3 py-1 text-sm font-medium bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                  >
                    Log Out
                  </button>
                </>
              ) : (
                <NavLink
                  to="/login"
                  className="px-3 py-1 text-sm font-medium bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                >
                  Log In
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
