import styled, { css, DefaultTheme } from "styled-components";

export const TodoText = styled.div<{ completed: boolean }>`
  ${({ completed, theme }) => {
    return css`
      text-decoration: ${completed ? "line-through" : "none"};
      color: ${completed ? "var(--completed-text)" : "var(--text)"};
      font-size: 0.75rem;

      ${theme.media.small} {
        font-size: 1rem;
      }
    `;
  }}
`;
