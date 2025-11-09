import React, { useState } from "react";
import { FaLeaf } from "react-icons/fa";

const CropDetails = ({ crop, user }) => {
  // Example crop data (remove when you pass props)
  crop = crop || {
    name: "Fresh Organic Tomatoes",
    image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    pricePerUnit: 60,
    quantityAvailable: 120,
    location: "Dhaka, Bangladesh",
    description:
      "High-quality organic tomatoes grown without chemicals. Freshly harvested and ready for sale.",
    ownerEmail: "farmer@example.com",
  };

  const [quantity, setQuantity] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const totalPrice = quantity ? quantity * crop.pricePerUnit : 0;
  const isOwner = user?.email === crop.ownerEmail;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (quantity < 1) {
      alert("❌ Quantity must be at least 1");
      return;
    }
    setShowModal(true);
  };

  const confirmSubmit = () => {
    setShowModal(false);
    alert("✅ Interest request submitted successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto my-10 px-4">
      <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-2xl overflow-hidden border border-green-100">
        {/* Crop Image */}
        <figure className="relative">
          <img
            src={crop.image}
            alt={crop.name}
            className="w-full h-72 object-cover"
          />
          <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
            <FaLeaf /> {crop.location}
          </div>
        </figure>

        {/* Crop Info */}
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold text-green-800">
            {crop.name}
          </h2>
          <p className="text-gray-600 leading-relaxed">{crop.description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 text-gray-700">
            <p>
              <span className="font-semibold text-green-700">Price/Unit:</span>{" "}
              ৳{crop.pricePerUnit}
            </p>
            <p>
              <span className="font-semibold text-green-700">Available:</span>{" "}
              {crop.quantityAvailable} kg
            </p>
          </div>

          {/* Interest Form (for non-owner users only) */}
          {!isOwner && (
            <form
              onSubmit={handleSubmit}
              className="mt-6 p-4 border border-green-200 rounded-xl bg-green-50"
            >
              <h3 className="text-xl font-semibold text-green-700 mb-3">
                Send Interest Request
              </h3>

              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="number"
                  placeholder="Quantity (kg)"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="input input-bordered flex-1"
                  required
                  min="1"
                />
                <input
                  type="text"
                  placeholder="Your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="input input-bordered flex-1"
                  required
                />
              </div>

              <div className="mt-3 text-green-800 font-semibold">
                Total Price: ৳{totalPrice}
              </div>

              <button
                type="submit"
                className="btn btn-success w-full mt-4 hover:scale-105 transition-transform"
              >
                Submit Interest
              </button>
            </form>
          )}

          {/* If owner */}
          {isOwner && (
            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-300 rounded-xl">
              <h3 className="text-lg font-semibold text-yellow-700">
                You are the owner of this crop.
              </h3>
              <p className="text-gray-700">Manage received interest requests here.</p>
            </div>
          )}
        </div>
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
            <h2 className="text-lg font-bold mb-4">Confirm Submission</h2>
            <p className="text-gray-600 mb-6">
              You are sending a request for <b>{quantity}</b> kg of{" "}
              <b>{crop.name}</b> for ৳{totalPrice}.
            </p>
            <div className="flex justify-center gap-3">
              <button
                onClick={confirmSubmit}
                className="btn btn-success text-white"
              >
                Confirm
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="btn btn-outline"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CropDetails;
