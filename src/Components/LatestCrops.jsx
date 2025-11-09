import React from "react";
import { NavLink } from "react-router";

const LatestCrops = ({ data }) => {
  const {
    _id,
    cropName,
    image,
    category,
    description,
    pricePerUnit,
    unit,
    quantityAvailable,
    // location,
    postedDate,
    // ownerId,
    ownerName,
    ownerEmail,
  } = data;

  return (
    <div>
      <div className="max-w-sm w-full mx-auto bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full transition-transform transform hover:scale-105 duration-300">
        <figure className="w-full h-64 overflow-hidden">
          <img
            src={image}
            alt={cropName}
            className="w-full h-full object-cover rounded-t-2xl"
          />
        </figure>

        <div className="p-6 flex flex-col justify-between flex-grow">
          <div className="mb-4">
            <h2 className="text-2xl font-extrabold text-gray-900">
              {cropName}
            </h2>
            <h3 className="text-gray-500 font-medium mt-1">
              Owner: {ownerName}
            </h3>
          </div>

          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {description}
          </p>

          <div className="grid grid-cols-2 gap-4 text-gray-700 font-medium mb-4">
            <div className="space-y-1">
              <p>
                Quantity:{" "}
                <span className="font-semibold">{quantityAvailable}</span>
              </p>
              <p>
                Price:{" "}
                <span className="font-semibold">
                  {pricePerUnit} / {unit}
                </span>
              </p>
            </div>
            <div className="space-y-1">
              <p>
                Category: <span className="font-semibold">{category}</span>
              </p>
              <p>
                Email: <span className="font-semibold">{ownerEmail}</span>
              </p>
              <p>
                Posted:{" "}
                <span className="font-semibold">
                  {new Date(postedDate).toLocaleDateString()}
                </span>
              </p>
            </div>
          </div>

          <NavLink to="/allcrops" className="mt-auto">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
              View All Products
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LatestCrops;
