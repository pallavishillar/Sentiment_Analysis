import React, { useState } from 'react';
import './App.css';
import './Style/Button.css';
import Button from './Components/Button';
import Form from './Components/Form';
import './Style/Button.css';
import './Style/Form.css';
//import {Link} from 'react-router-dom';


function App() {
  const [loading, setLoading] = useState(false);
  const [showResultButton, setShowResultButton] = useState(false);
  const fetchData = () => {
    setLoading(true); 

    fetch("http://127.0.0.1:8016/buffer", {
      method: 'POST',
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setLoading(false);

        setShowResultButton(true);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  };

  return (
    
    <div className='Background-color'>
      <Form />
      <Button className="Sendbtn" name={"Send"} onClick={fetchData} />

      {loading && <div className="loading-screen">Analysing...</div>}
      
      {showResultButton && <Button className="ViewResult" name={ "View Result"}></Button>}
      
    </div>
  );
}

export default App;
