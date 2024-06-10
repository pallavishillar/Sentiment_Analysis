import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import Card2 from './Components/Card2';
import Card3 from './Components/Card3';
import Box from './Components/Box';
import './Style/Navbar.css';
import './Style/Card.css';
import './Style/Card2.css';
import './Style/Card3.css';
import './Main.css';
import './Style/Box.css';
import './Style/SearchBox.css';
import { useLocation } from 'react-router-dom';

const Main = () => {
<<<<<<< HEAD

=======
  // const location = useLocation();
  // const searchParams = new URLSearchParams(location.search);
  // const fileName = searchParams.get('fileName');
// console.log('fileName : ', fileName);
>>>>>>> 8e218a5 (minor changes)
  const [data, setData] = useState({ Positive: 0, Neutral: 0, Negative: 0 });
  const [wordCloudUrl, setWordCloudUrl] = useState('');
  const [fileList, setFileList] = useState([]);
  const [responseFromBackend, setResponseFromBackend] = useState({});
<<<<<<< HEAD
  const [folderName, setFolderName] = useState('');
  
  //setFolderName(localStorage.getItem("folder_name"));

  console.log('folder name : ', folderName);


  const requestBody = {
    folder_name : folderName,
  }


  useEffect(() => {
    const fetchAnalysisData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8016/get_analysis", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody),
        });

        const result = await response.json();
        if (result.status) {
=======
  const [selectedFile, setSelectedFile] = useState('');
  // ___________________
  const requestBody = { folder_name : 'test_data_1'}
  // ___________________
  console.log('request : ', requestBody);
  useEffect(() => {
    fetch("http://localhost:3949/fetch_data", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then(response => response.json())
      .then(response => {
        if (response.status) {
          const result = response.data;
>>>>>>> 8e218a5 (minor changes)
          setData({
            Positive: result.data.positive_counts,
            Neutral: result.data.neutral_counts,
            Negative: result.data.negative_counts,
          });
<<<<<<< HEAD

          setWordCloudUrl(`data:image/jpeg;base64,${result.data.image}`);

          setFileList(result.data.file_list);

          setFolderName(localStorage.getItem("folder_name"));

=======
          setWordCloudUrl(`data:image/jpeg;base64,${result.img_str}`);
          setFileList(result.file_list);
>>>>>>> 8e218a5 (minor changes)
        } else {
          console.error('Failed to fetch analysis results:', result.message);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchAnalysisData();
  }, []);  

  const handleDropdownChange = async (newOption) => {
    try {
      const response = await fetch(`http://127.0.0.1:8016/get_analysis?file=${newOption}`);
      const data = await response.json();
      if (data.status) {
        setResponseFromBackend(data.data);
        return data;
      } else {
        console.error('Failed to fetch file data:', data.message);
        return null;
      }
    } catch (error) {
      console.error('Error fetching file data:', error);
      return null;
    }
  };

  return (
    <div>
      <div className='Background'>
        <Navbar />
        <Card name={"Positive"} card={<Box type={"Positive"} value={data.Positive} />} />
        <Card name={"Neutral"} card={<Box type={"Neutral"} value={data.Neutral} />} />
        <Card name={"Negative"} card={<Box type={"Negative"} value={data.Negative} />} />

        <div className="card2-container">
          <Card2 type="chart" data={data} />
          <Card2 type="wordCloud" wordCloudUrl={wordCloudUrl} />
        </div>

        <Card3
          dropdownOptions={fileList}
          onDropdownChange={handleDropdownChange}
          responseData={responseFromBackend}
          folderName={folderName} 
        />
      </div>
    </div>
  );
};

export default Main;
