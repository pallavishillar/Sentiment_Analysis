import React from "react";

function Box({ type, value }) {
  const getColor = () => {
    switch (type) {
      case "Positive":
        return "#2E8B57"
      // return "3CB070"
      //  return "32612D"
      // return "004225"
      case "Neutral":
        return "#FFD700";
      case "Negative":
        return "#E2252B";
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
