import React from 'react';
import PieChart from './PieChart';

const Card2 = ({ type, data, wordCloudUrl, fileData, className }) => {
  return (
    <div className={`card2 ${className}`}>
      {type === 'chart' ? (
        <PieChart data={data} />
      ) : type === 'wordCloud' ? (
        <img src={wordCloudUrl} alt="Word Cloud" className="word-cloud" />
      ) : (
        <pre className="grey-card">{fileData}</pre>
      )}
    </div>
  );
};

export default Card2;
