import React, { useRef, useState } from 'react';

const DisplayYear = ({ year }) => {
  const containerStyle = {
    position: 'fixed',   
    bottom: '10px',      
    left: '10px',        
    color: 'white',      
    padding: '20px',     
    background: 'black', 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const yearContainerStyle = {
    border: '1px solid #ccc',
    padding: '10px',
    display: 'inline-block',
    overflow: 'hidden',
    height: '150px',  
  };

  const yearStyle = {
    color: 'white',      
    fontSize: '18px',    // Adjust the font size for the year
    marginBottom: '10px', // Add some spacing between the year and the adjacent years
  };

  const blurredYearStyle = {
    ...yearStyle,        // Inherit the yearStyle properties
    filter: 'blur(2px)', // Apply a blur filter to the adjacent years
  };

  const yearContainerRef = useRef(null);

  const [currentYear, setCurrentYear] = useState(year);

  const handleWheel = (e) => {
    // Calculate the scroll direction (up or down)
    const scrollDirection = e.deltaY > 0 ? 1 : -1;

    // Adjust the current year based on the scroll direction
    setCurrentYear((prevYear) => prevYear + scrollDirection);

    // Prevent the default scroll behavior
    e.preventDefault();
  };

  return (
    <div style={containerStyle}>
      <div
        style={yearContainerStyle}
        onWheel={handleWheel} // Add the wheel event listener
        ref={yearContainerRef}
      >
        <p style={blurredYearStyle}>{currentYear - 1}</p>
        <p style={yearStyle}>{currentYear}</p>
        <p style={blurredYearStyle}>{currentYear + 1}</p>
      </div>
    </div>
  );
};

export default DisplayYear;
