import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <>
      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Blogs</h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">A blog is a web log, or an online journal.</p>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* Blog 1 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                <img
                  src="https://tse2.mm.bing.net/th?id=OIP.njg3e9gZyHg4TgC-GeOskgHaEK&pid=Api&P=0&h=180"
                  className="w-full h-64 object-cover rounded-t-lg"
                  alt="Blog 1"
                />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Technology Blog</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    A brief description of the blog post goes here. It should be engaging and informative.
                  </p>
                  <Link href="/blogpost" passHref>
                    <Button className="m-2" variant="outline">
                      Read More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            {/* Blog 2 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                <img
                  src="https://tse4.mm.bing.net/th?id=OIP.2z9jQgt52b853q2dCWoWXwHaE7&pid=Api&P=0&h=180"
                  alt="Blog 2"
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Food Blog</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    A brief description of the blog post goes here. It should be engaging and informative.
                  </p>
                  <Link href="/blogpost" passHref>
                    <Button className="m-2" variant="outline">
                      Read More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            {/* Blog 3 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                <img
                  src="https://tse2.mm.bing.net/th?id=OIP.ckuMB1vAkHnqoAL2rrRGSAHaE8&pid=Api&P=0&h=180"
                  alt="Blog 3"
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Travel Blog</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    A brief description of the blog post goes here. It should be engaging and informative.
                  </p>
                  <Link href="/blogpost" passHref>
                    <Button className="m-2" variant="outline">
                      Read More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
