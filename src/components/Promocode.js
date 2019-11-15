import React, { useState } from "react";
import "../styles/Promocode.scss";

const Promocode = props => {
  const [promo, setPromo] = useState("");

  const formSubmit = e => {
    e.preventDefault();
    console.log(promo);
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
            disabled
          />
          <button type="submit" disabled>
            Apply
          </button>
        </div>
      </form>
    </div>
  );
};

export default Promocode;
