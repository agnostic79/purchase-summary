import React, { useState } from "react";
import "./Expander.scss";

const Expander = props => {
  const [toggle, setToggle] = useState(false);
  const toggleExpander = () => setToggle(t => !t);

  return (
    <div className="Expander">{props.children({ toggle, toggleExpander })}</div>
  );
};

export default Expander;
