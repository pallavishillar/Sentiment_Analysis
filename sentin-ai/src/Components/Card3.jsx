import React, { useState } from 'react';

const Card3 = ({ dropdownOptions, folderName }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [localResponseData, setLocalResponseData] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState('');

  const handleDropdownChange = async (event) => {
    const newOption = event.target.value;
    setSelectedOption(newOption);
    setSelectedFileName(newOption);

    try {
      const response = await fetch('http://127.0.0.1:8016/get_analysis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ file: newOption }),
      });

      const data = await response.json();
      if (data.status) {
        const fileData = data.data.data.find(file => Object.keys(file)[0] === newOption);
        setLocalResponseData(fileData ? fileData[newOption] : null);
      } else {
        console.error('Failed to fetch file data:', data.message);
      }
    } catch (error) {
      console.error('Error fetching file data:', error);
    }
  };

  return (
    <div className="card3">
      <div className="card3-content" style={{ color: "black" }}>
        <div className="dropdown-container">
          <select className="custom-dropdown" value={selectedOption} onChange={handleDropdownChange}>
            <option value="" disabled>Select a file</option>
            {dropdownOptions.map((option, index) => (
              <option style={{ color: "black", fontSize: "20px" }} key={index} value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>

      <div id='file-info2'>
        {selectedFileName && <h4>Selected File: {selectedFileName}</h4>}
      </div>

      <div id='file-info'>
        {folderName && <h4>Folder Name: {folderName}</h4>} 
      </div>

      <div className="data-display">
        <h4>Overall:</h4>
        <pre>{localResponseData}</pre>
      </div>
    </div>
  );
};

export default Card3;
