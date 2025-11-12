import React from "react";
import useAuth from "../useAuth";
import useAxios from "../useAxios";

const Post = ({ allpost }) => {
  const { user } = useAuth();

  const axios = useAxios();

  const data = allpost;

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

  const userInterest = interest.find((i) => i.userEmail !== user.email);


  const handleAccept=()=>{

    const UpdateStatus = {
      email: interest.userEmail,
      status: "accepted"
    };
    
    axios.patch(`/allproducts/${_id}/interest`, UpdateStatus)
    .then(data=>{
      console.log(data.data);
      alert("Interest accepted");
    })
    .catch(err => console.error(err));

    };


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
            <div></div>
          </div>
        </div>
        <div>
          <h1>Following Buyer Is Interested To your Product</h1>

          <div className="mt-4 bg-gray-50 rounded-xl p-4 flex flex-col gap-3 shadow-sm">
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-700">Quantity:</span>
              <span className="text-gray-900 font-semibold">
                {userInterest.quantity}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-700">Message:</span>
              <span className="text-gray-900 font-semibold">
                {userInterest.message}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-700">Status:</span>
              <span
                className={`px-3 py-1 rounded-full text-white font-semibold text-sm ${
                  userInterest.status === "pending"
                    ? "bg-yellow-500"
                    : userInterest.status === "accepted"
                    ? "bg-green-500"
                    : "bg-red-500"
                }`}
              >
                {userInterest.status}
              </span>
            </div>

            {/* Action Buttons */}

            <div className="flex justify-end gap-3 mt-3">

              <button onClick={handleAccept} className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-lg transition-all">
                Accept
              </button>

              <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-lg transition-all">
                Reject
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
