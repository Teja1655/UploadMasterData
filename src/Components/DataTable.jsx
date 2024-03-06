import React from "react";
const DataTable = ({ data }) => {

   if (!data || data.length === 0) {
    return <p>No data available</p>;
  }
  const columns = Object.keys(data[0]);
  console.log(columns, "gands")
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {columns.map((column) => (
              <td key={column}>{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
