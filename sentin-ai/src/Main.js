import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import './Style/Navbar.css';
import Card from './Components/Card';
import Card2 from './Components/Card2';
import Card3 from './Components/Card3';
import Box from './Components/Box';
import './Style/Card.css';
import './Style/Card2.css';
import './Style/Card3.css';
import './Main.css';
import './Style/Box.css';
import './Style/SearchBox.css';

const Main = () => {
  const [data, setData] = useState({ Positive: 0, Neutral: 0, Negative: 0 });
  const [wordCloudUrl, setWordCloudUrl] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [responseFromBackend, setResponseFromBackend] = useState({});

  useEffect(() => {
    fetch("http://127.0.0.1:8016/get_analysis")
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
        } else {
          console.error('Failed to fetch analysis results:', response.message);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const dropdownOptions = ['file1.txt', 'file2.txt', 'file3.txt'];

  const handleDropdownChange = (newOption) => {
    setSelectedOption(newOption);

    fetch(`http://127.0.0.1:8016/get_analysis?file=${newOption}`)
      .then(response => response.json())
      .then(response => {
        if (response.status) {
          setResponseFromBackend(response.data);
        } else {
          console.error('Failed to fetch analysis results:', response.message);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
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
          boxType="CustomType" 
          boxValue="Some value" 
          dropdownOptions={dropdownOptions} 
          onDropdownChange={handleDropdownChange}
          responseData={responseFromBackend} 
        />
      </div>
    </div>
  );
};

export default Main;
