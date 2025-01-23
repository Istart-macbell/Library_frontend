import React, { useState } from "react";

const staffData = [
  {
    id: "6790e6ebeaaff4463a0fb813",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "1234567890",
    position: "Manager",
    department: "HR",
    gender: "Male",
    password: "5008",
    dateOfBirth: "1990-01-01T00:00:00.000Z",
    joiningDate: "2025-01-22T00:00:00.000Z",
    salary: 50000,
    qualifications: ["MBA"],
    createdAt: "2025-01-22T12:39:07.517Z",
    v: 0,
  },
  {
    id: "6790e7ed769b3ad3f387a998",
    firstName: "John",
    lastName: "Doe",
    email: "john2.doe@example.com",
    phone: "1234567890",
    position: "Manager",
    department: "HR",
    gender: "Male",
    password: "3442",
    dateOfBirth: "1990-01-01T00:00:00.000Z",
    joiningDate: "2025-01-22T00:00:00.000Z",
    salary: 50000,
    qualifications: ["MBA"],
    createdAt: "2025-01-22T12:43:25.279Z",
    v: 0,
  },
  // Add remaining staff objects...
];

const StaffTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="w-full p-6 bg-white rounded-lg shadow-lg max-w-7xl">
        <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
          Staff Table
        </h1>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-collapse border-gray-300 table-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 border-b border-gray-300">ID</th>
                <th className="px-4 py-2 border-b border-gray-300">First Name</th>
                <th className="px-4 py-2 border-b border-gray-300">Last Name</th>
                <th className="px-4 py-2 border-b border-gray-300">Email</th>
                <th className="px-4 py-2 border-b border-gray-300">Phone</th>
                <th className="px-4 py-2 border-b border-gray-300">Position</th>
                <th className="px-4 py-2 border-b border-gray-300">Department</th>
                <th className="px-4 py-2 border-b border-gray-300">Gender</th>
                <th className="px-4 py-2 border-b border-gray-300">Date of Birth</th>
                <th className="px-4 py-2 border-b border-gray-300">Joining Date</th>
                <th className="px-4 py-2 border-b border-gray-300">Salary</th>
                <th className="px-4 py-2 border-b border-gray-300">Qualifications</th>
                <th className="px-4 py-2 border-b border-gray-300">Created At</th>
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

export default StaffTable;
