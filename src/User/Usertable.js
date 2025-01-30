import React, { useEffect, useState } from "react";
import Sidebar from "../Admin/Sidebar";
import Modal from "../Staff/Modal";

const UserTable = () => {
  const [data, setData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [selectedUserId, setSelectedUserId] = useState(null); 

  // Pagination Logic
  const totalPages = data && Math.ceil(data.users.length / itemsPerPage);
  const startIndex = data && (currentPage - 1) * itemsPerPage;
  const currentData = data && data.users.slice(startIndex, startIndex + itemsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

   const [formData, setFormData] = useState({
      amount: "",
      paymentMethod: "",
      remarks: "",
      date: new Date().toISOString().substring(0, 10),
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!selectedUserId) {
        console.error("User ID is missing!");
        return;
      }
      const finalData = {
        ...formData,
        // userId:selectedUserId,
        date: formData.date || new Date().toISOString().substring(0, 10),
      };
  
      console.log("Form Submitted:", finalData);
  
      try {
        const response = await fetch(
          "https://library-backend-4335.onrender.com/api/admin/add-fees/67913edaf9485784e65b21ed",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(finalData),
          }
        );
  
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
  
        const result = await response.json();
        console.log("API Response:", result);
  
        // Close the modal after successful submission
        setIsModalOpen(false);
  
        // Optionally, reset the form data
        setFormData({
          amount: "",
          paymentMethod: "",
          remarks: "",
          date: new Date().toISOString().substring(0, 10),
        });
      } catch (err) {
        console.error("Failed to submit form:", err);
      }
    };
  

  // calling data when page mounts or loads
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://library-backend-4335.onrender.com/api/admin/get-users"
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const apiData = await response.json();
        setData(apiData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [data]);

  if (loading) return <h1 className="text-3xl text-center">Loading...</h1>;
  if (error) return <h1 className="text-3xl text-center">{error}</h1>;

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 overflow-y-auto bg-gray-100 p-6">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h1 className="text-2xl font-bold mb-4">User Table</h1>

          <div className="overflow-x-auto">
            <table className="table-auto w-full border border-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-2 border border-gray-300">ID</th>
                  <th className="p-2 border border-gray-300">Full Name</th>
                  <th className="p-2 border border-gray-300">Email</th>
                  <th className="p-2 border border-gray-300">Phone</th>
                  <th className="p-2 border border-gray-300">Date of Birth</th>
                  <th className="p-2 border border-gray-300">Address</th>
                  <th className="p-2 border border-gray-300">Joining Date</th>
                  <th className="p-2 border border-gray-300">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentData?.map((user) => (
                  <tr key={user.id} className="text-center">
                    <td className="p-2 border border-gray-300">{user.id}</td>
                    <td className="p-2 border border-gray-300">{user.fullName}</td>
                    <td className="p-2 border border-gray-300">{user.email}</td>
                    <td className="p-2 border border-gray-300">{user.phone}</td>
                    <td className="p-2 border border-gray-300">
                      {new Date(user.dateOfBirth).toLocaleDateString()}
                    </td>
                    <td className="p-2 border border-gray-300">
                      {JSON.stringify(user.address) || "N/A"}
                    </td>
                    <td className="p-2 border border-gray-300">{user.joiningDate}</td>
                    <td className="p-2 border border-gray-300"> 
                      <button
                             onClick={() => {
                              setSelectedUserId(user._id); // Ensure selectedUserId is set
                              setIsModalOpen(true);
                            }}
                            className="px-2 py-1 text-white bg-green-500 rounded hover:scale-105 duration-75 hover:bg-green-600"
                          >
                            Add Fee
                            </button>
                            </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Modal
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                >
                  {/* Modal Content */}
                  <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
                    <h2 className="mb-4 text-2xl font-bold">Payment Form</h2>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <label className="block mb-2 text-gray-700 font-medium">
                          Amount
                        </label>
                        <input
                          type="number"
                          name="amount"
                          value={formData.amount}
                          onChange={handleChange}
                          className="w-full p-2 border rounded-lg"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block mb-2 text-gray-700 font-medium">
                          Payment Method
                        </label>
                        <select
                          name="paymentMethod"
                          value={formData.paymentMethod}
                          onChange={handleChange}
                          className="w-full p-2 border rounded-lg"
                          required
                        >
                          <option value="">Select Payment Method</option>
                          <option value="Credit Card">Credit Card</option>
                          <option value="Debit Card">Debit Card</option>
                          <option value="PayPal">PayPal</option>
                          <option value="UPI">UPI</option>
                          <option value="Cash">Cash</option>
                        </select>
                      </div>
                      <div className="mb-4">
                        <label className="block mb-2 text-gray-700 font-medium">
                          Remarks
                        </label>
                        <textarea
                          name="remarks"
                          value={formData.remarks}
                          onChange={handleChange}
                          className="w-full p-2 border rounded-lg"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block mb-2 text-gray-700 font-medium">
                          Date
                        </label>
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full p-2 border rounded-lg"
                        />
                      </div>
                      <div className="flex justify-between">
                        <button
                          type="button"
                          onClick={() => setIsModalOpen(false)}
                          className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                        >
                          Close
                        </button>
                        <button
                          type="submit"
                          className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </Modal>
          </div>

          {/* Pagination Controls */}
          <div className="mt-4 flex justify-between items-center">
            <button
              onClick={goToPreviousPage}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 disabled:opacity-50"
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span className="text-gray-700">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={goToNextPage}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 disabled:opacity-50"
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
