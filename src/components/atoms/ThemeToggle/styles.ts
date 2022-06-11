import styled from "styled-components";

export const ThemeToggle = styled.div.attrs({
  className: "theme-toggle",
})`
  background-image: var(--theme-toggle-icon);
  height: 26px;
  width: 26px;
`;
