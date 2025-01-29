import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../Admin/Sidebar";
const BooksTable = () => {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const rowsPerPage = 5;

  useEffect(() => {
    // Fetch data from API
    axios
      .get("https://library-backend-4335.onrender.com/api/admin/getbooks")
      .then((response) => {
        if (response.data.message === "Books retrieved successfully") {
          setBooks(response.data.books); // Set the books data from API
        }
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load books");
        setLoading(false);
      });
  }, []);

  // Pagination calculations
  const totalPages = Math.ceil(books.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = books.slice(startIndex, endIndex);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
        <div className="w-full p-6 bg-white rounded-lg shadow-lg max-w-7xl">
          <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
            Books Table
          </h1>

          {/* Loading and Error Handling */}
          {loading && (
            <p className="text-center text-gray-500">Loading books...</p>
          )}
          {error && <p className="text-center text-red-500">{error}</p>}

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border border-collapse border-gray-300 table-auto">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2 border-b border-gray-300">Title</th>
                  <th className="px-4 py-2 border-b border-gray-300">Author</th>
                  <th className="px-4 py-2 border-b border-gray-300">ISBN</th>
                  <th className="px-4 py-2 border-b border-gray-300">
                    Category
                  </th>
                  <th className="px-4 py-2 border-b border-gray-300">Price</th>
                  <th className="px-4 py-2 border-b border-gray-300">
                    Available Copies
                  </th>
                  <th className="px-4 py-2 border-b border-gray-300">
                    Total Copies
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((book) => (
                  <tr key={book._id} className="text-center">
                    <td className="px-4 py-2 border-b border-gray-300">
                      {book.title}
                    </td>
                    <td className="px-4 py-2 border-b border-gray-300">
                      {book.author}
                    </td>
                    <td className="px-4 py-2 border-b border-gray-300">
                      {book.ISBN}
                    </td>
                    <td className="px-4 py-2 border-b border-gray-300">
                      {book.category}
                    </td>
                    <td className="px-4 py-2 border-b border-gray-300">
                      ${book.price}
                    </td>
                    <td className="px-4 py-2 border-b border-gray-300">
                      {book.availableCopies}
                    </td>
                    <td className="px-4 py-2 border-b border-gray-300">
                      {book.totalCopies}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-4">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className={`px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 focus:outline-none ${
                currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Previous
            </button>
            <p className="text-gray-700">
              Page {currentPage} of {totalPages}
            </p>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 focus:outline-none ${
                currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksTable;
