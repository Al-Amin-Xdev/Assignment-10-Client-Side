import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Rahim Uddin",
    role: "Farmer, Bogura",
    message:
      "KrishiLink helped me sell my organic vegetables directly to consumers, increasing my income by 40%! Highly recommended for all farmers.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Ayesha Khatun",
    role: "Trader, Dhaka",
    message:
      "I found reliable farmers and connected directly with them. It’s a game-changer for trading fresh crops.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Mizanur Rahman",
    role: "Consumer, Chittagong",
    message:
      "Buying fresh, locally-grown crops has never been easier. Love the simplicity and community feel!",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
  },
];

const SuccessStories = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-800 mb-2">
            Success Stories
          </h2>
          <p className="text-gray-600 text-lg">
            Real stories from farmers, traders, and consumers benefiting from KrishiLink.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-green-600"
                />
                <div>
                  <h3 className="font-semibold text-green-700">{t.name}</h3>
                  <span className="text-gray-400 text-sm">{t.role}</span>
                </div>
              </div>
              <p className="text-gray-600">{t.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
