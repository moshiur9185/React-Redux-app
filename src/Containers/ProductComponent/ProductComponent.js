import React from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom'

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, category, price, image } = product;
    return (
      <div style={{paddingRight: "3vw"}} className="four wide column row" key={id}>
        <Link to={`/product/${id}`}>
        <div className="ui link cards">
          <div style={{height: "35rem", width: "20vw"}} className="card">
            <div className="image">
              <img className="image-fluid" style={{ height: "20rem", padding: "1rem"}} src={image} alt={title} />
            </div>
            <div className="content">
              <div className="header">{title}</div>
              <div className="meta price">$ {price}</div>
              <div className="meta">{category}</div>
            </div>
          </div>
        </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
