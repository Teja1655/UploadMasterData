import React from 'react';
 
const EmployeeDataTable = ({ employees }) => {
  return (
    <table className="min-w-full leading-normal">
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
        </tr>
      </thead>
      {/* <tbody>
        {employees.map((employee, index) => (
          <tr key={index}>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
{employee.name}
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              {employee.type}
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
{employee.id}
            </td>
          </tr>
        ))}
      </tbody> */}
    </table>
  );
};
 
export default EmployeeDataTable;