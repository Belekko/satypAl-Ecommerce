import React from "react";

const Product = ({ product, setBasket, basket, total, money }) => {
  const basketItem = basket.findIndex((item) => item.id === product.id);
  console.log("fs" + basketItem);

  const addBasket = () => {
    const checkBasket = basket.find((item) => item.id === product.id);
    //product uje bar
    if (checkBasket) {
      checkBasket.amount += 1;
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        checkBasket,
      ]);
    } else {
      setBasket([...basket, { id: product.id, amount: 1 }]);
    }
  };

  const removeBasket = () => {
    const currentBasket = basket.find((item) => item.id === product.id);
    const basketWithoutCurrent = basket.filter(
      (item) => item.id !== product.id
    );

    currentBasket.amount -= 1;

    if (currentBasket.amount === 0) {
      setBasket([...basketWithoutCurrent]);
    } else {
      setBasket([...basketWithoutCurrent, currentBasket]);
    }
  };
  //     if (checkBasket) {
  //       checkBasket.amount -= 1;
  //       setBasket([
  //         ...basket.filter((item) => item.id !== product.id),
  //         checkBasket,
  //       ]);
  //     } else {
  //       setBasket([...basket, { id: product.id, amount: 1 }]);
  //     }
  //   };

  return (
    <>
      <div className="product">
        <h6>{product.title}</h6>
        <div className="price">{product.price}$</div>
        <div className="actions">
          <button disabled={basketItem === -1 && true} onClick={removeBasket}>
            Sat
          </button>
          <span className="amoun">0</span>
          <button disabled={total + product.price > money} onClick={addBasket}>
            Satyp Al
          </button>
        </div>
        <style jsx>{`
          .product {
            padding: 10px;
            background: #fff;
            border: 1px solid #ddd;
          }
        `}</style>
      </div>
    </>
  );
};

export default Product;
