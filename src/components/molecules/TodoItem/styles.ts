import styled, { css } from "styled-components";

export const TodoItem = styled.div.attrs({
  className: "todo-item",
})`
  align-items: center;
  background: #ffffff;
  border-bottom: 1px solid var(--v-light-gray-blue);
  display: flex;
  padding: 9px 16px;
  gap: 16px;

  &:first-of-type {
    border-radius: 8px 8px 0 0;
    margin-top: 20px;
  }

  .delete-todo {
    margin-left: auto;
  }

  ${({ theme }) => {
    return css`
      ${theme.media.small} {
        padding: 15px 16px;
      }
    `;
  }}
`;
