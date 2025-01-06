"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter

export default function AuthenticationPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // Initialize router

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login Successfully");
        router.push("/blog"); // Navigate to blog page after success
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      console.log("Getting Error Login", error);
      alert("Getting Error Login");
    }
  };

  return (
    <>
      {/* Mobile View */}
      <div className="md:hidden">
        <Image
          src="/examples/authentication-light.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="block dark:hidden"
        />
        <Image
          src="/examples/authentication-dark.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="hidden dark:block"
        />
      </div>

      {/* Desktop View */}
      <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        {/* Back to Login Button */}
        <Link
          href="/login"
          className="absolute right-4 top-4 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 md:right-8 md:top-8"
        >
          Login
        </Link>

        {/* Left Panel */}
        <div className="relative hidden h-full flex-col bg-gray-800 p-10 text-white lg:flex">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-xl font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 inline-block h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            Tushar Blog
          </div>
          <div className="relative z-10 mt-auto text-lg">
            <blockquote className="space-y-2">
              <p>
                &ldquo;This platform has made my life easier by streamlining
                workflows and enhancing productivity.&rdquo;
              </p>
              <footer className="text-sm">- Sofia Davis</footer>
            </blockquote>
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex flex-col items-center justify-center px-6 lg:p-8">
          <div className="w-full max-w-sm space-y-6">
            <div className="text-center">
              <h1 className="text-2xl font-bold">Create an Account</h1>
              <p className="mt-2 text-sm text-gray-600">
                Enter your details below to get started.
              </p>
            </div>

            {/* Form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 border-[1px] border-gray"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 border-[1px] border-gray bt-[30px]"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-indigo-600 py-2 px-4 text-white hover:bg-indigo-700 mt-[30px]"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
