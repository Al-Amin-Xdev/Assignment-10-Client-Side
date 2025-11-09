import React from "react";
import { FaUpload, FaSearch, FaHandshake } from "react-icons/fa";

const HowItWorks = () => {
  
  const steps = [
    {
      icon: <FaUpload className="text-white text-4xl" />,
      title: "Post Your Crops",
      description:
        "Farmers can create posts for their crops with all details including type, quantity, price, and location. Share your harvest with the community instantly.",
      bgColor: "bg-green-600",
    },
    {
      icon: <FaSearch className="text-white text-4xl" />,
      title: "Browse Crops",
      description:
        "Explore crops posted by others. Search, filter, and find the exact crop you need. Stay updated with the latest listings from farmers and traders.",
      bgColor: "bg-yellow-500",
    },
    {
      icon: <FaHandshake className="text-white text-4xl" />,
      title: "Connect & Collaborate",
      description:
        "Send interest requests, connect directly with crop owners, and collaborate. Track your interactions and grow your agricultural network.",
      bgColor: "bg-blue-600",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-green-800 mb-12">
          How KrishiLink Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 bg-white"
            >
              <div
                className={`flex items-center justify-center w-20 h-20 mb-6 rounded-full ${step.bgColor} shadow-lg`}
              >
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
