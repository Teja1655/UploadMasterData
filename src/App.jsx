// import React, { useState, useEffect, useRef } from "react";
// import moment from"moment";

// function UploadMasterData() {
//   const [file, setFile] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const [fileInfo, setFileInfo] = useState(null);
//   const fileInputRef = useRef(null);

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files?.[0];
//     if (selectedFile && (selectedFile.type === "text/csv" || selectedFile.type === "text/plain")) {
//       setFile(selectedFile);
//       setError(null);
//       setFileInfo({
//         name: selectedFile.name,
//         // date: new Date().toLocaleDateString(),
//         moment:moment().format("Do MMM YY")
//       });
//     } else {
//       setError("Please select a valid CSV or TXT file.");
//     }
//   };

//   const handleFileDrop = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     const droppedFile = e.dataTransfer.files[0];
//     if (droppedFile && droppedFile.type === "text/csv") {
//       setFile(droppedFile);
//       setError(null);
//       setFileInfo({
//         name: droppedFile.name,
//         // date: new Date().toLocaleDateString()
//         moment:moment().format("Do MMM YY"),
//       });
//     } else {
//       setError("Please drop a valid CSV file.");
//     }
//   };

//   const handleDeleteClick = () => {
//     setFile(null);
//     setError(null);
//     setFileInfo(null);
//     fileInputRef.current.value = null;
//   };

//   const FileInfo = ({ name, moment }) => {
//     return (
//       <div className="flex items-start flex-col justify-between  gap-[10px] rounded-lg">
//         <div className="flex  h-5">
//         <p className="font-normal text-sm leading-5">Last Uploaded file</p>
//         </div>
//         <div className="flex bg-gray-200 w-[297px] h-[62px] rounded justify-between">
//         <div className="flex flex-row  gap-2 ">
//           <div className="flex">
//           {name && <img src="./src/assets/Csv Icon.svg" alt="File Icon" className="flex" />}
//           </div>
//           <div className="flex flex-col justify-center">
//           <p className="text-gray-700 font-medium">{name}</p>
//           <p className="text-gray-500 text-sm">{moment}</p>
//           </div>
//           </div>
        
//         {name && (
//           <button onClick={handleDeleteClick}>
//             <img src="./src/assets/Close Icon.svg" alt="Delete Icon" className="text-red-500" />
//           </button>
          
//         )}
//         </div>
//       </div>
//     );
//   };

//   const handleCancelClick = () => {
//     setFile(null);
//     setError(null);
//     setFileInfo(null);
//     fileInputRef.current.value = null;
//   };

//   const handleUploadClick = async () => {
//     setLoading(true);
//     const formData = new FormData();
//     formData.append("file", file);
//     try {
//       // Perform upload operation
//     } catch (error) {
//       // Handle error
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     const dropZone = document.getElementById("drop-zone");
//     dropZone.addEventListener("dragover", (e) => {
//       e.preventDefault();
//     });
//     dropZone.addEventListener("drop", handleFileDrop);
//     return () => {
//       dropZone.removeEventListener("dragover", (e) => {
//         e.preventDefault();
//       });
//       dropZone.removeEventListener("drop", handleFileDrop);
//     };
//   }, []);

//   return (
//     <div className="flex justify-center items-center h-screen w-screen bg-black">
//       <div className="flex flex-col bg-white border-gray-300 rounded-lg p-8 ">
//         <div className="flex flex-col gap-10 ">
//           <div className=" w-[436px] h-[48px]">
//             <h1 className="flex justify-center text-[#7700C7] font-semibold text-lg">Upload Master Data</h1>
//             <p className="flex justify-center opacity-50 text-sm ">Download your template here</p>
//           </div>
//           <div id="drop-zone" className="flex flex-col justify-center gap-2 items-center h-[150px] w-[436px] bg-[#F4EDFF] border-dashed border border-[#A329CD] rounded-lg p-4 cursor-pointer outline-none focus:ring-4 focus:ring-purple-500 focus:border-purple-500" onClick={() => fileInputRef.current.click()}>
//             <img src="./src/assets/Upload icon.svg" alt="Drop Zone Image" className="h-[42px] w-[48px]" />
//             <p className="text-gray-700 font-medium text-lg">Drag and drop files or Browse</p>
//             <p className="flex justify-center opacity-50 font-medium w-[416px] text-sm">The employee upload file must be a file of: csv, txt</p>
//             <input type="file" ref={fileInputRef} className="hidden" onChange={handleFileChange} />
//           </div>
//           {fileInfo && <FileInfo name={fileInfo.name} moment={fileInfo.moment} />}
//         </div>
//         {error && <p className="text-red-500 text-sm ">{error}</p>}
//         <div className="flex justify-center gap-4 mt-8">
//           <button className="bg-[#F4EDFF] text-[#7700C7] py-2 px-4 rounded-lg w-[107px] h-[42px]" onClick={handleCancelClick}>Cancel</button>
//           <button className="bg-[#7700C7] text-white py-2 px-4 rounded-lg w-[107px]  h-[42px]" onClick={handleUploadClick} disabled={!file || loading}>{loading ? "Uploading..." : "Upload"}</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UploadMasterData;





// Success Popup

// import React from 'react';

// const SuccessPopup = ({ iconSrc, title, message, buttonText, onButtonClick }) => {
//   const handleButtonClick = () => {
//     onButtonClick();
//   };

//   return (
//     <div className="flex justify-center items-center h-screen w-screen bg-black">
//       <div className=" w-[380px] h-[326px]  flex flex-col gap-10 bg-white p-6 rounded-2xl shadow-md">
//         <div className="flex justify-center items-center ">
//           <img src={iconSrc} alt="Notification Icon" className="w-[100px] h-[100px]" />
//         </div>
//         <div className="flex justify-center items-center  flex-col gap-5">
//         <h2 className="w-[109px]  h-[34px]  leading-[33.6px] font-semibold  size-6 text-[#
// #0E0D0E] text-center ">{title}</h2>
//         <p className="w-[332px] h-[22px] font-medium leading-[22.4px] text-gray-600  opacity-100 text-center">{message}</p>
//         <div>
//         <button className="w-[107px] h-[42px] bg-[#7700c7] text-white p-2 rounded-lg px-[20px] py-[10px] " onClick={handleButtonClick}>
//           {buttonText}
//         </button>
//        </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default function App() {
//   const handleButtonClick = () => {
//     console.log("Button is clicked");
//   };

//   return (
//     <SuccessPopup
//       iconSrc="./src/assets/successful Icon.svg"
//       title='Uploaded!'
//       message='Employee data has been uploaded successfully'
//       buttonText='Ok'
//       display={false}
//       onButtonClick={handleButtonClick}
//     />
//   );
// }

// import React,{useState} from "react";
// import UploadButton from "./Components/UploadButton";
// import UploadMasterData from "./Components/UploadMasterData";



// const App = () => {
//   const[showUpload,setShowUpload]=useState(false);
 

//   const handleUploadButtonClick =()=>{
//     setShowUpload(true);
    
//   }
//   return (
//     <div className="App">
//       {!showUpload && <UploadButton onClick={handleUploadButtonClick}/>}
//       {showUpload && <UploadMasterData/>}
//     </div>
//   )
// }

// export default App


// import React, { useState } from "react";
// import UploadButton from "./Components/UploadButton";
// import UploadMasterData from "./Components/UploadMasterData";
// import SuccessPopup from "./Components/SuccessPopup";
// import DataTable from "./Components/DataTable";

// const App = () => {
//   const [showUpload, setShowUpload] = useState(false);
//   const [showSuccessPopup, setShowSuccessPopup] = useState(false);
//   const [uploadedData, setUploadedData] = useState(null);

//   const handleUploadButtonClick = () => {
//     setShowUpload(true);
//   };

//   const handleSuccessModalButtonClick = () => {
//     setShowSuccessPopup(false);
//     setShowUpload(false);
//   };
 
//   const handleDataUpload = (data) => {
//     setUploadedData(data);
//   };

//   return (
//     <div className="App">
//       {!showUpload && !showSuccessPopup && <UploadButton onClick={handleUploadButtonClick} />}
//       {showUpload && !showSuccessPopup && (
//         <UploadMasterData onSuccessUpload={() => setShowSuccessPopup(true)} />
//       )}
//       {showSuccessPopup && (
//         <SuccessPopup
//           iconSrc="./src/assets/successful Icon.svg"
//           title="Uploaded!"
//           message="Employee data has been uploaded successfully"
//           buttonText="Ok"
//           onButtonClick={handleSuccessModalButtonClick}
//         />
//       )}
//     </div>
//   );
// };

// export default App;



import React, { useState } from "react";
import UploadButton from "./Components/UploadButton";
import UploadMasterData from "./Components/UploadMasterData";
import SuccessPopup from "./Components/SuccessPopup";
import DataTable from "./Components/DataTable";

const App = () => {
  const [showUpload, setShowUpload] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [uploadedData, setUploadedData] = useState(null);

  const handleUploadButtonClick = () => {
    setShowUpload(true);
  };

  const handleSuccessModalButtonClick = () => {
    setShowSuccessPopup(false);
    setShowUpload(false);
  };

  const handleDataUpload = (data) => {
    if(Array.isArray(data)){
    setUploadedData(data);
    setShowSuccessPopup(true);
    }else{
      console.log("Invalid Data Format:Data is not an array");
    }
  };
  

  return (
    <div className="App">
      {!showUpload && !showSuccessPopup && <UploadButton onClick={handleUploadButtonClick} />}
      {showUpload && !showSuccessPopup && (
        <UploadMasterData onSuccessUpload={handleDataUpload} />
      )}
      {showSuccessPopup && (
        <SuccessPopup
          iconSrc="./src/assets/successful Icon.svg"
          title="Uploaded!"
          message="Employee data has been uploaded successfully"
          buttonText="Ok"
          onButtonClick={handleSuccessModalButtonClick}
        />
      )}
      {uploadedData && <DataTable data={uploadedData} />} 
    </div>
  );
};

export default App;
