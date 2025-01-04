'use client'
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Component() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    // Clear the input fields
    setFormData({
      name: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="border-2 border-gray-300 dark:border-gray-700 p-4 rounded-md shadow-md space-y-8 w-[700px] m-auto mt-[50px] mb-[90px]">
      <form onSubmit={handleSubmit}>
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Please fill the below form and we will get back to you as soon as possible.
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-600 dark:text-gray-400">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-gray-600 dark:text-gray-400">
              Phone Number
            </Label>
            <Input
              id="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-gray-600 dark:text-gray-400">
              Message
            </Label>
            <Input
              id="message"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            />
          </div>
          <Button type="submit" className="w-full bg-blue-700">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
