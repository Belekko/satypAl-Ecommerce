import {moneyFormat} from '../helpers';

function Header({total, money}) {
	return (
    <>
      {total > 0 && money - total !== 0 && (
        <div className="header">
          Коротуу үчүн <span>$ {moneyFormat(money - total)}</span> акчаңыз
          калды!
        </div>
      )}
      {total === 0 && (
        <div className="header">
          Коротуу үчүн <span>$ {moneyFormat(money)}</span> акчаңыз бар!
        </div>
      )}
      {money - total === 0 && (
        <div className="header empty">
         Акчаңыз жок калды!
        </div>
      )}
      <button></button>
    </>
  );
}

export default Header