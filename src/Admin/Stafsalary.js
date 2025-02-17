import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

const AdminStaffSalary = () => {
  const [salaries, setSalaries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    fetch("https://library-backend-4335.onrender.com/api/admin/staff-salaries")
      .then((response) => response.json())
      .then((data) => {
        setSalaries(data.salaries);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching salaries:", error);
        setError("Failed to load data");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-gray-600">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  const totalPages = Math.ceil(salaries.length / itemsPerPage);
  const currentSalaries = salaries.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="flex">
      <Sidebar />
      <div className="p-6 max-w-6xl mx-auto w-full">
        <h2 className="text-2xl font-bold mb-4 text-center mt-12 text-xl text-blue-700">Admin Staff Salary</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border p-2">Staff Name</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Position</th>
                <th className="border p-2">Department</th>
                <th className="border p-2">Amount</th>
                <th className="border p-2">Payment Method</th>
                <th className="border p-2">Salary Month</th>
                <th className="border p-2">Payment Date</th>
                <th className="border p-2">Remarks</th>
              </tr>
            </thead>
            <tbody>
              {currentSalaries.map((salary) => (
                <tr key={salary._id} className="text-center border">
                  <td className="border p-2">
                    {salary.staffId.firstName} {salary.staffId.lastName}
                  </td>
                  <td className="border p-2">{salary.staffId.email}</td>
                  <td className="border p-2">{salary.staffId.position}</td>
                  <td className="border p-2">{salary.staffId.department}</td>
                  <td className="border p-2">${salary.amount}</td>
                  <td className="border p-2">{salary.paymentMethod}</td>
                  <td className="border p-2">{new Date(salary.date).toLocaleDateString()}</td>
                  <td className="border p-2">{new Date(salary.paymentDate).toLocaleString()}</td>
                  <td className="border p-2">{salary.remarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-4">
          <button 
            className="px-4 py-2 border rounded-md mx-1 disabled:opacity-50" 
            onClick={() => setCurrentPage(currentPage - 1)} 
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="px-4 py-2">Page {currentPage} of {totalPages}</span>
          <button 
            className="px-4 py-2 border rounded-md mx-1 disabled:opacity-50" 
            onClick={() => setCurrentPage(currentPage + 1)} 
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminStaffSalary;
