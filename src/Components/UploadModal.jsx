import React, { useState, useRef } from "react";
 
const UploadModal = ({ onUpload }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);
 
  const handleFileChange = (e) => {
    // Handle file change logic...

    const selectedFile = e.target.files?.[0];
    if (selectedFile && (selectedFile.type === "text/csv" || selectedFile.type === "text/plain")) {
      setFile(selectedFile);
      setError(null);
      setFileInfo({
        name: selectedFile.name,
        // date: new Date().toLocaleDateString(),
        moment:moment().format("Do MMM YY")
      });
    } else {
      setError("Please select a valid CSV or TXT file.");
    }
  };
 
  const handleFileDrop = (e) => {
    // Handle file drop logic...


        e.preventDefault();
    e.stopPropagation();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type === "text/csv") {
      setFile(droppedFile);
      setError(null);
      setFileInfo({
        name: droppedFile.name,
        // date: new Date().toLocaleDateString()
        moment:moment().format("Do MMM YY"),
      });
    } else {
      setError("Please drop a valid CSV file.");
    }
  };
 
  const handleDeleteClick = () => {
    // Handle delete file logic...

    setFile(null);
    setError(null);
    setFileInfo(null);
    fileInputRef.current.value = null;
  };
 
  const handleCancelClick = () => {
    // Handle cancel click logic...

        setFile(null);
    setError(null);
    setFileInfo(null);
    fileInputRef.current.value = null;
  };
 
  const handleUploadClick = async () => {
    // Handle upload click logic...

        setLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    try {
      // Perform upload operation
    } catch (error) {
      // Handle error
    } finally {
      setLoading(false);
    }
  };
 
  return (
    <div className="modal">
      {/* Modal content for file upload */}
    </div>
  );
};
 
export default UploadModal;