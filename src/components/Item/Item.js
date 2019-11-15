import React from "react";
import "./Item.scss";

import { formatPrice } from "../../utils/utils";

const Item = ({ item }) => {
  const newPrice = item.price + item.savings;
  return (
    <div className="Item">
      <div className="Item__left">
        <img src={item.img} alt="" />
      </div>
      <div className="Item__right">
        <div className="Item__row Item__description">{item.description}</div>
        <div className="Item__row">
          <span className="Item__price Item__price--new">
            {formatPrice(item.currency, newPrice)}
          </span>
          <span className="Item__qty">Qty: {item.quantity}</span>
        </div>
        <div className="Item__row">
          <span className="Item__price Item__price--old">
            {formatPrice(item.currency, item.price)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Item;
