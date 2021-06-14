import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "../ProductComponent/ProductComponent";
import { useEffect } from "react";
import { setProducts } from "../../redux/actions/productActions";

const ProductList = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  //axios data load
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log("products: ", products);
  return (
    <div style={{marginTop: "2rem"}} className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductList;
