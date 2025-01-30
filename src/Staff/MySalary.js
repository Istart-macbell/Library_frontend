import React, { useState, useEffect } from "react";
import Sidebar from "../Admin/Sidebar";

const SalaryPage = () => {
  const [loading, setLoading] = useState(true);
  const [salaryRecords, setSalaryRecords] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const API_KEY = localStorage.getItem("token");
  const staffId = "6790e6ebeaaff4463a0fb813";

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

  return (
    <div className="flex min-h-screen">
      <div className="sidebar w-1/4 sticky top-0 h-screen">
        <Sidebar />
      </div>
      <div className="w-3/4 p-8 overflow-y-auto">
        <h1 className="mb-6 text-2xl font-bold text-center text-gray-700">
          My Salary Records
        </h1>
        {loading ? (
          <p className="text-center">Loading salary records...</p>
        ) : (
          <>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 p-2">Amount</th>
                  <th className="border border-gray-300 p-2">Payment Method</th>
                  <th className="border border-gray-300 p-2">Date</th>
                  <th className="border border-gray-300 p-2">Payment Date</th>
                  <th className="border border-gray-300 p-2">Remarks</th>
                </tr>
              </thead>
              <tbody>
                {currentRecords.map((record) => (
                  <tr key={record._id} className="text-center">
                    <td className="border border-gray-300 p-2">${record.amount || "N/A"}</td>
                    <td className="border border-gray-300 p-2">{record.paymentMethod || "N/A"}</td>
                    <td className="border border-gray-300 p-2">{new Date(record.date).toLocaleDateString()}</td>
                    <td className="border border-gray-300 p-2">{new Date(record.paymentDate).toLocaleDateString()}</td>
                    <td className="border border-gray-300 p-2">{record.remarks || "N/A"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-center mt-4">
              {Array.from({ length: Math.ceil(salaryRecords.length / recordsPerPage) }, (_, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={`px-4 py-2 mx-1 border rounded-lg ${currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SalaryPage;
