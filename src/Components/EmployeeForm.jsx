import React, {useState,useEffect } from 'react';

const EmployeeForm = ({fetchdata,employeeData}) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [id, setId] = useState('');
  // const [loading, setLoading] = useState(false)
  useEffect(() => {
    if (employeeData) {
setName(employeeData.name || '');
      setLocation(employeeData.location || '');
setId(employeeData.id || '');
    }
  }, [employeeData]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEmployee = { name, id, location };

    setName('');
    setLocation('');
    setId('');

    try {
      // setLoading(true)
      const response = await fetch('https://manoj-bakery.onrender.com/employee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ employeeName: newEmployee.name, location: newEmployee.location, employeeId: newEmployee.id }),

      });
      // setLoading(false)
      fetchdata();
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Failed to submit data: ${response.status} - ${errorMessage}`);
      }

    } catch (error) {
      console.error('Error submitting data:', error);
      // setLoading(false)
    }
    // window.location.href="http://localhost:5173/";
  };
  // if (loading) return <h1>loading...</h1>
  return (
    <form className="employee-form" onSubmit={handleSubmit} >
      <div className='flex justify-evenly'>
        <label className='grid gap-1'>
          Employee Name*
          <input type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} className='border-black border-[1px]' required />
        </label>
        <label className='grid gap-1' >
          Location*
          <input type="type" placeholder='Enter Location' value={location} onChange={(e) => setLocation(e.target.value)} className='border-black border-[1px]' required />
        </label>
        <label className='grid gap-1'>
          Employee ID*
          <input type='text' placeholder='Enter Id' value={id} onChange={(e) => setId(e.target.value)} required  className='border-black border-[1px]'/>
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