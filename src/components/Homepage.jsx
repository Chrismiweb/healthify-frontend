import React from 'react';

const topDoctors = [
  { name: "Dr. Chrismi", role: "Gynecologist", image: "https://images.unsplash.com/photo-1666887360742-974c8fce8e6b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", tag: "@drIbukun" },
  { name: "Dr. Farouq", role: "General practitioner", image: "https://images.unsplash.com/photo-1582895361887-24daa40c8667?q=80&w=2141&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", tag: "@drFarouq" },
  { name: "Dr. Miss Nike", role: "Gynecologist", image: "https://images.unsplash.com/photo-1616291446004-b89a8453561c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", tag: "@drZainab" },
  { name: "Mr Khalil", role: "General practitioner", image: "https://images.unsplash.com/photo-1657781763785-8b186ab5d726?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", tag: "@drNewsong" },
  { name: "Mr. AGM", role: "Gynecologist", image: "https://images.unsplash.com/photo-1613115016363-a9dbcf4b9e93?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", tag: "@drKareemah" },
  { name: "Dr Kennedy", role: "General practitioner", image: "https://images.unsplash.com/photo-1666887360369-1901f341fdad?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", tag: "@drImam" },
  { name: "Miss Liya", role: "Gynecologist", image: "https://images.unsplash.com/photo-1655720357761-f18ea9e5e7e6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", tag: "@drDanny" }
];

const blogPosts = [
  {
    title: "5 Things to do every morning for lower blood pressure",
    category: "HEALTH",
    author: "Farouq",
    image: "https://images.unsplash.com/photo-1497321697169-1ca9f1c8a253?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "4 benefits of jumping rope that will convince you to give it a try",
    category: "Fitness",
    author: "Farouq",
    image: "https://images.unsplash.com/photo-1514994667787-b48ca37155f0?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "This one mobility exercise loosens tight shoulders",
    category: "Fitness",
    author: "Farouq",
    image: "https://images.unsplash.com/photo-1603309288253-08db72e5117d?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "7 Tips of exercising during pregnancy, according to experts",
    category: "FITNESS",
    author: "Farouq",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "5 Things to do every morning for lower blood pressure",
    category: "HEALTH",
    author: "Farouq",
    image: "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "5 Things to do every morning for lower blood pressure",
    category: "HEALTH",
    author: "Farouq",
    image: "https://images.unsplash.com/photo-1497321697169-1ca9f1c8a253?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const Homepage = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="text-sm font-semibold text-gray-600 mb-4">Home/Dashboard</div>

      {/* Subscription Banner */}
      <div className="bg-white rounded shadow p-4 mb-6 text-center border border-dashed border-gray-300">
        <p className="text-xl font-medium">🌐 Basic Subscriber</p>
        <p className="text-blue-600 font-semibold">Subscribe now!</p>
      </div>

      {/* Top Doctors */}
      <div className="bg-white rounded shadow p-4 mb-6">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-bold">👨‍⚕️ Top Doctors</h2>
          <span className="text-gray-400 cursor-pointer">×</span>
        </div>

        <div className="flex overflow-x-auto space-x-4 pb-2">
          {topDoctors.map((doc, idx) => (
            <div key={idx} className="min-w-[120px] text-center">
              <img src={doc.image} alt={doc.name} className="w-20 h-20 rounded-full object-cover mx-auto mb-2" />
              <p className="text-sm font-semibold">{doc.name}</p>
              <p className="text-xs text-gray-500">{doc.role}</p>
              <p className="text-xs text-blue-600 font-semibold mt-1">{doc.tag}</p>
              <a href="/explore">
                <button className="mt-1 px-3 py-1 bg-blue-600 text-white text-xs rounded">Connect</button>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Blog Posts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogPosts.map((post, idx) => (
          <div key={idx} className="bg-white rounded shadow overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-40 object-cover" />
            <div className="p-3">
              <p className="text-xs font-semibold text-gray-500 mb-1 uppercase">{post.category}</p>
              <h3 className="text-sm font-medium text-gray-800 leading-snug">{post.title}</h3>
              <p className="text-xs text-gray-400 mt-1">By {post.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
