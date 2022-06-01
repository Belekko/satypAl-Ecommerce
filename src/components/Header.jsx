import { moneyFormat } from "../helpers";
import HeaderCartButton from "./Layout/HeaderCartButton";

function Header({ total, money }) {
  const headerTitle =
    total > 0 && money - total !== 0 ? (
      <>
        Коротуу үчүн <span>$ {moneyFormat(money - total)}</span> акчаңыз калды!
      </>
    ) : total === 0 ? (
      <>
        Коротуу үчүн <span>$ {moneyFormat(money)}</span> акчаңыз бар!
      </>
    ) : (
      money - total === 0 && <>Акчаңыз жок калды!</>
    );
  return (
    <>
      <div className="header">
        {headerTitle}
        <HeaderCartButton />
      </div>
    </>
  );
}

export default Header;
