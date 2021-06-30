import React from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom'

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, category, price, image } = product;
    return (
      <div style={{paddingRight: "3vw"}} className="four wide column row" key={id}>
        
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
