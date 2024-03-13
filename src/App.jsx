import React, { useState, useEffect } from "react";
import UploadButton from "./Components/UploadButton";
import UploadMasterData from "./Components/UploadMasterData";
import SuccessPopup from "./Components/SuccessPopup";
import EmployeeForm from "./Components/EmployeeForm";
import EmployeeDataTable from "./Components/Employee DataTable";

const App = () => {
  const [showUpload, setShowUpload] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [uploadedData, setUploadedData] = useState(null);
  const [employeeData, setEmployeeData] = useState([]);

  // useEffect(() => {
  //   const storedData = JSON.parse(localStorage.getItem("employeeData"));
  //   if (storedData) {
  //     setEmployeeData(storedData);
  //   }
  // }, []);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch("https://manoj-bakery.onrender.com/employee");
        if (!response.ok) {
          throw new Error('failed to fetch data')
        }
        const data = await response.json();
        setEmployeeData(data);
      } catch (error) {
        console.error("failed fetching data".error);
      }
    };
    fetchdata();
  }, []);

  const handleUploadButtonClick = () => {
    setShowUpload(true);
  };

  const handleSuccessModalButtonClick = () => {
    setShowSuccessPopup(false);
    setShowUpload(false);
  };

  const handleDataUpload = (data) => {
    if (Array.isArray(data)) {
      setUploadedData(data);
      setShowSuccessPopup(true);
      const mergedData = [...employeeData, ...data];
      setEmployeeData(mergedData);
      localStorage.setItem("employeeData", JSON.stringify(mergedData));
    } else {
      console.log("Invalid Data Format: Data is not an array");
    }
  };

  const handleEmployeeFormSubmit = (employee) => {
    const newData = [...employeeData, employee];
    setEmployeeData(newData);
    localStorage.setItem("employeeData", JSON.stringify(newData));
  };

  return (
    <div className="App">
      {!showUpload && !showSuccessPopup && (
        <UploadButton onClick={handleUploadButtonClick} />
      )}
      {showUpload && !showSuccessPopup && (
        <UploadMasterData
          onSuccessUpload={handleDataUpload}
          setShowUpload={setShowUpload}
        />
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
      <EmployeeForm onSubmit={handleEmployeeFormSubmit} />
      <EmployeeDataTable employees={[...employeeData || uploadedData]} />
    </div>
  );
};

export default App;