import React from "react";

const UploadButton=({onClick})=>{
    return(
      
      <div className="flex  flex-row-reverse">
         <button className="bg-violet-500 text-white py-2 px-4 rounded-lg" onClick={onClick}>Upload</button>
     </div>
     
    )
 }
 export default UploadButton;