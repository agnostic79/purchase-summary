import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
import discountReducer from "./discountReducer";

const rootReducer = combineReducers({
  item: itemReducer,
  discount: discountReducer
});

export default rootReducer;
