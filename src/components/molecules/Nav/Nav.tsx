import React from "react";
import dynamic from "next/dynamic";
import Header from "../../atoms/Header";
const ThemeToggle = dynamic(() => import("../../atoms/ThemeToggle"), {
  ssr: false,
});
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
