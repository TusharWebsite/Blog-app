'use client';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./theme-btn";

export default function Navbar() {
  return (
<nav className="sticky top-0 bg-white/80 shadow-md backdrop-blur-sm bg-background/40 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold">Tushar Blog</span>
          </div>
          <div className="hidden md:flex space-x-4 items-center">
            <Link href="/" className="hover:scale-105 hover:font-semibold transition-transform duration-300">Home</Link>
            <Link href="/about" className="hover:scale-105 hover:font-semibold transition-transform duration-300">About</Link>
            <Link href="/blog" className="hover:scale-105 hover:font-semibold transition-transform duration-300">Blog</Link>
            <Link href="/contact" className="hover:scale-105 hover:font-semibold transition-transform duration-300">Contact</Link>
            <Button variant="outline">Login</Button>
            <Button variant="outline">Sign Up</Button>
            <ModeToggle />
          </div>
          <div className="md:hidden flex items-center">
            <span className="px-4">
              <ModeToggle />
            </span>
            <Sheet>
              <SheetTrigger asChild>
                <div className="text-gray-500 hover:text-black focus:outline-none cursor-pointer">
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </div>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white dark:bg-gray-800 text-black dark:text-white">
                <SheetHeader>
                  <SheetTitle className="text-lg font-semibold">Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-4 mt-4 text-center">
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                  <Link href="/about" className="hover:underline">
                    About
                  </Link>
                  <Link href="/blog" className="hover:underline">
                    Blog
                  </Link>
                  <Link href="/contact" className="hover:underline">
                    Contact
                  </Link>
                  <Button className="bg-blue-500 text-white hover:bg-blue-600 mt-4">
                    Login
                  </Button>
                  <Button className="bg-cyan-500 text-white hover:bg-cyan-600">
                    Sign Up
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
