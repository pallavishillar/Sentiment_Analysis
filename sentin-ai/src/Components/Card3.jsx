import React, { useState } from 'react';

const Card3 = ({ dropdownOptions, folderName, overallData }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [localResponseData, setLocalResponseData] = useState();
  const [selectedFileName, setSelectedFileName] = useState('');
  const [fileData, setFileData] = useState('');
  console.log('dropdownOptions : ', dropdownOptions);

  const handleDropdownChange = (event) => {

    const newOption = event.target.value;
    setSelectedOption(newOption);
    setSelectedFileName(newOption);

    console.log('Selected Option:', newOption);
    console.log('selectedFile Name : ',  selectedFileName);
    console.log('overallData : ', overallData);
    console.log('selection : ', overallData[newOption]);

    try {
        setFileData(overallData[newOption]);
        setLocalResponseData(fileData); 
        } 
    catch (error) {
          console.error('Error fetching file data:', error);
          }
      };
          
  console.log('Selected fileData : ', fileData);
  return (
    <div className="card3">
      <div className="card3-content" >
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
        {selectedFileName && <h4>Selected File : {selectedFileName}</h4>}
      </div>

      <div id='file-info'>
        {folderName && <h4>Folder Name : {folderName}</h4>}
      </div>

      <div className="data-display">
        <h4>Detailed Analysis of Selected File : </h4>
        <pre wrap="hard" style={{width: "700px", marginLeft: '50px'}}>{fileData}</pre>
      </div>
    </div>

  );
};

export default Card3;
