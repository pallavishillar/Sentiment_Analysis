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

const Main = () => {
  const [data, setData] = useState({ Positive: 0, Neutral: 0, Negative: 0 });
  const [wordCloudUrl, setWordCloudUrl] = useState('');
  const [fileList, setFileList] = useState([]);
  const [responseFromBackend, setResponseFromBackend] = useState({});
  const [folderName, setFolderName] = useState('');

  const requestBody = {
    folder_name : 'f_name',
  }

  useEffect(() => {
    fetch("http://127.0.0.1:8016/get_analysis",{
      method : 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })

      .then(response => response.json())
      .then(response => {
        if (response.status) {
          const result = response.data;

          setData({
            Positive: result.positive_counts,
            Neutral: result.neutral_counts,
            Negative: result.negative_counts
          });
          
          setWordCloudUrl(`data:image/jpeg;base64,${result.image}`);

          setFileList(result.file_list);
          
          setFolderName(result.folder_name);
          console.log('folder_name');

        } else {
          console.error('Failed to fetch analysis results:', response.message);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
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

  //const [selectedOption, setSelectedOption] = useState(fileList[0] || '');


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
          boxType="CustomType"
          boxValue="Some value"
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
