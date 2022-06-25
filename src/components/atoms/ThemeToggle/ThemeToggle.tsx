import React from "react";
import * as styles from "./styles";

type ColorMode = "light" | "dark";

const ThemeToggle = () => {
  const [activeTheme, setActiveTheme] = React.useState<ColorMode>(
    document.body.dataset.theme as ColorMode
  );
  const inactiveTheme: ColorMode = activeTheme === "light" ? "dark" : "light";

  React.useEffect(() => {
    document.body.dataset.theme = activeTheme;
    window.localStorage.setItem("theme", activeTheme);
  }, [activeTheme]);

  return <styles.ThemeToggle onClick={() => setActiveTheme(inactiveTheme)} />;
};

export default ThemeToggle;
