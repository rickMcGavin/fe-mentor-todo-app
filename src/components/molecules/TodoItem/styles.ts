import styled, { css } from "styled-components";

export const TodoItem = styled.div.attrs({
  className: "todo-item",
})`
  align-items: center;
  background: var(--todo-background);
  border-bottom: 1px solid var(--border-color);
  color: var(--text);
  display: flex;
  padding: 9px 16px;
  gap: 16px;

  &:first-of-type {
    border-radius: 8px 8px 0 0;
  }

  .delete-todo {
    margin-left: auto;
  }

  ${({ theme }) => {
    return css`
      ${theme.media.small} {
        min-height: 64px;
        padding: 15px 16px;

        .delete-todo {
          display: none;
        }

        &:hover {
          .delete-todo {
            display: block;
          }
        }
      }
    `;
  }}
`;
