import React from 'react';
import { Link } from 'react-router-dom';
import { IoCalendarOutline, IoPersonOutline } from 'react-icons/io5';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      image: '/assets/img/blog/blog-1.jpg',
      category: 'Fashion',
      title: 'Clothes Retail KPIs 2023 Guide for Clothes Executives',
      date: 'April 10, 2023',
      author: 'By John Doe',
    },
    {
      id: 2,
      image: '/assets/img/blog/blog-2.jpg',
      category: 'Clothes',
      title: 'Curbside fashion Trends: How to Win the Pickup Battle.',
      date: 'April 10, 2023',
      author: 'By John Doe',
    },
    {
      id: 3,
      image: '/assets/img/blog/blog-3.jpg',
      category: 'Shoes',
      title: 'EBT vendors: Claim Your Share of SNAP Online Revenue.',
      date: 'April 10, 2023',
      author: 'By John Doe',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Latest Blog</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow border rounded-md overflow-hidden hover:shadow-lg transition"
          >
            <figure>
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 object-cover"
              />
            </figure>
            <div className="p-5">
              <p className="text-xs font-medium uppercase text-blue-500 mb-2">
                {post.category}
              </p>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {post.title}
              </h3>
              <div className="flex items-center justify-between text-gray-500 text-sm">
                <span className="flex items-center gap-1">
                  <IoCalendarOutline /> {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <IoPersonOutline /> {post.author}
                </span>
              </div>
              <div className="mt-4">
                <Link
                  to="#"
                  className="text-sm font-medium text-blue-600 hover:underline"
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
