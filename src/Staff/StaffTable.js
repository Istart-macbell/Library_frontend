import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import Sidebar from "../Admin/Sidebar";
const StaffTable = () => {
  const [staffData, setStaffData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const rowsPerPage = 5;

  const API_URL = "https://library-backend-4335.onrender.com/api/admin/staffs";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(API_URL);
        const result = await response.json();
        if (response.ok) {
          setStaffData(result.staff);
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

  const [formData, setFormData] = useState({
    staffId:"",
    amount: "",
    paymentMethod: "",
    remarks: "",
    date: new Date().toISOString().substring(0, 10),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleModal=(id)=>{
    // for setting id 
    setIsModalOpen(true);
    setFormData({...formData, staffId:id });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalData = {
      ...formData,
      date: formData.date || new Date().toISOString().substring(0, 10),
    };
    // console.log(finalData);
    
  
    try {
      const response = await fetch(`https://library-backend-4335.onrender.com/api/admin/add-salary/${formData.staffId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalData),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        alert("Salary added successfully");
        // console.log("Salary added successfully:", result);
      } else {
        alert("Failed to add Salary");
        // console.error("Failed to add salary:", result.message);
      }
    } catch (error) {
      alert("Error submitting salary data");
      // console.error("Error submitting salary data:", error);
    }
  };
  

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col items-center justify-center p-4 bg-gray-100">
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
              <div className="overflow-x-auto">
                <table className="w-full border border-collapse border-gray-300 table-auto">
                  <thead>
                    <tr className="bg-gray-200">
                      {/* Table Headings */}
                      {[
                        "ID",
                        "First Name",
                        "Last Name",
                        "Email",
                        "Phone",
                        "Position",
                        "Department",
                        "Gender",
                        "Date of Birth",
                        "Joining Date",
                        "Salary",
                        "Qualifications",
                        "Created At",
                        "Action",
                      ].map((heading) => (
                        <th
                          key={heading}
                          className="px-4 py-2 border-b border-gray-300"
                        >
                          {heading}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {currentData.map((staffMember) => (
                      <tr key={staffMember._id} className="text-center">
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
                            onClick={() => handleModal(staffMember._id)}
                            className="px-2 py-1 text-white bg-green-500 rounded hover:scale-105 duration-75 hover:bg-green-600"
                          >
                            Add Salary
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
                          <option value="Cash">Cash</option>
                          <option value="Bank Transfer">Bank Transfer</option>
                          <option value="Cheque">Cheque</option>
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

              <div className="flex justify-between mt-4">
                <button
                  onClick={handlePrev}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 ${
                    currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  Previous
                </button>
                <p>
                  Page {currentPage} of {totalPages}
                </p>
                <button
                  onClick={handleNext}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 ${
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
    </div>
  );
};

export default StaffTable;
