import React from "react";
import useAuth from "../useAuth";

const Interested = ({ one }) => {
  const data = one;

  const { user } = useAuth();

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
    interest,
  } = data;

  const userInterest = interest.find(i => i.userEmail === user.email);

 

  return (
    <div className="m-3">
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
                Owner Email: <span className="font-semibold">{ownerEmail}</span>
              </p>
              <p>
                Posted:{" "}
                <span className="font-semibold">
                  {new Date(postedDate).toLocaleDateString()}
                </span>
              </p>
            </div>
          </div>
          <h1 className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 text-center text-xl">
            You are interested
          </h1>
        </div>

        <div>
          <div className="max-w-sm w-full mx-auto bg-white rounded-2xl shadow-md p-5 mb-6">
            {/* User Info */}
            <h3 className="text-lg font-semibold text-gray-800">
              Md.Al-Amin Mia
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              Email: fn19021@mbstu.ac.bd
            </p>

            {/* Interest Details */}
            <div className="mt-4 bg-gray-50 rounded-xl p-4 flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700">Quantity:</span>
                <span className="text-gray-900 font-semibold">{userInterest.quantity}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700">Message:</span>
                <span className="text-gray-900 font-semibold">{userInterest.message}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700">Status:</span>
                <span className="px-3 py-1 rounded-full text-white font-semibold text-sm bg-yellow-500">
                  {userInterest.status}
                </span>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </div>
  );
};

export default Interested;
