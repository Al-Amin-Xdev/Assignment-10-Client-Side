import React from "react";

const Product = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Submit Product Info</h1>
            <p className="py-6 text-lg">
              Enter your name, email, and product details below to continue.
            </p>
          </div>

          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset space-y-3">
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input input-bordered"
                  placeholder="Your Name"
                />

                <label className="label">Email</label>
                <input
                  type="email"
                  className="input input-bordered"
                  placeholder="Email"
                />

                <label className="label">Product Name</label>
                <input
                  type="text"
                  className="input input-bordered"
                  placeholder="Product Name"
                />

                <button className="btn btn-neutral mt-6 w-full">Submit</button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
