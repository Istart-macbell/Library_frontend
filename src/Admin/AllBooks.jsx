import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";

const AllBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          "https://library-backend-4335.onrender.com/api/admin/getbooks"
        );
        console.log("hw",response)
        const data =response.data.books
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error.response?.data || error.message);
        alert("Failed to fetch books.");
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="flex flex-col h-screen">
    <div className="flex flex-1">
      <div className="flex-1 flex flex-col">
        <div className="p-6 flex-1 overflow-y-auto">
          <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-center mb-6">Book List</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200">
                <thead className="bg-gray-600 text-white">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2">Title</th>
                    <th className="border border-gray-300 px-4 py-2">Author</th>
                    <th className="border border-gray-300 px-4 py-2">ISBN</th>
                    <th className="border border-gray-300 px-4 py-2">Category</th>
                    <th className="border border-gray-300 px-4 py-2">Available Copies</th>
                    <th className="border border-gray-300 px-4 py-2">Price</th>
                    <th className="border border-gray-300 px-4 py-2">Total Copies</th>
                  </tr>
                </thead>
                <tbody>
                  {books.length > 0 ? (
                    books.map((book, index) => (
                      <tr key={index} className="hover:bg-gray-100">
                        <td className="border border-gray-300 px-4 py-2">{book.title}</td>
                        <td className="border border-gray-300 px-4 py-2">{book.author}</td>
                        <td className="border border-gray-300 px-4 py-2">{book.ISBN}</td>
                        <td className="border border-gray-300 px-4 py-2">{book.category}</td>
                        <td className="border border-gray-300 px-4 py-2">
                          {book.availableCopies}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">{book.price}</td>
                        <td className="border border-gray-300 px-4 py-2">{book.totalCopies}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="7"
                        className="border border-gray-300 px-4 py-2 text-center"
                      >
                        No books found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AllBooks;