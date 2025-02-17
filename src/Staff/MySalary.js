import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Mobile sidebar icons
import StaffSidebar from "./StaffSidebar"; // Sidebar component

const SalaryPage = () => {
  const [loading, setLoading] = useState(true);
  const [salaryRecords, setSalaryRecords] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const API_KEY = localStorage.getItem("token");
  const staffId = "6790e6ebeaaff4463a0fb813";
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar toggle state

  useEffect(() => {
    const fetchSalaryRecords = async () => {
      try {
        const response = await fetch(
          `https://library-backend-4335.onrender.com/api/staff/salary/${staffId}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${API_KEY}`,
              "Content-Type": "application/json",
            },
          }
        );
        const result = await response.json();
        setSalaryRecords(result.salaryRecords || []);
      } catch (error) {
        console.error("Error fetching salary records: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSalaryRecords();
  }, []);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = salaryRecords.slice(indexOfFirstRecord, indexOfLastRecord);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar and Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity lg:hidden ${isSidebarOpen ? "block" : "hidden"}`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-white shadow-lg transform lg:transform-none lg:relative w-64 transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <StaffSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-grow overflow-y-auto lg:ml-64">
        {/* Mobile Header with Sidebar Toggle */}
        <div className="flex items-center justify-between bg-purple-700 text-white p-4 shadow-lg lg:hidden">
          <h1 className="text-lg font-bold">My Salary Records</h1>
          <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
          {loading && <p className="text-lg text-gray-700">Loading salary records...</p>}

          <div className="overflow-x-auto w-full max-w-6xl">
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="py-3 px-6 text-left">Amount</th>
                  <th className="py-3 px-6 text-left">Payment Method</th>
                  <th className="py-3 px-6 text-left">Date</th>
                  <th className="py-3 px-6 text-left">Payment Date</th>
                  <th className="py-3 px-6 text-left">Remarks</th>
                </tr>
              </thead>
              <tbody>
                {currentRecords.map((record) => (
                  <tr key={record._id} className="border-b">
                    <td className="py-3 px-6">{record.amount || "N/A"}</td>
                    <td className="py-3 px-6">{record.paymentMethod || "N/A"}</td>
                    <td className="py-3 px-6">{new Date(record.date).toLocaleDateString()}</td>
                    <td className="py-3 px-6">{new Date(record.paymentDate).toLocaleDateString()}</td>
                    <td className="py-3 px-6">{record.remarks || "N/A"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center space-x-4 mt-4">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-lg font-semibold">Page {currentPage}</span>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage >= Math.ceil(salaryRecords.length / recordsPerPage)}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalaryPage;
