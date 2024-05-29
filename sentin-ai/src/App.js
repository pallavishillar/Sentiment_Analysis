import React, { useState } from 'react';
import './App.css';
import './Style/Button.css';
import Button from './Components/Button';
import Form from './Components/Form';
import './Style/Button.css';
import './Style/Form.css';

function App() {
  
  const [loading, setLoading] = useState(false);
  
  const fetchData = () => {

    var fileInput = document.getElementById('file-upload');
    var file = fileInput.files[0];
    if (file) {
      var formData = new FormData();
      formData.append('file', file);

    setLoading(true); 

    fetch("http://127.0.0.1:8016/buffer", {
      method: 'POST',
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setLoading(false);
      })
      
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false); 
      });
  };
}

  return (
    <div className='Background-color'>
      <Form />
      <Button className="Sendbtn" name={"Send"} onClick={fetchData} />

      {loading && <div className="loading-screen">Analysing...</div>}
      
      <Button className="ViewResult" name={"View Result"} />
    </div>
  );
}

export default App;
