import React from "react";
import LatestCrops from "./LatestCrops";
import CropDetails from "./CropDetails";
import AllCropsPage from "./AllCropsPage";

const AllCrops = () => {
  return (
    <div className="w-full mx-auto">
      <div>
        <h1 className="text-4xl text-center font-bold mt-5">Explore Crops</h1>
        <form className="w-full max-w-md mx-auto my-6 px-4">
          <label
            htmlFor="search"
            className="block text-lg font-bold text-gray-700 mb-2 text-center"
          >
          Search Crops by Name
          </label>

          <div className="flex items-center bg-white shadow-md rounded-full overflow-hidden border border-gray-200 focus-within:ring-2 focus-within:ring-green-500">
            <input
              type="search"
              id="search"
              name="search"
              placeholder="Type crop name..."
              className="flex-1 px-5 py-3 text-gray-700 outline-none bg-transparent"
            />
          </div>
        </form>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <AllCropsPage></AllCropsPage>
        {/* <CropDetails></CropDetails> */} 
      </div>
    </div>
  );
};

export default AllCrops;
