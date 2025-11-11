import React from "react";

const AddCrop = () => {
  return (
    <div>
      <div className="max-w-md w-full mx-auto bg-white rounded-2xl shadow-lg overflow-hidden p-6 transition-transform transform hover:scale-105 duration-300">
        <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center mt-5 ">
          Add New Crop
        </h2>
        <form className="flex flex-col gap-4">
          <div>
            <label className="block text-gray-700 mb-1">Crop Name</label>
            <input
              type="text"
              placeholder="Enter crop name"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Category</label>
            <input
              type="text"
              placeholder="Enter category"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Description</label>
            <textarea
              placeholder="Enter crop description"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 resize-none h-24"
            ></textarea>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-1">
                Quantity Available
              </label>
              <input
                type="number"
                placeholder="Enter quantity"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Unit</label>
              <input
                type="text"
                placeholder="Enter unit (kg, pcs)"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-1">Price per Unit</label>
              <input
                type="number"
                placeholder="Enter price"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Image URL</label>
            <input
              type="text"
              placeholder="Enter image URL"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 mt-4">
            Add Crop
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCrop;
