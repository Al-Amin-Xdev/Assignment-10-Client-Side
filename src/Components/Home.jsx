import React from "react";

const Home = () => {
  return (
    <div>
      <div className="w-full max-w-3xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden ring-1 ring-black/5">
        {/* Gradient Header */}
        <div className="px-8 py-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <h1 className="text-white text-4xl font-extrabold mb-2">
            Today's Goal
          </h1>
          <p className="text-indigo-100/90 text-lg max-w-2xl">
            Focus on completing the core setup for your project:
          </p>
        </div>

        {/* Content Section */}
        <div className="p-10 text-gray-800 text-xl leading-relaxed space-y-4">
          <p>• Make a client site with a clean and responsive UI.</p>
          <p>
            • Implement Firebase Authentication for user login and registration.
          </p>
          <p>• Create a backend server for your client site.</p>
          <p>
            • Add a middleware that verifies Firebase Access Tokens and issues a
            backend-generated JWT for secure API communication.
          </p>
          <p className="text-gray-600 italic mt-6">
            Keep your focus — build with clarity, test often, and commit
            progress to GitHub.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
<h1>This is home</h1>;
