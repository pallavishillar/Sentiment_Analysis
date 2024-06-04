import React from 'react';

function Box({ type, value }) {
  const getColor = () => {
    switch (type) {
      case "Positive":
        return "green";
      case "Neutral":
        return "yellow";
      case "Negative":
        return "red";
      default:
        return "grey";
    }
  };

  const color = getColor();

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
      {value}
    </div>
  );
}

export default Box;
