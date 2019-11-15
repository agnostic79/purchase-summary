import React from "react";
import "../styles/Item.scss";

const Item = props => {
  return (
    <div className="Item">
      <div className="Item__left">
        <img
          src="https://i5.walmartimages.com/asr/e73e1252-642c-4473-93ea-fd3b564a7027_1.3e81ea58fa3042452fe185129a4a865f.jpeg"
          alt=""
        />
      </div>
      <div className="Item__right">
        <div className="Item__row Item__description">
          OFM Essentials Collection Racing Style Bonded Leather Gaming Chair, in
          Red (ESS-3085-RED)
        </div>
        <div className="Item__row">
          <span className="Item__price Item__price--new">$99.11</span>
          <span className="Item__qty">Qty: 1</span>
        </div>
        <div className="Item__row">
          <span className="Item__price Item__price--old">$102.96</span>
        </div>
      </div>
    </div>
  );
};

export default Item;
