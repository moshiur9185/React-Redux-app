import { ActionTypes } from "../contents/actionType";

//create actions second time
export const setProducts = (products) => {
  // console.log(products)
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
