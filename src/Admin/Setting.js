import React, { useState } from "react";
import Sidebar from "./Sidebar";

const LibrarySettings = () => {
  const [formData, setFormData] = useState({
    libraryName: "",
    address: "",
    contact: "",
    email: "",
    description: "",
    logo: null,
    images: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-0 lg:ml-64 p-4 lg:p-8">
        <form
          onSubmit={handleSubmit}
          className="w-full p-6 bg-white rounded-lg shadow-lg max-w-4xl mx-auto"
        >
          <h1 className="mb-8 text-3xl font-bold text-center text-gray-800 text-blue-900 text-xl mt-20">
            Library Settings
          </h1>

          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col">
              <label htmlFor="libraryName" className="mb-2 font-semibold text-gray-700">
                Library Name
              </label>
              <input
                type="text"
                id="libraryName"
                name="libraryName"
                value={formData.libraryName}
                onChange={handleInputChange}
                placeholder="Enter library name"
                className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="address" className="mb-2 font-semibold text-gray-700">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter address"
                className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="contact" className="mb-2 font-semibold text-gray-700">
                Contact
              </label>
              <input
                type="text"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
                placeholder="Enter contact number"
                className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 font-semibold text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter email address"
                className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col md:col-span-2">
              <label htmlFor="description" className="mb-2 font-semibold text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Enter library description"
                rows="4"
                className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
          </div>

          {/* File Uploads */}
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 mt-8">
            <div className="flex flex-col bg-gray-50 p-6 rounded-lg border">
              <label htmlFor="logo" className="mb-3 font-semibold text-gray-700">
                Upload Logo
              </label>
              <input
                type="file"
                id="logo"
                name="logo"
                onChange={handleFileChange}
                className="block w-full px-4 py-2 border rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="mt-2 text-sm text-gray-500">Upload a logo (PNG, JPG, or SVG).</p>
            </div>

            <div className="flex flex-col bg-gray-50 p-6 rounded-lg border">
              <label htmlFor="images" className="mb-3 font-semibold text-gray-700">
                Upload Library Images
              </label>
              <input
                type="file"
                id="images"
                name="images"
                onChange={handleFileChange}
                multiple
                className="block w-full px-4 py-2 border rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="mt-2 text-sm text-gray-500">Upload multiple images (PNG, JPG, or JPEG).</p>
            </div>
          </div>

          <div className="flex justify-end mt-8">
            <button
              type="submit"
              className="px-8 py-3 text-lg text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LibrarySettings;
