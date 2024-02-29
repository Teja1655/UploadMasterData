// import React, { useState } from 'react';
// import Modal from './Modal';

// function App() {
//   const [modalOpen, setModalOpen] = useState(false);

//   const handleOpenModal = () => {
//     setModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setModalOpen(false);
//   };

//   return (
//     <div>
//       <button onClick={handleOpenModal}>Open Modal</button>
//       {modalOpen && <Modal onClose={handleCloseModal} />}
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import Modal from './Modal';

// function App() {
//   const [modalOpen, setModalOpen] = useState(false);

//   const handleOpenModal = () => {
//     setModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setModalOpen(false);
//   };

//   const handleUpload = () => {
//     // Handle upload logic here
//     console.log('Upload button clicked');
//     setModalOpen(true); // Display the modal when upload button is clicked
//   };

//   return (
//     <div>
//       <button onClick={handleUpload}>Upload</button>
//       {modalOpen && <Modal onClose={handleCloseModal} />}
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import './App.css';

// const Modal = ({ onClose }) => {
//   const [files, setFiles] = useState([]);

//   const handleDrop = (e) => {
//     e.preventDefault();
//     const filesArray = [...e.dataTransfer.files];
//     setFiles(filesArray);
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   const handleCancel = () => {
//     setFiles([]);
//     onClose();
//   };

//   const handleUpload = () => {
//     // Handle upload logic here
//     console.log('Uploading files:', files);
//     onClose();
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="modal">
//         <div className="modal-header">
//           <h2>Drag and Drop Files</h2>
//           <button className="close-btn" onClick={handleCancel}>×</button>
//         </div>
//         <div className="modal-body" onDrop={handleDrop} onDragOver={handleDragOver}>
//           {files.length > 0 ? (
//             <ul>
//               {files.map((file, index) => (
//                 <li key={index}>{file.name}</li>
//               ))}
//             </ul>
//           ) : (
//             <p>Drag files here</p>
//           )}
//         </div>
//         <div className="modal-footer">
//           <button onClick={handleCancel}>Cancel</button>
//           <button onClick={handleUpload}>Upload</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;

// import React, { useState } from 'react';
// import './App.css';

// const Modal = ({ onClose }) => {
//   const [files, setFiles] = useState([]);

//   const handleDrop = (e) => {
//     e.preventDefault();
//     const filesArray = [...e.dataTransfer.files];
//     setFiles(filesArray);
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   const handleFileInputChange = (e) => {
//     const filesArray = [...e.target.files];
//     setFiles(filesArray);
//   };

//   const handleCancel = () => {
//     setFiles([]);
//     onClose();
//   };

//   const handleUpload = () => {
//     // Handles upload logic 
//     console.log('Uploading files:', files);
//     onClose();
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="modal">
//         <div className="modal-header">
//           <h2>Upload Files</h2>
//           {/* <button className="close-btn" onClick={handleCancel}>Cancel×</button> */}
//         </div>
//         <div className="modal-body" onDrop={handleDrop} onDragOver={handleDragOver}>
//           <div className="file-upload-container">
//             <label htmlFor="file-upload" className="file-upload-label">
//               <input type="file" id="file-upload" multiple onChange={handleFileInputChange} />
//               Browse
//             </label>
//           </div>
//           {files.length > 0 ? (
//             <ul>
//               {files.map((file, index) => (
//                 <li key={index}>{file.name}</li>
//               ))}
//             </ul>
//           ) : (
//             <p>Drag files here or use the browse button</p>
//           )}
//         </div>
//         <div className="modal-footer">
//           <button onClick={handleCancel}>Cancel</button>
//           <button  onClick={handleUpload}>Upload</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;

