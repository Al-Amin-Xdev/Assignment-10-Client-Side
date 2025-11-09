import React from "react";


const blogPosts = [
  {
    id: 1,
    title: "Sustainable Farming Practices for 2025",
    excerpt:
      "Learn how to increase yield while reducing environmental impact using modern techniques in organic farming.",
    date: "Nov 5, 2025",
    image:
      "https://images.unsplash.com/photo-1581091012184-46a5f7b20f3b?auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 2,
    title: "Market Trends in Agriculture",
    excerpt:
      "Stay ahead by understanding crop demand, pricing trends, and buyer behavior in local and international markets.",
    date: "Nov 2, 2025",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 3,
    title: "Modern Irrigation Techniques",
    excerpt:
      "Save water and maximize efficiency with modern irrigation technologies and smart farming solutions.",
    date: "Oct 28, 2025",
    image:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=600&q=60",
  },
];


const BlogPost = () => {
  return (
    <div>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-2">
              Agro News & Blogs
            </h2>
            <p className="text-gray-600 text-lg">
              Stay updated with the latest in agriculture, farming tips, and
              market trends.
            </p>
          </div>

          {/* Blog Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-48 w-full object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-green-700 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">{post.date}</span>
                    <button className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-600 transition shadow-sm">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
