import {combineReducers} from "redux";
import cart from "./cart";
import buy_shoes from "./buy_shoes";
import boots from "./boots";


const rootReducer=combineReducers({
    boots,
    buy_shoes,
    cart,
})

export default rootReducer