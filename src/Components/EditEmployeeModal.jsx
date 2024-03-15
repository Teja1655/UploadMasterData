import React, { useState, useEffect } from 'react';

const EditEmployeeModal = ({ onSave, onCancel, employee }) => {
    const [employeeName, setEmployeeName] = useState('');
    const [location, setLocation] = useState('');
    const [employeeId, setEmployeeId] = useState('');
    const[error,setError]=useState({});

    useEffect(() => {
        if (employee) {
            setEmployeeName(employee.employeeName || '');
            setLocation(employee.location || '');
            setEmployeeId(employee.employeeId || '');
        }
    }, [employee]); 

    const validateForm=()=>{
        const error={};
        let flag = false
        if(!employeeName.trim()){
            flag = true
            error.employeeName="Employee Name is required"
        }
        if(!location.trim()){
            flag = true
            error.location="Location is required"
        }
        if(!employeeId.trim()){
            flag = true
            error.employeeId="Employee Id is required"
        }
      setError(error);
      return flag
    }

    const handleSave = () => {
        if (validateForm()) {
            return;
        }
        onSave({   employeeName,location,employeeId})
      
        setEmployeeName('');
        setLocation('');
        setEmployeeId('');
    }
    return (

        <div className="fixed z-10 inset-0 bg-black overflow-y-auto flex items-center justify-center">
            {/* <div className="modal-backdrop fixed inset-0 bg-black opacity-50"></div> */}
            
            <div className="modal mx-auto w-[45%] bg-white rounded-lg overflow-hidden shadow-xl">
                <div className="modal-header flex justify-center px-6 py-4 bg-gray-200">
                    <h2 className="text-lg font-semibold">Edit Employee</h2>
                </div>
                <div className="modal-body px-6 py-4">
                    <label className="block mb-2">
                        Employee Name:
                        <input type="text" disabled={false} value={employeeName} onChange={(e) => setEmployeeName(e.target.value)} className="form-input mt-1 block w-full rounded-md border-black border-[1px] " />
                        {error.employeeName && (<p className='text-red-500'>{error.employeeName}</p>)}
                    </label>
                    <label className="block mb-2">
                        Location:
                        <input type="text" disabled={false} value={location} onChange={(e) => setLocation(e.target.value)} className="form-input mt-1 block w-full rounded-md border-black border-[1px]"/>
                        {error.location && (<p className='text-red-500'>{error.location}</p>)}
                    </label>
                    <label className="block mb-2">
                        Employee ID:
                        <input type="text" disabled={false} value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} className="form-input mt-1 block w-full rounded-md border-black border-[1px]" />
                        {error.employeeId && (<p className='text-red-500'>{error.employeeId}</p>)}
                    </label>
                </div>
                <div className=" modal-footer px-6 py-4 bg-gray-100 flex justify-center">
                    <button onClick={handleSave} className="px-4 py-2 bg-blue-500 text-white rounded-lg mr-2">Save</button>
                    <button onClick={onCancel} className="px-4 py-2 bg-gray-400 text-white rounded-lg">Cancel</button>
                </div>
            </div>
  
        </div>

    );
};

export default EditEmployeeModal;
