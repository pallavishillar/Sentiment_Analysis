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

//import { renderMatches } from 'react-router-dom';
//import { useLocation } from 'react-router-dom';

const Main = () => {
  const [data, setData] = useState({ Positive: 0, Neutral: 0, Negative: 0 });
  const [wordCloudUrl, setWordCloudUrl] = useState('');
  const [fileList, setFileList] = useState([]);
  var folderName = localStorage.getItem('folder_name')
  const [overallData, setOverallData] = useState({});

  const requestBody = {
    folder_name: folderName,
  }

  console.log('requestBody : ', requestBody);
  useEffect(() => {
    const fetchAnalysisData = async () => {
      try {
        const response = await fetch("http://localhost:8000/fetch_data", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody),
        });

        const result = await response.json();
        if (result.status) {
          setData({
            Positive: result.data.positive_counts,
            Neutral: result.data.neutral_counts,
            Negative: result.data.negative_counts,
          });

          setFileList(result.data.file_list);

          setWordCloudUrl(`data:img_str/jpeg;base64,${result.data.img_str}`);

          setOverallData(result.data.data);

        } else {
          console.error('Failed to fetch analysis results:', result.message);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchAnalysisData();
  }, []);

  console.log('counts data : ', data);
  console.log('wordcloud data : ', wordCloudUrl);
  console.log('fileList: ', fileList);
  console.log('folder_name: ', folderName);
  console.log('overall data : ', overallData);
  // localStorage.setItem('overall_data', overallData);

  return (
    <div>
      <div className='Background'>
        <Navbar />
        <div className='mainCards'>
          <div >
            <Card className="PositiveCard" name={"Positive"} card={<Box type={"Positive"} value={data.Positive} />} />
          </div>

          <div className='NeutralCard'>
            <Card name={"Neutral"} card={<Box type={"Neutral"} value={data.Neutral} />} />
          </div>

          <div className='NegativeCard'>
            <Card name={"Negative"} card={<Box type={"Negative"} value={data.Negative} />} />
          </div>

        </div>

        <div className="card2-container">
          <div>
            <Card2 type="chart" data={data} />
          </div>

          <div>
            <Card2 type="wordCloud" wordCloudUrl={wordCloudUrl} />
          </div>

        </div>

        <Card3
          dropdownOptions={fileList}
          folderName={folderName}
          // overallData={JSON.stringify(overallData)}
          overallData={overallData}
        />
      </div>
    </div>
  );
};

export default Main;
