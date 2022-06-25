import React from "react";
import * as styles from "./styles";

type ColorMode = "light" | "dark";

const ThemeToggle = () => {
  const [activeTheme, setActiveTheme] = React.useState<ColorMode>("light");
  const inactiveTheme: ColorMode = activeTheme === "light" ? "dark" : "light";

  React.useEffect(() => {
    document.body.dataset.theme = activeTheme;
  }, [activeTheme]);

  return <styles.ThemeToggle onClick={() => setActiveTheme(inactiveTheme)} />;
};

export default ThemeToggle;
