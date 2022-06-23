import styled, { css } from "styled-components";
import type { Props } from "./TodoText";

export const TodoText = styled.div.attrs({
  className: "todo-text",
})`
  ${({ completed }: Pick<Props, "completed">) => {
    return css`
      text-decoration: ${completed ? "line-through" : "none"};
      color: ${completed
        ? "var(--light-gray-blue)"
        : "var(--v-dark-gray-blue)"};
      font-size: 0.75rem;
    `;
  }}
`;
