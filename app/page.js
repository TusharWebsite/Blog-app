"use client";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:flex lg:items-center lg:justify-between">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl font-extrabold leading-tight text-gray-800 dark:text-gray-200 sm:text-5xl">
            Discover the World of{" "}
            <span className="text-blue-600">Technology</span> <br />
            and <span className="text-green-500">Innovation</span>.
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Explore curated content in <b>web development</b>, <b>coding</b>,{" "}
            <b>travel</b>, and <b>food</b>. Stay ahead of the trends and dive
            into the latest insights across industries.
          </p>
          <div className="mt-8 space-y-4 lg:space-y-0 lg:space-x-4">
            <Button
              variant="primary"
              className="px-6 py-3 text-lg font-medium"
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              className="px-6 py-3 text-lg font-medium"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full mt-8 lg:mt-0 lg:w-1/2">
          <div className="relative">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/blog-writer-working-on-article-illustration-download-in-svg-png-gif-file-formats--blogger-logo-female-content-typing-writing-news-pack-design-development-illustrations-4759515.png"
              alt="Illustration"
              className="w-full h-auto max-w-lg mx-auto drop-shadow-xl"
            />
            <div className="absolute top-0 right-0 p-3 bg-white rounded-full shadow-lg dark:bg-gray-800">
              <span className="text-sm font-semibold text-blue-600">
                #Trending
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Top Blogs</h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Check out our most popular blog posts</p>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* Blog 1 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                <img src="https://tse2.mm.bing.net/th?id=OIP.njg3e9gZyHg4TgC-GeOskgHaEK&pid=Api&P=0&h=180" className="w-full h-64 object-cover rounded-t-lg" />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Technology Blog</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">A brief description of the blog post goes here. It should be engaging and informative.</p>
                  <Button className="m-2" variant="outline" href="/blog-post-1">Read More</Button>
                </div>
              </div>
            </div>
            {/* Blog 2 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                <img src="https://tse4.mm.bing.net/th?id=OIP.2z9jQgt52b853q2dCWoWXwHaE7&pid=Api&P=0&h=180" alt="Blog 2" className="w-full h-64 object-cover rounded-t-lg" />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Food Blog</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">A brief description of the blog post goes here. It should be engaging and informative.</p>
                  <Button className="m-2" variant="outline" href="/blog-post-2">Read More</Button>
                </div>
              </div>
            </div>
            {/* Blog 3 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                <img src="https://tse2.mm.bing.net/th?id=OIP.ckuMB1vAkHnqoAL2rrRGSAHaE8&pid=Api&P=0&h=180" alt="Blog 3" className="w-full h-64 object-cover rounded-t-lg" />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Travel Blog</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">A brief description of the blog post goes here. It should be engaging and informative.</p>
                  <Button className="m-2" variant="outline" href="/blog-post-3">Read More</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Feature Section */}
      <section className="container px-4 py-16 mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200">
          Why Choose Us?
        </h2>
        <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
          We provide premium content and resources to help you grow your skills
          and explore new opportunities.
        </p>

        <div className="grid gap-8 mt-8 lg:grid-cols-3">
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md dark:border-gray-700">
            <h3 className="text-xl font-semibold text-blue-600">
              Expert Insights
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Learn from industry experts with years of experience in their
              fields.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md dark:border-gray-700">
            <h3 className="text-xl font-semibold text-green-500">
              Curated Content
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Access premium, hand-picked resources to accelerate your growth.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md dark:border-gray-700">
            <h3 className="text-xl font-semibold text-purple-600">
              Community Support
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Join a vibrant community of like-minded individuals to collaborate
              and learn.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
