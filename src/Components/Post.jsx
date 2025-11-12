import React from "react";
import useAxios from "../useAxios";
import Swal from "sweetalert2";

const Post = ({ one }) => {
  const data = one;
  const axios = useAxios();

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

  const handleAccept = (_id, userEmail) => {

    const updateData = {
      userEmail: userEmail,
      status: "accepted",
    };

    axios
      .patch(`/allproducts/${_id}/interest`, updateData)
      .then((res) => {
        console.log(res.data);

         Swal.fire({
        icon: "success",
        title: "Request Accepted",
        text: "Interest request has been Accepted ✅",
        timer: 2000,
        showConfirmButton: false,
      });

      })
      .catch((err) => console.error(err));
  };

  const handleReject = (_id, userEmail) => {
    const updateData = {
      userEmail: userEmail,
      status: "rejected",
    };

    axios
      .patch(`/allproducts/${_id}/interest`, updateData)
      .then((res) => {
        console.log(res.data);

          Swal.fire({
        icon: "Info",
        title: "Request Rejected",
        text: "Interest request has been Rejected ❌",
        timer: 2000,
        showConfirmButton: false,
      });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-4">
      {/* Left Card */}
      <div>
        <div className="w-full bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full transition-transform transform hover:scale-105 duration-300">
          <figure className="w-full h-56 sm:h-64 overflow-hidden">
            <img
              src={image}
              alt={cropName}
              className="w-full h-full object-cover rounded-t-2xl"
            />
          </figure>

          <div className="p-5 flex flex-col justify-between grow">
            <div className="mb-4">
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900">
                {cropName}
              </h2>
              <h3 className="text-gray-500 font-medium mt-1 text-sm sm:text-base">
                Owner: {ownerName}
              </h3>
            </div>

            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
              {description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 font-medium mb-4">
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
          </div>
        </div>
      </div>

      {/* Right Table */}
      <div className="w-full">
        <div className="bg-white shadow-lg rounded-2xl p-4 sm:p-6 mt-4 md:mt-6 w-full overflow-x-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-center">
            Received Interests
          </h2>

          {interest.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse rounded-xl overflow-hidden text-sm sm:text-base">
                <thead className="bg-emerald-500 text-white">
                  <tr>
                    <th className="py-3 px-4 sm:px-6 text-left font-semibold uppercase tracking-wide">
                      Buyer Name
                    </th>
                    <th className="py-3 px-4 sm:px-6 text-left font-semibold uppercase tracking-wide">
                      Quantity
                    </th>
                    <th className="py-3 px-4 sm:px-6 text-left font-semibold uppercase tracking-wide">
                      Message
                    </th>
                    <th className="py-3 px-4 sm:px-6 text-left font-semibold uppercase tracking-wide">
                      Status
                    </th>
                    <th className="py-3 px-4 sm:px-6 text-center font-semibold uppercase tracking-wide">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  {interest.map((interests, index) => (
                    <tr
                      key={index}
                      className="hover:bg-emerald-50 transition-colors duration-200"
                    >
                      <td className="py-3 px-4 sm:px-6 text-gray-800 whitespace-nowrap">
                        {interests.userName}
                      </td>
                      <td className="py-3 px-4 sm:px-6 text-gray-800 whitespace-nowrap">
                        {interests.quantity}
                      </td>
                      <td className="py-3 px-4 sm:px-6 text-gray-800">
                        {interests.message}
                      </td>
                      <td className="py-3 px-4 sm:px-6">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            interests.status === "pending"
                              ? "bg-yellow-400 text-gray-900"
                              : interests.status === "accepted"
                              ? "bg-green-500 text-white"
                              : "bg-red-500 text-white"
                          }`}
                        >
                          {interests.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 sm:px-6 flex justify-center gap-2 flex-wrap">
                        <button
                          onClick={() => handleAccept(_id, interests.userEmail)}
                          className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded-md text-xs sm:text-sm"
                        >
                          Accept
                        </button>

                        <button
                          onClick={() => handleReject(_id, interests.userEmail)}
                          className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-md text-xs sm:text-sm"
                        >
                          Reject
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-500 text-center py-6">
              No interest requests yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;
