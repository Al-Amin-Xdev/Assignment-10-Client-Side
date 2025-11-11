import React, { useContext } from "react";
import AuthContext from "../AuthProvider/AuthContext";

const Profile = () => {

  const {user} = useContext(AuthContext);

  return (
    <div>
      <div className="max-w-md mx-auto p-5 mt-10 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-5 text-center">My Profile</h2>

        {/* Profile Info */}
        <div className="flex flex-col items-center gap-3 mb-5">
          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-green-500">
            <img
              src={user.photoURL || "https://www.google.com/imgres?q=avatar%20icon&imgurl=https%3A%2F%2Fwww.pngplay.com%2Fwp-content%2Fuploads%2F12%2FUser-Avatar-Profile-Transparent-Clip-Art-PNG.png&imgrefurl=https%3A%2F%2Fwww.pngplay.com%2Fimage%2F325522&docid=1PvXhz18oYCegM&tbnid=NKj8A8LQPGc3HM&vet=12ahUKEwiWsICVruiQAxVjyDgGHUN-LnQ4ChAzegQIXRAA..i&w=792&h=792&hcb=2&ved=2ahUKEwiWsICVruiQAxVjyDgGHUN-LnQ4ChAzegQIXRAA"}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-lg font-medium"> {user.displayName?.split(" ")[0] || "No User"}</h3>
          <p className="text-gray-500"> {user.email?.split(" ")[0] || "No Email"}</p>
        </div>

        {/* Update Form */}
        <form className="flex flex-col gap-4">
          <div>
            <label className="block text-gray-700 mb-1">Display Name:</label>
            <input
              type="text"
              placeholder="Enter new name"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Photo URL:</label>
            <input
              type="text"
              placeholder="Enter new photo URL"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div className="flex justify-between items-center gap-3">
            <button
              type="submit"
              className="flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
