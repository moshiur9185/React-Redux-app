import { combineReducers } from "redux";
import {productReducer, selectedProductReducer } from "./productReducer";

//4th time
const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
})

export default reducers;