import React from 'react';

const Card5 = ({ type, data }) => {
  return (
    <div>
      {type === 'chart' && data && (
        <div>
          <h4>Data for selected file:</h4>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};
    
export default Card5;
