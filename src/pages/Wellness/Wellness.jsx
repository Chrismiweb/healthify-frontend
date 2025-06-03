import React from 'react'
import Sidebar from '../../components/Sidebar'

function Wellness() {
  const blogs = [
  {
    title: "5 Ways to Improve Your Mental Health",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80",
    excerpt: "Discover simple and effective strategies to boost your mental wellbeing every day."
  },
  {
    title: "Healthy Eating on a Budget",
    image: "https://images.unsplash.com/photo-1592861956120-e524fc739696?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    excerpt: "Eating well doesn't have to be expensive. Learn how to make healthy choices affordably."
  },
  {
    title: "Daily Habits for a Balanced Lifestyle",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    excerpt: "From morning routines to nightly wind-downs, here’s how to create a wellness-focused day."
  }
];
  return (
    <div className='flex'>
        <Sidebar/>
        <main className="flex-1 ml-64 p-6">
            <section className="max-w-7xl mx-auto py-10 px-4">
                <h2 className="text-3xl font-bold text-center mb-8">🌿 Wellness & Lifestyle</h2>

                <div className="grid md:grid-cols-3 gap-6">
                  {blogs.map((blog, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col"
                    >
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="rounded-md w-full h-48 object-cover mb-4"
                      />
                      <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                      <p className="text-gray-600 text-sm flex-1">{blog.excerpt}</p>
                      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 self-start">
                        Read more
                      </button>
                    </div>
                  ))}
                </div>
            </section>
        </main>
    </div>

  )
}

export default Wellness