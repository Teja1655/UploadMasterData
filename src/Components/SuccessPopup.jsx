import React from 'react';
 
const SuccessPopup = ({ iconSrc, title, message, buttonText, onButtonClick }) => {
  const handleButtonClick = () => {
    onButtonClick();
  };
 
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-black">
      <div className=" w-[380px] h-[326px] flex flex-col gap-10 bg-white p-6 rounded-2xl shadow-md">
        <div className="flex justify-center items-center ">
          <img src={iconSrc} alt="Notification Icon" className="w-[100px] h-[100px]" />
        </div>
        <div className="flex justify-center items-center flex-col gap-5">
          <h2 className="w-[109px] h-[34px] leading-[33.6px] font-semibold size-6 text-[# #0E0D0E] text-center ">{title}</h2>
          <p className="w-[332px] h-[22px] font-medium leading-[22.4px] text-gray-600 opacity-100 text-center">{message}</p>
          <div>
            <button className="w-[107px] h-[42px] bg-[#7700c7] text-white p-2 rounded-lg px-[20px] py-[10px] " onClick={handleButtonClick}>
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default SuccessPopup;