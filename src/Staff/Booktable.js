import React, { useState } from "react";

const BooksTable = () => {
  const data = [
    {
      id: "679142b01a6f1d2845a980d7",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      ISBN: "9780743273565",
      category: "Fiction",
      availableCopies: 5,
      totalCopies: 10,
      price: 10.99,
    },
    {
      id: "2",
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      ISBN: "9780061120084",
      category: "Fiction",
      availableCopies: 3,
      totalCopies: 8,
      price: 7.99,
    },
    {
      id: "3",
      title: "1984",
      author: "George Orwell",
      ISBN: "9780451524935",
      category: "Fiction",
      availableCopies: 4,
      totalCopies: 10,
      price: 9.99,
    },
    {
      id: "4",
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      ISBN: "9780316769488",
      category: "Fiction",
      availableCopies: 6,
      totalCopies: 10,
      price: 11.99,
    },
    {
      id: "5",
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      ISBN: "9780544003415",
      category: "Fantasy",
      availableCopies: 7,
      totalCopies: 10,
      price: 15.99,
    },
    {
      id: "6",
      title: "Pride and Prejudice",
      author: "Jane Austen",
      ISBN: "9780141040349",
      category: "Fiction",
      availableCopies: 2,
      totalCopies: 5,
      price: 6.99,
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  // Pagination calculations
  const totalPages = Math.ceil(data.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="w-full p-6 bg-white rounded-lg shadow-lg max-w-7xl">
        <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
          Books Table
        </h1>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-collapse border-gray-300 table-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 border-b border-gray-300">Title</th>
                <th className="px-4 py-2 border-b border-gray-300">Author</th>
                <th className="px-4 py-2 border-b border-gray-300">ISBN</th>
                <th className="px-4 py-2 border-b border-gray-300">Category</th>
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
                <tr key={book.id} className="text-center">
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
  );
};

export default BooksTable;
