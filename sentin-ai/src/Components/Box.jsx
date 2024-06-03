import React from 'react';
//import BoxAPI from './BoxAPI'; 


const Positivevalue = '50';
const Neutralvalue = '30';
const Negativevalue = '20';


function Box(props) {
  
  const getColor = () => {
    switch (props.type) {
      case "Positive":
        return { color: "green", value: Positivevalue };
      case "Neutral":
        return { color: "yellow", value: Neutralvalue };
      case "Negative":
        return { color: "red", value: Negativevalue };
    }
  };

  const { color, value } = getColor();

 
  // const getValue = () => {
  //   const box = BoxAPI.find(item => item.type == props.type);
  //   return box ? box.name : "N/A"; 
  // };
  

  const selected_style = {
    backgroundColor: color,
    display: "inline-block",
    alignItems: "center",
    fontSize: "23px",
    padding: "5px",
    marginLeft: "100px",
  };

  return (
    <div className="Box" style={selected_style}>
      {/* {getValue()}  */}
      {value}
    </div>
  );
}

export default Box;
