import React, { useRef } from 'react';

const InputRef = () => {
  const inputRef = useRef();

  const handleButtonClick = () => {
    console.log('Input value:', inputRef.current.value);
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleButtonClick}>Log Input Value</button>
    </div>
  );
};

export default InputRef;
