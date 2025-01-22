import React from 'react'

const StaffCard = ({header,value}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">{header}</h2>
        <p className="text-3xl font-bold">{value}</p>
    </div>
  )
}

export default StaffCard