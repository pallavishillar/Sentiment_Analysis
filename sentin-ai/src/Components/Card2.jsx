import React from 'react';
import PieChart from './PieChart';

const Card2 = ({ type, data, wordCloudUrl, fileData, className }) => {
  return (
    <>
    <div className={`card2 ${className}`}>
      {
      type === 'chart' ? (
        
        <div>
          <h1>Overall Sentiment Distribution</h1>
           <PieChart data={data} />
        </div>
       
      ) : type === 'wordCloud' ? (
        <div>
          
          <h1>Word Cloud</h1>

          <img src={wordCloudUrl} alt="Word Cloud" className="word-cloud" />
        </div>
      ) : (
        <pre className="grey-card">{fileData}</pre>
      )}

    </div>
    
    </>
  );
};

export default Card2;
