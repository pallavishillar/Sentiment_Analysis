import React, { useState } from 'react';
import Card2 from './Card2';

const Card3 = ({ boxType, boxValue, dropdownOptions, onDropdownChange, responseData }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleDropdownChange = (event) => {
    const newValue = event.target.value;
    setSelectedOption(newValue);
    onDropdownChange(newValue); 
  };

  return (
    <div className="card3">
      <div className="card3-content">
        <h3>{boxType}</h3>
        <p>{boxValue}</p>
        <div className="dropdown-container">
          <select className="custom-dropdown" value={selectedOption} onChange={handleDropdownChange}>
            <option value="" disabled>Select a file</option>
            {dropdownOptions.map((option, index) => (
              <option style={{ color: "white", fontSize: "20px" }} key={index} value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>

      {responseData && (
        <div className="card2-wrapper">
          <Card2 type="chart" data={responseData} className="grey-card" />
        </div>
      )}
    </div>
  );
};

export default Card3;
