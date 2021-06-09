import { combineReducers } from "redux";
import { productsReducer } from "./products";
import { topUpReducer } from "./topUp";
import { ordersReducer } from "./orders";
import { userReducer } from "./user";
const rootReducer = combineReducers({
    productsReducer,
    topUpReducer,
    ordersReducer,
    userReducer,
});
export default rootReducer;
