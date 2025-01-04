"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
            <Button variant="primary" className="px-6 py-3 text-lg font-medium">
              Get Started
            </Button>
            <Button variant="outline" className="px-6 py-3 text-lg font-medium">
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
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
              Top Blogs
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              Check out our most popular blog posts
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* Blog 1 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                <img
                  src="https://tse2.mm.bing.net/th?id=OIP.njg3e9gZyHg4TgC-GeOskgHaEK&pid=Api&P=0&h=180"
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Technology Blog
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    A brief description of the blog post goes here. It should be
                    engaging and informative.
                  </p>
                  <Link href={`/blog`} passHref>
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
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Food Blog
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    A brief description of the blog post goes here. It should be
                    engaging and informative.
                  </p>
                  <Link href={`/blog`} passHref>
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
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Travel Blog
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    A brief description of the blog post goes here. It should be
                    engaging and informative.
                  </p>
                  <Link href={`/blog`} passHref>
                    <Button className="m-2" variant="outline">
                      Read More
                    </Button>
                  </Link>{" "}
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


      {/* Testimonials Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
            What Our Readers Say
          </h2>
          <div className="grid gap-8 mt-8 lg:grid-cols-3">
            {[
              {
                name: "Alice Johnson",
                feedback:
                  "This blog is my go-to for all things tech and lifestyle!",
              },
              {
                name: "Mark Lee",
                feedback:
                  "The content is well-researched and incredibly helpful.",
              },
              {
                name: "Sophia Garcia",
                feedback:
                  "I love the travel tips! They make my trips so much better.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-6 border rounded-lg shadow-lg dark:border-gray-700"
              >
                <p className="italic text-gray-600 dark:text-gray-300">
                  "{testimonial.feedback}"
                </p>
                <h4 className="mt-4 text-lg font-semibold text-blue-600">
                  - {testimonial.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
            Stay Updated
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Subscribe to our newsletter and never miss an update.
          </p>
          <form className="mt-8 flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-lg border border-gray-300 dark:border-gray-700 focus:outline-none"
            />
            <Button variant="primary" className="rounded-r-lg">
              Subscribe
            </Button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 space-y-4">
            {[
              {
                question: "What topics do you cover?",
                answer:
                  "We cover technology, coding, travel, food, and more.",
              },
              {
                question: "How can I contribute?",
                answer:
                  "You can reach out to us via our contact page to collaborate.",
              },
              {
                question: "Is the content free?",
                answer:
                  "Yes, most of our content is free. We also offer premium resources.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg dark:border-gray-700"
              >
                <h4 className="font-semibold text-blue-600">
                  {faq.question}
                </h4>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
