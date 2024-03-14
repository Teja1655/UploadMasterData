import React from 'react';


const EmployeeDataTable = ({ employees = [], fetchdata}) => {
  const handleDeleteemployee = async (id) => {
    try {
      await fetch("https://manoj-bakery.onrender.com/employee/" + id, {
        method: 'DELETE',
      })
      fetchdata()
    } catch (error) {
      console.log(error);
    }
  }

  const handleEditemployee=(employee)=>{
    console.log("editing employee",employee)
  }
  
  return (
    <table className="w-screen leading-normal">
      <thead>
        <tr>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Employee Name
          </th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Location
          </th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Employee ID
          </th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, index) => (
          <tr key={index}>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              {employee['EMPLOYEE NAME'] || employee.employeeName}
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              {employee['LOCATION'] || employee.location}
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              {employee['EMPLOYEE ID'] || employee.employeeId}
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white  text-sm'>
              <button className='" bg-violet-500 text-white  px-4 rounded-lg' onClick={() => handleEditemployee(employee)}>Edit</button>
              <button className='" bg-violet-500 text-white  px-4 rounded-lg' onClick={() => handleDeleteemployee(employee.id)}>Delete</button>
            </td>
          </tr>

        ))}
      </tbody>

    </table>
  );
};

export default EmployeeDataTable;