import React, { useState } from 'react';
import './App.css';
import './Style/Button.css';
import Button from './Components/Button';
import Form from './Components/Form';
import './Style/Form.css';
import { Link } from 'react-router-dom';

function App(props) {
const [loading, setLoading] = useState(false);
const [showResultButton, setShowResultButton] = useState(false);
const [file, setFile] = useState(null);

  const handleFileChange = (file) => {
    setFile(file);
  };

  const fetchData = () => {
    setLoading(true);

    const formData = new FormData();
    formData.append('file', file);
    fetch("http://localhost:3949/begin_analysis", {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        localStorage.setItem('folder_name', response.folder_name);
        setLoading(false);
        setShowResultButton(true);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  };

  return (
  <>
    <div className='Background-color'>
      
      <Form onFileChange={handleFileChange} />
      
      <Button className="Sendbtn" name={"Send"} onClick={fetchData} />

      {loading && <div className="loading-screen">Analysing...</div>}

      {showResultButton && (
        <Link to="/Main">
          <Button className="ViewResult" name={"View Result"}></Button>
        </Link>

      )}
    </div>
    
  </>
  );
}

export default App;
