//Item actions

//Promo Actions
export const setDiscount = discount => ({
  type: "SET_DISCOUNT",
  payload: {
    name: discount,
    value: 0.1
  }
});

export const checkDiscount = val => dispatch => {
  if (val === "DISCOUNT") {
    dispatch(setDiscount(val));
  } else {
    alert("Not a valid promo code");
  }
};
