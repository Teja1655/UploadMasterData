import React from "react";
import EmployeeForm from "./EmployeeForm";
import EmployeeDataTable from "./Employee DataTable";



 const UploadButton=({onClick})=>{
    return(
      <div className="">
      <div className="flex  flex-row-reverse">
         <button className="bg-violet-500 text-white py-2 px-4 rounded-lg" onClick={onClick}>Upload</button>
     </div>
     <div>
      <EmployeeForm/>
     </div>
     <div>
      <EmployeeDataTable/>
     </div>
     </div>
    )
 }
 export default UploadButton;