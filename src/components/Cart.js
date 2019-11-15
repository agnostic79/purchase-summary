import React from "react";

import "../styles/Cart.scss";
import Divider from "./Divider";
import Tooltip from "./Tooltip";

import Expander from "./Expander";
import Item from "./Item";
import Promocode from "./Promocode";
import { formatPrice } from "../utils";

const Cart = props => {
  return (
    <div className="Cart">
      <div className="Cart__prices">
        <div className="Cart__row">
          <span className="Cart__field">Subtotal</span>
          <span className="Cart__value">{formatPrice("$", 102.96)}</span>
        </div>
        <div className="Cart__row">
          <span className="Cart__field underline">
            <Tooltip text="Picking up your order in the store helps cut costs, and we pass the savings on to you.">
              Pickup savings
            </Tooltip>
          </span>
          <span className="Cart__value Cart__value--accent">
            {formatPrice("$", -3.85)}
          </span>
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
      <div className="Cart__total">
        <div className="Cart__row">
          <span className="Cart__field Cart__field--total">Est. total</span>
          <span className="Cart__value Cart__value--total">$108.03</span>
        </div>
      </div>
      <Expander>
        {({ toggle, toggleExpander }) => (
          <div className="Expander mt2">
            <div className="Expander__header" onClick={toggleExpander}>
              <span className="text">
                {toggle ? "Hide item details " : "See item details "}
              </span>
              <span className="icon">{toggle ? "-" : "+"}</span>
            </div>
            <div
              className="Expander__body"
              style={{ display: toggle ? "block" : "none" }}
            >
              <Item />
            </div>
          </div>
        )}
      </Expander>
      <Divider />
      <Expander>
        {({ toggle, toggleExpander }) => (
          <div className="Expander mt2">
            <div className="Expander__header" onClick={toggleExpander}>
              <span className="text">
                {toggle ? "Hide promo code " : "Apply promo code "}
              </span>
              <span className="icon">{toggle ? "-" : "+"}</span>
            </div>
            <div
              className="Expander__body"
              style={{ display: toggle ? "block" : "none" }}
            >
              <Promocode />
            </div>
          </div>
        )}
      </Expander>
    </div>
  );
};

export default Cart;
