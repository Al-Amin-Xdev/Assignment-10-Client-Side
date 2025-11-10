import React from "react";

const Profile = () => {
  return (
    <div>
      <div className="max-w-md mx-auto p-5 mt-10 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-5 text-center">My Profile</h2>

        {/* Profile Info */}
        <div className="flex flex-col items-center gap-3 mb-5">
          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-green-500">
            <img
              src="https://i.ibb.co/2d3W7Yt/default-avatar.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-lg font-medium">John Doe</h3>
          <p className="text-gray-500">johndoe@example.com</p>
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
