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
    axios
      .get("https://library-backend-4335.onrender.com/api/admin/getbooks")
      .then((response) => {
        if (response.data.message === "Books retrieved successfully") {
          setBooks(response.data.books);
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load books");
        setLoading(false);
      });
  }, []);

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
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow p-4 bg-gray-100 overflow-x-hidden">
        <div className="w-full p-4 sm:p-6 bg-white rounded-lg shadow-lg">
          <h1 className="mb-4 text-xl sm:text-2xl font-bold text-center text-gray-700">
            Books Table
          </h1>

          {loading && <p className="text-center text-gray-500">Loading books...</p>}
          {error && <p className="text-center text-red-500">{error}</p>}

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border border-collapse border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-2 sm:px-4 py-2 border-b border-gray-300 text-sm sm:text-base">Title</th>
                  <th className="px-2 sm:px-4 py-2 border-b border-gray-300 text-sm sm:text-base">Author</th>
                  <th className="px-2 sm:px-4 py-2 border-b border-gray-300 text-sm sm:text-base">ISBN</th>
                  <th className="px-2 sm:px-4 py-2 border-b border-gray-300 text-sm sm:text-base">Category</th>
                  <th className="px-2 sm:px-4 py-2 border-b border-gray-300 text-sm sm:text-base">Price</th>
                  <th className="px-2 sm:px-4 py-2 border-b border-gray-300 text-sm sm:text-base">Available</th>
                  <th className="px-2 sm:px-4 py-2 border-b border-gray-300 text-sm sm:text-base">Total</th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((book) => (
                  <tr key={book._id} className="text-center">
                    <td className="px-2 sm:px-4 py-2 border-b border-gray-300 text-sm sm:text-base">{book.title}</td>
                    <td className="px-2 sm:px-4 py-2 border-b border-gray-300 text-sm sm:text-base">{book.author}</td>
                    <td className="px-2 sm:px-4 py-2 border-b border-gray-300 text-sm sm:text-base">{book.ISBN}</td>
                    <td className="px-2 sm:px-4 py-2 border-b border-gray-300 text-sm sm:text-base">{book.category}</td>
                    <td className="px-2 sm:px-4 py-2 border-b border-gray-300 text-sm sm:text-base">${book.price}</td>
                    <td className="px-2 sm:px-4 py-2 border-b border-gray-300 text-sm sm:text-base">{book.availableCopies}</td>
                    <td className="px-2 sm:px-4 py-2 border-b border-gray-300 text-sm sm:text-base">{book.totalCopies}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row items-center justify-between mt-4 space-y-2 sm:space-y-0 sm:space-x-4">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className={`w-full sm:w-auto px-3 sm:px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 focus:outline-none ${
                currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Previous
            </button>
            <p className="text-gray-700 text-sm sm:text-base">
              Page {currentPage} of {totalPages}
            </p>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`w-full sm:w-auto px-3 sm:px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 focus:outline-none ${
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