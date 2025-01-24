import React, { useState } from 'react';

const AddBookPage = () => {
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    ISBN: '',
    category: '',
    availableCopies: 0,
    price: 0,
    totalCopies: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData({
      ...bookData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/books', { // Use your server endpoint here
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookData)
      });

      if (response.ok) {
        alert('Book added successfully!');
        setBookData({
          title: '',
          author: '',
          ISBN: '',
          category: '',
          availableCopies: 0,
          price: 0,
          totalCopies: 0
        });
      } else {
        alert('Error adding book');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error adding book');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow- mt-8">
      <h2 className="text-2xl font-semibold text-center mb-6">Add a New Book</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <div className="form-group">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={bookData.title}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="author" className="block text-sm font-medium text-gray-700">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            value={bookData.author}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="ISBN" className="block text-sm font-medium text-gray-700">ISBN</label>
          <input
            type="text"
            id="ISBN"
            name="ISBN"
            value={bookData.ISBN}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            value={bookData.category}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="availableCopies" className="block text-sm font-medium text-gray-700">Available Copies</label>
          <input
            type="number"
            id="availableCopies"
            name="availableCopies"
            value={bookData.availableCopies}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={bookData.price}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="totalCopies" className="block text-sm font-medium text-gray-700">Total Copies</label>
          <input
            type="number"
            id="totalCopies"
            name="totalCopies"
            value={bookData.totalCopies}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="col-span-full">
          <button type="submit" className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700">
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBookPage;
