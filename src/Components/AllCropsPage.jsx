import React from "react";

const AllCropsPage = () => {
  return (
    <div>
      <div className="card bg-base-100 w-full max-w-sm mx-auto shadow-sm hover:shadow-md transition-all duration-300">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Crop"
            className="w-full h-60 object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Card Title</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline btn-success">
              View Details
            </button>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCropsPage;
