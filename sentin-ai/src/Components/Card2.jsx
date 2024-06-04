import React from 'react';
import PieChart from './PieChart';


const Card2 = ({ type, data, wordCloudUrl }) => {
  return (
    <div className="card2">
      
      {type === 'chart' ? (
        <PieChart data={data} />
      ) : (
        <img src={wordCloudUrl} alt="Word Cloud" className="word-cloud" />
      )}
    </div>
  );
};

export default Card2;
