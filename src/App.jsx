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
        <UploadMasterData onSuccessUpload={handleDataUpload} setShowUpload={setShowUpload} />
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


