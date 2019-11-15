import React, { useState } from "react";
import { connect } from "react-redux";
import { checkDiscount } from "../actions";
import "../styles/Promocode.scss";

const Promocode = ({ discount, checkDiscount }) => {
  const [promo, setPromo] = useState("");

  const formSubmit = e => {
    e.preventDefault();
    checkDiscount(promo);
    setPromo("");
  };
  return (
    <div className="Promocode">
      <form className="Promocode__form form" onSubmit={formSubmit}>
        <div className="form__row">
          <strong>Promo code:</strong>
        </div>
        <div className="form__row">
          <input
            type="text"
            name="promo"
            value={promo}
            onChange={e => setPromo(e.target.value)}
            disabled={discount.disabled}
          />
          <button type="submit" disabled={discount.disabled}>
            Apply
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  discount: state.discount
});

const mapDispatchToProps = {
  checkDiscount
};

export default connect(mapStateToProps, mapDispatchToProps)(Promocode);
