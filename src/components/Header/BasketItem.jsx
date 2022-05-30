import React from "react";

const BasketItem = ({ item,products,total }) => {
  return (
    <div>
      {item.title}*{item.amount}
    </div>
  );
};

export default BasketItem;
