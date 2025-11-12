import { useContext } from "react";
import { useLoaderData } from "react-router";
import AuthContext from "../AuthProvider/AuthContext";
import Swal from "sweetalert2";
import useAxios from "../useAxios";

const CropDetails = () => {
  const data = useLoaderData();
  const axios = useAxios();

  const { user } = useContext(AuthContext);

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


  const handleSubmit = (e) => {
  e.preventDefault();
  const form = e.target;
  const data = {
    userName: form.userName.value,
    userEmail: form.userEmail.value,
    quantity: form.quantity.value,
    message: form.message.value,
    status: form.status.value,
  };

  axios.patch(`/allproducts/${_id}`, data)
  .then(result=>{
    console.log(result);

    Swal.fire({
      icon: "success",
      title: "Sent",
      text: "Your interest request has been sent Successfully ✅",
      timer: 2000,
      showConfirmButton: false,
    });
    form.reset();
  })
};



  return (
    <div className="mt-10">
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
        </div>

        {user?.email !== ownerEmail ? (
          <div className="m-3">
            <h1 className="font-bold text-xl text-center bg-green-400">
              Interested to this crop!!! <br></br>Contact The Owner
            </h1>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 space-y-4 mt-6 w-full">
              {/* Name */}
              <div>
                <label className="block font-semibold text-gray-800 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="userName"
                  value={user?.displayName}
                  placeholder="Enter your name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none"
                />
              </div>

              {/* Quantity */}
              <div>
                <label className="block font-semibold text-gray-800 mb-1">
                  Quantity of the Crop (kg)
                </label>
                <input
                  type="number"
                  name="quantity"
                  placeholder="Enter quantity"
                  min="1"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block font-semibold text-gray-800 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="userEmail"
                  value={user?.email}
                  placeholder="Enter your email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block font-semibold text-gray-800 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Write your message..."
                  rows="3"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none resize-none"
                ></textarea>
              </div>

              {/* Hidden Status */}
              <input type="hidden" name="status" value="pending" />

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-green-700 text-white py-2 rounded-md font-medium hover:bg-green-800 transition"
              >
                Submit Your Interest
              </button>
            </form>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CropDetails;
