import React from 'react';
 
const EmployeeForm = ({ onSubmit }) => {
  return (
    <form className="employee-form" onSubmit={onSubmit}>
     <div className='flex justify-evenly'>
     <label>
        Employee Name*
        <input type="text" placeholder="Enter name" />
      </label>
      <label>
        Employee Type*
          <input type="type" placeholder=''/>
         </label>
          <label>
        Employee ID*
         <input type='text' placeholder='Enter Id'/>
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