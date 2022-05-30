import React, { useEffect, useState } from "react";
import Basket from "./components/Header/Basket";
import Header from "./components/Header/Header";
import Product from "./components/Products/Product";
import products from "./products.json";

function App() {
  const [money, setMoney] = useState(100);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  const resetBasket = () => {
    setBasket([]);
  };

  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return (
          acc +
          item.amount * products.find((product) => product.id === item.id).price
        );
      }, 0)
    );
  }, [basket]);
  return (
    <div className="App">
      <Header basket={basket} money={money} total={total} />
      {products.map((product) => (
        <Product
          basket={basket}
          total={total}
          money={money}
          setBasket={setBasket}
          product={product}
        />
      ))}
      {total > 0 && (
        <Basket
          products={products}
          basket={basket}
          total={total}
          resetBasket={resetBasket}
        />
      )}
    </div>
  );
}

export default App;
