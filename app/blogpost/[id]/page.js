// app/blogpost/[id]/page.js
import React from "react";
import { notFound } from "next/navigation";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

// Generate metadata for the page
export async function generateMetadata({ params: { id } }) {
  const blog = await getBlogPost(id);
  return {
    title: blog?.title || "Blog Post",
    description: blog?.description || "Blog post details",
  };
}

async function getBlogPost(id) {
  if (!id) return null;

  try {
    const client = await clientPromise;
    const db = client.db("Blog_data");

    const blog = await db.collection("blogs").findOne({
      _id: new ObjectId(id),
    });

    if (!blog) {
      return notFound();
    }

    return blog;
  } catch (error) {
    console.error("Failed to fetch blog post:", error);
    throw new Error("Failed to fetch blog post");
  }
}

export default async function BlogPost({ params: { id } }) {
  const blog = await getBlogPost(id);

  if (!blog) {
    notFound();
  }

  // Format date if it exists
  const formattedDate = blog.date
    ? new Date(blog.date).toLocaleDateString()
    : "";

  return (
    <article className="max-w-4xl mx-auto ml-[150px] py-12">
      <h1 className="text-4xl font-bold mb-8">{blog.title}</h1>
      <div className="prose prose-lg dark:prose-invert mx-auto flex items-start space-x-8">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-[500px] h-50 object-cover rounded-lg"
        />
        <div className="mt-5 text-lg leading-relaxed">
          <p>
            <span className="font-bold">Description:</span> {blog.description}
          </p>
          <p className="mt-2">
            <span className="font-bold">Category:</span> {blog.category}
          </p>
          {formattedDate && (
            <p className="text-gray-500 mt-2">Date: {formattedDate}</p>
          )}
        </div>
      </div>
    </article>
  );
}
