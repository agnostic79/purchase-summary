const initialDiscount = {
  name: "",
  value: 0,
  disabled: false
};

const discountReducer = (state = initialDiscount, action) => {
  switch (action.type) {
    case "SET_DISCOUNT":
      return {
        name: action.payload.name,
        value: action.payload.value,
        disabled: true
      };
    default:
      return state;
  }
};

export default discountReducer;
