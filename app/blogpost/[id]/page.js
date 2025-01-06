// app/blogpost/[id]/page.js
import React from "react";
import { notFound } from "next/navigation";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

async function getBlogPost(id) {
  if (!id) return null;

  try {
    const client = await clientPromise;
    const db = client.db("Blog_data");

    const blog = await db.collection("blogs").findOne({
      _id: new ObjectId(id),
    });

    if (!blog) {
      return null;
    }

    return blog;
  } catch (error) {
    console.error("Failed to fetch blog post:", error);
    throw new Error("Failed to fetch blog post");
  }
}

export default async function BlogPost({ params }) {
  const { id } = await params; // Await params before destructuring.
  const blog = await getBlogPost(id);

  if (!blog) {
    notFound();
  }

  // Format date if it exists
  const formattedDate = blog.date
    ? new Date(blog.date).toLocaleDateString()
    : "";

    return (
      <article className="max-w-5xl mx-auto py-12 px-6 lg:px-12">
        <h1 className="text-5xl font-extrabold text-center text-gray-800 dark:text-gray-100 mb-8">
          {blog.title}
        </h1>
        <div className="prose prose-lg dark:prose-invert mx-auto flex flex-col lg:flex-row lg:space-x-8">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full lg:w-[500px] h-auto object-cover rounded-xl shadow-lg mb-6 lg:mb-0"
          />
          <div className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            <p className="mb-4">
              <span className="font-semibold">Description:</span> {blog.description}
            </p>
            <p className="mb-4">
              <span className="font-semibold">Category:</span> {blog.category}
            </p>
            {formattedDate && (
              <p className="text-gray-500 italic mb-4">Date: {formattedDate}</p>
            )}
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Blog Content
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            {blog.content}
          </p>
        </div>
      </article>
    );
}
