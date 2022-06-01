import BasketItem from './BasketItem';
import {moneyFormat} from '../helpers';

function Basket({basket, resetBasket, total, products}) {
	return (
    <>
      <div className="basket-container container">
        <h3>Сатып алгандарыңыз:</h3>
        <ul>
          {basket.map((item) => (
            <BasketItem
              key={item.id}
              item={item}
              product={products.find((p) => p.id === item.id)}
            />
          ))}
        </ul>
        <div className="total">Жалпы сумма: ${moneyFormat(total)}</div>
        <button className="basket-reset-btn" onClick={resetBasket}>
          Корзинаны тазала
        </button>
      </div>
    </>
  );
}

export default Basket