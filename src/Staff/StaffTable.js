import React, { useEffect, useState } from "react";
import Modal from "./Modal";

const StaffTable = () => {
  const [staffData, setStaffData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const rowsPerPage = 5;

  const API_URL = "https://library-backend-4335.onrender.com/api/admin/staffs";

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(API_URL);
        const result = await response.json();

        if (response.ok) {
          setStaffData(result.staff); // Use the "staff" field from the API response
        } else {
          setError(result.message || "Failed to fetch staff data.");
        }
      } catch (err) {
        setError("An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Pagination calculations
  const totalPages = Math.ceil(staffData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = staffData.slice(startIndex, endIndex);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };


  // All about add salary form
  const [formData, setFormData] = useState({
    amount: "",
    paymentMethod: "",
    remarks: "",
    date: new Date().toISOString().substring(0, 10), // Default to current date
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalData = {
      ...formData,
      date: formData.date || new Date().toISOString().substring(0, 10), // Ensure date defaults
    };
    console.log("Form Submitted:", finalData);
    // Add your API call or logic here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="w-full p-6 bg-white rounded-lg shadow-lg max-w-7xl">
        <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
          Staff Table
        </h1>

        {loading ? (
          <p className="text-center text-gray-500">Loading data...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <>
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full border border-collapse border-gray-300 table-auto">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="px-4 py-2 border-b border-gray-300">ID</th>
                    <th className="px-4 py-2 border-b border-gray-300">
                      First Name
                    </th>
                    <th className="px-4 py-2 border-b border-gray-300">
                      Last Name
                    </th>
                    <th className="px-4 py-2 border-b border-gray-300">
                      Email
                    </th>
                    <th className="px-4 py-2 border-b border-gray-300">
                      Phone
                    </th>
                    <th className="px-4 py-2 border-b border-gray-300">
                      Position
                    </th>
                    <th className="px-4 py-2 border-b border-gray-300">
                      Department
                    </th>
                    <th className="px-4 py-2 border-b border-gray-300">
                      Gender
                    </th>
                    <th className="px-4 py-2 border-b border-gray-300">
                      Date of Birth
                    </th>
                    <th className="px-4 py-2 border-b border-gray-300">
                      Joining Date
                    </th>
                    <th className="px-4 py-2 border-b border-gray-300">
                      Salary
                    </th>
                    <th className="px-4 py-2 border-b border-gray-300">
                      Qualifications
                    </th>
                    <th className="px-4 py-2 border-b border-gray-300">
                      Created At
                    </th>
                    <th className="px-4 py-2 border-b border-gray-300">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentData.map((staffMember) => (
                    <tr key={staffMember.id} className="text-center">
                      <td className="px-4 py-2 border-b border-gray-300">
                        {staffMember.id}
                      </td>
                      <td className="px-4 py-2 border-b border-gray-300">
                        {staffMember.firstName}
                      </td>
                      <td className="px-4 py-2 border-b border-gray-300">
                        {staffMember.lastName}
                      </td>
                      <td className="px-4 py-2 border-b border-gray-300">
                        {staffMember.email}
                      </td>
                      <td className="px-4 py-2 border-b border-gray-300">
                        {staffMember.phone}
                      </td>
                      <td className="px-4 py-2 border-b border-gray-300">
                        {staffMember.position}
                      </td>
                      <td className="px-4 py-2 border-b border-gray-300">
                        {staffMember.department}
                      </td>
                      <td className="px-4 py-2 border-b border-gray-300">
                        {staffMember.gender}
                      </td>
                      <td className="px-4 py-2 border-b border-gray-300">
                        {new Date(staffMember.dateOfBirth).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-2 border-b border-gray-300">
                        {new Date(staffMember.joiningDate).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-2 border-b border-gray-300">
                        {staffMember.salary}
                      </td>
                      <td className="px-4 py-2 border-b border-gray-300">
                        {staffMember.qualifications.join(", ")}
                      </td>
                      <td className="px-4 py-2 border-b border-gray-300">
                        {new Date(staffMember.createdAt).toLocaleString()}
                      </td>
                      <td className="px-4 py-2 border-b border-gray-300">
                        <button
                          onClick={() => setIsModalOpen(true)}
                          className="text-sm px-2 py-1 bg-green-500 text-white hover:scale-105 duration-75 hover:bg-green-600"
                        >
                          Add Salary
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* popup for add salary button */}
              <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold mb-4">Payment Form</h2>
                  <form onSubmit={handleSubmit}>
                    {/* Amount */}
                    <div className="mb-4">
                      <label
                        htmlFor="amount"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Amount
                      </label>
                      <input
                        type="number"
                        id="amount"
                        name="amount"
                        value={formData.amount}
                        onChange={(e)=>setFormData((prev) => ({ ...prev, amount: e.target.value }))}
                        className="w-full p-2 border rounded-lg"
                        required
                      />
                    </div>

                    {/* Payment Method */}
                    <div className="mb-4">
                      <label
                        htmlFor="paymentMethod"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Payment Method
                      </label>
                      <select
                        id="paymentMethod"
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
                        <option value="Cash">Cash</option>
                      </select>
                    </div>

                    {/* Remarks */}
                    <div className="mb-4">
                      <label
                        htmlFor="remarks"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Remarks
                      </label>
                      <textarea
                        id="remarks"
                        name="remarks"
                        value={formData.remarks}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-lg"
                        rows="3"
                      />
                    </div>

                    {/* Date */}
                    <div className="mb-4">
                      <label
                        htmlFor="date"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Date
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-lg"
                      />
                    </div>

                    <div className="flex items-center justify-between">

                    {/* close button */}
                      <button
                        onClick={()=>setIsModalOpen(false)}
                        className="w-[30%] bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600"
                      >
                        Close
                      </button>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-[30%] bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </Modal>
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
                  currentPage === totalPages
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default StaffTable;
