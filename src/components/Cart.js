import React from "react";

import "../styles/Cart.scss";
import Divider from "./Divider";
import Tooltip from "./Tooltip";

const Cart = props => {
  return (
    <div className="Cart">
      <div className="Cart__prices">
        <div className="Cart__row">
          <span className="Cart__field">Subtotal</span>
          <span className="Cart__value">$102.96</span>
        </div>
        <div className="Cart__row">
          <span className="Cart__field underline">
            <Tooltip text="Picking up your order in the store helps cut costs, and we pass the savings on to you.">
              Pickup savings
            </Tooltip>
          </span>
          <span className="Cart__value Cart__value--accent">-$3.85</span>
        </div>
        <div className="Cart__row">
          <span className="Cart__field">
            Est. taxes and fees
            <br />
            (Based on 99999)
          </span>
          <span className="Cart__value">$8.92</span>
        </div>
      </div>
      <Divider />
      {/* <Total /> */}
      {/* <Expander /> */}
      <Divider />
    </div>
  );
};

export default Cart;
