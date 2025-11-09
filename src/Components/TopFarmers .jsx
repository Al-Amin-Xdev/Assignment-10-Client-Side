import React from "react";

const topFarmers = [
  {
    id: 1,
    name: "Karim Hossain",
    location: "Rajshahi",
    crops: "Tomato, Spinach",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    id: 2,
    name: "Salma Begum",
    location: "Khulna",
    crops: "Mango, Banana",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 3,
    name: "Jahidul Islam",
    location: "Barishal",
    crops: "Potato, Carrot",
    image: "https://randomuser.me/api/portraits/men/72.jpg",
  },
];

const TopFarmers = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-800 mb-2">
            Top Farmers
          </h2>
          <p className="text-gray-600 text-lg">
            Meet our top farmers contributing fresh crops to the KrishiLink community.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {topFarmers.map((farmer) => (
            <div
              key={farmer.id}
              className="bg-green-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <img
                src={farmer.image}
                alt={farmer.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-700 mb-1">
                  {farmer.name}
                </h3>
                <p className="text-gray-500 text-sm mb-2">{farmer.location}</p>
                <p className="text-gray-600">
                  Crops: <span className="font-semibold">{farmer.crops}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopFarmers;
