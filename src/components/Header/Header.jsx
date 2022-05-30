import React from "react";

const Header = ({ total, money }) => {
  return (
    <>
      <div>
        {total > 0 && money - total !== 0 && (
          <div>korotchu {money - total} $ akchanyz kaldy!</div>
        )}
        {total === 0 && <div>Korotush uchun {money} $ akchanyz bar!</div>}
        {money - total === 0 && <div>Akchanyz tugondu!</div>}
      </div>
    </>
  );
};

export default Header;
