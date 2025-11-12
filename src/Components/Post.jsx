import React from "react";
import useAuth from "../useAuth";

const Post = ({ one }) => {
  const { user } = useAuth();

  const data = one;

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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <div className="max-w-sm w-full mx-auto bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full transition-transform transform hover:scale-105 duration-300">
          <figure className="w-full h-64 overflow-hidden">
            <img
              src={image}
              alt={cropName}
              className="w-full h-full object-cover rounded-t-2xl"
            />
          </figure>

          <div className="p-6 flex flex-col justify-between grow">
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
          </div>
        </div>
      </div>


      
      <div className="table mr-5">
        <div className="bg-white shadow-lg rounded-2xl p-6 mt-6 w-full overflow-x-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Received Interests
          </h2>

          {interest.length > 0 ? (
            <table className="min-w-full border-collapse bg-linear-to-r from-green-50 to-emerald-100 rounded-xl overflow-hidden">
              <thead className="bg-emerald-500 text-white">
                <tr>
                  <th className="py-3 px-6 text-left text-sm font-semibold uppercase tracking-wide">
                    Buyer Name
                  </th>
                  <th className="py-3 px-6 text-left text-sm font-semibold uppercase tracking-wide">
                    Quantity
                  </th>
                  <th className="py-3 px-6 text-left text-sm font-semibold uppercase tracking-wide">
                    Message
                  </th>
                  <th className="py-3 px-6 text-left text-sm font-semibold uppercase tracking-wide">
                    Status
                  </th>
                  <th className="py-3 px-6 text-center text-sm font-semibold uppercase tracking-wide">
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
                    <td className="py-4 px-6 text-gray-800">
                      {interests.userName}
                    </td>
                    <td className="py-4 px-6 text-gray-800">
                      {interests.quantity}
                    </td>
                    <td className="py-4 px-6 text-gray-800">
                      {interests.message}
                    </td>
                    <td className="py-4 px-6">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          interests.status === "pending"
                            ? "bg-yellow-400 text-gray-900"
                            : interest.status === "accepted"
                            ? "bg-green-500 text-white"
                            : "bg-red-500 text-white"
                        }`}
                      >
                        {interests.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 flex justify-center gap-2">



                      <button className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm">
                        Accept
                      </button>

                      <button className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-md text-sm">
                        Reject
                      </button>

                      
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
