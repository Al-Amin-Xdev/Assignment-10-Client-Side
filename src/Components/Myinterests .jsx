import React from "react";

const Myinterests = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          My Interested Crops
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform transform hover:scale-105 duration-300">
            <div className="w-full h-48 overflow-hidden">
              <img
                src="https://i.ibb.co/2d3W7Yt/default-avatar.png"
                alt="Crop Name"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-5 flex flex-col justify-between flex-grow">
              <div className="mb-3">
                <h3 className="text-xl font-bold text-gray-900">Crop Name</h3>
                <p className="text-gray-500 text-sm mt-1">Owner: John Doe</p>
              </div>

              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>

              <div className="grid grid-cols-2 gap-3 text-gray-700 font-medium mb-4 text-sm">
                <div>
                  <p>
                    Quantity: <span className="font-semibold">10</span>
                  </p>
                  <p>
                    Price: <span className="font-semibold">200 / kg</span>
                  </p>
                </div>
                <div>
                  <p>
                    Category: <span className="font-semibold">Vegetable</span>
                  </p>
                  <p>
                    Email:{" "}
                    <span className="font-semibold">owner@example.com</span>
                  </p>
                  <p>
                    Posted: <span className="font-semibold">11/11/2025</span>
                  </p>
                </div>
              </div>

              <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
                View Crop Details
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform transform hover:scale-105 duration-300">
            <div className="w-full h-48 overflow-hidden">
              <img
                src="https://i.ibb.co/2d3W7Yt/default-avatar.png"
                alt="Crop Name"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-5 flex flex-col justify-between flex-grow">
              <div className="mb-3">
                <h3 className="text-xl font-bold text-gray-900">Crop Name</h3>
                <p className="text-gray-500 text-sm mt-1">Owner: Jane Doe</p>
              </div>

              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>

              <div className="grid grid-cols-2 gap-3 text-gray-700 font-medium mb-4 text-sm">
                <div>
                  <p>
                    Quantity: <span className="font-semibold">5</span>
                  </p>
                  <p>
                    Price: <span className="font-semibold">150 / pcs</span>
                  </p>
                </div>
                <div>
                  <p>
                    Category: <span className="font-semibold">Fruit</span>
                  </p>
                  <p>
                    Email:{" "}
                    <span className="font-semibold">owner2@example.com</span>
                  </p>
                  <p>
                    Posted: <span className="font-semibold">10/11/2025</span>
                  </p>
                </div>
              </div>

              <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
                View Crop Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myinterests;
