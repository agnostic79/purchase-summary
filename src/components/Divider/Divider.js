import React from "react";

const Divider = ({ color = "#ddd", height = "1px" }) => {
  const style = {
    height: height,
    backgroundColor: color,
    margin: "15px 0"
  };
  return <div className="Divider" style={style}></div>;
};

export default Divider;
