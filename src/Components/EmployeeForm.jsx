import React, { useState } from 'react';
 
const EmployeeForm = ({ onSubmit }) => {
    const[name,setName]=useState('');
    const[location,setLocation]=useState('');
    const[id,setId]=useState('');

     const hanldesubmit =(e)=>{
        e.preventDefault();
        
     const newEmployee={name,id,location};
     onSubmit(newEmployee);
     setName('');
     setLocation('');
     setId('');
     }
  return (
    <form className="employee-form" onSubmit={hanldesubmit} >
     <div className='flex justify-evenly'>
     <label>
        Employee Name*
        <input type="text" placeholder="Enter name"  value={name} onChange={(e)=>setName(e.target.value)}/>
      </label>
      <label>
        Location*
          <input type="type" placeholder='Enter Location' value={location} onChange={(e)=>setLocation(e.target.value)}/>
         </label>
          <label>
        Employee ID*
         <input type='text' placeholder='Enter Id' value={id} onChange={(e)=>setId(e.target.value)}/>
         </label>
         </div>
      
      <div className=" flex  justify-center mt-[45px]  gap-3 form-actions">
        <button type="button"  className="bg-violet-500 text-white py-2 px-4 rounded-lg">Cancel</button>
        <button type="submit" className="bg-violet-500 text-white py-2 px-4 rounded-lg">Add</button>
      </div>
    </form>
  );
};
 
export default EmployeeForm;