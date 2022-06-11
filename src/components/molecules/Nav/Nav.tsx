import React from "react";
import Header from "../../atoms/Header";
import ThemeToggle from "../../atoms/ThemeToggle";
import * as styles from "./styles";

const Nav = () => {
  return (
    <styles.Nav>
      <Header />
      <ThemeToggle />
    </styles.Nav>
  );
};

export default Nav;
