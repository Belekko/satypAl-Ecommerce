import React from 'react'
import Product from './Product';

const ProductList = ({products, total,money ,basket,setBasket}) => {
  return (
    <div className="container products">
      {products.map((product) => (
        <Product
          key={product.id}
          total={total}
          money={money}
          basket={basket}
          setBasket={setBasket}
          product={product}
        />
      ))}
    </div>
  );
}

export default ProductList