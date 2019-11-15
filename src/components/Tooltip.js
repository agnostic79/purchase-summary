import React, { useState } from "react";

import "../styles/Tooltip.scss";

const Tooltip = ({ text, children }) => {
  const [visible, SetVisible] = useState(false);

  return (
    <div
      className={`Tooltip${visible ? " Tooltip-visble" : ""}`}
      tooltip={text}
      onMouseEnter={() => SetVisible(true)}
      onMouseLeave={() => SetVisible(false)}
    >
      {children}
    </div>
  );
};

export default Tooltip;
