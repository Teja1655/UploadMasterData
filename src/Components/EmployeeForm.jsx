import React, { useState } from 'react';

const EmployeeForm = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [id, setId] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEmployee = { name, id, location };

    setName('');
    setLocation('');
    setId('');

    try {
      const response = await fetch('https://manoj-bakery.onrender.com/employee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ employeeName: newEmployee.name, location: newEmployee.location, employeeId: newEmployee.id }),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Failed to submit data: ${response.status} - ${errorMessage}`);
      }

    } catch (error) {
      console.error('Error submitting data:', error);

    }
  };

  return (
    <form className="employee-form" onSubmit={handleSubmit} >
      <div className='flex justify-evenly'>
        <label>
          Employee Name*
          <input type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Location*
          <input type="type" placeholder='Enter Location' value={location} onChange={(e) => setLocation(e.target.value)} required />
        </label>
        <label>
          Employee ID*
          <input type='text' placeholder='Enter Id' value={id} onChange={(e) => setId(e.target.value)} required />
        </label>
      </div>

      <div className=" flex  justify-center mt-[45px]  gap-3 form-actions">
        <button type="button" className="bg-violet-500 text-white py-2 px-4 rounded-lg">Cancel</button>
        <button type="submit" className="bg-violet-500 text-white py-2 px-4 rounded-lg">Add</button>
      </div>
    </form>
  );
};

export default EmployeeForm;