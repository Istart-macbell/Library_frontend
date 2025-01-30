import React, { useEffect, useState } from "react";

const MyFees = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://library-backend-4335.onrender.com/api/user/get-user/67913edaf9485784e65b21ed")
      .then((response) => response.json())
      .then((data) => {
        setUser(data.user);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setError("Failed to load data");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-gray-600">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="flex">
   
      <div className="p-6 max-w-6xl mx-auto w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">My Fees</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border-t border-b border-gray-300">
            <thead>
              <tr className="bg-gray-100 text-center">
                <th className="border-b p-2">Amount</th>
                <th className="border-b p-2">Payment Method</th>
                <th className="border-b p-2">Remarks</th>
                <th className="border-b p-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {user.fees.map((fee) => (
                <tr key={fee._id} className="text-center border-b">
                  <td className="p-2">${fee.amount}</td>
                  <td className="p-2">{fee.paymentMethod}</td>
                  <td className="p-2">{fee.remarks}</td>
                  <td className="p-2">{new Date(fee.date).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyFees;
