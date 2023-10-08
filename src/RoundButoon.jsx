import React, { useState } from 'react';

const RoundButton = () => {
  const [isYellow, setIsYellow] = useState(false);

  const handleClick = () => {
    setIsYellow(!isYellow);
  };

  const containerStyle = {
    position: 'relative',
    width: '100px',    // Adjust the width of the container if needed
    height: '100px',   // Adjust the height of the container if needed
  };

  const buttonStyle = {
    position: 'absolute',
    top: '20px',           // Position at the top
    left: '20px',          // Position at the left
    width: '40px',      // Adjust the width of the button
    height: '40px',     // Adjust the height of the button
    borderRadius: '50%',
    border: 'none',
    backgroundColor: isYellow ? 'yellow' : 'grey',
    boxShadow: isYellow ? '0 0 10px yellow' : '0 0 10px grey',
    cursor: 'pointer',
    outline: 'none',
  };

  return (
    <div style={containerStyle}>
      <button style={buttonStyle} onClick={handleClick}></button>
    </div>
  );
};

export default RoundButton;
