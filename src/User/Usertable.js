import React, { useEffect, useState } from "react";
import Sidebar from "../Admin/Sidebar";
const UserTable = () => {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

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
                  </tr>
                ))}
              </tbody>
            </table>
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
