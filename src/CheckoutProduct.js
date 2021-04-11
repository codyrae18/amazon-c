import React from "react";
import "./CheckoutProduct.css";

function CheckoutProduct({ id, image, title, price, rating }) {
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct-image" src={image} alt="" />

      <div className="checkoutProduct-info">
        <p className="checkoutProduct-title">{title}</p>
        <small className="checkoutProduct-price">$</small>
        <strong className="checkoutProduct-price">{price}</strong>
        <div className="checkoutProduct-rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>⭐</p>
            ))}
        </div>
        <button>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
