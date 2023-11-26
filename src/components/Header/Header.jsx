import React from "react";
import s from "./Header.module.scss";

function Header() {
  return (
    <div className={s.header}>
      <div className={s.logo}>Keeper</div>
    </div>
  );
}

export default Header;
