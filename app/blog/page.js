import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

async function fetchBlogs() {
  const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

  const res = await fetch(`${baseURL}/api/blogs`, {
    next: { revalidate: 10 }, // Revalidate every 10 seconds
  });

  if (!res.ok) {
    throw new Error('Failed to fetch blogs');
  }
  return res.json();
}

const Page = async () => {
  const blogs = await fetchBlogs();

  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Blogs</h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">A blog is a web log, or an online journal.</p>
        </div>
        <div className="flex flex-wrap justify-center">
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <div key={blog._id} className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                      {blog.title}
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">{blog.description}</p>
                    <Link href={`/blogpost/${blog._id}`} passHref>
                      <Button className="m-2" variant="outline">
                        Read More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600 dark:text-gray-400">No blogs available at the moment. Please try again later.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Page;

