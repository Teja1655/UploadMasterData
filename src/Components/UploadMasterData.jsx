import React, { useState, useEffect, useRef } from "react";
import moment from "moment";
import * as XLSX from 'xlsx';
import SuccessPopup from "./SuccessPopup"; 
    
function UploadMasterData({ onSuccessUpload }) {
  const [file, setFile] = useState(null);
const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fileInfo, setFileInfo] = useState(null);
//   const[uploadVisible,setUploadVisible]=useState(false);
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const fileInputRef = useRef(null);
 
//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files?.[0];
//     if (selectedFile && (selectedFile.type === "text/csv" || selectedFile.type === "text/plain"))
    
//      {
//       setFile(selectedFile);
//       setError(null);
//       console.log("file selected")
//       setFileInfo({
//           name: selectedFile.name,
//           moment: moment().format("Do MMM YY")
//       });
//     }
//      else 
//        {
//          setError("Please select a valid CSV or TXT file.");
//        }
//   };
 
const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      const allowedFileTypes = ["text/csv", "text/plain", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"];
      if (allowedFileTypes.includes(selectedFile.type)) {
        setFile(selectedFile);
        setError(null);
        console.log("File selected");
        setFileInfo({
          name: selectedFile.name, 
          moment: moment().format("Do MMM YY")
        });
      } 

    //    // Reads data from Excel file if it's an XLSX file
    //   if (selectedFile.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
    //     readExcelFile(selectedFile);
    //   }
      
      else {
        setError("Please select a valid CSV, TXT, or XLSX file.");
      }
    }
  };

  const readExcelFile = (file) => {
  const reader = new FileReader();

  reader.onload = (e) => {
    try {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      console.log("Data from Excel:", jsonData);
      onSuccessUpload(jsonData); 
    } catch (error) {
      console.error("Error reading Excel file:", error);
    }
  };

  reader.onerror = (e) => {
    console.error("File reading error:", e.target.error);
  };

  reader.readAsArrayBuffer(file);
};


const handleFileDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("File dropped"); 
    const droppedFile = e.dataTransfer.files[0];
    console.log("Dropped file:", droppedFile);
    if (droppedFile && (droppedFile.type === "text/csv" || droppedFile.type === "text/plain")) {
      setFile(droppedFile);
      setError(null);
      setFileInfo({
        name: droppedFile.name,
        moment: moment().format("Do MMM YY"),
      });
    } else {
      setError("Please drop a valid CSV or TXT file.");
    }
  };
  

  const FileInfo = ({ name, moment }) => {
    return (
      <div className="flex items-start flex-col justify-between  gap-[10px] rounded-lg">
        <div className="flex  h-5">
        <p className="font-normal text-sm leading-5">Last Uploaded file</p>
        </div>
        <div className="flex bg-gray-200 w-[297px] h-[62px] rounded justify-between">
        <div className="flex flex-row  gap-2 ">
          <div className="flex">
          {name && <img src="./src/assets/Csv Icon.svg" alt="File Icon" className="flex" />}
          </div>
          <div className="flex flex-col justify-center">
          <p className="text-gray-700 font-medium">{name}</p>
          <p className="text-gray-500 text-sm">{moment}</p>
          </div>
          </div>
        
        {name && (
          <button onClick={handleDeleteClick}>
            <img src="./src/assets/Close Icon.svg" alt="Delete Icon" className="text-red-500" />
          </button>
          
        )}
        </div>
      </div>
    );
  };

 
  const handleDeleteClick = () => {
    setFile(null);
    setError(null);
    setFileInfo(null);
    fileInputRef.current.value = null;
  };
 
  const handleCancelClick = () => {
    setFile(null);
    setError(null);
    setFileInfo(null);
    fileInputRef.current.value = null;
  };
 
//   const handleUploadClick = async () => {
//     if(!file){
//         setError("Please select a file");
//         return;
//     }

//     setLoading(true);
//     const formData = new FormData();
//     formData.append("file", file);
//     try {
//        setSuccessModalVisible(true)
//     //    setUploadVisible(false);
//     //   setIsVisible(false);
//     } catch (error) {
      
//     } finally {
//       setLoading(false);
//     }
//   };


const handleUploadClick = async () => {
    if (!file) {
        
        setError("Please select a file");
        return;
    }
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    try {

        const reader = new FileReader();
        reader.onload = function(event) {
          console.log("File data:", event.target.result);
        };
        reader.readAsText(file);
        
        setTimeout(() => {
            onSuccessUpload(); 
            setLoading(false);
        }, 1000); 
    } catch (error) {
        
        console.error("Upload failed:", error);
        setLoading(false);
    }
};
  const handleSuccessModalButtonClick = () => {
    setSuccessModalVisible(false);
  };
 
  
  useEffect(() => {
    const dropZone = document.getElementById("drop-zone");
    dropZone.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    dropZone.addEventListener("drop", handleFileDrop);
    return () => {
      dropZone.removeEventListener("dragover", (e) => {
        e.preventDefault();
      });
      dropZone.removeEventListener("drop", handleFileDrop);
    };
  }, []);
 
  return (
    
    
    <div className="flex justify-center items-center h-screen w-screen bg-black">
      <div className="flex flex-col bg-white border-gray-300 rounded-lg p-8 ">
        <div className="flex flex-col gap-10 ">
          <div className=" w-[436px] h-[48px]">
            <h1 className="flex justify-center text-[#7700C7] font-semibold text-lg">Upload Master Data</h1>
            <p className="flex justify-center opacity-50 text-sm ">Download your template here</p>
          </div>
          

<div
  id="drop-zone"
  className="flex flex-col justify-center gap-2 items-center h-[150px] w-[436px] bg-[#F4EDFF] border-dashed border border-[#A329CD] rounded-lg p-4 cursor-pointer outline-none focus:ring-4 focus:ring-purple-500 focus:border-purple-500"
  onClick={() => fileInputRef.current.click()} 
>
            <img src="./src/assets/Upload icon.svg" alt="Drop Zone Image" className="h-[42px] w-[48px]" />
            <p className="text-gray-700 font-medium text-lg">Drag and drop files or Browse</p>
            <p className="flex justify-center opacity-50 font-medium w-[416px] text-sm">The employee upload file must be a file of: csv, txt</p>
            <input type="file" ref={fileInputRef} className="hidden" onChange={handleFileChange} />
          </div>
          {fileInfo && <FileInfo name={fileInfo.name} moment={fileInfo.moment} />}
        </div>
        {error && <p className="text-red-500 text-sm ">{error}</p>}
        <div className="flex justify-center gap-4 mt-8">
          <button className="bg-[#F4EDFF] text-[#7700C7] py-2 px-4 rounded-lg w-[107px] h-[42px]" onClick={handleCancelClick}>Cancel</button>
          <button className="bg-[#7700C7] text-white py-2 px-4 rounded-lg w-[107px] h-[42px]" onClick={handleUploadClick} disabled={!file || loading}>{loading ? "Uploading..." : "Upload"}</button>
        </div>
      </div> 
    
      {/* {successModalVisible && (
        <SuccessPopup
          iconSrc="./src/assets/successful Icon.svg"
          title="Uploaded!"
          message="Employee data has been uploaded successfully"
          buttonText="Ok"
          onButtonClick={handleSuccessModalButtonClick}
        />
      )} */}
    </div>
  );
}
 
export default UploadMasterData;