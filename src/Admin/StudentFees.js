import axios from "axios";
import React, { useEffect, useState } from "react";

const StudentFees = () => {
  const [fees, setFees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(fees)

  useEffect(() => {
    axios
      .get("https://library-backend-4335.onrender.com/api/admin/student-fees")
      .then((response) => {
        if (response.data && Array.isArray(response.data)) {
          setFees(response.data);
          console.log(response)
        } else {
          setError("Invalid data format received");
        }
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load fees data");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500">Loading fees data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-6"
      style={{
        backgroundImage: `url('https://source.unsplash.com/1600x900/?finance,education')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-xl">
        <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">
          Student Fees Details
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full overflow-hidden border border-collapse border-gray-200 rounded-lg shadow-md">
            <thead className="text-white bg-blue-500">
              <tr>
                <th className="p-3 border">ID</th>
                <th className="p-3 border">Name</th>
                <th className="p-3 border">Class</th>
                <th className="p-3 border">Amount</th>
                <th className="p-3 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {fees.length > 0 ? (
                fees.map((fee, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="p-3 border">{fee.id || "N/A"}</td>
                    <td className="p-3 border">{fee.name || "N/A"}</td>
                    <td className="p-3 border">{fee.class || "N/A"}</td>
                    <td className="p-3 border">${fee.amount || "N/A"}</td>
                    <td
                      className={`p-3 border text-center font-semibold ${
                        fee.status === "Paid" ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {fee.status || "N/A"}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="p-3 text-center text-gray-500">
                    No fee records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentFees;
