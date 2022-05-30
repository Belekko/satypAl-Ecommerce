import React from "react";
import BasketItem from "./BasketItem";

const Basket = ({ basket, products, total, resetBasket }) => {
  return (
    <>
      {basket.map((item) => (
        <BasketItem
          item={item}
          total
          product={products.find((p) => p.id === item.id)}
        />
      ))}
      <div>Sum: ${total}</div>
      <button onClick={resetBasket}>basketti tazala</button>
    </>
  );
};

export default Basket;
