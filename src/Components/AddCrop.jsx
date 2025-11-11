import React from "react";
import useAuth from "../useAuth";
import useAxios from "../useAxios";

const AddCrop = () => {
  const { user } = useAuth();
  const axios = useAxios();

  const handleAddCrop = async (event) => {
    event.preventDefault();
    const form = event.target;

    const newCrop = {
      cropName: form.cropName.value,
      category: form.category.value,
      description: form.description.value,
      quantityAvailable: form.quantityAvailable.value,
      unit: form.unit.value,
      pricePerUnit: form.pricePerUnit.value,
      location: form.location.value,
      postedDate: new Date().toISOString(),
      ownerId: user?.uid,
      ownerName: user?.displayName || "",
      ownerEmail: user?.email,
      image: form.image.value,
    };

    try {
      const response = await axios.post("/allproducts", newCrop);
      console.log(response.data);
      alert("Crop Added Successfully");
      form.reset();
    } catch (error) {
      console.error(error);
      alert("Failed to add crop");
    }
  };

  return (
    <div>
      <div className="max-w-md w-full mx-auto bg-white rounded-2xl shadow-lg overflow-hidden p-6 transition-transform transform hover:scale-105 duration-300">
        <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center mt-5">
          Add New Crop
        </h2>

        <form onSubmit={handleAddCrop} className="flex flex-col gap-4">
          <div>
            <label className="block text-gray-700 mb-1">Crop Name</label>
            <input
              type="text"
              name="cropName"
              placeholder="Enter crop name"
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Category</label>
            <input
              type="text"
              name="category"
              placeholder="Enter category"
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Description</label>
            <textarea
              name="description"
              placeholder="Enter crop description"
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 resize-none h-24"
            ></textarea>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-1">Quantity Available</label>
              <input
                type="number"
                name="quantityAvailable"
                placeholder="Enter quantity"
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Unit</label>
              <input
                type="text"
                name="unit"
                placeholder="Enter unit (kg, pcs)"
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-1">Price per Unit</label>
              <input
                type="number"
                name="pricePerUnit"
                placeholder="Enter price"
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Location</label>
              <input
                type="text"
                name="location"
                placeholder="Enter location"
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Image URL</label>
            <input
              type="text"
              name="image"
              placeholder="Enter image URL"
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-1">Owner Name</label>
              <input
                type="text"
                name="ownerName"
                required
                value={user?.displayName || ""}
                readOnly
                className="w-full px-3 py-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Owner Email</label>
              <input
                type="email"
                name="ownerEmail"
                required
                value={user?.email || ""}
                readOnly
                className="w-full px-3 py-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 mt-4"
          >
            Add Crop
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCrop;
